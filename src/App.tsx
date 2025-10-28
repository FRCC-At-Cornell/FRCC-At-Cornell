import React from 'react';
import {Box, createTheme, CssBaseline, ThemeProvider} from '@mui/material';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Team from './pages/Team';
import Events from './pages/Events';
import Contact from './pages/Contact';

const theme = createTheme({
    palette: {
        primary: {
            main: '#00204E', // NY Fed Blue
            light: '#1A365D',
            dark: '#00142F',
        },
        secondary: {
            main: '#C8102E', // NY Fed Red
            light: '#E53E3E',
            dark: '#9B2C2C',
        },
        background: {
            default: '#F5F7FA',
            paper: '#FFFFFF',
        },
        text: {
            primary: '#2D3748',
            secondary: '#4A5568'
        }
    },
    typography: {
        fontFamily: '"Inter", "Helvetica", "Arial", sans-serif',
        h1: {
            fontWeight: 700,
        },
        h2: {
            fontWeight: 600,
        },
        h4: {
            fontWeight: 600,
        },
        button: {
            fontWeight: 500,
        }
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: 8,
                    textTransform: 'none',
                    fontWeight: 500,
                    padding: '8px 24px',
                },
            },
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    borderRadius: 12,
                    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                },
            },
        },
    },
});

function App() {
    const scrollTo = (section: string) => {
        const element = document.getElementById(section);
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        }
    };

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <div className="App">
                <Header scrollTo={scrollTo}/>
                <Box sx={{
                    pt: {xs: 7, sm: 8},
                    minHeight: '100vh',
                    display: 'flex',
                    flexDirection: 'column',
                }}>
                    <Box id="home" sx={{minHeight: '100vh'}}>
                        <Home/>
                    </Box>
                    <Box id="about" sx={{minHeight: '100vh', bgcolor: 'background.paper'}}>
                        <About/>
                    </Box>
                    <Box id="team" sx={{minHeight: '100vh'}}>
                        <Team/>
                    </Box>
                    <Box id="events" sx={{minHeight: '100vh', bgcolor: 'background.paper'}}>
                        <Events/>
                    </Box>
                    <Box id="contact">
                        <Contact/>
                    </Box>
                </Box>
            </div>
        </ThemeProvider>
    );
}

export default App;
