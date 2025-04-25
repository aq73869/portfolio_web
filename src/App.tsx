import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, CssBaseline, createTheme, responsiveFontSizes } from '@mui/material';
import { useState, useEffect } from 'react';

// Import components
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

let darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#E31B6D',
    },
    background: {
      default: '#1A1A1A',
      paper: '#2A2A2A',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
      letterSpacing: '-0.02em',
    },
    h2: {
      fontWeight: 600,
      letterSpacing: '-0.01em',
    },
    h3: {
      fontWeight: 600,
      letterSpacing: '-0.01em',
    },
    h4: {
      fontWeight: 500,
    },
    h5: {
      fontWeight: 500,
    },
    h6: {
      fontWeight: 500,
    },
    button: {
      fontWeight: 500,
      textTransform: 'none',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          padding: '10px 24px',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
        },
      },
    },
  },
});

// Make typography responsive
darkTheme = responsiveFontSizes(darkTheme);

function App() {
  const [error, setError] = useState<Error | null>(null);
  
  // Global error handler for uncaught exceptions
  useEffect(() => {
    const handleGlobalError = (event: ErrorEvent) => {
      console.error('Uncaught error:', event.error);
      setError(event.error);
      event.preventDefault();
    };

    window.addEventListener('error', handleGlobalError);
    return () => window.removeEventListener('error', handleGlobalError);
  }, []);

  // Error UI component
  const ErrorFallback = ({ error, resetError }: { error: Error, resetError: () => void }) => (
    <div style={{ 
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      padding: '2rem'
    }}>
      <h2 style={{
        marginBottom: '1rem',
        background: 'linear-gradient(45deg, #E31B6D 30%, #ff4081 90%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        fontWeight: 'bold',
        fontSize: '2rem'
      }}>
        Oops! Something went wrong
      </h2>
      <p style={{ marginBottom: '2rem', color: '#aaa', maxWidth: '600px' }}>
        We apologize for the inconvenience. The application has encountered an unexpected error.
        Please try reloading the page or contact support if the problem persists.
      </p>
      <button 
        onClick={resetError}
        style={{
          backgroundColor: '#E31B6D',
          color: 'white',
          border: 'none',
          padding: '0.75rem 2rem',
          borderRadius: '8px',
          fontSize: '1.1rem',
          cursor: 'pointer',
          transition: 'all 0.3s ease'
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.opacity = '0.9';
          e.currentTarget.style.transform = 'translateY(-2px)';
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.opacity = '1';
          e.currentTarget.style.transform = 'translateY(0)';
        }}
      >
        Reload Page
      </button>
      {(typeof window !== 'undefined' && import.meta.env.DEV) && error && (
        <div style={{ marginTop: '2rem', textAlign: 'left', width: '100%', maxWidth: '800px' }}>
          <h6 style={{ 
            color: '#f44336', 
            marginBottom: '0.5rem',
            fontWeight: 600,
            display: 'flex',
            alignItems: 'center',
            gap: '0.25rem'
          }}>
            Error Details:
          </h6>
          <div style={{
            padding: '1rem',
            borderRadius: '8px',
            backgroundColor: 'rgba(255, 0, 0, 0.05)',
            border: '1px solid rgba(255, 0, 0, 0.1)'
          }}>
            <pre style={{ 
              whiteSpace: 'pre-wrap',
              margin: 0,
              fontSize: '0.9rem',
              color: '#f44336'
            }}>
              {error.toString()}
              <br />
              {error.stack}
            </pre>
          </div>
        </div>
      )}
    </div>
  );

  const handleResetError = () => {
    setError(null);
    window.location.reload();
  };

  // If there's an error, show the error UI
  if (error) {
    return (
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <ErrorFallback error={error} resetError={handleResetError} />
      </ThemeProvider>
    );
  }

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
