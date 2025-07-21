import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faPhoneFlip, faEnvelope, faPen, faTrash} from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

export const ContactHome = () => {
    const [showModal, setShowModal] = useState(false);
    const navigate = useNavigate();



    
    return (
        <div className="mt-5">
            <div className="w-75 mx-auto">
                <div className="d-flex justify-content-end mb-2">
                    <button type="button" className="btn btn-success"  onClick={() => navigate('contact-details')}>
                        Add Contact
                    </button>
                </div>

                <div className="card overflow-hidden">
                    <div className="row g-0">
                        <div className="col-md-3 p-0 d-flex align-items-center justify-content-center">
                            <div className="ratio ratio-1x1 w-75 my-3">
                                <img
                                    src="../src/assets/img/Boston.jpg"
                                    className="rounded-circle object-fit-cover img-fluid"
                                    alt="Picture"
                                />
                            </div>
                        </div>

                        <div className="col-md-9">
                            <div className="card-body py-5 px-4">
                                <div className="d-flex justify-content-between align-items-center mb-3">
                                    <h3 className="card-title m-0">Full Name</h3>
                                    <div className="d-flex gap-3">
                                       <h5><FontAwesomeIcon icon={faPen} className="text-dark" style={{ cursor: 'pointer' }}
                                            onClick={() => navigate('edit-contact')}
                                        /></h5>
                                       <h5><FontAwesomeIcon icon={faTrash} className="text-dark" style={{ cursor: 'pointer' }}
                                            onClick={() => setShowModal(true)}
                                        /></h5>
                                    </div>
                                </div>

                                <p className="card-text mb-2 small">
                                   <h5> <FontAwesomeIcon icon={faLocationDot} className="me-2 text-dark" />
                                    Location text here</h5>
                                </p>

                                <p className="card-text mb-2 small">
                                   <h5> <FontAwesomeIcon icon={faPhoneFlip} className="me-2 text-dark" />
                                    Phone Number</h5>
                                </p>

                                <p className="card-text mb-2 small">
                                   <h5> <FontAwesomeIcon icon={faEnvelope} className="me-2 text-dark" />
                                    Email Address</h5>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal */}
            {showModal && (
                <div className="modal fade show d-block" tabIndex="-1" role="dialog">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Want to proceed?</h5>
                                <button
                                    type="button"
                                    className="btn-close"
                                    onClick={() => setShowModal(false)}
                                ></button>
                            </div>
                            <div className="modal-body">
                                <p>Are you sure you want to delete this contact?</p>
                            </div>
                            <div className="modal-footer">
                                <button
                                    type="button"
                                    className="btn btn-primary"
                                    onClick={() => setShowModal(false)}
                                >
                                    Cancel
                                </button>
                                <button
                                    type="button"
                                    className="btn btn-secondary"
                                    onClick={() => {
                                        setShowModal(false);
                                    }}
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};
