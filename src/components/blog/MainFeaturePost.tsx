import React from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import Link from '@material-ui/core/Link';

type MainFeaturedPost = {
    title: string,
    description: string,
    image: string,
    imgText: string,
    linkText: string
}
interface Props {
    mainFeaturedPost: MainFeaturedPost
}

const useStyles = makeStyles((theme) => ({
    paper: {
        position: 'relative',
        backgroundColor: theme.palette.grey[800],
        color: theme.palette.common.white,
        marginBottom: theme.spacing(4),
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
    },
    overlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0,0,0,.3)',
    },
    mainContent: {
        position: 'relative',
        padding: theme.spacing(3),
        [theme.breakpoints.up('md')]: {
            padding: theme.spacing(6),
            paddingRight: 0,
        }
    }
}))

const MainFeaturePost = ({ mainFeaturedPost }: Props) => {
    const { title, description, image, linkText } = mainFeaturedPost;
    const classes = useStyles()
    return (
        <Paper className={classes.paper} style={{backgroundImage: `url(${image})`}}>
            <div className={classes.overlay}/>
            <Grid container>
                <Grid item md={6}>
                    <div className={classes.mainContent}>
                        <Typography component="h1" variant="h3" color="inherit" gutterBottom>
                            {title}
                        </Typography>
                        <Typography paragraph variant="h5" color="inherit">
                            {description}
                        </Typography>
                        <Link variant="subtitle1" href="#">
                            {linkText}
                        </Link>
                    </div>
                </Grid>
            </Grid>
        </Paper>
    )
}

export default MainFeaturePost;
