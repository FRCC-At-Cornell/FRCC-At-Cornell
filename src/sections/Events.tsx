import React from 'react';
import {Box, Container, Paper, Typography} from '@mui/material';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import GroupIcon from '@mui/icons-material/Group';
import RecordVoiceOverIcon from '@mui/icons-material/RecordVoiceOver';

const activities = [
    {
        icon: <CalendarTodayIcon sx={{fontSize: 40}}/>,
        title: "Weekly Economic Discussions",
        description: "Join us every week for in-depth analysis of current economic conditions and monetary policy developments",
        time: "Every Saturday, 1:00 PM"
    },
    {
        icon: <CalendarTodayIcon sx={{fontSize: 40}}/>,
        title: "National Federal Reserve Competition",
        description: "Present mock proposals, discuss in depth, and simulate how the Board themselves operate",
        time: "Annually in the Fall"
    },
    {
        icon: <RecordVoiceOverIcon sx={{fontSize: 40}}/>,
        title: "Guest Speaker Series",
        description: "Learn from industry experts, economists, and Federal Reserve professionals",
        time: "Semesterly"
    },
    {
        icon: <GroupIcon sx={{fontSize: 40}}/>,
        title: "Networking Events",
        description: "Connect with alumni, professionals, and fellow economics enthusiasts",
        time: "Semesterly"
    }
];

const Events = () => {
    return (
        <Box sx={{bgcolor: 'background.paper', py: 10}}>
            <Container maxWidth="lg">
                <Box sx={{textAlign: 'center', mb: 8}}>
                    <Typography
                        variant="h3"
                        component="h2"
                        gutterBottom
                        sx={{
                            fontWeight: 700,
                            color: 'primary.main',
                            mb: 4
                        }}
                    >
                        Events & Activities
                    </Typography>
                    <Typography
                        variant="h6"
                        sx={{
                            maxWidth: '800px',
                            mx: 'auto',
                            color: 'text.secondary',
                            mb: 6
                        }}
                    >
                        Join us for engaging events and activities throughout the semester
                    </Typography>
                </Box>

                <Box sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: {xs: 3, md: 4},
                    justifyContent: 'center'
                }}>
                    {activities.map((activity, index) => (
                        <Box
                            key={index}
                            sx={{
                                width: {
                                    xs: '100%',
                                    md: 'calc(50% - 32px)'
                                }
                            }}
                        >
                            <Paper
                                elevation={2}
                                sx={{
                                    p: {xs: 3, md: 4},
                                    height: '100%',
                                    borderRadius: 2,
                                    transition: 'all 0.3s ease',
                                    '&:hover': {
                                        transform: 'translateY(-5px)',
                                        boxShadow: 4
                                    }
                                }}
                            >
                                <Box sx={{display: 'flex', alignItems: 'center', mb: 2}}>
                                    <Box sx={{color: 'primary.main', mr: 2}}>{activity.icon}</Box>
                                    <Typography variant="h5" component="h3"
                                                sx={{fontWeight: 600}}>{activity.title}</Typography>
                                </Box>
                                <Typography variant="subtitle1" color="primary.main"
                                            sx={{mb: 2, fontWeight: 500}}>{activity.time}</Typography>
                                <Typography variant="body1" color="text.secondary"
                                            sx={{lineHeight: 1.7}}>{activity.description}</Typography>
                            </Paper>
                        </Box>
                    ))}
                </Box>
            </Container>
        </Box>
    );
};

export default Events;