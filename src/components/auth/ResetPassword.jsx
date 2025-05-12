import React, { useState } from 'react';
import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Alert } from 'react-bootstrap';
import FormProvider from '/src/hookForm/FormProvider.jsx';
import { RHFTextField } from '../../hookForm';

const ResetPassword = () => {
    const [sentEmail, setSentEmail] = useState("Enter your Email and instructions will be sent to you!")



    const ResetSchema = Yup.object().shape({
        email: Yup.string().required("Email is required").email("Email is invalid"),
    });

    const defaultValues = {
        email: "demo@doot.com",
    };

    const methods = useForm({
        resolver: yupResolver(ResetSchema),
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
        <>
            {!!errors.afterSubmit && (
                <Alert variant="danger">{errors.afterSubmit.message}</Alert>
            )}
            <div className="logout-page d-flex p-4" style={{ width: "100vw", height: "100%" }}>
                <div className="sidebar d-flex flex-column justify-content-center align-items-start p-5">
                    <h4 className="text-white fw-bold mb-2">
                        <i className="fa-regular fa-comment-dots"></i> Doot
                    </h4>
                    <p className="text-white-50">Responsive Bootstrap 5 Chat App</p>
                    <div className="mt-auto">
                        <img className='logout-img'
                            src='src/assets/chat-Apk-auth-img..png'
                            alt="Logout Illustration"
                        />
                    </div>
                </div>

                <div className="logout-box py-4 pt-5 h-100 d-grid justify-content-center align-items-center flex-grow-1">
                    <div className="d-flex flex-column justify-content-center align-items-center" style={{ width: "28vw" }}>
                        <h4 className="fw-semibold text-dark mb-2 fs-2 opacity-75">Reset Password</h4>
                        <p className="text-secondary mb-5">Reset Password with Doot.</p>

                        <div className="alert alert-info mt-4 mb-4" role="alert">
                            {sentEmail}
                        </div>

                        <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
                            <label htmlFor="email">Email</label>
                            <RHFTextField name="email" placeholder="Enter email" />

                            <button
                                onSubmit={() => setSentEmail("Reset link are sended to your mailbox, check there first")}
                                type="submit" className="btn btn-success w-100 py-2 mt-4">Reset</button>
                        </FormProvider>

                        <p
                            className=" mb-5 mt-5 ">
                            Remember It ?  <a href="#" className="text-success">Login</a>
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ResetPassword