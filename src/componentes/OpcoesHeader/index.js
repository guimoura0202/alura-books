//import './style.css';
const textoOpcoes = ['CATEGORIAS', 'FAVORITOS', 'MINHA ESTANTE']
function OpcoesHeader() {
    return (
        <ul className='options'>
          {textoOpcoes.map( (texto)=> (
            <li className='option'><p>{texto}</p></li>
          ) ) }
        </ul>
    )
}
export default OpcoesHeader;