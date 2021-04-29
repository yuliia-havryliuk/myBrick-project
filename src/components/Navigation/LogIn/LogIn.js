import React from 'react';
import Layout from '../../Layout/Layout';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import s from './LogIn.module.css';
import { connect } from 'react-redux';
import bricksAction from '../../../redux/actions';
import fire from 'firebase';

class LogIn extends React.Component {
  state = {
    email: '',
    password: '',
  };
  login({email, password}) {
    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(user => {
        console.log('Successfully logged in!');
      })
      .catch(err => {
        console.log('Log in failed :(', err.toString());
      });
  }
  handleChangeEmail = event => {
    this.setState({ email: event.target.value });
  };
  handleChangePassword = event => {
    this.setState({ password: event.target.value });
  };
  handleSubmit = event => {
    event.preventDefault();
    this.props.signIn(this.state);
  };
  render() {
    const { authError } = this.props;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Email</label>
          <input
            type="email"
            value={this.state.email}
            onChange={this.handleChangeEmail}
            id="email"
          />
          <label>Password</label>
          <input
            type="password"
            value={this.state.password}
            onChange={this.handleChangePassword}
            id="password"
          />
          <button type="submit" onClick={()=>this.login}>
            Log In
          </button>
          <div>{authError ? <h3>Log in Error</h3> : null}</div>
        </form>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  authError: state.auth.authError,
});
const mapDispatchToProps = dispatch => ({
  signIn: credentials => dispatch(bricksAction.signIn(credentials)),
});
export default connect(mapStateToProps, mapDispatchToProps)(LogIn);

// const LogIn = ({ signIn }) => {
//   return (
//     <div className={s.container}>
//       <Formik
//         initialValues={{
//           email: '',
//           password: '',
//         }}
//         validationSchema={Yup.object({
//           email: Yup.string()
//             .email('Invalid email address')
//             .required('Required'),
//           password: Yup.string()
//             .required('Required')
//             .min(8, 'Password is too short - should be 8 characters minimum.')
//             .max(20, 'Must be 20 characters or less')
//             .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
//         })}
//         onSubmit={(values, { setSubmitting }) => {
//           console.log(values);
//           signIn(values);
//           /*setTimeout(() => {
//                         alert(JSON.stringify(values, null, 2));
//                         setSubmitting(false);
//                       }, 400);*/
//         }}
//       >
//         <Form className={s.form}>
//           <h1 className={s.title}>Log In</h1>
//
//           <label htmlFor="email">Email</label>
//           <Field
//             name="email"
//             type="email"
//             className={s.field}
//             placeholder="youremail@gmail.com"
//           />
//           <ErrorMessage name="email" component="div" className={s.error} />
//
//           <label htmlFor="password">Password</label>
//           <Field
//             name="password"
//             type="password"
//             className={s.field}
//             placeholder="* * * * * * * *"
//           />
//           <ErrorMessage name="password" component="div" className={s.error} />
//           <button type="submit" className={s.btn}>
//             Log In
//           </button>
//         </Form>
//       </Formik>
//     </div>
//   );
// };
// const mapDispatchToProps = dispatch => {
//   return {
//     signIn: credentials => dispatch(bricksAction.signIn(credentials)),
//   };
// };
// export default connect(null, mapDispatchToProps)(LogIn);
