import React, { useState } from 'react';
import { contacts as allContacts } from "../sidebar/contacts";
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import FormProvider from '/src/hookForm/FormProvider.jsx';
import { RHFTextField } from '../../hookForm';
import RHFAutoComplete from '../../hookForm/RHFAutoComplete';

function AddGroup({ show, setShow, onSelectGroup }) {
  const [description, setDescription] = useState("");

  const NewGroupSchema = Yup.object().shape({
    title: Yup.string().required("Title is required"),
    members: Yup.array().min(2, "Select at least 2 members"),
  });

  const defaultValues = {
    title: '',
    members: [],
  };

  const methods = useForm({
    resolver: yupResolver(NewGroupSchema),
    defaultValues,
  });

  const {
    handleSubmit,
  } = methods;


  const onSubmit = async (data) => {
    try {
      const newContact = {
        id: allContacts.length + 1,
        name: data.title,
        avatar: null,
        status: null,
        isFavourite: false,
        isGroup: true,
        isArchived: false,
        isDirectMessage: false,
        description: data.description || '',
        members: data.members || [],
      };

      allContacts.push(newContact);
      console.log("Updated contacts:", allContacts);

      setShow(false);
    } catch (error) {
      console.error(error);
    }
  };


  return (
    <div className={`modal shadow fade ${show ? "show d-block" : ""}`} style={{ background: "#00000036" }} tabIndex="-1">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content rounded-3" style={{ height: "485px" }}>
          <div className="modal-header border-0 bg-success text-white rounded-top">
            <h5 className="modal-title fs-6">Create New Group</h5>
            <button type="button" className="btn-close" onClick={() => setShow(false)}></button>
          </div>

          <div className="modal-body px-3 pt-3" style={{ height: "480px", overflowY: "auto" }}>
            <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
              <div className=" d-flex flex-column text-start">
                <label>Group Name</label>
                <RHFTextField name="title" label="Title" placeholder="Enter title" />
              </div>
              <div className="mb-2 d-flex flex-column text-start">
                <label className='mb-2'>Group Members</label>
                <RHFAutoComplete
                  name="members"
                  label="Members"
                  multiple
                  options={allContacts.filter(c => !c.isGroup)}
                  getOptionLabel={(option) => option.name}
                  isOptionEqualToValue={(option, value) => option.id === value.id}
                />
              </div>
              <div className="mb-3  d-flex flex-column text-start">
                <label>Description</label>
                <textarea
                  type="text"
                  rows={5}
                  className="form-control-sm "
                  placeholder="Enter Group Description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
              <div className='d-flex justify-content-end'>
                <button className="btn btn-white text-success" type="button" onClick={() => setShow(false)}>Close</button>
                <button type="submit" className="btn btn-success opacity-75 ms-2">Create Group</button>
              </div>
            </FormProvider>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddGroup;
