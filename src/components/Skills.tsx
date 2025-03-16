import { Box, Typography, Container, Grid, Paper, useMediaQuery, useTheme } from '@mui/material';
import { motion } from 'framer-motion';

const Skills = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const skills = [
    {
      title: 'Frontend Development',
      description: 'React, TypeScript, Next.js, HTML5, CSS3,  Tailwind CSS',
      icon: '💻'
    },
    
    {
      title: 'Backend Development',
      description: 'Node.js, Express, MongoDB, RESTful APIs',
      icon: '⚙️'
    },
  
    {
      title: 'DevOps',
      description: 'Git, GitHub',
      icon: '🚀'
    },
    {
      title: 'Soft Skills',
      description: 'Communication, Problem Solving, Team Collaboration, Time Management',
      icon: '🤝'
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
          Skills
        </Typography>

        <Grid container spacing={isMobile ? 3 : 4} justifyContent="center" sx={{ px: { xs: 1, sm: 2, md: 0 } }}>
          {skills.map((skill, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
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
                  p: { xs: 3, sm: 3.5, md: 4 },
                  transition: 'all 0.4s ease-in-out',
                  boxShadow: '0 4px 15px rgba(0, 0, 0, 0.15)',
                  position: 'relative',
                  '&:hover': {
                    transform: 'translateY(-10px)',
                    boxShadow: '0 15px 30px rgba(227, 27, 109, 0.2)',
                    borderColor: 'rgba(227, 27, 109, 0.3)'
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
                  sx={{
                    fontSize: { xs: '2.5rem', md: '3rem' },
                    mb: { xs: 2, md: 2.5 },
                    textAlign: 'center',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'scale(1.1) rotate(5deg)'
                    }
                  }}
                >
                  {skill.icon}
                </Box>

                <Typography
                  variant="h5"
                  sx={{
                    mb: 2.5,
                    fontWeight: 'bold',
                    fontSize: { xs: '1.5rem', md: '1.75rem' },
                    textAlign: 'center',
                    color: 'primary.main',
                    letterSpacing: '0.5px',
                    position: 'relative',
                    display: 'inline-block',
                    mx: 'auto'
                  }}
                >
                  {skill.title}
                </Typography>
                
                <Typography
                  sx={{
                    color: 'rgba(255, 255, 255, 0.7)',
                    fontSize: { xs: '0.9rem', sm: '1rem', md: '1.1rem' },
                    lineHeight: 1.6,
                    textAlign: 'center',
                    flexGrow: 1,
                    fontWeight: 300,
                    letterSpacing: '0.3px'
                  }}
                >
                  {skill.description}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Skills;