import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';
// import axios from 'axios';
import { Form, Formik } from 'formik';
// import slapform from 'slapform';
import * as yup from 'yup';
import { db } from '../firebase.js';
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
        height: "90vh"
    },
    textAlignCenter: {
        textAlign: "center"
    },
    primaryColor: {
        color: theme.palette.primary.main
    },
    mt2: {
        marginTop: theme.spacing(2),
    },
    mt3: {
        marginTop: theme.spacing(3),
    },
    negativeMt3: {
        marginTop: -theme.spacing(3),
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
    const [isSubmitted, setIsSubmitted] = useState(false);

    const initialValues = { 
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
    };

    const onSubmit = (values) => {
        db.collection("contacts")
            .add(values)
            .then(() => {
                setIsSubmitted(true);
            })
            .catch(err => {
                // console.log('error', err);
            });
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
        return (
            <Form>
                <Grid container justify="center" alignItems="center" className={classes.negativeMt3}>
                    <Grid container item xs={11} sm={10} lg={8}>
                        <Grid container item justify="space-between">
                            <Grid item xs={12} sm={6} className={classes.pr1}>
                                <FormElement name="firstName" type="text" label="First Name" required />
                            </Grid>
                            {/*formikBag.errors.firstName && <div id="firstNameError">{formikBag.errors.firstName}</div>*/}
                            <Grid item xs={12} sm={6} className={classes.pl1}>
                                <FormElement name="lastName" type="text" label="Last Name" />
                            </Grid>
                        </Grid>
                        <Grid container item justify="space-between">
                            <Grid item xs={12} sm={6} className={classes.pr1}>
                                <FormElement name="email" type="email" label="Email" required />
                            </Grid>
                            <Grid item xs={12} sm={6} className={classes.pl1}>
                                <FormElement name="phone" label="Phone" />
                            </Grid>
                        </Grid>
                        <Grid container item>
                            <Grid item xs={12}>
                                <FormElement name="subject" type="text" label="Subject" required />
                            </Grid>
                        </Grid>
                        <Grid container item xs={12}>
                            <Grid item xs={12}>
                                <FormElement name="message" type="text" label="Message" control="textarea" required />
                            </Grid>
                        </Grid>
                        <Grid container item justify="flex-end" className={classes.mt2}>
                            <MyButton content="Submit" type="submit" />
                        </Grid>
                    </Grid>
                </Grid>
            </Form>
        );
    };

    return (
        <Grid container className={classes.fullScreenHeight}>
            <SideBar copy="Currently seeking internship opportunities as a Product Manager or UI/UX Designer" />
            {isSubmitted ? (
                <Grid container xs={11} justify="center" alignItems="center" className={`${classes.content} ${classes.textAlignCenter}`}>
                    {renderHeader("Thank you!", "I would do my best to get back to you in the next 24 hours. Have a great day!")}
                </Grid>
            ) : (
                <Grid container xs={11} justify="center" alignItems="center" className={`${classes.content} ${classes.textAlignCenter}`}>
                    {renderHeader("Get in Touch", "Hi there, I’m Michelle. Would like to get in touch with me? Simply fill up the form below.")}
                    <Grid item xs={12}>
                        <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={contactYupSchema}>
                            {formikBag => renderForm(formikBag)}
                        </Formik>
                    </Grid>
                </Grid>
            )}
        </Grid>
    );
}

export default Contact;