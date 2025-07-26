export default function Footer() {
    return (
        <div style={{
            width: "100%",
            height: "10%",
            color: "white",
            background: "#111827",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
        }}>
            <p>{new Date().getFullYear()} ©RuizJpaul</p>
        </div>
    )
}