import React from 'react';
import Layout from '../../Layout/Layout';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import s from './LogIn.module.css';

const LogIn = () => {
  return (
    <div className={s.container}>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validationSchema={Yup.object({
          email: Yup.string()
            .email('Invalid email address')
            .required('Required'),
          password: Yup.string()
            .required('Required')
            .min(8, 'Password is too short - should be 8 characters minimum.')
            .max(20, 'Must be 20 characters or less')
            .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
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
          <h1 className={s.title}>Log In</h1>

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
          <button type="submit" className={s.btn}>
            Log In
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default LogIn;
