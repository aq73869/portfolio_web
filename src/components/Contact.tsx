import { Box, Typography, Container, Grid, TextField, Button, IconButton, CircularProgress, Snackbar, Alert } from '@mui/material';
import { motion } from 'framer-motion';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { useState } from 'react';
import { ContactFormData, SocialLink } from '../types';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [snackbar, setSnackbar] = useState<{ open: boolean; message: string; severity: 'success' | 'error' }>({ 
    open: false, 
    message: '', 
    severity: 'success' 
  });
  
  const [formValues, setFormValues] = useState<ContactFormData>({
    name: '',
    email: '',
    message: ''
  });
  
  const [formErrors, setFormErrors] = useState<{
    name?: string;
    email?: string;
    message?: string;
  }>({});

  const socialLinks: SocialLink[] = [
    { platform: 'facebook', url: 'https://www.facebook.com/home.php' },
    { platform: 'twitter', url: 'https://twitter.com/@a1_boy_lucky' },
    { platform: 'instagram', url: 'https://instagram.com/iam_quadir_' },
    { platform: 'linkedin', url: 'https://linkedin.com/in/Abdul-Quadir' }
  ];

  const handleSocialClick = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };
  
  const validateForm = () => {
    const errors: {
      name?: string;
      email?: string;
      message?: string;
    } = {};
    
    if (!formValues.name) {
      errors.name = 'Name is required';
    }
    
    if (!formValues.email) {
      errors.email = 'Email is required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formValues.email)) {
      errors.email = 'Invalid email address';
    }
    
    if (!formValues.message) {
      errors.message = 'Message is required';
    } else if (formValues.message.length < 10) {
      errors.message = 'Message should be at least 10 characters';
    }
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value
    });
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSnackbar({ 
        open: true, 
        message: 'Message sent successfully!', 
        severity: 'success' 
      });
      setFormValues({
        name: '',
        email: '',
        message: ''
      });
      setFormErrors({});
    } catch (error) {
      setSnackbar({ 
        open: true, 
        message: 'Failed to send message. Please try again.', 
        severity: 'error' 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Box
      component={motion.div}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      sx={{
        minHeight: '100vh',
        pt: { xs: 12, md: 16 },
        pb: { xs: 10, md: 12 },
        background: 'linear-gradient(180deg, rgba(18,18,18,1) 0%, rgba(30,30,30,1) 100%)',
        color: 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden'
      }}
    >
      <Container maxWidth="lg" sx={{ textAlign: 'center', px: { xs: 2, sm: 3, md: 4 } }}>
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
            fontSize: { xs: '2.75rem', md: '4rem' },
            background: 'linear-gradient(45deg, #E31B6D 30%, #ff4081 90%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            letterSpacing: '-0.02em',
            mx: 'auto',
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
          Contact Me
        </Typography>

        <Grid 
          container 
          spacing={{ xs: 4, md: 6 }} 
          justifyContent="center" 
          alignItems="stretch"
          direction={{ xs: 'column-reverse', md: 'row' }}
          sx={{ maxWidth: '1100px', mx: 'auto' }}
        >
          <Grid item xs={12} md={7}>
            <Box
              component={motion.div}
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              sx={{
                p: { xs: 4, md: 6 },
                borderRadius: 4,
                bgcolor: 'rgba(255, 255, 255, 0.03)',
                backdropFilter: 'blur(10px)',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.15)',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                alignItems: 'center',
                transform: 'translateZ(0)',
                transition: 'all 0.4s ease-in-out',
                border: '1px solid',
                borderColor: 'rgba(255, 255, 255, 0.05)',
                position: 'relative',
                overflow: 'hidden',
                '&:hover': {
                  transform: 'translateY(-8px) translateZ(0)',
                  boxShadow: '0 15px 35px rgba(227, 27, 109, 0.2)',
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
              <Box sx={{ width: '100%', textAlign: 'center' }}>
                <Typography
                  variant="h6"
                  sx={{ color: '#E31B6D', mb: 4, fontWeight: 700, letterSpacing: '0.5px' }}
                  component="div"
                >
                  <Box
                    component="span"
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mb: 3,
                      fontSize: { xs: '1.1rem', md: '1.25rem' },
                      transition: 'all 0.3s ease',
                      letterSpacing: '0.3px',
                      '&:hover': {
                        transform: 'translateX(8px)',
                        color: '#ff4081'
                      }
                    }}
                  >
                    📧 quadirabdul6556@gmail.com
                  </Box>
                  <Box
                    component="span"
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: { xs: '1.1rem', md: '1.25rem' },
                      transition: 'all 0.3s ease',
                      letterSpacing: '0.3px',
                      '&:hover': {
                        transform: 'translateX(8px)',
                        color: '#ff4081'
                      }
                    }}
                  >
                    📱 +91 6202968195
                  </Box>
                </Typography>
              </Box>
              
              <Box sx={{ width: '100%', mt: 4 }}>
                <Typography variant="h6" sx={{ color: '#E31B6D', mb: 3, fontWeight: 600, textAlign: 'center' }}>
                  Connect With Me
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
                  <IconButton 
                    onClick={() => handleSocialClick(socialLinks[0].url)}
                    sx={{ 
                      color: 'white', 
                      bgcolor: 'rgba(255, 255, 255, 0.1)',
                      transition: 'all 0.3s ease',
                      '&:hover': { 
                        bgcolor: '#1877F2',
                        transform: 'translateY(-5px)'
                      } 
                    }}
                  >
                    <FacebookIcon />
                  </IconButton>
                  <IconButton 
                    onClick={() => handleSocialClick(socialLinks[1].url)}
                    sx={{ 
                      color: 'white', 
                      bgcolor: 'rgba(255, 255, 255, 0.1)',
                      transition: 'all 0.3s ease',
                      '&:hover': { 
                        bgcolor: '#1DA1F2',
                        transform: 'translateY(-5px)'
                      } 
                    }}
                  >
                    <TwitterIcon />
                  </IconButton>
                  <IconButton 
                    onClick={() => handleSocialClick(socialLinks[2].url)}
                    sx={{ 
                      color: 'white', 
                      bgcolor: 'rgba(255, 255, 255, 0.1)',
                      transition: 'all 0.3s ease',
                      '&:hover': { 
                        bgcolor: '#E4405F',
                        transform: 'translateY(-5px)'
                      } 
                    }}
                  >
                    <InstagramIcon />
                  </IconButton>
                  <IconButton 
                    onClick={() => handleSocialClick(socialLinks[3].url)}
                    sx={{ 
                      color: 'white', 
                      bgcolor: 'rgba(255, 255, 255, 0.1)',
                      transition: 'all 0.3s ease',
                      '&:hover': { 
                        bgcolor: '#0A66C2',
                        transform: 'translateY(-5px)'
                      } 
                    }}
                  >
                    <LinkedInIcon />
                  </IconButton>
                </Box>
              </Box>
            </Box>
          </Grid>
          
          <Grid item xs={12} md={5}>
            <Box
              component={motion.form}
              onSubmit={handleSubmit}
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              sx={{
                p: { xs: 4, md: 6 },
                borderRadius: 4,
                bgcolor: 'rgba(255, 255, 255, 0.03)',
                backdropFilter: 'blur(10px)',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.15)',
                height: '100%',
                border: '1px solid',
                borderColor: 'rgba(255, 255, 255, 0.05)',
                position: 'relative',
                overflow: 'hidden',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '4px',
                  background: 'linear-gradient(90deg, #E31B6D, #ff4081)',
                  zIndex: 2
                },
                display: 'flex',
                flexDirection: 'column',
                transform: 'translateZ(0)',
                transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-5px) translateZ(0)',
                  boxShadow: '0 15px 35px rgba(0, 0, 0, 0.2)'
                }
              }}
            >
              <Typography variant="h5" sx={{ mb: 4, fontWeight: 600, textAlign: 'center', color: '#E31B6D' }}>
                Send Me a Message
              </Typography>
              
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Your Name"
                    name="name"
                    value={formValues.name}
                    onChange={handleChange}
                    error={!!formErrors.name}
                    helperText={formErrors.name}
                    variant="outlined"
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                          borderColor: 'rgba(255, 255, 255, 0.2)',
                        },
                        '&:hover fieldset': {
                          borderColor: 'rgba(255, 255, 255, 0.5)',
                        },
                        '&.Mui-focused fieldset': {
                          borderColor: '#E31B6D',
                        },
                      },
                      '& .MuiInputLabel-root': {
                        color: 'rgba(255, 255, 255, 0.7)',
                      },
                      '& .MuiInputBase-input': {
                        color: 'white',
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Your Email"
                    name="email"
                    value={formValues.email}
                    onChange={handleChange}
                    error={!!formErrors.email}
                    helperText={formErrors.email}
                    variant="outlined"
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                          borderColor: 'rgba(255, 255, 255, 0.2)',
                        },
                        '&:hover fieldset': {
                          borderColor: 'rgba(255, 255, 255, 0.5)',
                        },
                        '&.Mui-focused fieldset': {
                          borderColor: '#E31B6D',
                        },
                      },
                      '& .MuiInputLabel-root': {
                        color: 'rgba(255, 255, 255, 0.7)',
                      },
                      '& .MuiInputBase-input': {
                        color: 'white',
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    multiline
                    rows={4}
                    label="Your Message"
                    name="message"
                    value={formValues.message}
                    onChange={handleChange}
                    error={!!formErrors.message}
                    helperText={formErrors.message}
                    variant="outlined"
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                          borderColor: 'rgba(255, 255, 255, 0.2)',
                        },
                        '&:hover fieldset': {
                          borderColor: 'rgba(255, 255, 255, 0.5)',
                        },
                        '&.Mui-focused fieldset': {
                          borderColor: '#E31B6D',
                        },
                      },
                      '& .MuiInputLabel-root': {
                        color: 'rgba(255, 255, 255, 0.7)',
                      },
                      '& .MuiInputBase-input': {
                        color: 'white',
                      },
                    }}
                  />
                </Grid>
              </Grid>
              <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%', mt: 4 }}>
                <Button
                  type="submit"
                  variant="contained"
                  disabled={isSubmitting}
                  sx={{
                    py: 2,
                    px: 6,
                    bgcolor: '#E31B6D',
                    fontSize: '1.1rem',
                    fontWeight: 600,
                    textTransform: 'none',
                    borderRadius: 3,
                    boxShadow: '0 8px 20px rgba(227, 27, 109, 0.3)',
                    transition: 'all 0.4s ease',
                    '&:hover': {
                      bgcolor: '#E31B6D',
                      transform: 'translateY(-3px)',
                      boxShadow: '0 12px 25px rgba(227, 27, 109, 0.4)'
                    },
                  }}
                >
                  {isSubmitting ? <CircularProgress size={24} color="inherit" /> : 'Submit'}
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>

        <Snackbar
          open={snackbar.open}
          autoHideDuration={6000}
          onClose={() => setSnackbar({ ...snackbar, open: false })}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        >
          <Alert
            onClose={() => setSnackbar({ ...snackbar, open: false })}
            severity={snackbar.severity}
            sx={{ width: '100%' }}
          >
            {snackbar.message}
          </Alert>
        </Snackbar>
      </Container>
    </Box>
  );
};

export default Contact;