import React from 'react';
import FormProvider from '/src/hookForm/FormProvider.jsx'
import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Alert } from 'react-bootstrap';
import { RHFTextField } from '../hookForm';

const Login = () => {
    const [showPassword, setShowPassword] = React.useState(false);
    const LoginSchema = Yup.object().shape({
        email: Yup.string().required("Email is required").email("Email is invalid"),
        password: Yup.string().required("Password is required").min(6, "Password must be at least 6 characters"),
    });

    const defaultValues = {
        email: "demo@doot.com",
        password: "demo1234",
    };

    const methods = useForm({
        resolver: yupResolver(LoginSchema),
        defaultValues,
    });

    const { handleSubmit, reset, setError, formState: { errors, isSubmitting, isSubmitSuccessful } } = methods;

    const onSubmit = async (data) => {
        try {
            // submit data to backend

        } catch (error) {
            console.log(error);
            reset();
            setError("afterSubmit", { ...error, message: error.message, });

        }
    }

    return (
        <>
            {!!errors.afterSubmit && <Alert type="danger" message="Something went wrong!" />
            }
            <div className="logout-page d-flex p-4" style={{ width: "100vw", height: "100%" }}>
                <div className="sidebar d-flex flex-column justify-content-center align-items-start p-4">
                    <h3 className="text-white fw-bold mb-2 fw-semibold  ">
                        <i className="bx bxs-message-alt-detail align-middle text-white h3 mb-1 me-2"></i>
                        Doot</h3>
                    <p className="text-white-50">Responsive Bootstrap 5 Chat App</p>
                    <div className="mt-auto">
                        <img className='logout-img'
                            src='src\assets\chat-Apk-auth-img..png'
                            alt="Logout Illustration"
                        />

                    </div>
                </div>
                <div className="logout-box py-4 pt-5 h-100 d-grid justify-content-center align-items-center flex-grow-1">
                    <div className="d-flex flex-column  justify-content-center align-items-center" style={{ width: "30vw" }}>
                        <h4 className=" mb-2 fs-3 fw-semibold text-dark opacity-75 ">Welcome Back!</h4>
                        <p className="text-secondary mb-5" style={{ fontFamily: "sans-serif" }}>Sign in to continue to Doot.</p>
                        <FormProvider
                            methods={methods}
                            onSubmit={handleSubmit(onSubmit)}
                            className="d-flex flex-column text-start w-100 p-3 gap-3">
                            <label htmlFor="username" className=''>Username</label>
                            {/* <input type="email" placeholder="Enter Username" className="form-control shadow-none" /> */}
                            <RHFTextField name="email" label="Email address" />
                            <div className='d-flex  justify-content-between '>
                                <label htmlFor="username">Password</label>
                                <a className=' text-decoration-none text-secondary' style={{ fontSize: "small" }} href="">Forgot Password?</a>

                            </div>
                            <div className="position-relative w-100">
                                <RHFTextField
                                    name="password"
                                    type={showPassword ? "text" : "password"}
                                    className="form-control pe-5"
                                />
                                <i
                                    className={`fa-solid ${showPassword ? "fa-eye-slash" : "fa-eye"} position-absolute end-0 top-50 translate-middle-y me-3`}
                                    style={{ cursor: "pointer" }}
                                    onClick={() => setShowPassword(!showPassword)}
                                />
                            </div>
                            {/* <input type="password" placeholder="Password" className="shadow-none form-control" /> */}
                            <div className='d-flex'>
                                <input type="checkbox" className='form-check-input me-2' />
                                <label htmlFor="username">Remember me</label>
                            </div>
                            <button type="submit" className="btn btn-success py-2">Log In</button>
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
                        <p className=" mt-4 mb-5">Don't have an account? <a href="#" className="text-primary text-success pointer">Register</a></p>
                    </div>
                </div>
            </div >
        </>
    );
};

export default Login;
