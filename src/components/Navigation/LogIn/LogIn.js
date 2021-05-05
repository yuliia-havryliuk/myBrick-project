import React from 'react';
import Layout from '../../Layout/Layout';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import s from './LogIn.module.css';
import { connect } from 'react-redux';
import { signIn } from '../../../redux/actions/authActions';
import { Redirect } from 'react-router-dom';

const LogIn = ({ signIn, authError, auth }) => {
  if (auth.uid) return <Redirect to="/" />;
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
        onSubmit={values => {
          console.log(values);
          signIn(values);
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
          <ErrorMessage name="password" component="div" className={s.error} />
          {authError ? <p className={s.error}>{authError}</p> : null}
          <button type="submit" className={s.btn}>
            Log In
          </button>
        </Form>
      </Formik>
    </div>
  );
};
const mapStateToProps = state => ({
  authError: state.auth.auth.authErrorSignIn,
  auth: state.firebase.auth,
});
const mapDispatchToProps = dispatch => {
  return {
    signIn: credentials => dispatch(signIn(credentials)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(LogIn);
// class LogIn extends React.Component {
//   state = {
//     email: '',
//     password: '',
//   };
// login({email, password}) {
//   fire
//     .auth()
//     .signInWithEmailAndPassword(email, password)
//     .then(user => {
//       console.log('Successfully logged in!');
//     })
//     .catch(err => {
//       console.log('Log in failed :(', err.toString());
//     });
// }
//   handleChangeEmail = event => {
//     this.setState({ email: event.target.value });
//   };
//   handleChangePassword = event => {
//     this.setState({ password: event.target.value });
//   };
//   handleSubmit = event => {
//     event.preventDefault();
//     console.log(this.state)
//     this.props.signIn(this.state);
//   };
//   render() {
//     const { authError } = this.props;
//     return (
//       <div>
//         <form onSubmit={this.handleSubmit}>
//           <label>Email</label>
//           <input
//             type="email"
//             value={this.state.email}
//             onChange={this.handleChangeEmail}
//             id="email"
//           />
//           <label>Password</label>
//           <input
//             type="password"
//             value={this.state.password}
//             onChange={this.handleChangePassword}
//             id="password"
//           />
//           <button type="submit" onClick={()=>this.login}>
//             Log In
//           </button>
//           {authError && <h3>Log in Error</h3>}
//         </form>
//       </div>
//     );
//   }
// }
// const mapStateToProps = state => ({
//   authError: state.auth.authError,
// });
// const mapDispatchToProps = dispatch => ({
//   signIn: credentials => dispatch(signIn(credentials)),
// });
// export default connect(mapStateToProps, mapDispatchToProps)(LogIn);
