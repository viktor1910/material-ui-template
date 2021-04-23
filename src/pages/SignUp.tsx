import React from 'react';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%',
        margin: theme.spacing(3)
    },
    button: {
        margin: theme.spacing(3, 0, 2)

    }
}))
const SignUp = () => {
    const classes = useStyles()
    return (
        <Container component="main" maxWidth="xs">
            <div className={classes.root}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component='h1' variant="h5">Sign Up</Typography>
                <form noValidate className={classes.form}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                autoComplete="fname"
                                name="firstname"
                                variant="outlined"
                                fullWidth
                                label="First Name"
                                id="firstname"
                                autoFocus
                                required
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                id="lastname"
                                name="lastanem"
                                label="Last Name"
                                fullWidth
                                variant="outlined"
                                autoComplete="lname"
                                required
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                id="email"
                                name="email"
                                label="Email"
                                fullWidth
                                variant="outlined"
                                autoComplete="email"
                                required
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                id="password"
                                name="password"
                                label="Password"
                                fullWidth
                                variant="outlined"
                                autoComplete="password"
                                required
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <FormControlLabel
                                control={<Checkbox value="allowExtraEmails" color="primary" />}
                                label="I want to receive inspiration, marketing promotions and updates via email."
                            />
                        </Grid>
                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.button}
                    >
                        Sign up
                    </Button>
                </form>
            </div>
        </Container>
    )
}

export default SignUp;
;