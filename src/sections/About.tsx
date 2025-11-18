import React from 'react';
import {Box, Card, CardContent, Container, IconButton, Typography} from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import GroupsIcon from '@mui/icons-material/Groups';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import NetworkingIcon from '@mui/icons-material/Hub';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import CompetitionIcon from '@mui/icons-material/EmojiEvents';

const benefits = [
    {
        icon: <SchoolIcon sx={{fontSize: 40}}/>,
        title: "Expert Access",
        description: "Learn from leading experts in macroeconomics and monetary policy"
    },
    {
        icon: <CompetitionIcon sx={{fontSize: 40}}/>,
        title: "Competitions",
        description: "Participate in prestigious economic policy competitions"
    },
    {
        icon: <TrendingUpIcon sx={{fontSize: 40}}/>,
        title: "Market Analysis",
        description: "Engage in regular discussions on current economic conditions"
    },
    {
        icon: <NetworkingIcon sx={{fontSize: 40}}/>,
        title: "Networking",
        description: "Connect with fellow economics enthusiasts and professionals"
    },
    {
        icon: <AnalyticsIcon sx={{fontSize: 40}}/>,
        title: "Skill Development",
        description: "Enhance your analytical and presentation capabilities"
    },
    {
        icon: <GroupsIcon sx={{fontSize: 40}}/>,
        title: "Community",
        description: "Join a vibrant community of economic thinkers"
    }
];

const About = () => {
    return (
        <Container maxWidth="lg" sx={{py: 10}}>
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
                    About Us
                </Typography>
                <Typography
                    variant="h5"
                    sx={{
                        maxWidth: '800px',
                        mx: 'auto',
                        mb: 4,
                        color: 'text.secondary',
                        lineHeight: 1.6
                    }}
                >
                    The Federal Reserve Challenge Club at Cornell University is dedicated to fostering understanding
                    and discussion of macroeconomic conditions and monetary policy.
                </Typography>
                <Typography
                    variant="body1"
                    sx={{
                        maxWidth: '700px',
                        mx: 'auto',
                        color: 'text.secondary'
                    }}
                >
                    Our club provides a platform for students to engage with real-world economic issues,
                    develop critical thinking skills, and participate in prestigious competitions.
                </Typography>
            </Box>

            <Typography
                variant="h4"
                align="center"
                sx={{mb: 6, color: 'primary.main', fontWeight: 600}}
            >
                Member Benefits
            </Typography>

            <Box sx={{display: 'flex', flexWrap: 'wrap', gap: 3}}>
                {benefits.map((benefit, index) => (
                    <Box key={index} sx={{width: {xs: '100%', sm: '48%', md: '32%'}}}>
                        <Card
                            sx={{
                                height: '100%',
                                transition: 'transform 0.2s',
                                '&:hover': {transform: 'translateY(-5px)'}
                            }}
                        >
                            <CardContent sx={{textAlign: 'center', p: 3}}>
                                <IconButton color="primary" sx={{mb: 2, cursor: 'default'}} disableRipple>
                                    {benefit.icon}
                                </IconButton>
                                <Typography variant="h6" gutterBottom sx={{fontWeight: 600}}>
                                    {benefit.title}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {benefit.description}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Box>
                ))}
            </Box>
        </Container>
    );
};

export default About;