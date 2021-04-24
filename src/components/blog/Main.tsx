import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';

interface Props {
    title: string,
    post: string,
}
const Main = (props: Props) => {
    const { title, post } = props
    return (
        <Grid item xs={12} md={8}>
            <Typography component="h6" gutterBottom>
                {title}
            </Typography>
            <Divider />
        </Grid>
    )
}

export default Main;