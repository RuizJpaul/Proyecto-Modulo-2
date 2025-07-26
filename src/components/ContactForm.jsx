import { useState } from "react";
import { createContact } from "../services/contactService";

export default function ContactForm({onAddContact, contacts}) {
    const [formData, setFormData] = useState({
        name: "",
        phone: ""
    })

    function handleChangeName(event) {
        setFormData({...formData, name: event.target.value});
    }

    function handleChangePhone(event) {
        setFormData({...formData, phone: event.target.value});
    }

    function handleSubmit(event) {
        event.preventDefault();
        const contactData = {
        "fullname" : formData.name,
        "phonenumber" : formData.phone,
        "email" : "@gmail.com",
        "type" : "social",
        "company" : null,
        "birthday" : null
        }
        createContact(contactData);
        setFormData({ name: "", phone: "" });
    }

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
            }}>
                <h2 style={{color: "white"}}>Agregar Contacto</h2>
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
                    <label >Nombre</label>
                    <input type="text" value={formData.name} onChange={handleChangeName} style={{borderRadius: 4, border: "none"}}/>
                </div>
                
                <div style={{
                    width: "100%",
                    height: "20%",
                    display: "flex",
                    justifyContent: "space-around",
                }}>
                    <label >Telefono</label>
                    <input type="text" value={formData.phone} onChange={handleChangePhone} style={{borderRadius: 4, border: "none"}}/>
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
                        Agregar Contacto
                    </button>
                </div>
            </form>
        </div>
    )
}