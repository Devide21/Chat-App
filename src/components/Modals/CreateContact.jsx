import React from 'react';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import FormProvider from '/src/hookForm/FormProvider.jsx';
import { RHFTextField } from '../../hookForm';

function CreateContact({ show, setShow }) {
  const NewCreateContact = Yup.object().shape({
    email: Yup.string().email("Email must be a valid email").required("Email is required"),
    name: Yup.string().required("Name is required"),
    invitationMessage: Yup.string().required("Invitation message is required")
  });

  const defaultValues = {
    email: '',
    name: '',
    invitationMessage: '',
  };

  const methods = useForm({
    resolver: yupResolver(NewCreateContact),
    defaultValues,
  });

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = methods;

  const onSubmit = async (data) => {
    try {
      console.log("Data", data);
      setShow(false);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={`modal shadow fade ${show ? "show d-block" : ""}`} style={{ background: "#00000036" }} tabIndex="-1">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content rounded-3" style={{ height: "460px" }}>
          <div className="modal-header border-0 bg-success text-white rounded-top">
            <h5 className="modal-title fs-6">Create Contact</h5>
            <button type="button" className="btn-close" onClick={() => setShow(false)}></button>
          </div>

          <div className="modal-body px-3 pt-3" style={{ height: "480px", overflowY: "auto" }}>
            <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
              <div className="d-flex flex-column text-start small gap-2 ">
                <label>Email</label>
                <RHFTextField name="email" label="Email" placeholder="Enter Email" />
              </div>

              <div className="d-flex flex-column text-start small gap-2 ">
                <label>Name</label>
                <RHFTextField name="name" label="Name" placeholder="Enter Name" />
              </div>

              <div className="d-flex flex-column text-start small gap-2 bottom-border">
                <label>Invitation Message</label>
                <textarea
                  {...register("invitationMessage")}
                  rows={4}
                  className={`form-control ${errors.invitationMessage ? 'is-invalid' : ''}`}
                  placeholder="Enter Message"
                />
                {errors.invitationMessage && (
                  <small className="text-danger">{errors.invitationMessage.message}</small>
                )}
              </div>

              <div className='d-flex justify-content-end  w-100 pt-2'>
                <button className="btn btn-white text-success" type="button" onClick={() => setShow(false)}>Close</button>
                <button type="submit" className="btn btn-success opacity-75 ms-2">Invite</button>
              </div>
            </FormProvider>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateContact;
