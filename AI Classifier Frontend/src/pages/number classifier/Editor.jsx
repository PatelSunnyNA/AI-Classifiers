import React, { useState, createRef } from 'react';
import axios from 'axios';
import { saveAs } from 'file-saver';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { useTheme, useMediaQuery } from '@mui/material';
import { green } from '@mui/material/colors';

import SketchCanvas from './SketchCanvas';
import CustomAlert from './CustomAlert';
import EditorHeader from './EditorHeader';
import EditorButtons from './EditorButtons';

const Editor = () => {
  const theme = useTheme();
    const baseURL = process.env.REACT_APP_DIGIT_URL;
  const [send, setSend] = useState(false);
  const [result, setResult] = useState();
  const canvasRef = createRef();
  
  const handleSubmit = () => {
    const canvas = canvasRef.current
      .exportImage('png')
      .then(data => {
        sendData(data);
      })
      .catch(error => {
        console.log(error);
      });
  };
  
  const handleReset = () => {
    canvasRef.current.clearCanvas();
    setSend(false);
    setResult();
  };
  
  const handleDownload = () => {
    const canvas = canvasRef.current
      .exportImage('png')
      .then(data => {
        saveAs(data, 'drawing.png');
      })
      .catch(error => {
        console.log(error);
      });
  };
  
  const sendData = (canvas) => {
    const headers = {
      'accept': 'application/json'
    };
    
    const formData = new FormData();
    formData.append('image', canvas);
    
    axios.post(
      `${baseURL}/api/classifier/`, 
      formData, 
      { headers: headers }
    )
    .then(response => {
      setSend(true);
      getImageResult(response.data.id);
    })
    .catch(err => console.log(err)); 
  };
  
  const getImageResult = (id) => {
    axios.get(`${baseURL}/api/classifier/${id}/`)
      .then(response => {
        setResult(response.data.result);
      })
  };
  
  return (
    <>

      <Box 
        backgroundColor={theme.palette.background.default}
        minHeight='100%' 
        paddingTop={15}
        paddingBottom={15}
      >
        <Container maxWidth={false}>
          <Grid container spacing={3}>
            <Grid 
              item
              container
              alignItems='center'
              justifyContent='space-between'
              marginTop='-30px'
              spacing={3}
              xs={12}
            >
              <Grid item>
                <EditorHeader />
              </Grid>
              <Grid item xs={12}>
                {send && (
                  <CustomAlert 
                    variant='outlined'
                    severity='success' 
                    title='Success'
                  >
                    Successfully sent the drawing to the machine learning model for classification.
                  </CustomAlert>
                )}
              </Grid>
            </Grid>
            <Grid item xs={12} md={6}>
              <Card>
                <CardContent>
                  <SketchCanvas inputRef={canvasRef} />
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={6}>
              <Card>
                <CardContent>
                  <Box height='320px'>
                    <Box
                      display='flex'
                      justifyContent='center'
                      marginBottom={2} 
                      marginTop={2}
                    >
                      <Typography 
                        variant='h2' 
                        align='center' 
                        gutterBottom
                      >
                        Result 
                      </Typography>
                    </Box>
                    <Box 
                      flexDirection='flex'
                      justifyContent='center'
                    >
                      {result && (
                        <>
                          <Typography 
                            variant='h1' 
                            align='center' 
                            gutterBottom
                          >
                            <span 
                              style={{ 
                                color: green[600],
                                fontSize: '120px'
                              }}
                            >
                              {result}
                            </span>
                          </Typography>
                        </>
                      )}  
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12}>
              <Box marginTop={4}>
                <EditorButtons 
                  submitOnClick={handleSubmit}
                  resetOnClick={handleReset}
                  downloadOnClick={handleDownload}
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Editor;