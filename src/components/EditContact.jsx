import { useNavigate } from 'react-router-dom';
import { faLeftLong } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import useGlobalReducer from "../hooks/useGlobalReducer";

export const EditContact = () => {
  const { dispatch } = useGlobalReducer();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "ADD_CONTACT", payload: form });
    navigate("/");
  };

  return (
    <div className="container mt-4">
      <form className="mx-auto w-75 p-3" onSubmit={handleSubmit}>
        <h1 className="text-center">Edit Contact</h1>
         <div className="mb-3">
          <label htmlFor="email" className="form-label">Full Name</label>
        <input name="fullName" placeholder="Full Name" className="form-control mb-3" onChange={handleChange} />
        </div>
         <div className="mb-3">
          <label htmlFor="email" className="form-label">Email address</label>
        <input name="email" type="email" placeholder="Email address" className="form-control mb-3" onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="phone" className="form-label">Phone number</label>
        <input name="phone" placeholder="xxx-xxx-xxxx" className="form-control mb-3" onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="address" className="form-label">Address</label>
                  <input name="address" placeholder="Address" className="form-control mb-3" onChange={handleChange} />
        </div>

        <button type="submit" className="btn btn-primary w-100">Save</button>
        <div onClick={() => navigate('/')} style={{ cursor: 'pointer' }} className="mt-3">
          <FontAwesomeIcon icon={faLeftLong} className="text-dark me-2" />
          Return to previous page
        </div>
      </form>
    </div>
  );
};
