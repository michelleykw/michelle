import React, { useState } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import { Form, Formik } from 'formik';
import * as yup from 'yup';
import { useFormspark } from "@formspark/use-formspark";
import ColoredHeader from '../components/ColoredHeader';
import MyButton from '../components/MyButton';
import SideBar from '../components/SideBar';
import FormElement from '../form/FormElement';

const useStyles = makeStyles(theme => ({
    content: {
        marginLeft: "1.5%",
        marginRight: "1.83%"
    },
    fullScreenHeight: {
        minHeight: "90vh"
    },
    textAlignCenter: {
        textAlign: "center"
    },
    alertTextStyle: {
        textAlign: "left",
        lineHeight: '115%'
    },
    primaryColor: {
        color: theme.palette.primary.main
    },
    mbHalf: {
        marginBottom: theme.spacing(0.5)
    },
    mb5: {
        marginBottom: theme.spacing(5)
    },
    mt2: {
        marginTop: theme.spacing(2)
    },
    mt3: {
        marginTop: theme.spacing(3)
    },
    mt5: {
        marginTop: theme.spacing(5)
    },
    pl1: {
        paddingLeft: theme.spacing(1)
    },
    pr1: {
        paddingRight: theme.spacing(1)
    }
}));

function Contact() {
    const classes = useStyles();

    const theme = useTheme();
    const atLeastScreenSmall = useMediaQuery(theme.breakpoints.up('sm'));

    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isSubmitError, setIsSubmitError] = useState(false);

    const initialValues = { 
        firstName: "",
        lastName: "",
        email: "",
        mobile: "",
        subject: "",
        message: ""
    };

    const FORMSPARK_FORM_ID = "04xYo1GC";
    const [submit, submitting] = useFormspark({
        formId: FORMSPARK_FORM_ID,
      });

    const onSubmit = async (values) => {
        try {
            await submit({
                'First Name': values.firstName,
                'Last Name': values.lastName,
                'Email': values.email,
                'Mobile': values.mobile,
                'Subject': values.subject,
                'Message': values.message
            });
            setIsSubmitted(true);
        } catch(err) {
            // console.log("ERROR!", err);
            setIsSubmitError(true);
        }
    };

    const contactYupSchema = yup.object().shape({
        firstName: yup.string()
            .min(1, 'First name is required')
            .max(50, 'Too Long!')
            .required('First name is required'),
        lastName: yup.string()
            .min(1, 'Too Short!')
            .max(50, 'Too Long!')
            .notRequired()
            .nullable(),
        email: yup.string().email('Invalid email').required('Email is required'),
        mobile: yup.string().notRequired().nullable(),
        subject: yup.string()
            .min(1, 'Subject is required')
            .max(256, 'Shorten your subject (Max: 256 characters)')
            .required('Subject is required'),
        message: yup.string()
            .min(1, 'Message is required')
            .max(3000, 'Summarise your message (Max: 3000 characters)')
            .required('Message is required'),
    });

    const renderHeader = (header, subHeader ) => {
        return (
            <Grid item xs={12} className={classes.mt3}>
                <ColoredHeader copy={header} className={classes.textAlignCenter} />
                <Typography variant="subtitle2" className={`${classes.textAlignCenter} ${classes.primaryColor}`}>
                    {subHeader}
                </Typography>
            </Grid>
        );
    };

    const renderFormElement = (name, label, className, sm = 6, placeholder = "", type = "text", hasError = false, required = false, control = "input") => {
        return (
            <Grid item xs={12} sm={sm} className={className}>
                <FormElement 
                    name={name} 
                    type={type}  
                    label={label} 
                    placeholder={placeholder} 
                    hasError={hasError} 
                    required={required}
                    control={control}
                />
            </Grid>
        );
    };

    const renderForm = formikBag => {
        const { touched, errors } = formikBag;
        return (
            <Form>
                <Grid container justify="center" alignItems="center">
                    <Grid container item xs={11} sm={10} lg={8}>
                        <Grid container item justify="space-between">
                            {renderFormElement("firstName", "First Name", atLeastScreenSmall && classes.pr1, 6, "Michelle", "text", touched.firstName && errors.firstName, true)}
                            {renderFormElement("lastName", "Last Name", atLeastScreenSmall && classes.pl1, 6, "Yong")}
                        </Grid>
                        <Grid container item justify="space-between">
                            {renderFormElement("email", "Email", atLeastScreenSmall && classes.pr1, 6, "themichelleyong@gmail.com", "email", touched.email && errors.email, true)}
                            {renderFormElement("mobile", "Mobile", atLeastScreenSmall && classes.pl1)}
                        </Grid>
                        <Grid container item xs={12}>
                            {renderFormElement("subject", "Subject", "", 12, "", "text", touched.subject && errors.subject, true)}
                        </Grid>
                        <Grid container item xs={12}>
                            {renderFormElement("message", "Message", "", 12, "Leave me a message ♡", "text", touched.message && errors.message, true, "textarea")}
                        </Grid>
                        <Grid container item justify={atLeastScreenSmall ? "flex-end": "center"} className={`${classes.mt2} ${classes.mb5}`}>
                            <MyButton content="Submit" type="submit" disabled={submitting} />
                        </Grid>
                    </Grid>
                </Grid>
            </Form>
        );
    };

    const handleSnackbarClose = (event, reason) => {
        if (reason === "clickaway") {
          return;
        }
    
        setIsSubmitError(false);
    };

    const renderCustomisedAlert = () => {
        return (
            <Alert severity="error" variant="outlined" sx={{ width: '100%', bgcolor: 'background.paper' }}>
                <Typography variant="body2" className={`${classes.alertTextStyle} ${classes.mbHalf}`}>
                    Sorry, I am facing issues sending your message to Michelle.
                    Please try again or reach out to her via the email below.
                </Typography>
            </Alert>
        );
    };

    const renderSubmitError = () => {
        return (
            <Snackbar 
                open={isSubmitError} 
                autoHideDuration={6000} 
                onClose={handleSnackbarClose} 
                anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
            >
                {renderCustomisedAlert()}
            </Snackbar>
        );
    };

    return (
        <Grid justify="center" container className={classes.fullScreenHeight}>
            {atLeastScreenSmall && <SideBar copy="Product Management | Web Development | UI/UX" />}
            {isSubmitted ? (
                <Grid container item xs={11} justify="center" alignItems="center" className={`${classes.content} ${classes.textAlignCenter}`}>
                    {renderHeader("Thank you!", "I have received your email and would get back to you in the next 3 days. Have a great week ahead!")}
                </Grid>
            ) : (
                <Grid container item xs={11} justify="center" alignItems="center" className={`${classes.content} ${classes.textAlignCenter}`}>
                    <Grid container>
                        {renderHeader("Get in Touch", "Hi there, I’m Michelle. Would like to get in touch with me? Drop me a message below.")}
                        <Grid item xs={12} className={atLeastScreenSmall ? classes.mt5 : classes.mt2}>
                            <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={contactYupSchema}>
                                {formikBag => renderForm(formikBag)}
                            </Formik>
                        </Grid>
                        {isSubmitError && renderSubmitError()}
                    </Grid>
                </Grid>
            )}
        </Grid>
    );
}

export default Contact;