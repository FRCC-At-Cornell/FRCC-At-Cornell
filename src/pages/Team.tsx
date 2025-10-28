import React from 'react';
import {Avatar, Box, Card, CardContent, Container, Typography} from '@mui/material';

const teamMembers = [
    {
        name: "Carson Wolber",
        role: "President",
    },
    {
        name: "Prajwal Reddy",
        role: "Vice-President",
    },
    {
        name: "James Lee",
        role: "Treasurer",
    },
    {
        name: "Elizabeth Tian",
        role: "Primary Funding Board Consultant",
    },
    {
        name: "Levi Chen",
        role: "DEI Chair",
    },
    {
        name: "Ryan Chahrour",
        role: "Advisor",
    }
];

const Team = () => {
    return (
        <Box sx={{bgcolor: 'background.default', py: 10}}>
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
                        Our Leadership Team
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
                        Meet the dedicated individuals who drive our club's success and foster economic discourse at
                        Cornell
                    </Typography>
                </Box>

                <Box sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: {xs: 3, sm: 3, md: 4},
                    justifyContent: 'center'
                }}>
                    {teamMembers.map((member, index) => (
                        <Box
                            key={index}
                            sx={{
                                width: {
                                    xs: '100%',
                                    sm: 'calc(50% - 24px)',
                                    md: 'calc(33.333% - 32px)'
                                }
                            }}
                        >
                            <Card
                                sx={{
                                    height: '100%',
                                    borderRadius: 2,
                                    transition: 'all 0.3s ease',
                                    '&:hover': {
                                        transform: 'translateY(-8px)',
                                        boxShadow: 6
                                    }
                                }}
                            >
                                <CardContent sx={{p: {xs: 3, md: 4}, textAlign: 'center'}}>
                                    <Avatar
                                        sx={{
                                            width: {xs: 100, md: 120},
                                            height: {xs: 100, md: 120},
                                            mx: 'auto',
                                            mb: 3,
                                            bgcolor: 'primary.main',
                                            fontSize: {xs: '2rem', md: '2.5rem'},
                                            boxShadow: 2
                                        }}
                                    >
                                        {member.name.split(' ').map(n => n[0]).join('')}
                                    </Avatar>
                                    <Typography
                                        variant="h5"
                                        component="h3"
                                        gutterBottom
                                        sx={{
                                            fontWeight: 600,
                                            fontSize: {xs: '1.25rem', md: '1.5rem'}
                                        }}
                                    >
                                        {member.name}
                                    </Typography>
                                    <Typography
                                        variant="subtitle1"
                                        color="primary.main"
                                        gutterBottom
                                        sx={{
                                            fontWeight: 500,
                                            mb: 2,
                                            fontSize: {xs: '0.9rem', md: '1rem'}
                                        }}
                                    >
                                        {member.role}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Box>
                    ))}
                </Box>
            </Container>
        </Box>
    );
};

export default Team;