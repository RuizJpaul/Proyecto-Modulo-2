export default function Filter({handleChangeFavorite}) {
    return (
        <section style={{
          width: "50%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}> 
          <label htmlFor="">
            <input type="checkbox" onChange={handleChangeFavorite} />
            Mostrar Favoritos
          </label>
        </section>
    )
}