import React from 'react';
import Layout from '../../Layout/Layout';
import { ErrorMessage, Field, Form, Formik, useFormik } from 'formik';
import s from './Registration.module.css';
import * as Yup from 'yup';

const Registration = () => {
  return (
    <div className={s.container}>
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          password: '',
          checkbox: false,
        }}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .max(15, 'Must be 15 characters or less')
            .required('Required'),
          lastName: Yup.string()
            .max(20, 'Must be 20 characters or less')
            .required('Required'),
          email: Yup.string()
            .email('Invalid email address')
            .required('Required'),
          password: Yup.string()
            .required('Required')
            .min(8, 'Password is too short - should be 8 characters minimum.')
            .max(20, 'Must be 20 characters or less')
            .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
          checkbox: Yup.boolean()
            .required('Required')
            .oneOf([true], 'You should accept the licence'),
        })}
        onSubmit={(values, { setSubmitting }) => {
          console.log(values);
          /*setTimeout(() => {
                  alert(JSON.stringify(values, null, 2));
                  setSubmitting(false);
                }, 400);*/
        }}
      >
        <Form className={s.form}>
          <h1 className={s.title}>Sign Up</h1>
          <label htmlFor="firstName">First Name</label>
          <Field
            name="firstName"
            type="text"
            className={s.field}
            placeholder="Mary"
          />
          <ErrorMessage
            name="firstName"
            component="div"
            className={s.error}
          />

          <label htmlFor="lastName">Last Name</label>
          <Field
            name="lastName"
            type="text"
            className={s.field}
            placeholder="Watson"
          />
          <ErrorMessage
            name="lastName"
            component="div"
            className={s.error}
          />

          <label htmlFor="email">Email</label>
          <Field
            name="email"
            type="email"
            className={s.field}
            placeholder="youremail@gmail.com"
          />
          <ErrorMessage name="email" component="div" className={s.error} />

          <label htmlFor="password">Password</label>
          <Field
            name="password"
            type="password"
            className={s.field}
            placeholder="* * * * * * * *"
          />
          <ErrorMessage
            name="password"
            component="div"
            className={s.error}
          />
          <label htmlFor="checkbox" className={s.acceptLicence}>
            <Field type="checkbox" name="checkbox" id="checkbox" />
            <p>
              I agree with{' '}
              <a href="https://www.termsfeed.com/blog/sample-terms-and-conditions-template/">
                terms and conditions
              </a>
            </p>
          </label>
          <ErrorMessage
            name="checkbox"
            component="div"
            className={s.error}
          />
          <button type="submit" className={s.btn}>
            Sign Up
          </button>
        </Form>
      </Formik>
    </div>
  );
};
export default Registration;
