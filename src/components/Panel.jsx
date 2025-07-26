import { useEffect, useState } from "react"
import Contact from "./Contact";
import ContactList from "./ContactList";
import Header from "./Header";
import Filter from "./Filter";
import ClearContact from "./ClearContact";
import Footer from "./Footer";
import ContactForm from "./ContactForm";
import LoadContacts from "./LoadContacts";
import UpdateForm from "./UpdateForm";

//API
import { fetchContacts } from "./../services/contactService";
import { updateContact } from "./../services/contactService";
import { deleteContact } from "./../services/contactService";

export default function Panel({ isLoading, setIsLoading }) {

  const [selectedContact, setSelectedContact] = useState(null);

  const [showOnlyFavorites, setShowOnlyFavorites] = useState(false);

  const [error, setError] = useState(null);

  const [contacts, setContacts] = useState([])

  const [reset, setReset] = useState(false);

  async function loadContacts() {
    setIsLoading(true);
    setError(null);

    try {
      const contacts = await fetchContacts();
      setContacts(contacts);
    } catch (error) {
      console.log(error);
      setError(error.message);
    } finally {
      setReset(!reset);
      setIsLoading(false);
    }
  }


  // let contactsToShow = contacts;

  // if(showOnlyFavorites){
  //   contactsToShow = contacts.filter((contact) => contact.isFavorite);
  // }


  let contactsToShow = [...contacts];

  // Ordenar por ID (numérico)
  contactsToShow.sort((a, b) => a.id - b.id);

  // Si solo favoritos
  if (showOnlyFavorites) {
    contactsToShow = contactsToShow.filter((contact) => contact.isFavorite);
  }

  const handleSelectContact = (contact) => {
    setSelectedContact(contact);
  }

  const handleChangeFavorite = (event) => {
    setShowOnlyFavorites(event.target.checked);
    setSelectedContact(null);
  }

  const handleClearContact = () => {
    setSelectedContact(null);
    setReset(!reset);
  }

  const handleNextContact = (selectedContact) => {

    if (selectedContact === null) {
      setSelectedContact(contactsToShow[0]);
      return;
    }
    else {
      const currentIndex = contactsToShow.findIndex((contact) => contact.id === selectedContact.id);

      if (currentIndex === contactsToShow.length - 1) {
        setSelectedContact(contactsToShow[0]);
        return;
      }

      setSelectedContact(contactsToShow[currentIndex + 1])
    }
  }

  const handlePreviousContact = (selectedContact) => {

    if (selectedContact === null) {
      setSelectedContact(contactsToShow[contactsToShow.length - 1]);
      return;
    }
    else {
      const currentIndex = contactsToShow.findIndex((contact) => contact.id === selectedContact.id);

      if (currentIndex === 0) {
        setSelectedContact(contactsToShow[contactsToShow.length - 1]);
        return;
      }

      setSelectedContact(contactsToShow[currentIndex - 1])
    }
  }

  function handleAddContact(newContact) {
    const updatedContacts = [...contacts, newContact];
    setContacts(updatedContacts);
    setSelectedContact(null);
  }

  async function handleUpdateContact(updatedContact) {
    try {
      const contact = await updateContact(updatedContact.id, updatedContact);

      const updatedList = contacts.map((c) =>
        c.id === contact.id ? contact : c
      );

      setContacts(updatedList);
      setSelectedContact(null);
    } catch (error) {
      console.error("❌ Error actualizando contacto:", error);
    }
  }

  async function handleDeleteContact(id) {
    try {
      await deleteContact(id); // ✅ Llama al servicio para borrar del backend

      // ✅ Actualiza el estado local eliminando el contacto
      setContacts((prevContacts) => prevContacts.filter((c) => c.id !== id));

      // ✅ Limpia el contacto seleccionado si era el eliminado
      if (selectedContact?.id === id) {
        setSelectedContact(null);
      }
    } catch (error) {
      console.error("❌ Error eliminando contacto:", error);
    }
  }

  const toggleFavorite = (id) => {
    const updateContacts = contacts.map((contact) => {
      return {
        id: contact.id,
        fullname: contact.fullname,
        phonenumber: contact.phonenumber,
        isFavorite: contact.id === id ? !contact.isFavorite : contact.isFavorite
      };
    });

    if (selectedContact.id === id) {
      setSelectedContact({
        id: selectedContact.id,
        fullname: selectedContact.fullname,
        phonenumber: selectedContact.phonenumber,
        isFavorite: !selectedContact.isFavorite,
      });
    }

    setContacts(updateContacts);
  };

  return (

    <div style={{
      width: "100%",
      height: "100vh",
      background: "#F1F3F4",
      display: "flex",
      flexDirection: "column",
      fontFamily: "Nunito"
    }}>
      <Header />
      <main style={{
        textAlign: "center",
        width: "100%",
        height: "80%",
        background: "#F9FAFB",
        color: "#111827",
        display: "flex"
      }}>
        <div style={{
          width: "10%",
          height: "100%",
          background: "#1E3A8A",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around"
        }}>
          <div style={{
            fontSize: 22,
            color: "white",
          }}>
            Contactos
            <div>
              {contacts.length}📕
            </div>
          </div>
        </div>
        <div style={{
          width: "20%",
          height: "100%",
        }}>
          <div style={{
            height: "10%",
            width: "100%",
            display: "flex",
          }}>
            <Filter handleChangeFavorite={handleChangeFavorite} />
            <ClearContact handleClearContact={handleClearContact} />
            <LoadContacts loadContacts={loadContacts} isLoading={isLoading} />
          </div>
          <div style={{
            height: "90%",
            width: "100%"
          }}>
            <ContactList contactsToShow={contactsToShow} onSelectContact={handleSelectContact} selectedContact={selectedContact} handleNextContact={handleNextContact} handlePreviousContact={handlePreviousContact} isLoading={isLoading} />
          </div>
        </div>
        <div style={{
          width: "30%",
          height: "100%",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          // flexWrap: "wrap",
        }}>
          <Contact contact={selectedContact} toggleFavorite={toggleFavorite} handleDeleteContact={handleDeleteContact} />
        </div>
        <div style={{
          width: "40%",
          height: "100%",
          display: "flex",
          flexDirection: "column"
        }}>
          <div style={{
            width: "100%",
            height: "50%",
            background: "#dfdcfa"
          }}>
            <ContactForm onAddContact={handleAddContact} contacts={contacts} />
          </div>
          <div style={{
            width: "100%",
            height: "50%",
            background: "#efedff"
          }}>
            <UpdateForm contact={selectedContact} onUpdateContact={handleUpdateContact} reset={reset} />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}