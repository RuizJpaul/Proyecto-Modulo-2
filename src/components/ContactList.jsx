export default function ContactList({contactsToShow, onSelectContact, selectedContact, handleNextContact, handlePreviousContact, isLoading}){
    return (
        <div style={{
          width: "100%",
          height: "100%",
          display: "flex",
          gap: 20,
          justifyContent: "center",
          flexDirection: "column"
        }}>
          <div style={{
              width: "100%",
              height: "90%",
              display: "flex",
              flexDirection: "column",
              overflow: "auto"
            }}> 
            {!isLoading &&
            <>
                {contactsToShow.map((contact) => (
                <div key={contact.id} style={{
                  width: "100%",
                  height: "10%"
                }}>
                  <button 
                  onClick={() => {
                    onSelectContact(contact);
                  }}
                  style={{
                    width: "100%",
                    height: "100%",
                    background: selectedContact?.id === contact.id ? "#3ada49" : "#2f7cff",
                    border: "none",
                    color: "#fff",
                    }}>
                      Contacto {contact.id}</button>
                </div>
              ))}
            </>
          }
          </div>
          <div style={{
            width: "100%",
            height: "10%",
            display: "flex",
            justifyContent: "center",
            gap: "5%"
          }}>
            <button style={{height: "50%", width: "20%", background: "gray", border: "none"}} onClick={() => handlePreviousContact(selectedContact)}>⬅️</button>
            <button style={{height: "50%", width: "20%", background: "gray", border: "none"}} onClick={() => handleNextContact(selectedContact)}>➡️</button>
          </div>
        </div>
    )
}