export default function LoadContacts({loadContacts, isLoading}) {
    return (
        <section style={{
            width: "25%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
        }}>
            <button onClick={loadContacts} disabled={isLoading} style={{
                width: "90%",
                height: "70%",
                background: "gray",
                border: "none",
                color: "white"
            }}>
            {isLoading ? 'Cargando...' : '🔄 Cargar'}
            </button>
        </section>
    )
}