import { Box, Typography, Container, Grid, Paper, Button, Stack, Chip, Divider } from '@mui/material';
import { motion } from 'framer-motion';
// Import project images from assets
import foodDeliveryImage from '../assets/food delivery app (1).png';
import remainderAppImage from '../assets/remainder app.png';
import portfolioImage from '../assets/portfolio.png';

const Projects = () => {
  const projects = [
    {
      title: 'Communication App',
      image: portfolioImage, // Using imported image from assets
      description: 'A modern communication platform with real-time messaging and video calls.',
      demoLink: 'https://demo-link-1.com',
      githubLink: 'https://github.com/aq73869'
    },
    {
      title: 'Reminder App',
      image: remainderAppImage, // Using imported image from assets
      description: 'A minimalist reminder application with calendar integration and notifications.',
      demoLink: 'https://demo-link-2.com',
      githubLink: 'https://github.com/aq73869'
    },
    {
      title: 'Food Delivery App',
      image: foodDeliveryImage, // Using imported image from assets
      description: 'A food delivery application with order tracking and payment integration.',
      demoLink: 'https://demo-link-3.com',
      githubLink: 'https://github.com/aq73869'
    },
  ];

  return (
    <Box
      component={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      sx={{
        minHeight: '100vh',
        pt: { xs: 10, md: 12 },
        pb: { xs: 6, md: 8 },
        background: 'linear-gradient(180deg, rgba(18,18,18,1) 0%, rgba(30,30,30,1) 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          component={motion.h1}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          sx={{
            mb: { xs: 6, md: 8 },
            textAlign: 'center',
            fontWeight: 'bold',
            fontSize: { xs: '2.5rem', md: '3.75rem' },
            background: 'linear-gradient(45deg, #E31B6D 30%, #ff4081 90%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            letterSpacing: '-0.02em',
            position: 'relative',
            '&::after': {
              content: '""',
              position: 'absolute',
              bottom: '-15px',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '80px',
              height: '4px',
              borderRadius: '2px',
              background: 'linear-gradient(45deg, #E31B6D 30%, #ff4081 90%)'
            }
          }}
        >
          Projects
        </Typography>

        <Grid 
          container 
          spacing={4} 
          justifyContent="center"
          sx={{ mt: 4 }}
        >
          {projects.map((project, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Paper
                component={motion.div}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 + index * 0.1, duration: 0.8 }}
                elevation={0}
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  backgroundColor: 'rgba(255, 255, 255, 0.03)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: 4,
                  border: '1px solid',
                  borderColor: 'rgba(255, 255, 255, 0.05)',
                  overflow: 'hidden',
                  transition: 'all 0.4s ease-in-out',
                  boxShadow: '0 8px 20px rgba(0, 0, 0, 0.15)',
                  '&:hover': {
                    transform: 'translateY(-12px)',
                    boxShadow: '0 15px 30px rgba(227, 27, 109, 0.2)',
                    borderColor: 'rgba(227, 27, 109, 0.3)'
                  }
                }}
              >
                <Box
                  sx={{
                    height: 240,
                    width: '100%',
                    overflow: 'hidden',
                    position: 'relative',
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      background: 'linear-gradient(to top, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0) 60%)',
                      transition: 'all 0.4s ease'
                    },
                    '&:hover::after': {
                      background: 'linear-gradient(to top, rgba(227, 27, 109, 0.4) 0%, rgba(0,0,0,0) 70%)'
                    },
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '4px',
                      background: 'linear-gradient(90deg, #E31B6D, #ff4081)',
                      zIndex: 2
                    }
                  }}
                >
                  <Box
                    component="img"
                    src={project.image}
                    alt={project.title}
                    sx={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.6s ease',
                      '&:hover': {
                        transform: 'scale(1.08)'
                      }
                    }}
                  />
                </Box>

                <Box sx={{ p: { xs: 3, md: 4 }, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                  <Typography
                    variant="h5"
                    sx={{
                      mb: 2,
                      fontWeight: 'bold',
                      fontSize: { xs: '1.5rem', md: '1.75rem' },
                      textAlign: 'center',
                      color: 'primary.main',
                      letterSpacing: '0.5px'
                    }}
                  >
                    {project.title}
                  </Typography>
                  
                  <Typography
                    sx={{
                      mb: 3,
                      color: 'rgba(255, 255, 255, 0.7)',
                      fontSize: '1rem',
                      textAlign: 'center',
                      lineHeight: 1.6,
                      fontWeight: 300,
                      letterSpacing: '0.3px'
                    }}
                  >
                    {project.description}
                  </Typography>
                  
                  <Divider sx={{ mb: 3, borderColor: 'rgba(255, 255, 255, 0.1)' }} />
                  
                  <Stack 
                    direction="row" 
                    spacing={2} 
                    justifyContent="center"
                    sx={{ mt: 'auto' }}
                  >
                    <Button
                      variant="outlined"
                      color="primary"
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        borderRadius: '30px',
                        px: 3,
                        py: 1.2,
                        borderColor: 'rgba(227, 27, 109, 0.5)',
                        fontWeight: 500,
                        letterSpacing: '0.5px',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          backgroundColor: 'rgba(227, 27, 109, 0.1)',
                          borderColor: 'primary.main',
                          transform: 'translateY(-3px)'
                        }
                      }}
                    >
                      GitHub
                    </Button>
                    <Button
                      variant="contained"
                      color="primary"
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        borderRadius: '30px',
                        px: 3,
                        py: 1.2,
                        fontWeight: 500,
                        letterSpacing: '0.5px',
                        boxShadow: '0 4px 15px rgba(227, 27, 109, 0.3)',
                        background: 'linear-gradient(45deg, #E31B6D 30%, #ff4081 90%)',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          transform: 'translateY(-3px)',
                          boxShadow: '0 8px 20px rgba(227, 27, 109, 0.5)'
                        }
                      }}
                    >
                      Live Demo
                    </Button>
                  </Stack>
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Projects;