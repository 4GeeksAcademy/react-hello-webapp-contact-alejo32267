import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faPhoneFlip, faEnvelope, faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { useState, useEffect } from "react";

export const ContactHome = () => {
  const { store, dispatch } = useGlobalReducer();
  const navigate = useNavigate();

  const [showModal, setShowModal] = useState(false);
  const [contactToDelete, setContactToDelete] = useState(null);

 useEffect(() => {
  fetch("https://playground.4geeks.com/apis/fake/contact/agenda/alopez")
    .then((res) => res.json())
    .then((data) => {
      dispatch({ type: "RESET_CONTACTS", payload: data });
    })
    .catch((error) =>
      console.error("Error al cargar contactos:", error.message)
    );
}, [dispatch]);


  const eliminarContacto = async (id) => {
    try {
      // Si la API no soporta DELETE, omite el fetch
      // dispatch elimina localmente
      dispatch({ type: "DELETE_CONTACT", payload: id });
      setShowModal(false);
      setContactToDelete(null);
    } catch (error) {
      console.error("Error eliminando contacto:", error.message);
    }
  };

  return (
    <div className="mt-5">
      <div className="w-75 mx-auto">
        <div className="d-flex justify-content-end mb-2">
          <button className="btn btn-success" onClick={() => navigate("contact-details")}>
            Add Contact
          </button>
        </div>

        {store.contacts.map(contact => (
          <div className="card overflow-hidden mb-3" key={contact.id}>
            <div className="row g-0">
              <div className="col-md-3 p-0 d-flex align-items-center justify-content-center">
                <div className="ratio ratio-1x1 w-75 my-3">
                  <img src="../src/assets/img/Boston.jpg" className="rounded-circle object-fit-cover img-fluid" alt="Contact" />
                </div>
              </div>

              <div className="col-md-9">
                <div className="card-body py-5 px-4">
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <h3 className="card-title m-0">{contact.fullName || "Full Name"}</h3>
                    <div className="d-flex gap-3">
                      <h5><FontAwesomeIcon icon={faPen} className="text-dark" style={{ cursor: "pointer" }} onClick={() => navigate(`/edit-contact/${contact.id}`)} /></h5>
                      <h5><FontAwesomeIcon icon={faTrash} className="text-dark" style={{ cursor: "pointer" }} onClick={() => { setContactToDelete(contact.id); setShowModal(true); }} /></h5>
                    </div>
                  </div>
                  <h5><FontAwesomeIcon icon={faLocationDot} className="me-2 text-dark" />{contact.address || "Address"}</h5>
                  <h5><FontAwesomeIcon icon={faPhoneFlip} className="me-2 text-dark" />{contact.phone || "Phone Number"}</h5>
                  <h5><FontAwesomeIcon icon={faEnvelope} className="me-2 text-dark" />{contact.email || "Email Address"}</h5>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {showModal && (
        <div className="modal fade show d-block" tabIndex="-1" role="dialog">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Want to proceed?</h5>
                <button type="button" className="btn-close" onClick={() => setShowModal(false)} />
              </div>
              <div className="modal-body">
                <p>Are you sure you want to delete this contact?</p>
              </div>
              <div className="modal-footer">
                <button className="btn btn-primary" onClick={() => setShowModal(false)}>Cancel</button>
                <button className="btn btn-secondary" onClick={() => eliminarContacto(contactToDelete)}>Delete</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
