import { useNavigate, useParams } from 'react-router-dom';
import { faLeftLong } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export const EditContact = () => {
  const { id } = useParams(); // Captura el id desde la URL
  const navigate = useNavigate();

  return (
    <div className="container mt-4">
      <form className="mx-auto w-75 p-3">
        <h1 className="text-center">Edit Contact</h1>

        <div className="mb-3">
          <label htmlFor="fullName" className="form-label">Full Name</label>
          <input type="text" placeholder="Full Name" className="form-control" />
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email address</label>
          <input type="email" placeholder="Email address" className="form-control" />
        </div>

        <div className="mb-3">
          <label htmlFor="phone" className="form-label">Phone number</label>
          <input type="text" placeholder="xxx-xxx-xxxx" className="form-control" />
        </div>

        <div className="mb-3">
          <label htmlFor="address" className="form-label">Address</label>
          <input type="text" placeholder="Address" className="form-control" />
        </div>

        <button type="submit" className="btn btn-primary w-100 p-2 mt-3 mb-3">Save</button>
        <div onClick={() => navigate('/')} style={{ cursor: 'pointer' }} >
        <h6><FontAwesomeIcon icon={faLeftLong} className="text-dark" 
         />  
         Return to previous page
         </h6>
        </div>
      </form>
    </div>
  );
};
