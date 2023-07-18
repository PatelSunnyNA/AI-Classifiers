import React from 'react';
import Dropzone from 'react-dropzone';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material';


const ImageDropzone = ({ onDrop }) => {
  const theme = useTheme();
  
  return (
    <Dropzone
      onDrop={onDrop}
    >
      {({isDragActive, getRootProps, getInputProps}) => (
        <div>
          <Box
            alignItems='center'
            border={1}
            borderRadius={1}
            borderStyle='dashed'
            borderColor={theme.palette.divider}
            display='flex'
            flexWrap='wrap'
            justifyContent='center'
            outline='none'
            padding={6}
            sx={{
              ...(isDragActive && {
                backgroundColor: theme.palette.action.active,
                opacity: 0.5
              }),
              '&:hover': {
                backgroundColor: theme.palette.action.hover,
                cursor: 'pointer',
                opacity: 0.5
              }
            }}
            {...getRootProps()}
          >
            <input {...getInputProps()} />
            <Box 
              sx={{
                '& img': {
                  width: 100
                }
              }}
            />
            <Box padding={2}>
              <Typography variant='h4' align='center'>

              </Typography>
              <Box marginTop={3}>
                <Typography variant='body1' color={theme.palette.text.secondary}>
                  Drag and drop an image here, or
                  {' '}
                  <Link underline='always'>
                    click
                  </Link>
                  {' '}
                  to select an image
                </Typography>
              </Box>
            </Box>
          </Box>
        </div>
      )}
    </Dropzone>
  );
};

export default ImageDropzone;