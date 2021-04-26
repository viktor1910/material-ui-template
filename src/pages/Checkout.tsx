import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Typography, Stepper, Step, StepLabel, Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    mainLayout: {
        width: 'auto',
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2),
        [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
            width: 600,
            marginLeft: 'auto',
            marginRight: 'auto'
        }
    },
    paper: {
        padding: theme.spacing(2),
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2),
    },
    button: {
        display: 'flex',
        justifyContent: 'flex-end'
    },
    buttonNext: {
        marginLeft: theme.spacing(1)
    }
}));

const steps = ['Shipping address', 'Payment details', 'Review your order'];
const getStepsContent = (step: number) => {
    switch (step) {
        case 0:
            return <div>Address Form</div>
        case 1:
            return <div>Payment Form</div>
        case 2:
            return <div>Review Form</div>
        default:
            throw new Error('Unknown step')
    }
}

const Checkout = () => {
    const [activeStep, setActiveStep] = useState(0);
    const classes = useStyles();
    const handleNextStep = () => {
        setActiveStep(activeStep + 1)
    }
    const handleBackStep = () => {
        setActiveStep(activeStep - 1)
    }
    return (
        <main className={classes.mainLayout}>
            <Paper className={classes.paper}>
                <Typography align="center" color="inherit" component="h6" variant="h4">
                    Checkout
                </Typography>
                <Stepper activeStep={activeStep}>
                    {steps.map(label => (
                        <Step key={label}>
                            <StepLabel>
                                {label}
                            </StepLabel>
                        </Step>
                    ))}
                </Stepper>
                <>
                    {activeStep === steps.length ?
                        <Typography variant="h5">
                            Thank for your order
                        </Typography>:
                        <>
                            {getStepsContent(activeStep)}
                            <div className={classes.button}>
                                {activeStep !== 0 && (
                                    <Button onClick={handleBackStep}>
                                        Back
                                    </Button>
                                )}
                                <Button onClick={handleNextStep} variant="contained" color="primary" className={classes.buttonNext}>
                                    {activeStep === steps.length - 1 ? "Place Order" : "Next"}
                                </Button>
                            </div>
                        </>}
                </>
            </Paper>
        </main>
    )
}

export default Checkout;