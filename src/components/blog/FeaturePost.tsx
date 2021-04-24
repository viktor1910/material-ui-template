import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import CardActionArea from '@material-ui/core/CardActionArea';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Hidden from '@material-ui/core/Hidden';
import { Typography } from '@material-ui/core';

type Post = {
    title: string,
    date: string,
    description: string,
    image: string,
    imageText: string,
}

interface Props {
    post: Post
}

const useStyles = makeStyles({
    card: {
        display: 'flex'
    },
    cardDetail: {
        flex: 1
    },
    cardMedia: {
        width: 160,
    }
})
const FeaturePost = (props: Props) => {
    const { title, date, description, image, imageText } = props.post;
    const classes = useStyles()
    return (
        <Grid item xs={12} md={6}>
            <CardActionArea component="a" href="#">
                <Card className={classes.card}>
                    <div className={classes.cardDetail}>
                        <CardContent>
                            <Typography component="h2" variant="h5">
                                {title}
                            </Typography>
                            <Typography variant="subtitle1" color="textSecondary">
                                {date}
                            </Typography>
                            <Typography variant="subtitle1" paragraph>
                                {description}
                            </Typography>
                            <Typography variant="subtitle1" color="primary">
                                Continue reading..
                            </Typography>
                        </CardContent>
                    </div>
                    <Hidden xsDown>
                        <CardMedia className={classes.cardMedia} image={image} title={imageText} />
                    </Hidden>
                </Card>
            </CardActionArea>
        </Grid>
    )
}

export default FeaturePost
