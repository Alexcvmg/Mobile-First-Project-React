export default function Importante(){
  const estiloTitulo = {
    color: "#ff9966",
    fontSize: "3.75rem",
    fontWeight: "bold"
  }

  const ContainerAreaImportante = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    padding: "288px 16px",
    gap: "50px",
    backgroundImage: "url(https://assets.elanco.com/8e0bf1c2-1ae4-001f-9257-f2be3c683fb1/0c51eaa4-f68e-431f-9adc-3b34432393ce/bpc-48_-_filhotes.jpg?w=3840&q=75&auto=format)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat"
       
  }

  const botaoImportante = {
    color: "#ff9966",
    fontSize: "1.5rem",
    border: "solid 3px ",
    padding: "13px 47px",
    borderRadius: "5px",
    backgroundColor: "transparent"
  }

return(
      <div style={ContainerAreaImportante}>
        <h2 style={estiloTitulo}>Uma área importante do site</h2>
        <a href="#" style={botaoImportante}>ACESSAR AGORA</a>
      </div>
  )
}
   

    