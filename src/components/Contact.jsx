export default function Contact({ contact, toggleFavorite, handleDeleteContact }) {
    return (
        <div style={{
            width: "60%",
            height: "70%",
            background: "#334155",
            color: "white",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
        }}>
            {
                contact ? (
                    <>
                        <div style={{
                            width: "80%",
                            height: "80%",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                            gap: "5%"
                        }}>
                            <h2>contacto {contact.id}</h2>    
                            <p>{contact.fullname}</p>
                            <p>{contact.phonenumber}</p>
                            <p>{contact.isFavorite ? "⭐" : "🔵"}</p>
                            <button onClick={() => toggleFavorite(contact.id)} style={{
                                padding: "5px 15px",
                                border: "none",
                                borderRadius: 8,
                            }}>{contact.isFavorite ? "Quitar favorito" : "Agregar favorito"}</button>
                            <button
                            onClick={() => handleDeleteContact(contact.id)}
                            style={{
                                background: "red",
                                color: "white",
                                padding: "10px",
                                borderRadius: "8px",
                                border: "none",
                                cursor: "pointer"
                            }}
                            >
                            Eliminar Contacto
                            </button>
                        </div>
                    </>
                ) : <p>No hay un contacto seleccionado</p>
            }
        </div>
    )
}