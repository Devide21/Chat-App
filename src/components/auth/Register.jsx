import React from 'react';
import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Alert } from 'react-bootstrap';
import FormProvider from '/src/hookForm/FormProvider.jsx';
import { RHFTextField } from '../../hookForm';


const Register = () => {

  const [showPassword, setShowPassword] = React.useState(false);

  const RegisterSchema = Yup.object().shape({
    email: Yup.string().required("Email is required").email("Email is invalid"),
    username: Yup.string().required("Username is required"),
    password: Yup.string().required("Password is required").min(6, "Password must be at least 6 characters"),
  });

  const defaultValues = {
    email: "demo@doot.com",
    username: "demo",
    password: "demo1234",
  };

  const methods = useForm({
    resolver: yupResolver(RegisterSchema),
    defaultValues,
  });

  const {
    handleSubmit,
    reset,
    setError,
    formState: { errors }
  } = methods;

  const onSubmit = async (data) => {
    try {
      // Submit to backend
    } catch (error) {
      console.error(error);
      reset();
      setError("afterSubmit", {
        type: 'manual',
        message: error.message || "Something went wrong",
      });
    }
  };


  return (
    <div className="logout-page d-flex p-4" style={{ width: "100vw", height: "100%" }}>
      <div className="sidebar d-flex flex-column justify-content-center align-items-start p-5">
        <h4 className="text-white fw-bold mb-2">
          <i className="fa-regular fa-comment-dots"></i> Doot
        </h4>
        <p className="text-white-50">Responsive Bootstrap 5 Chat App</p>
        <div className="mt-auto">
          <img className='logout-img'
            src='src\assets\chat-Apk-auth-img..png'
            alt="Logout Illustration"
          />

        </div>
      </div>
      <div className="logout-box py-4 pt-5 h-100 d-grid justify-content-center align-items-center flex-grow-1">
        <div className="d-flex flex-column  justify-content-center align-items-center" style={{ width: "31vw" }}>
          <h4 className="fw-semibold mb-2 fs-3 opacity-75">Register Account</h4>
          <p className="text-secondary mb-4 " style={{ fontFamily: "sans-serif" }}>Get your free Doot account now.</p>
          <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="email">Email</label>
            <RHFTextField name="email" placeholder="Enter email" />

            <label htmlFor="username">Username</label>
            <RHFTextField name="username" placeholder="Enter Username" />

            <div className='d-flex justify-content-between '>
              <label htmlFor="password">Password</label>
              {/* <a className='text-decoration-none text-secondary' style={{ fontSize: "small" }} href="#">
                Forgot Password?
              </a> */}
            </div>

            <RHFTextField
              name="password"
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              InputProps={{
                endAdornment: (
                  <i
                    className={`fa-solid ${showPassword ? "fa-eye-slash" : "fa-eye"}`}
                    onClick={() => setShowPassword(!showPassword)}
                  ></i>
                )
              }}
            />
            <p className=" mt-3 mb-3">By registering you agree to the Doot <span href="#" className="text-primary text-success pointer">Terms of Use</span></p>


            <button type="submit" className="btn btn-success w-100 py-2">Register</button>

            <div className='d-flex justify-content-center mt-4'>
              <div className='signup-ruler'></div>
              <div className='w-100 text-center'><p>Sign up with</p></div>
              <div className='signup-ruler'></div>
            </div>

            <div className='d-flex gap-3'>
              <div className='bg-body-secondary rounded-2 py-3 w-100 text-center py-2  px-4' style={{ cursor: "pointer" }}>
                <i className="mdi mdi-facebook text-indigo"></i>
              </div>
              <div className='bg-body-secondary rounded-2 py-3  w-100 text-center py-2  px-4' style={{ cursor: "pointer" }}>
                <i className="mdi mdi-twitter text-info"></i>
              </div>
              <div className='bg-body-secondary rounded-2  py-3 w-100 text-center py-2  px-4' style={{ cursor: "pointer" }}>
                <i className="mdi mdi-google text-danger"></i>
              </div>
            </div>
          </FormProvider>
          <p className=" mt-3 mb-3">Already have an account ?  <a href="#" className="text-primary text-success pointer">Login</a></p>
        </div>
      </div>
    </div >
  );
};

export default Register;
