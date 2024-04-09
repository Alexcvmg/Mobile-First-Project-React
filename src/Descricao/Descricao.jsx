import "./Descricao.css";

export default function Descricao(){
  const textos = ["Os cachorros, com sua lealdade inigualável e alegria contagiante, são verdadeiros membros da família. Sua capacidade de compreender as emoções humanas os torna companheiros incomparáveis em todas as situações. Cada latido e abanar de rabo é uma expressão de amor e gratidão.", "Cachorros, os melhores amigos do homem, trazem felicidade para nossas vidas diariamente. Seja um pequeno cão de colo ou um gigante gentil, sua presença é reconfortante e inspiradora. Companheiros leais em todas as aventuras, eles nos ensinam sobre amor, amizade e compaixão sem dizer uma palavra.", "Os cachorros, seres de pura devoção, aquecem nossos corações com seu amor incondicional. Suas travessuras e lealdade constante criam laços inquebráveis entre humanos e animais. Na presença de um cachorro, cada momento se torna especial, cada sorriso se amplia, e a vida ganha um novo significado."];
  
  return(
    <div className="containerDescricao">
        <h1 className="mb-8">Descrição do site</h1>
        <div className="divDescricao">
          <Conteudo texto={textos[0]} ordem={0}/>
          <Conteudo texto={textos[1]} ordem={1}/>
          <Conteudo texto={textos[2]} ordem={0}/>
        </div>
    </div>
  )
}
      


function Conteudo(props){
  const estilo = {
    order: props.ordem
  }
  
  return(
    <div className="conteudo">
      <img src="https://egvelho-blog-template.netlify.app/doge.jpg" style={estilo}/>
      <p>{props.texto}</p>
    </div>
  )
}

