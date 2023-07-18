import React from "react";
import { Box, Button, useTheme } from "@mui/material";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  return (
    <Box>
      <Box sx={{ width: 1, height: 1 }}>
        <Box
          display="flex"
          flexDirection={{ xs: "column", md: "row" }}
          position="relative"
          minHeight={{ md: 800 }}
        >
          <Box
            width={1}
            order={{ xs: 2, md: 1 }}
            display="flex"
            alignItems="center"
          >
            <Container>
              <Box>
                <Box marginBottom={2}>
                  <Typography
                    color={theme.palette.text.primary}
                    variant="h2"
                    fontWeight={700}
                    align="center"
                  >
                    AI
                  </Typography>
                  <Typography
                    color={theme.palette.primary.main}
                    variant="h2"
                    fontWeight={700}
                    align="center"
                    marginBottom={3}
                  >
                    Classifiers
                  </Typography>
                  <Box marginBottom={3} align="center">

                  </Box>
                  <Box align="center">
                    <Button
                      variant="outlined"
                      onClick={() => navigate("/image")}
                      sx={{ margin: "5px" }}
                    >
                      <Typography>Image Classifier</Typography>
                    </Button>
                    <Button
                      variant="outlined"
                      onClick={() => navigate("/number")}
                      sx={{ margin: "5px" }}
                    >
                      <Typography>Digit Classifier</Typography>
                    </Button>
                  </Box>
                </Box>
              </Box>
            </Container>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
