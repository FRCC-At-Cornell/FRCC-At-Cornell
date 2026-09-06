import React from 'react';
import {Box, Container, Divider, Link, Typography} from '@mui/material';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <Box
            component="footer"
            sx={{
                bgcolor: 'background.paper',
                py: 4,
                borderTop: 1,
                borderColor: 'divider',
            }}
        >
            <Container maxWidth="lg">
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: {xs: 'column', md: 'row'},
                        justifyContent: 'space-between',
                        alignItems: {xs: 'flex-start', md: 'center'},
                        gap: 2,
                    }}
                >
                    <Typography variant="body2" color="text.secondary">
                        © {currentYear} Federal Reserve Challenge Club
                    </Typography>

                    <Box>
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: 2,
                                flexWrap: 'wrap',
                            }}
                        >
                            <Link
                                href="https://cornell.campusgroups.com/frcc/home/"
                                target="_blank"
                                rel="noopener noreferrer"
                                color="text.secondary"
                                variant="body2"
                                underline="hover"
                            >
                                CampusGroups
                            </Link>

                            <Divider orientation="vertical" flexItem />

                            <Link
                                href="https://hr.cornell.edu/about/workplace-rights/equal-education-and-employment"
                                target="_blank"
                                rel="noopener noreferrer"
                                color="text.secondary"
                                variant="body2"
                                underline="hover"
                            >
                                Equal Education & Employment
                            </Link>
                        </Box>

                        <Typography
                            variant="body2"
                            color="text.secondary"
                            sx={{mt: 1}}
                        >
                            This organization is a registered student organization
                            of Cornell University.
                        </Typography>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export default Footer;
