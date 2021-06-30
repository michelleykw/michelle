import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';
import { Field, Form, Formik } from 'formik';
import * as yup from 'yup';
import ColoredHeader from '../components/ColoredHeader';
import MyButton from '../components/MyButton';
import SideBar from '../components/SideBar';

const useStyles = makeStyles(theme => ({
    content: {
        marginLeft: "1.5%",
        marginRight: "1.83%"
    },
    fullScreenHeight: {
        height: "76vh"
    },
    textAlignCenter: {
        textAlign: "center"
    },
    primaryColor: {
        color: theme.palette.primary.main
    },
    my2: {
        marginBottom: theme.spacing(2),
        marginTop: theme.spacing(2)
    }
}));

function Contact() {
    const classes = useStyles();
    const [isSubmitted, setIsSubmitted] = useState(false);

    const initialValues = { 
        first_name: null,
        last_name: null,
        email: null,
        phone: null,
        subject: null,
        message: null
    };

    const onSubmit = (values, actions) => {
        console.log('onSubmit', values, actions);
        setIsSubmitted(true);
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
        phone: yup.number().notRequired().nullable(),
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
            <Grid item xs={12} className={classes.my2}>
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
                <Field name="firstName" type="text" placeholder="First Name" />
                {formikBag.errors.firstName && <div id="firstNameError">{formikBag.errors.firstName}</div>}
                <Field name="lastName" type="text" placeholder="Last Name" />
                <Field name="email" type="email" placeholder="Email" />
                <Field name="phone" />
                <Field name="subject" type="text" placeholder="Subject" />
                <Field name="message" type="text" placeholder="Message" component="textarea" />
                <MyButton content="Submit" type="submit" />
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
                <Grid container xs={11} className={`${classes.content} ${classes.textAlignCenter}`}>
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