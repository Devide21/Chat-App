import React, { useCallback, useState } from 'react';
import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import FormProvider from '/src/hookForm/FormProvider.jsx';
import { RHFTextField } from '../../hookForm';

function Settings() {

  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState('src/assets/doot-prfile-img.jpg');
  const [profileImg, setProfileImg] = useState('src/assets/adam-zampa-avtar.jpg');
  const [isEdit, setIsEdit] = useState(false);
  const [status, setStatus] = useState('Active');
  const [personalInfo, setPersonalInfo] = useState({
    name: 'Adam Zampa',
    email: 'adc@123.com',
    location: 'California, USA'
  });

  const [privacy, setPrivacy] = useState({
    lastSeen: 'Everyone',
    readReceipts: true,
    profilePhoto: 'Everyone',
    status: 'Everyone',
    groups: 'Everyone'
  });

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
    }
  };


  const handleProfileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfileImg(imageUrl);
    }
  };


  const statusColorMap = {
    Active: '',
    Away: 'bg-warning',
    DoNotDisturb: 'bg-danger',
  };

  const handleStatusChange = (selectedStatus) => {
    setStatus(selectedStatus);
  };


  const handleSelectChange = (e) => {
    const { name, value } = e.target;
    setPrivacy((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSwitchChange = (e) => {
    const { name, checked } = e.target;
    setPrivacy((prev) => ({
      ...prev,
      [name]: checked
    }));
  };



  const handleSubmit = (e) => {
    e.preventDefault();
    setIsEdit(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPersonalInfo((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const Editsettings = () => {

    const settingSchema = Yup.object().shape({
      name: Yup.string().required("Name is required").min(3, "Name must be at least 3 characters"),
      email: Yup.string().required("Email is required").email("Email is invalid"),
      location: Yup.string().notRequired(),
      avatarUrl: Yup.mixed().required("Avatar is required").nullable(true),
    });

    const defaultValues = {
      name: personalInfo.name || "",
      email: personalInfo.email || "",
      location: personalInfo.location || "",
      avatarUrl: "",
    };

    const methods = useForm({
      resolver: yupResolver(settingSchema),
      defaultValues,
    });

    const {
      handleSubmit,
      reset,
      watch,
      control,
      setValue,
      setError,
      formState: { errors, isSubmitting, isSubmitSuccessful },
    } = methods;

    const values = watch();
    const handleDrop = useCallback((acceptedFiles) => {

      const file = acceptedFiles[0];

      const newFile = Object.assign(file, {
        preview: URL.createObjectURL(file)
      })

      if (file) {
        setValue("avatarUrl", newFile, { shouldValidate: true })
      }


    }, [setValue]);

    const onSubmit = async (data) => {
      try {
        // Submit to backend
        setPersonalInfo((prev) => ({
          ...prev,
          name: data.name,
          email: data.email,
          location: data.location,
        }));
        setIsEdit(false);
        console.log("Data", data);
      } catch (error) {
        console.error(error);
        reset();
        setError("afterSubmit", {
          ...error,
          // type: 'manual',
          message: error.message || "Something went wrong",
        });
      }
    };
    return (
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <RHFTextField name="name" placeholder="Enter Name" />
        <RHFTextField name="email" placeholder="Enter email" />
        <RHFTextField name="location" placeholder="Enter Location" />

        <button
          onSubmit={() => setPersonalInfo()}
          type="submit" className="btn btn-success w-100 py-2 mt-4">Submit</button>
      </FormProvider>
    )
  }


  return (
    <div className="" style={{ width: '300px', height: '100vh', }}>
      <div className="position-sticky border-bottom border-tertiary top-0 z-3   pb-4">
        <div className="text-center position-relative">
          <div className='d-flex position-absolute text-white justify-content-between w-100'>
            <p className='fs-5 p-2'>Settings</p>
            <div className=' rounded-circle edit-icon mt-2 me-3'>
              <input
                type="file"
                id="file"
                className="d-none"
                onChange={handleFileChange}
                accept="image/*"
              />
              <label htmlFor="file" className="bx bxs-pencil rounded-circle mt-1 p-2 pointer"></label>
            </div>
          </div>
          <img
            src={previewUrl}
            className="w-100"
            style={{ height: '160px', objectFit: 'cover' }}
            alt="header"
          />

          <div className=''>
            <div className='rounded-circle settings-profile mt-2 me-3'>
              <input
                type="file"
                id="profile"
                className="d-none"
                accept="image/*"
                onChange={handleProfileChange}
              />
              <label htmlFor='profile' className="fa-solid fa-camera rounded-circle p-2 mt-1"></label>
            </div>

            <img
              src={profileImg}
              className="rounded-circle position-absolute profile-img"
              style={{
                top: '110px',
                left: '50%',
                transform: 'translateX(-50%)',
                height: '85px',
                width: '85px',

              }}
              alt="avatar"
            />
          </div>
        </div>
        <div className=" mt-2">
          <h6 className="mb-0 fw-bold">{personalInfo.name}</h6>
          <div className="dropdown-center">
            <button
              className="btn btn-white dropdown-toggle text-secondary border-0"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <div className={`active-setting-btn ${statusColorMap[status]}`}></div>
              {status}
            </button>

            <ul className="dropdown-menu shadow border-0">
              {Object.keys(statusColorMap).map((key) => (
                <li key={key}>
                  <button
                    className="dropdown-item d-flex align-items-center gap-2"
                    onClick={() => handleStatusChange(key)}
                  >
                    <div className={`active-setting ${statusColorMap[key]}`}></div>
                    {key}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div style={{ overflowY: "auto", height: "50vh" }}>
        <div className="accordion rounde-0 " id="accordionExample">
          <div className="accordion-item rounded-0 border-0  ">
            <h2 className="accordion-header rounded-0">
              <button className="accordion-button rounde-0 " type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                <small><i className="fa-solid fa-user me-3"></i>
                  Personal Info</small>
              </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse " data-bs-parent="#accordionExample">
              <div className="accordion-body">
                <div className='d-flex justify-content-between'>
                  {isEdit === true ?
                    (
                      <>
                        <Editsettings />
                      </>
                      // <form className='text-start'
                      //   onSubmit={handleSubmit}>
                      //   <small className="mb-2 text-start">
                      //     <label htmlFor="exampleInputEmail1" className="form-label ">Name</label>
                      //     <input type="text"
                      //       className="form-control text-start"
                      //       id="name"
                      //       name="name"
                      //       value={personalInfo.name}
                      //       onChange={handleChange}
                      //     />

                      //   </small>
                      //   <small className="mb-2 text-start">
                      //     <label className="form-label">Email</label>
                      //     <input type="email"
                      //       className="form-control"
                      //       id="email"
                      //       name="email"
                      //       value={personalInfo.email}
                      //       onChange={handleChange}

                      //     />
                      //   </small>
                      //   <small className="mb-2 text-start">
                      //     <label className="form-label">Location</label>
                      //     <input type="text"
                      //       className="form-control"
                      //       id="location"
                      //       name="location"
                      //       value={personalInfo.location}
                      //       onChange={handleChange}

                      //     />
                      //   </small>
                      //   <button type="submit"
                      //     className="btn btn-success mt-2">Submit</button>
                      // </form>

                    ) : (
                      <div className='d-flex justify-content-between w-100'>
                        <div className='d-grid'>
                          <small className='text-secondary text-start'>Name</small>
                          <small className='text-start'>{personalInfo.name}</small>
                          <small className='text-secondary text-start mt-3'>Email</small>
                          <small className='text-start'>{personalInfo.email}</small>
                          <small className='text-secondary text-start mt-3'>Location</small>
                          <small className='text-start'>{personalInfo.location}</small>
                        </div>
                        <div>
                          <button
                            onClick={() => setIsEdit(true)}
                            className="btn btn-sm rounded-1 add-btn">
                            <i className="bx bxs-pencil align-middle"></i>
                          </button>
                        </div>

                      </div>
                    )}
                </div>
              </div>
            </div>
          </div>
          <div className="accordion-item rounded-0 border-0 border-top ">
            <h2 className="accordion-header">
              <button className="accordion-button collapsed " type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                <small>
                  <i className="fa-solid fa-circle-half-stroke me-3"></i>
                  Themes</small>
              </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
              <div className="accordion-body text-start">
                <small className='text-secondary '>Choose Theme Color :</small>
                <div className='d-flex mb-4'>
                  <div className='rounded-circle bg-success me-2 mt-2 color-palate'></div>
                  <div className='rounded-circle bg-primary me-2 mt-2 color-palate'></div>
                  <div className='rounded-circle bg-danger me-2 mt-2 color-palate'></div>
                  <div className='rounded-circle bg-info me-2 mt-2 color-palate'></div>
                  <div className='rounded-circle bg-secondary me-2 mt-2 color-palate'></div>
                  <div className='rounded-circle bg-danger-subtle me-2 mt-2 color-palate'></div>
                </div>
                <small className='text-secondary '>Choose Theme Image :</small>
                <div className='d-flex justify-content-between'>
                  <div className='rounded-circle  border mt-2 color-palate'></div>
                  <div className='rounded-circle  border mt-2 color-palate'></div>
                  <div className='rounded-circle  border mt-2 color-palate'></div>
                  <div className='rounded-circle  border mt-2 color-palate'></div>
                  <div className='rounded-circle  border mt-2 color-palate'></div>
                  <div className='rounded-circle  border mt-2 color-palate'></div>
                  <div className='rounded-circle  border mt-2 color-palate'></div>
                </div>
                <div className='d-flex'>
                  <div className='rounded-circle  border me-2 mt-2 color-palate'></div>
                  <div className='rounded-circle  border me-2 mt-2 color-palate'></div>
                </div>
              </div>
            </div>
          </div>
          <div className="accordion-item rounded-0 border-0 border-top ">
            <h2 className="accordion-header">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                <small className=''>
                  <i className="fa-solid fa-lock me-3"></i>
                  Privacy
                </small>
              </button>
            </h2>

            <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                {/* Profile Photo */}
                <div className='d-flex justify-content-between border-bottom py-3'>
                  <small className='fw-semibold text-secondary mt-2'>Profile Photo</small>
                  <small>
                    <select
                      className="form-select text-secondary"
                      name="profilePhoto"
                      value={privacy.profilePhoto}
                      onChange={handleSelectChange}
                    >
                      <option value="Everyone">Everyone</option>
                      <option value="Nobody">Nobody</option>
                      <option value="Selected">Selected</option>
                    </select>
                  </small>
                </div>

                {/* Last Seen */}
                <small className="form-check border-bottom form-switch d-flex ps-0 text-secondary py-3 justify-content-between w-100">
                  <p className="form-check-label" htmlFor="lastSeenSwitch">Last Seen</p>
                  <input
                    className="form-check-input"
                    type="checkbox"
                    role="switch"
                    id="lastSeenSwitch"
                    name="lastSeen"
                    checked={privacy.lastSeen === 'Everyone'}
                    onChange={(e) =>
                      setPrivacy((prev) => ({
                        ...prev,
                        lastSeen: e.target.checked ? 'Everyone' : 'Nobody'
                      }))
                    }
                  />
                </small>

                {/* Status */}
                <div className='d-flex justify-content-between border-bottom py-3'>
                  <div className='d-grid text-start'>
                    <small className='fw-semibold text-secondary mt-2 mb-2'>Status</small>
                    <small>Display Status</small>
                  </div>
                  <small>
                    <select
                      className="form-select text-secondary"
                      name="status"
                      value={privacy.status}
                      onChange={handleSelectChange}
                    >
                      <option value="Everyone">Everyone</option>
                      <option value="Nobody">Nobody</option>
                      <option value="Selected">Selected</option>
                    </select>
                  </small>
                </div>

                {/* Read Receipts */}
                <small className="form-check form-switch d-flex border-bottom ps-0 text-secondary py-3 justify-content-between w-100">
                  <p className="form-check-label" htmlFor="readReceipts">Read receipts</p>
                  <input
                    className="form-check-input"
                    type="checkbox"
                    role="switch"
                    id="readReceipts"
                    name="readReceipts"
                    checked={privacy.readReceipts}
                    onChange={handleSwitchChange}
                  />
                </small>

                {/* Groups */}
                <div className='d-flex justify-content-between pt-3'>
                  <small className='fw-semibold text-secondary mt-2'>Groups</small>
                  <small>
                    <select
                      className="form-select text-secondary"
                      name="groups"
                      value={privacy.groups}
                      onChange={handleSelectChange}
                    >
                      <option value="Everyone">Everyone</option>
                      <option value="Nobody">Nobody</option>
                      <option value="Selected">Selected</option>
                    </select>
                  </small>
                </div>
              </div>
            </div>
          </div>
          <div className="accordion-item rounded-0 border-0 border-top ">
            <h2 className="accordion-header">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                <small className=''>
                  <i className="fa-solid fa-shield-halved me-3"></i>
                  Security
                </small>
              </button>
            </h2>
            <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                <small className='d-flex'>
                  <div className="form-check form-switch">
                    <d className="form-check-label" htmlFor="switchCheckDefault">Show security notification</d>
                    <input className="form-check-input" type="checkbox" role="switch" id="switchCheckDefault" />
                  </div>
                </small>
              </div>
            </div>
          </div>
          <div className="accordion-item rounded-0 border-0 border-top ">
            <h2 className="accordion-header">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                <small className=''>
                  <i className="fa-solid fa-circle-question me-3"></i>
                  Help
                </small>
              </button>
            </h2>
            <div id="collapseFive" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
              <div className="accordion-body">

                <div className='d-grid'>
                  <small className='text-secondary text-start fw-semibold pb-2 border-bottom mt-3'>FAQ</small>
                  <small className='text-secondary text-start fw-semibold pb-2 border-bottom mt-3'>Privacy Policy</small>
                  <small className='text-secondary text-start fw-semibold pb-2 border-bottom mt-3'>Terms & Conditions</small>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div >
    </div>
  );
}

export default Settings