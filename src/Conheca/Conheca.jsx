import "./Conheca.css";

export default function Conheca(){
  return(
    <div className="containerConheca">
      <h2>Conheça o site</h2>
      <h3>Mais informações sobre os principais links do site.</h3>
      <div className="containerGrid">
        <Card image={"https://picsum.photos/200"} titulo={"Cartão A"} descricao={"Sob o luar, as estrelas brilham. Na escuridão, a esperança floresce. O universo sussurra segredos à noite."}/>
        <Card image={"https://picsum.photos/200"} titulo={"Cartão B"} descricao={"Nas asas do vento, voamos livres. No abraço do sol, encontramos calor. A vida é uma jornada eterna."}/>
        <Card image={"https://picsum.photos/200"} titulo={"Cartão C"} descricao={"Entre risos e lágrimas, encontramos a verdade. Nos momentos de silêncio, o coração fala. O amor é eterno."}/>
        <Card image={"https://picsum.photos/200"} titulo={"Cartão D"} descricao={"Pelos caminhos da memória, encontramos tesouros. Nas páginas do tempo, escrevemos nossa história. O destino espera."}/>
        <Card image={"https://picsum.photos/200"} titulo={"Cartão E"} descricao={"Na dança das folhas, o vento sussurra segredos. Sob o arco-íris, os sonhos ganham vida. A natureza canta."}/>
        <Card image={"https://picsum.photos/200"} titulo={"Cartão F"} descricao={"Sob o céu estrelado, os desejos se realizam. Na quietude da noite, os pensamentos voam. O universo conspira."}/>
      </div>
    </div>
    
  )
}


function Card(props){
  return(
    <div className="containerCard">
      <div className="divCont1">
        <img src={props.image} className="imgCard"/>
      </div>
      <div className="divCont">
        <h5 className="mb-2">{props.titulo}</h5>
        <p className="textoCard">{props.descricao}</p>
      </div>
    </div>
  )
}
      
      
      
  
  