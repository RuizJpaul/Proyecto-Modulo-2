import { useEffect, useState } from "react";

export default function UpdateForm({ contact, onUpdateContact, reset }) {
  const [formData, setFormData] = useState({
    name: "",
    phone: ""
  });

  function handleChangeName(event) {
    setFormData({ ...formData, name: event.target.value });
  }

  function handleChangePhone(event) {
    setFormData({ ...formData, phone: event.target.value });
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (!contact) {
      alert("No hay contacto seleccionado.");
      return;
    }

    const updatedData = {
        "id": contact.id,
        "fullname": formData.name,
        "phonenumber": formData.phone,
        "isFavorite": contact.isFavorite,
        "email": contact.email,
        "type": contact.type,
        "company": contact.company,
        "birthday": contact.birthday
    };

    onUpdateContact(updatedData);
    setFormData({ name: "", phone: "" });
  }

  useEffect(() => {
    if (contact) {
      setFormData({
        name: contact.fullname,
        phone: contact.phonenumber
      });
    }
  }, [contact]);

  useEffect(() => {
    setFormData({ name: "", phone: "" });
  }, [reset])

  return (
    <div style={{
      width: "100%",
      height: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      gap: "4%"
    }}>
      <div style={{
        width: "25%",
        padding: "0px 2%",
        color: "gray"
      }}>
        <h2>Modificar Contacto</h2>
      </div>
      <form onSubmit={handleSubmit} style={{
        width: "50%",
        height: "50%",
        textAlign: "left",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        gap: "10%",
        padding: "2%",
      }}>
        <div style={{
          width: "100%",
          height: "20%",
          display: "flex",
          justifyContent: "space-around",
        }}>
          <label htmlFor="">Nombre</label>
          <input type="text" value={formData.name} onChange={handleChangeName} style={{ borderRadius: 4 , border: "none"}} />
        </div>

        <div style={{
          width: "100%",
          height: "20%",
          display: "flex",
          justifyContent: "space-around",
        }}>
          <label htmlFor="">Telefono</label>
          <input type="text" value={formData.phone} onChange={handleChangePhone} style={{ borderRadius: 4 , border: "none"}} />
        </div>

        <div style={{
          width: "100%",
          height: "25%",
          display: "flex",
          justifyContent: "center"
        }}>
          <button type="submit" style={{
            width: "50%",
            height: "100%",
            background: "black",
            color: "white",
            border: "none",
            borderRadius: 12,
          }}>
            Modificar Contacto
          </button>
        </div>
      </form>
    </div>
  );
}