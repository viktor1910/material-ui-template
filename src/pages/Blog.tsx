import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

import MainFeaturePost from '../components/blog/MainFeaturePost';
import FeaturePost from '../components/blog/FeaturePost';
import Header from '../components/blog/Header';
import Main from '../components/blog/Main';
import Footer from '../components/blog/Footer';
import Sidebar from '../components/blog/Sidebar';

const useStyles = makeStyles((theme) => ({
    main: {
        marginTop: theme.spacing(3),
    }
}))

const featuredPosts = [
    {
        title: 'Featured post',
        date: 'Nov 12',
        description:
            'This is a wider card with supporting text below as a natural lead-in to additional content.',
        image: 'https://source.unsplash.com/random',
        imageText: 'Image Text',
    },
    {
        title: 'Post title',
        date: 'Nov 11',
        description:
            'This is a wider card with supporting text below as a natural lead-in to additional content.',
        image: 'https://source.unsplash.com/random',
        imageText: 'Image Text',
    },
];

const sections = [
    { title: 'Technology', url: '#' },
    { title: 'Design', url: '#' },
    { title: 'Culture', url: '#' },
    { title: 'Business', url: '#' },
    { title: 'Politics', url: '#' },
    { title: 'Opinion', url: '#' },
    { title: 'Science', url: '#' },
    { title: 'Health', url: '#' },
    { title: 'Style', url: '#' },
    { title: 'Travel', url: '#' },
];

const mainFeaturedPost = {
    title: 'Title of a longer featured blog post',
    description:
        "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
    image: 'https://source.unsplash.com/random',
    imgText: 'main image description',
    linkText: 'Continue reading…',
};

const Blog = () => {
    const classes = useStyles();
    return (
        <>
            <Container maxWidth='lg'>
                <Header title="Blog" sections={sections} />
                <main>
                    <MainFeaturePost mainFeaturedPost={mainFeaturedPost} />
                    <Grid container spacing={4}>
                        {featuredPosts.map(post => <FeaturePost key={post.title} post={post}/>)}
                    </Grid>
                    <Grid container spacing={5} className={classes.main}>
                        <Main />
                        <Sidebar />
                    </Grid>
                </main>
            </Container>
            <Footer />
        </>
    )
}

export default Blog
