import React, { useState } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';
import useMediaQuery from '@material-ui/core/useMediaQuery';
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
    primaryColor: {
        color: theme.palette.primary.main
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

    const initialValues = { 
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
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
                'Mobile': values.phone,
                'Subject': values.subject,
                'Message': values.message
            });
            setIsSubmitted(true);
        } catch(err) {
            console.log("ERROR!", err);
        }
    };

    const contactYupSchema = yup.object().shape({
        firstName: yup.string()
            .min(1, 'Too Short!')
            .max(50, 'Too Long!')
            .required('First name is required'),
        lastName: yup.string()
            .min(2, 'Too Short!')
            .max(50, 'Too Long!')
            .notRequired()
            .nullable(),
        email: yup.string().email('Invalid email').required('Email is required'),
        phone: yup.string().notRequired().nullable(),
        subject: yup.string()
            .min(1, 'Too Short!')
            .max(50, 'Too Long!')
            .required('Subject is required'),
        message: yup.string()
            .min(1, 'Too Short!')
            .max(500, 'Too Long!')
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

    const renderForm = formikBag => {
        const { touched, errors } = formikBag;
        return (
            <Form>
                <Grid container justify="center" alignItems="center">
                    <Grid container item xs={11} sm={10} lg={8}>
                        <Grid container item justify="space-between">
                            <Grid item xs={12} sm={6} className={atLeastScreenSmall && classes.pr1}>
                                <FormElement 
                                    name="firstName" 
                                    type="text" 
                                    label="First Name" 
                                    placeholder="Michelle"
                                    hasError={touched.firstName && errors.firstName} 
                                    required 
                                />
                            </Grid>
                            <Grid item xs={12} sm={6} className={atLeastScreenSmall && classes.pl1}>
                                <FormElement 
                                    name="lastName" 
                                    type="text" 
                                    label="Last Name" 
                                    placeholder="Yong"
                                />
                            </Grid>
                        </Grid>
                        <Grid container item justify="space-between">
                            <Grid item xs={12} sm={6} className={atLeastScreenSmall && classes.pr1}>
                                <FormElement 
                                    name="email" 
                                    type="email" 
                                    label="Email" 
                                    placeholder="themichelleyong@gmail.com"
                                    hasError={touched.email && errors.email} 
                                    required 
                                />
                            </Grid>
                            <Grid item xs={12} sm={6} className={atLeastScreenSmall && classes.pl1}>
                                <FormElement name="phone" label="Phone" />
                            </Grid>
                        </Grid>
                        <Grid container item>
                            <Grid item xs={12}>
                                <FormElement 
                                    name="subject" 
                                    type="text" 
                                    label="Subject"
                                    hasError={touched.subject && errors.subject} 
                                    required 
                                />
                            </Grid>
                        </Grid>
                        <Grid container item xs={12}>
                            <Grid item xs={12}>
                                <FormElement   
                                    name="message" 
                                    type="text" 
                                    label="Message" 
                                    control="textarea" 
                                    placeholder="Leave me a message ♡"
                                    hasError={touched.message && errors.message} 
                                    required 
                                />
                            </Grid>
                        </Grid>
                        <Grid container item justify={atLeastScreenSmall ? "flex-end": "center"} className={`${classes.mt2} ${classes.mb5}`}>
                            <MyButton content="Submit" type="submit" disabled={submitting} />
                        </Grid>
                    </Grid>
                </Grid>
            </Form>
        );
    };

    return (
        <Grid justify="center" container className={classes.fullScreenHeight}>
            {atLeastScreenSmall && <SideBar copy="Product Management | Tech | Blockchain | UI/UX" />}
            {isSubmitted ? (
                <Grid container item xs={11} justify="center" alignItems="center" className={`${classes.content} ${classes.textAlignCenter}`}>
                    {renderHeader("Thank you!", "I have received your submission and would do my best to get back to you in the next 3 days. Have a great week ahead!")}
                </Grid>
            ) : (
                <Grid container item xs={11} justify="center" alignItems="center" className={`${classes.content} ${classes.textAlignCenter}`}>
                    <Grid container>
                        {renderHeader("Get in Touch", "Hi there, I’m Michelle. Would like to get in touch with me? Simply fill up the form below.")}
                        <Grid item xs={12} className={atLeastScreenSmall ? classes.mt5 : classes.mt2}>
                            <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={contactYupSchema}>
                                {formikBag => renderForm(formikBag)}
                            </Formik>
                        </Grid>
                    </Grid>
                </Grid>
            )}
        </Grid>
    );
}

export default Contact;