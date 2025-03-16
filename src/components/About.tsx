import { Box, Typography, Container, Grid, Tab, Tabs, Paper, useTheme, useMediaQuery, Divider } from '@mui/material';
import { motion } from 'framer-motion';
import { useState } from 'react';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ py: 3 }}>{children}</Box>}
    </div>
  );
}

const About = () => {
  const [value, setValue] = useState(0);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box
      component={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      sx={{
        minHeight: '100vh',
        pt: { xs: 10, md: 16 },
        pb: { xs: 6, md: 12 },
        bgcolor: 'background.default',
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
          transition={{ delay: 0.2 }}
          sx={{
            mb: { xs: 4, md: 8 },
            textAlign: 'center',
            fontWeight: 'bold',
            fontSize: { xs: '2.5rem', md: '4rem' },
            background: 'linear-gradient(45deg, #E31B6D 30%, #ff4081 90%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}
        >
          About Me
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12}>
            <Box
              component={motion.div}
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              sx={{
                maxWidth: '900px',
                mx: 'auto'
              }}
            >
              <Typography
                paragraph
                sx={{
                  fontSize: { xs: '1.1rem', md: '1.25rem' },
                  lineHeight: 2,
                  color: 'text.secondary',
                  mb: 6,
                  maxWidth: '800px',
                  mx: 'auto',
                  textAlign: 'center'
                }}
              >
                Aspiring Software Engineer | B.Tech 3rd Year | Passionate About Technology & Problem-Solving
              </Typography>

              <Box sx={{ borderBottom: 1, borderColor: 'divider', mt: 4, maxWidth: '600px', mx: 'auto' }}>
                <Tabs
                  value={value}
                  onChange={handleChange}
                  aria-label="about me tabs"
                  variant={isMobile ? "fullWidth" : "standard"}
                  centered
                  sx={{
                    '& .MuiTab-root': {
                      fontSize: { xs: '1rem', md: '1.1rem' },
                      minWidth: { xs: 'auto', md: 160 },
                      transition: 'all 0.3s ease',
                      py: 2,
                      '&:hover': {
                        color: 'primary.main',
                        transform: 'translateY(-2px)'
                      },
                      '&.Mui-selected': {
                        fontWeight: 700,
                        color: 'primary.main'
                      }
                    },
                    '& .MuiTabs-indicator': {
                      height: 4,
                      borderRadius: 2,
                      backgroundColor: 'primary.main'
                    }
                  }}
                >
                  <Tab label="Skills" />
                  <Tab label="Hobbies" />
                  <Tab label="Education" />
                </Tabs>
              </Box>

              <TabPanel value={value} index={0}>
                <Typography 
                  variant="h6" 
                  component={motion.div}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  sx={{ 
                    textAlign: 'center', 
                    mb: 4, 
                    color: 'text.secondary',
                    fontSize: { xs: '1.1rem', md: '1.25rem' },
                  }}
                >
                  Technologies and tools I work with
                </Typography>
                
                <Grid container spacing={3} justifyContent="center">
                  {/* Programming Languages */}
                  <Grid item xs={12}>
                    <Typography 
                      variant="h6" 
                      component={motion.div}
                      initial={{ y: 10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.1, duration: 0.5 }}
                      sx={{ 
                        mb: 2, 
                        color: 'primary.main', 
                        fontWeight: 600,
                        textAlign: 'center',
                        position: 'relative',
                        display: 'inline-block',
                        '&::after': {
                          content: '""',
                          position: 'absolute',
                          bottom: '-8px',
                          left: '50%',
                          transform: 'translateX(-50%)',
                          width: '40px',
                          height: '3px',
                          borderRadius: '2px',
                          background: 'linear-gradient(45deg, #E31B6D 30%, #ff4081 90%)'
                        }
                      }}
                    >
                      Programming Languages
                    </Typography>
                  </Grid>
                  
                  <Grid item xs={12} sm={6} md={4}>
                    <Box
                      component={motion.div}
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.2, duration: 0.5 }}
                      sx={{
                        p: 3,
                        height: '100%',
                        borderRadius: 2,
                        bgcolor: 'background.paper',
                        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                        '&:hover': {
                          transform: 'translateY(-5px)',
                          boxShadow: '0 8px 25px rgba(227, 27, 109, 0.2)'
                        },
                        textAlign: 'center',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                    >
                      <Typography variant="h6" sx={{ color: 'primary.main', mb: 2, fontWeight: 600 }}>
                        Java
                      </Typography>
                      <Typography sx={{ color: 'text.secondary' }}>
                        Problem Solving & OOP
                      </Typography>
                    </Box>
                  </Grid>
                  
                  <Grid item xs={12} sm={6} md={4}>
                    <Box
                      component={motion.div}
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.3, duration: 0.5 }}
                      sx={{
                        p: 3,
                        height: '100%',
                        borderRadius: 2,
                        bgcolor: 'background.paper',
                        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                        '&:hover': {
                          transform: 'translateY(-5px)',
                          boxShadow: '0 8px 25px rgba(227, 27, 109, 0.2)'
                        },
                        textAlign: 'center',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                    >
                      <Typography variant="h6" sx={{ color: 'primary.main', mb: 2, fontWeight: 600 }}>
                        JavaScript
                      </Typography>
                      <Typography sx={{ color: 'text.secondary' }}>
                        Web  Development
                      </Typography>
                    </Box>
                  </Grid>
                  
                  <Grid item xs={12} sm={6} md={4}>
                    <Box
                      component={motion.div}
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.4, duration: 0.5 }}
                      sx={{
                        p: 3,
                        height: '100%',
                        borderRadius: 2,
                        bgcolor: 'background.paper',
                        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                        '&:hover': {
                          transform: 'translateY(-5px)',
                          boxShadow: '0 8px 25px rgba(227, 27, 109, 0.2)'
                        },
                        textAlign: 'center',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                    >
                      <Typography variant="h6" sx={{ color: 'primary.main', mb: 2, fontWeight: 600 }}>
                        MY Sql
                      </Typography>
                      <Typography sx={{ color: 'text.secondary' }}>
                        
                      </Typography>
                    </Box>
                  </Grid>
                  
                  {/* Web Development */}
                  <Grid item xs={12} sx={{ mt: 4 }}>
                    <Typography 
                      variant="h6" 
                      component={motion.div}
                      initial={{ y: 10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.5, duration: 0.5 }}
                      sx={{ 
                        mb: 2, 
                        color: 'primary.main', 
                        fontWeight: 600,
                        textAlign: 'center',
                        position: 'relative',
                        display: 'inline-block',
                        '&::after': {
                          content: '""',
                          position: 'absolute',
                          bottom: '-8px',
                          left: '50%',
                          transform: 'translateX(-50%)',
                          width: '40px',
                          height: '3px',
                          borderRadius: '2px',
                          background: 'linear-gradient(45deg, #E31B6D 30%, #ff4081 90%)'
                        }
                      }}
                    >
                      Web Development
                    </Typography>
                  </Grid>
                  
                  <Grid item xs={12} sm={6} md={4}>
                    <Box
                      component={motion.div}
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.6, duration: 0.5 }}
                      sx={{
                        p: 3,
                        height: '100%',
                        borderRadius: 2,
                        bgcolor: 'background.paper',
                        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                        '&:hover': {
                          transform: 'translateY(-5px)',
                          boxShadow: '0 8px 25px rgba(227, 27, 109, 0.2)'
                        },
                        textAlign: 'center',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                    >
                      <Typography variant="h6" sx={{ color: 'primary.main', mb: 2, fontWeight: 600 }}>
                        Frontend
                      </Typography>
                      <Typography sx={{ color: 'text.secondary' }}>
                        React, Next.js, Tailwind CSS
                      </Typography>
                    </Box>
                  </Grid>
                  
                  <Grid item xs={12} sm={6} md={4}>
                    <Box
                      component={motion.div}
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.7, duration: 0.5 }}
                      sx={{
                        p: 3,
                        height: '100%',
                        borderRadius: 2,
                        bgcolor: 'background.paper',
                        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                        '&:hover': {
                          transform: 'translateY(-5px)',
                          boxShadow: '0 8px 25px rgba(227, 27, 109, 0.2)'
                        },
                        textAlign: 'center',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                    >
                      <Typography variant="h6" sx={{ color: 'primary.main', mb: 2, fontWeight: 600 }}>
                        Backend
                      </Typography>
                      <Typography sx={{ color: 'text.secondary' }}>
                        Node.js, Express, MongoDB
                      </Typography>
                    </Box>
                  </Grid>
                  
                  <Grid item xs={12} sm={6} md={4}>
                    <Box
                      component={motion.div}
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.8, duration: 0.5 }}
                      sx={{
                        p: 3,
                        height: '100%',
                        borderRadius: 2,
                        bgcolor: 'background.paper',
                        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                        '&:hover': {
                          transform: 'translateY(-5px)',
                          boxShadow: '0 8px 25px rgba(227, 27, 109, 0.2)'
                        },
                        textAlign: 'center',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                    >
                      <Typography variant="h6" sx={{ color: 'primary.main', mb: 2, fontWeight: 600 }}>
                        Tools & Deployment
                      </Typography>
                      <Typography sx={{ color: 'text.secondary' }}>
                        Git, GitHub
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>
              </TabPanel>

              <TabPanel value={value} index={1}>
                <Box
                  sx={{
                    p: 4,
                    borderRadius: 3,
                    bgcolor: 'rgba(255, 255, 255, 0.03)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid',
                    borderColor: 'rgba(255, 255, 255, 0.05)',
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
                    maxWidth: '700px',
                    mx: 'auto',
                    textAlign: 'center',
                    position: 'relative',
                    overflow: 'hidden',
                    transition: 'all 0.4s ease',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: '0 12px 28px rgba(227, 27, 109, 0.2)',
                      borderColor: 'rgba(227, 27, 109, 0.3)'
                    },
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '4px',
                      background: 'linear-gradient(90deg, #E31B6D, #ff4081)'
                    }
                  }}
                >
                  <Typography variant="h6" sx={{ color: 'primary.main', mb: 2.5, fontWeight: 700, fontSize: '1.4rem', letterSpacing: '0.5px' }}>
                    Playing
                  </Typography>
                  <Typography paragraph sx={{ color: 'text.secondary', fontWeight: 500 }}>
                    Cricket , Football,  Badminton, Volleyball and more...
                  </Typography>
                  <Divider sx={{ mb: 2.5, width: '40%', mx: 'auto', borderColor: 'rgba(255, 255, 255, 0.1)' }} />
                  <Typography sx={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '1.05rem', fontWeight: 300, letterSpacing: '0.3px' }}>
                    I enjoy playing various type of sports. I am a team player and always try to give my best in whatever I do.
                  </Typography>
                </Box>
                
                <Box
                  sx={{
                    p: 3,
                    borderRadius: 2,
                    bgcolor: 'background.paper',
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                    maxWidth: '700px',
                    mx: 'auto',
                    mt: 3,
                    textAlign: 'center'
                  }}
                >
                  <Typography variant="h6" sx={{ color: 'primary.main', mb: 2, fontWeight: 600 }}>
                    Gaming
                  </Typography>
                  <Typography paragraph sx={{ color: 'text.secondary', fontWeight: 500 }}>
                    Strategy & Adventure Games
                  </Typography>
                  <Typography sx={{ color: 'text.secondary' }}>
                    I love playing strategic games that challenge my problem-solving abilities.
                  </Typography>
                </Box>
              </TabPanel>

              <TabPanel value={value} index={2}>
                <Grid container spacing={3} justifyContent="center">
                  {/* B.Tech Education */}
                  <Grid item xs={12}>
                    <Box
                      sx={{
                        p: 4,
                        borderRadius: 3,
                        bgcolor: 'rgba(255, 255, 255, 0.03)',
                        backdropFilter: 'blur(10px)',
                        border: '1px solid',
                        borderColor: 'rgba(255, 255, 255, 0.05)',
                        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
                        maxWidth: '700px',
                        mx: 'auto',
                        textAlign: 'center',
                        position: 'relative',
                        overflow: 'hidden',
                        transition: 'all 0.4s ease',
                        mb: 3,
                        '&:hover': {
                          transform: 'translateY(-8px)',
                          boxShadow: '0 12px 28px rgba(227, 27, 109, 0.2)',
                          borderColor: 'rgba(227, 27, 109, 0.3)'
                        },
                        '&::before': {
                          content: '""',
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          width: '100%',
                          height: '4px',
                          background: 'linear-gradient(90deg, #E31B6D, #ff4081)'
                        }
                      }}
                    >
                      <Typography variant="h6" sx={{ color: 'primary.main', mb: 2, fontWeight: 700, fontSize: '1.4rem', letterSpacing: '0.5px' }}>
                        B.Tech - 2022-2026
                      </Typography>
                      <Typography paragraph sx={{ color: 'text.secondary', fontWeight: 500 }}>
                        B.Tech in Computer Science and Engineering
                      </Typography>
                      <Divider sx={{ mb: 2.5, width: '40%', mx: 'auto', borderColor: 'rgba(255, 255, 255, 0.1)' }} />
                      <Typography sx={{ color: 'text.secondary', mb: 1 }}>
                        Maulana Abul Kalam Azad University of Technology, West Bengal(MAKAUT)
                      </Typography>
                      <Typography sx={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '1.05rem', fontWeight: 500, letterSpacing: '0.3px' }}>
                        Current CGPA: <span style={{ color: '#E31B6D' }}>7.7</span>
                      </Typography>
                    </Box>
                  </Grid>
                  
                  {/* 12th Education */}
                  <Grid item xs={12} sm={6}>
                    <Box
                      sx={{
                        p: 3.5,
                        borderRadius: 3,
                        bgcolor: 'background.paper',
                        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                        height: '100%',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          transform: 'translateY(-5px)',
                          boxShadow: '0 8px 25px rgba(0, 0, 0, 0.15)'
                        },
                        textAlign: 'center',
                        position: 'relative',
                        overflow: 'hidden',
                        '&::before': {
                          content: '""',
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          width: '100%',
                          height: '3px',
                          background: 'linear-gradient(90deg, #E31B6D, #ff4081)'
                        }
                      }}
                    >
                      <Typography variant="h6" sx={{ color: 'primary.main', mb: 2, fontWeight: 600 }}>
                        12th Standard - 2022
                      </Typography>
                      <Typography paragraph sx={{ color: 'text.secondary', fontWeight: 500, mb: 1 }}>
                        Science Stream (PCM)
                      </Typography>
                      <Typography sx={{ color: 'text.secondary', mb: 1 }}>
                        J P K I COLL OF COMPETANCE BHANDARO (JAC)
                      </Typography>
                      <Typography sx={{ color: 'text.primary', fontWeight: 500, mt: 2 }}>
                        Percentage: <span style={{ color: '#E31B6D' }}>86.0%</span>
                      </Typography>
                    </Box>
                  </Grid>
                  
                  {/* 10th Education */}
                  <Grid item xs={12} sm={6}>
                    <Box
                      sx={{
                        p: 3.5,
                        borderRadius: 3,
                        bgcolor: 'background.paper',
                        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                        height: '100%',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          transform: 'translateY(-5px)',
                          boxShadow: '0 8px 25px rgba(0, 0, 0, 0.15)'
                        },
                        textAlign: 'center',
                        position: 'relative',
                        overflow: 'hidden',
                        '&::before': {
                          content: '""',
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          width: '100%',
                          height: '3px',
                          background: 'linear-gradient(90deg, #E31B6D, #ff4081)'
                        }
                      }}
                    >
                      <Typography variant="h6" sx={{ color: 'primary.main', mb: 2, fontWeight: 600 }}>
                        10th Standard - 2020
                      </Typography>
                      <Typography paragraph sx={{ color: 'text.secondary', fontWeight: 500, mb: 1 }}>
                        General Studies
                      </Typography>
                      <Typography sx={{ color: 'text.secondary', mb: 1 }}>
                        SARASWATI V N RESI HIGHSCHOOL BAGODAR (JAC)
                      </Typography>
                      <Typography sx={{ color: 'text.primary', fontWeight: 500, mt: 2 }}>
                        Percentage: <span style={{ color: '#E31B6D' }}>82.4%</span>
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>
              </TabPanel>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default About;