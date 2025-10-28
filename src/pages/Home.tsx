import React from 'react';
import {Box, Container, Typography} from '@mui/material';
import TimelineIcon from '@mui/icons-material/Timeline';
import GroupsIcon from '@mui/icons-material/Groups';
import ShowChartIcon from '@mui/icons-material/ShowChart';

const features = [
    {
        icon: <TimelineIcon sx={{fontSize: 40}}/>,
        title: 'Economic Analysis',
        description: 'Develop skills in analyzing macroeconomic conditions'
    },
    {
        icon: <GroupsIcon sx={{fontSize: 40}}/>,
        title: 'Collaborative Learning',
        description: 'Work with peers to understand monetary policy'
    },
    {
        icon: <ShowChartIcon sx={{fontSize: 40}}/>,
        title: 'Real-world Application',
        description: 'Apply economic theory to current market conditions'
    }
];

const Home = () => {
    return (
        <Box
            sx={{
                backgroundImage: 'linear-gradient(rgba(27, 79, 114, 0.9), rgba(27, 79, 114, 0.85))',
                color: 'white',
                minHeight: '100vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
            }}
        >
            <Container maxWidth="lg">
                <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                    <Box sx={{width: '100%', maxWidth: '800px', mb: 6, textAlign: 'center'}}>
                        <Typography
                            variant="h2"
                            component="h1"
                            gutterBottom
                            sx={{fontWeight: 700, fontSize: {xs: '2.5rem', md: '3.5rem'}, mb: 3}}
                        >
                            Federal Reserve Challenge Club
                        </Typography>
                        <Typography variant="h4" component="h2" sx={{mb: 4, color: 'rgba(255,255,255,0.9)'}}>
                            Cornell University
                        </Typography>
                        <Typography variant="h6" sx={{mb: 4, color: 'rgba(255,255,255,0.8)', lineHeight: 1.6}}>
                            Fostering economic discourse and developing future leaders in monetary policy
                        </Typography>
                    </Box>

                    <Box sx={{width: '100%', maxWidth: 1200, mx: 'auto'}}>
                        <Box
                            sx={{
                                display: 'grid',
                                gridTemplateColumns: {
                                    xs: '1fr',
                                    sm: 'repeat(2, 1fr)',
                                    md: 'repeat(3, 1fr)'
                                },
                                gap: {xs: 3, md: 4},
                                mt: 6
                            }}
                        >
                            {features.map((f, i) => (
                                <Box key={i}>
                                    <Box
                                        sx={{
                                            textAlign: 'center',
                                            p: {xs: 3, md: 4},
                                            bgcolor: 'rgba(255,255,255,0.08)',
                                            borderRadius: 2,
                                            height: '100%',
                                            transition: 'all 0.3s ease',
                                            '&:hover': {
                                                transform: 'translateY(-8px)',
                                                bgcolor: 'rgba(255,255,255,0.12)'
                                            }
                                        }}
                                    >
                                        {f.icon}
                                        <Typography variant="h6"
                                                    sx={{mt: 2, mb: 1.5, fontWeight: 600}}>{f.title}</Typography>
                                        <Typography variant="body1"
                                                    sx={{color: 'rgba(255,255,255,0.8)'}}>{f.description}</Typography>
                                    </Box>
                                </Box>
                            ))}
                        </Box>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export default Home;