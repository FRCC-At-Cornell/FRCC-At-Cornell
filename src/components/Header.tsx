import React, {useEffect, useState} from 'react';
import {AppBar, Box, Button, Container, Toolbar, Typography} from '@mui/material';

interface Props {
    scrollTo: (section: string) => void;
}

const Header = ({scrollTo}: Props) => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <AppBar
            position="fixed"
            elevation={0}
            sx={{
                backgroundColor: '#00204E',
                borderBottom: 1,
                borderColor: isScrolled ? 'rgba(255,255,255,0.1)' : 'transparent',
                transition: 'all 0.3s ease-in-out'
            }}
        >
            <Container maxWidth="lg">
                <Toolbar
                    sx={{
                        py: {xs: 1, md: 1.5},
                        px: {xs: 2, md: 3}
                    }}
                >
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{
                            flexGrow: 1,
                            cursor: 'pointer',
                            fontWeight: 700,
                            letterSpacing: 0.5,
                            fontSize: {xs: '1.1rem', md: '1.3rem'},
                            '&:hover': {
                                color: 'rgba(255,255,255,0.9)',
                                transform: 'scale(1.02)',
                                transition: 'all 0.2s ease'
                            }
                        }}
                        onClick={() => scrollTo('home')}
                    >
                        FRCC
                    </Typography>
                    <Box sx={{display: 'flex', gap: {xs: 1, md: 2}}}>
                        <Button
                            color="inherit"
                            onClick={() => scrollTo('home')}
                            sx={{
                                fontWeight: 500,
                                '&:hover': {transform: 'translateY(-2px)'},
                                transition: 'transform 0.2s ease'
                            }}
                        >
                            Home
                        </Button>
                        <Button
                            color="inherit"
                            onClick={() => scrollTo('about')}
                            sx={{
                                fontWeight: 500,
                                '&:hover': {transform: 'translateY(-2px)'},
                                transition: 'transform 0.2s ease'
                            }}
                        >
                            About
                        </Button>
                        <Button
                            color="inherit"
                            onClick={() => scrollTo('team')}
                            sx={{
                                fontWeight: 500,
                                '&:hover': {transform: 'translateY(-2px)'},
                                transition: 'transform 0.2s ease'
                            }}
                        >
                            Team
                        </Button>
                        <Button
                            color="inherit"
                            onClick={() => scrollTo('events')}
                            sx={{
                                fontWeight: 500,
                                '&:hover': {transform: 'translateY(-2px)'},
                                transition: 'transform 0.2s ease'
                            }}
                        >
                            Events
                        </Button>
                        <Button
                            color="inherit"
                            onClick={() => scrollTo('contact')}
                            sx={{
                                fontWeight: 500,
                                '&:hover': {transform: 'translateY(-2px)'},
                                transition: 'transform 0.2s ease'
                            }}
                        >
                            Contact
                        </Button>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default Header;