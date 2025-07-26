const SplashScreen = ({isLoading}) => {
    if(!isLoading) return null;

    return (
      <div style={{
        width: "100%",
        height: "100vh",
        background: "#8e8ca3",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Nunito",
      }}>
        <div style={{
            width: "40%",
            height: "50%",
        }}>
            <div style={{
                width: "100%",
                height: "50%",
                display: "flex",
                justifyContent:"center",

            }}>
                <img src="./src/assets/react.svg" alt="" style={{
                    height: "100%"
                }}/>
            </div>
            <div style={{
                width: "100%",
                height: "50%",
                textAlign: "center",
                color: "white",
                paddingTop: "5%",
            }}>
                <h2>Iniciando Contact Manager ⌛</h2>
            </div>
        </div>
      </div>
    )
}

export default SplashScreen;