import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar'
import { Typography, Link, Button, Container, Grid, Card, CardHeader, CardContent, CardActions } from '@material-ui/core';
import StarIcon from '@material-ui/icons/StarBorder';

const useStyles = makeStyles((theme) => ({
    '@global': {
        ul: {
            margin: 0,
            padding: 0,
            listStyle: 'none',
        },
    },
    appBar: {
        borderBottom: `1px solid ${theme.palette.divider}`
    },
    toolbarTitle: {
        flexGrow: 1
    },
    link: {
        padding: theme.spacing(1, 1.5)
    },
    hero: {
        padding: theme.spacing(8, 0, 6)
    },
    cardHeader: {
        backgroundColor: theme.palette.grey[200]
    },
    cardContent: {
        display: 'flex',
        justifyContent: 'center',
    },
    footer: {
        borderTop: `1px solid ${theme.palette.divider}`,
        marginTop: theme.spacing(8),
        paddingTop: theme.spacing(3),
        paddingBottom: theme.spacing(3),
        [theme.breakpoints.up('sm')]: {
            paddingTop: theme.spacing(6),
            paddingBottom: theme.spacing(6),
        },
    }
}))

const tiers = [
    {
        title: 'Free',
        price: '0',
        description: ['10 users included', '2 GB of storage', 'Help center access', 'Email support'],
        buttonText: 'Sign up for free',
        buttonVariant: 'outlined',
    },
    {
        title: 'Pro',
        subheader: 'Most popular',
        price: '15',
        description: [
            '20 users included',
            '10 GB of storage',
            'Help center access',
            'Priority email support',
        ],
        buttonText: 'Get started',
        buttonVariant: 'contained',
    },
    {
        title: 'Enterprise',
        price: '30',
        description: [
            '50 users included',
            '30 GB of storage',
            'Help center access',
            'Phone & email support',
        ],
        buttonText: 'Contact us',
        buttonVariant: 'outlined',
    },
];

const footers = [
    {
        title: 'Company',
        description: ['Team', 'History', 'Contact us', 'Locations'],
    },
    {
        title: 'Features',
        description: ['Cool stuff', 'Random feature', 'Team feature', 'Developer stuff', 'Another one'],
    },
    {
        title: 'Resources',
        description: ['Resource', 'Resource name', 'Another resource', 'Final resource'],
    },
    {
        title: 'Legal',
        description: ['Privacy policy', 'Terms of use'],
    },
];

const Pricing = () => {
    const classes = useStyles();
    return (
        <div>
            <AppBar color="default" position="static" elevation={0} className={classes.appBar}>
                <Toolbar>
                    <Typography variant="h6" className={classes.toolbarTitle}>
                        Company name
                    </Typography>
                    <nav>
                        <Link href="#" variant="button" color="textPrimary" className={classes.link}>
                            Features
                        </Link>
                        <Link href="#" variant="button" color="textPrimary" className={classes.link}>
                            Enterprise
                        </Link>
                        <Link href="#" variant="button" color="textPrimary" className={classes.link}>
                            Support
                        </Link>
                    </nav>
                    <Button href="#" color="primary" variant="outlined">Login</Button>
                </Toolbar>
            </AppBar>
            <Container maxWidth="sm" component="main" className={classes.hero}>
                <Typography align="center" component="h1" variant="h2" color="textSecondary" gutterBottom>Pricing</Typography>
                <Typography variant="h5" align="center" color="textSecondary" component="p" paragraph>
                    Quickly build an effective pricing table for your potential customers with this layout. It's built with default Material-UI components with little customization.
                </Typography>
            </Container>
            <Container maxWidth="md" component="main">
                <Grid container spacing={5}>
                    {tiers.map(tier => (
                        <Grid item key={tier.title} xs={12} sm={tier.title === 'Enterprise' ? 12 : 6} md={4}>
                            <Card>
                                <CardHeader
                                    title={tier.title}
                                    subheader={tier.subheader ? tier.subheader : null}
                                    titleTypographyProps={{ align: 'center' }}
                                    subheaderTypographyProps={{ align: 'center' }}
                                    action={tier.title === 'Pro' ? <StarIcon /> : null}
                                    className={classes.cardHeader}
                                />
                                <CardContent>
                                    <div className={classes.cardContent}>
                                        <Typography variant="h3" color="textPrimary">${tier.price}</Typography>
                                        <Typography variant="h6" color="textSecondary">/mo</Typography>
                                    </div>
                                    <ul>
                                        {tier.description.map(line => (
                                            <Typography component="li" variant="subtitle1" align="center" key={line}>
                                                {line}
                                            </Typography>
                                        ))}
                                    </ul>
                                </CardContent>
                                <CardActions>
                                    <Button fullWidth variant={tier.buttonVariant === 'outlined' ? 'outlined' : 'contained'} color="primary">
                                        {tier.buttonText}
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
            <Container maxWidth="md" component="footer" className={classes.footer}>
                <Grid container spacing={4} justify="space-evenly">
                    {footers.map(footer => (
                        <Grid item xs={6} sm={3} key={footer.title}>
                            <Typography variant="h6" color="textPrimary" gutterBottom>
                                {footer.title}
                            </Typography>
                            <ul>
                                {footer.description.map(item => (
                                    <li key={item}>
                                        <Link href="#" variant="subtitle1" color="textSecondary">
                                            {item}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </div>
    )
}

export default Pricing;
