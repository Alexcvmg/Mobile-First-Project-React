import "./Formulario.css";

export default function Formulario(){
  return(
    <div className="ContainerContato">
      <div className="containerFormulario">
        <h1 className="mb-3 text-red-400">Entre em contato</h1>
        <form className="formulario mb-4">
          <div className="divNome divInput">
            <label className="text-red-400">Nome</label>
            <input type="text" className="border border-gray-300 p-3"/>
          </div>
          <div className="divEmail divInput">
            <label className="text-red-400">Email</label>
            <input type="email" className="border border-gray-300 p-3"/>
          </div>
          <div className="divCel divInput">
            <label className="text-red-400">Celular</label>
            <input type="text" className="border border-gray-300 p-3"/>
          </div>
          <div className="divMensagem divInput">
            <label className="text-red-400">Mensagem</label>
            <textarea rows={50} className="border border-gray-300 p-3"></textarea>
          </div>
        </form>
        <div className="botaoEnv">
          <button className="bg-red-400">ENVIAR</button>
        </div>
      </div>
    </div>
  )
}
          
          
      
      