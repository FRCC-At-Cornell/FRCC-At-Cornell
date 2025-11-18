import React from 'react';
import {Box, Container, Paper, Typography} from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const Contact = () => {
    return (
        <Box sx={{bgcolor: '#F5F7FA', py: 10}}>
            <Container maxWidth="lg">
                <Box sx={{textAlign: 'center', mb: 8}}>
                    <Typography
                        variant="h3"
                        component="h2"
                        gutterBottom
                        sx={{
                            fontWeight: 700,
                            color: '#00204E',
                            mb: 4
                        }}
                    >
                        Contact Us
                    </Typography>
                    <Typography
                        variant="h6"
                        sx={{
                            maxWidth: '800px',
                            mx: 'auto',
                            color: '#4A5568',
                            mb: 6
                        }}
                    >
                        Reach out to the Federal Reserve Challenge Club at Cornell
                    </Typography>
                </Box>

                <Box sx={{
                    maxWidth: 'md',
                    mx: 'auto',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 4
                }}>
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 4
                    }}>
                        <Paper
                            elevation={3}
                            sx={{
                                p: {xs: 3, md: 4},
                                display: 'flex',
                                alignItems: 'flex-start',
                                borderRadius: 2,
                                transition: 'all 0.3s ease',
                                '&:hover': {
                                    transform: 'translateX(5px)',
                                    boxShadow: 6
                                }
                            }}>
                            <EmailIcon color="primary" sx={{fontSize: 40, mr: 2}}/>
                            <Box>
                                <Typography variant="h6" gutterBottom sx={{fontWeight: 600}}>Email</Typography>
                                <Typography variant="body1" color="text.secondary">
                                    <a href="mailto:frccatcornell@gmail.com"
                                       style={{color: 'inherit', textDecoration: 'none'}}>
                                        frccatcornell@gmail.com
                                    </a>
                                </Typography>
                            </Box>
                        </Paper>

                        <Paper elevation={3} sx={{p: 4, display: 'flex', alignItems: 'flex-start'}}>
                            <LocationOnIcon color="primary" sx={{fontSize: 40, mr: 2}}/>
                            <Box>
                                <Typography variant="h6" gutterBottom sx={{fontWeight: 600}}>Location</Typography>
                                <Typography variant="body1" color="text.secondary">
                                    Cornell University<br/>
                                    Ithaca, New York 14853<br/>
                                    United States
                                </Typography>
                            </Box>
                        </Paper>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export default Contact;