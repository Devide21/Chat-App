import React from 'react';
import { contacts as allContacts } from "../sidebar/contacts";
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import FormProvider from '/src/hookForm/FormProvider.jsx';
import RHFAutoComplete from '../../hookForm/RHFAutoComplete';

function AddMessage({ show, setShow, onSelectContact }) {
  const individualContacts = allContacts.filter(c => !c.isGroup);

  const DirectMessageSchema = Yup.object().shape({
    user: Yup.mixed().required("User is required"),
  });

  const defaultValues = {
    user: null,
  };

  const methods = useForm({
    resolver: yupResolver(DirectMessageSchema),
    defaultValues,
  });

  const { handleSubmit } = methods;
  

  const onSubmit = async (data) => {
    try {
      const newContact = {
        id: Date.now(), // Or use uuid
        name: data.user.name,
        avatar: data.user.avatar || null,
        status: data.user.status || null,
        isFavourite: false,
        isGroup: false,
        isArchived: false,
        isDirectMessage: true,
      };

      // Send to parent to update its contact state
      onSelectContact(newContact);
      setShow(false);
    } catch (error) {
      console.error("Error adding contact:", error);
    }
  };

  return (
    <div className={`modal shadow fade ${show ? "show d-block" : ""}`}
      style={{ background: "#00000036" }}
      tabIndex="-1">
      <div className="modal-dialog modal-dialog-centered">
        <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
          <div className="modal-content rounded-3" style={{ height: "400px" }}>
            <div className="modal-header bg-success text-white rounded-top">
              <h5 className="modal-title">Select Contact</h5>
              <button
                type="button"
                className="btn-close"
                onClick={() => setShow(false)}
              ></button>
            </div>

            <div className="modal-body px-3 pt-3">
              <RHFAutoComplete
                name="user"
                label="Search Contact"
                options={individualContacts}
                getOptionLabel={(option) => option.name}
                isOptionEqualToValue={(option, value) => option.id === value.id}
                renderOption={(props, option) => (
                  <li {...props} key={option.id}>
                    {option.name}
                  </li>
                )}
              />
            </div>

            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-light text-success"
                onClick={() => setShow(false)}
              >
                Cancel
              </button>
              <button type="submit" className="btn btn-success">
                <i className="bx bxs-send"></i>
              </button>
            </div>
          </div>
        </FormProvider>
      </div>
    </div>
  );
}

export default AddMessage;
