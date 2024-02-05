import styled from 'styled-components';
const textoOpcoes = ['CATEGORIAS', 'FAVORITOS', 'MINHA ESTANTE']
const Options = styled.ul`
  display: flex;
`
const Option = styled.li`
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100%;
  padding: 0 5px;
  cursor: pointer;
  min-width: 120px;
`
function OpcoesHeader() {
    return (
        <Options>
          {textoOpcoes.map( (texto)=> (
            <Option><p>{texto}</p></Option>
          ) ) }
        </Options>
    )
}
export default OpcoesHeader;