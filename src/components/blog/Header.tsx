import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Link from '@material-ui/core/Link';

type Section = {
    title: string,
    url: string
}
interface Props {
    title: string;
    sections: Section[]
}

const useStyles = makeStyles((theme) => ({
    topBar: {
        borderBottom: `1px solid ${theme.palette.divider}`,
    },
    title: {
        flexGrow: 1
    },
    secondaryBar: {
        justifyContent: 'space-between',
        overflowX: 'auto',
    },
    link: {
        padding: theme.spacing(1),
    }
}))
const Header = ({ title, sections }: Props) => {
    const classes = useStyles();
    return (
        <>
            <Toolbar className={classes.topBar}>
                <Button>
                    SUBSCRIBE
                </Button>
                <Typography className={classes.title} component="h2" variant="h5" color="inherit" align="center" noWrap>
                    {title}
                </Typography>
                <IconButton>
                    <SearchIcon />
                </IconButton>
                <Button variant="outlined">
                    Sign up
                </Button>
            </Toolbar>
            <Toolbar component="nav" variant="dense" className={classes.secondaryBar}>
                {sections.map((section) =>
                    <Link
                        color="inherit"
                        noWrap
                        key={section.title}
                        variant="body2"
                        href={section.url}
                        className={classes.link}
                    >
                        {section.title}
                    </Link>
                )}
            </Toolbar>
        </>
    )
}

export default Header
