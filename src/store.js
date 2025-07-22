export const initialStore = () => ({
  contacts: [
    {
      id: 1,
      fullName: "Full Name",
      email: "Email address",
      phone: "Phone Number",
      address: "Address"
    }
  ]
});

export default function storeReducer(store, action = {}) {
  switch (action.type) {
    case "ADD_CONTACT":
      const isInitialContact =
        store.contacts.length === 1 &&
        store.contacts[0].fullName === "Full Name";

      const newId =
        store.contacts.length > 0
          ? store.contacts[store.contacts.length - 1].id + 1
          : 1;

      const newContact = {
        ...action.payload,
        id: newId
      };

      if (isInitialContact) {
        // Reemplaza el dummy inicial por el nuevo contacto
        return {
          ...store,
          contacts: [newContact]
        };
      } else {
        // Agrega el nuevo contacto al arreglo existente
        return {
          ...store,
          contacts: [...store.contacts, newContact]
        };
      }

    default:
      return store;
  }
}
