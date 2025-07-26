export default function ClearContact({handleClearContact}) {
    return (
        <section style={{
            width: "25%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
        }}>
          <button onClick={handleClearContact} style={{
            width: "90%",
            height: "70%",
            background: "gray",
            border: "none",
            color: "white"
          }}>Limpiar</button>
        </section>
    )
}