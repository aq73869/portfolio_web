import { Box, Typography, Container, Button, Grid, useMediaQuery, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import profileImage from '../assets/profile.jpg';

const Home = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box
      component={motion.div}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.9))',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        py: { xs: 8, md: 0 }
      }}
    >
      <Container maxWidth="lg">
        <Grid 
          container 
          spacing={6} 
          alignItems="center" 
          justifyContent="center"
          sx={{ textAlign: 'center' }}
        >
          <Grid item xs={12} md={8} lg={7}>
            <Box 
              sx={{ 
                position: 'relative',
                zIndex: 1,
                mx: 'auto',
                maxWidth: { xs: '100%', md: '90%' }
              }}
            >
              <Typography
                variant="h6"
                component={motion.div}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                sx={{
                  color: 'primary.main',
                  mb: 3,
                  letterSpacing: '3px',
                  textTransform: 'uppercase',
                  fontWeight: 500,
                  fontSize: { xs: '0.9rem', sm: '1rem' },
                  display: 'inline-block',
                  px: 2,
                  py: 0.5,
                  borderRadius: 1,
                  bgcolor: 'rgba(227, 27, 109, 0.1)'
                }}
              >
                Web Developer
              </Typography>
              <Typography
                variant="h1"
                component={motion.h1}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                sx={{
                  mb: 3,
                  fontWeight: 900,
                  fontSize: { xs: '3rem', sm: '4.5rem', md: '5.5rem' },
                  background: 'linear-gradient(45deg, #E31B6D 30%, #ff4081 90%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  letterSpacing: '-0.02em',
                  lineHeight: 1.1
                }}
              >
                Hi, I'm Abdul Quadir.
              </Typography>
              <Typography
                variant="h2"
                component={motion.h2}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.8 }}
                sx={{
                  mb: 5,
                  fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' },
                  color: 'rgba(255, 255, 255, 0.85)',
                  fontWeight: 300,
                  letterSpacing: '0.02em'
                }}
              >
                From India.
              </Typography>
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.9, duration: 0.8 }}
              >
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  component={Link}
                  to="/contact"
                  sx={{
                    borderRadius: 3,
                    px: 6,
                    py: 2,
                    fontSize: { xs: '1rem', sm: '1.1rem' },
                    textTransform: 'none',
                    fontWeight: 600,
                    boxShadow: '0 8px 20px rgba(227, 27, 109, 0.3)',
                    transition: 'all 0.4s ease',
                    '&:hover': {
                      transform: 'translateY(-3px)',
                      boxShadow: '0 12px 25px rgba(227, 27, 109, 0.4)'
                    }
                  }}
                >
                  Contact Me
                </Button>
              </motion.div>
            </Box>
          </Grid>
          {!isMobile && (
            <Grid item xs={12} md={4} lg={5} sx={{ display: { xs: 'none', md: 'block' } }}>
              <Box
                component={motion.div}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.1, duration: 0.8 }}
                sx={{
                  width: '100%',
                  height: '100%',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
              >
                <Box
                  sx={{
                    width: '300px',
                    height: '300px',
                    borderRadius: '50%',
                    background: 'linear-gradient(45deg, rgba(227, 27, 109, 0.8), rgba(255, 64, 129, 0.8))',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    boxShadow: '0 10px 30px rgba(227, 27, 109, 0.3)',
                    position: 'relative',
                    overflow: 'hidden',
                    padding: '8px',
                    transition: 'all 0.5s ease-in-out',
                    '&:hover': {
                      transform: 'translateY(-10px)',
                      boxShadow: '0 15px 35px rgba(227, 27, 109, 0.5)'
                    },
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: '-15px',
                      left: '-15px',
                      right: '-15px',
                      bottom: '-15px',
                      borderRadius: '50%',
                      border: '2px solid rgba(227, 27, 109, 0.5)',
                      animation: 'pulse 2s infinite'
                    },
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      top: '-5px',
                      left: '-5px',
                      right: '-5px',
                      bottom: '-5px',
                      borderRadius: '50%',
                      border: '1px solid rgba(255, 255, 255, 0.3)',
                      animation: 'pulse 2.5s infinite 0.5s'
                    },
                    '@keyframes pulse': {
                      '0%': {
                        transform: 'scale(1)',
                        opacity: 1
                      },
                      '50%': {
                        opacity: 0.5
                      },
                      '100%': {
                        transform: 'scale(1.2)',
                        opacity: 0
                      }
                    }
                  }}
                >
                  <Box
                    component="img"
                    src={profileImage}
                    alt="Profile"
                    sx={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      borderRadius: '50%',
                      boxShadow: '0 0 15px rgba(227, 27, 109, 0.5)'
                    }}
                  />
                </Box>
              </Box>
            </Grid>
          )}
        </Grid>
      </Container>
    </Box>
  );
};

export default Home;