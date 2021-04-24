import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { OverridableComponent } from '@material-ui/core/OverridableComponent';
import { SvgIconTypeMap } from '@material-ui/core/SvgIcon/SvgIcon';

type Archives = {
    title: string,
    url: string
}
type Social = {
    name: string,
    icon: OverridableComponent<SvgIconTypeMap<{}, "svg">>
}
interface Props {
    sidebar: {
        title: string,
        description: string,
        archives: Archives[],
        social: Social[],
    }
}

const useStyles = makeStyles((theme) => ({
    sidebarAbout: {
        padding: theme.spacing(2),
        backgroundColor: theme.palette.grey[200],
    },
    section: {
        marginTop: theme.spacing(3)
    }
}))
const Sidebar = (props: Props) => {
    const { title, description, archives, social } = props.sidebar
    const classes = useStyles();
    return (
        <Grid item xs={12} md={4}>
            <Paper className={classes.sidebarAbout}>
                <Typography variant="h6" gutterBottom>
                    {title}
                </Typography>
                <Typography>{description}</Typography>
            </Paper>
            <Typography variant="h6" gutterBottom className={classes.section}>
                Archives
            </Typography>
            {archives.map(archive => (
                <Link display="block" variant="body1" href={archive.url} key={archive.title}>
                    {archive.title}
                </Link>
            ))}
            <Typography variant="h6" gutterBottom className={classes.section}>
                Social
            </Typography>
            {social.map((network) => (
                <Link display="block" variant="body1" href="#" key={network.name}>
                    <Grid container direction="row" spacing={1} alignItems="center">
                        <Grid item>
                            <network.icon />
                        </Grid>
                        <Grid item>{network.name}</Grid>
                    </Grid>
                </Link>
            ))}
        </Grid>
    )
}

export default Sidebar;