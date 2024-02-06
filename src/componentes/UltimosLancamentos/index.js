import {livros} from './dadosUltimosLanc'
import styled from 'styled-components'
import {Titulo} from '../Titulo'
import CardRecomenda from '../CardRecomenda'
import imagemLivro from '../../imagens/capa-era-uma-vez.jpg'
const UltimosLancamentosContainer = styled.section`
    background-color: #EBECEE;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
`


const NovosLivrosContainer = styled.div`
    justify-content: center;
    align-items: center;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    margin-top: 30px;
    width: 100%;
    justify-content: center;
    cursor: pointer;
`
const LivroImagem = styled.img`
    height: 650px;
    display: flex;
    justify-content: center;
    align-items: center;
`

function UltimosLancamentos (){
    return(
        <UltimosLancamentosContainer>
            <Titulo cor="#EB9B00" tamanhoFonte="36px" alinhamento="center">ÚLTIMOS LANÇAMENTOS</Titulo>
            <NovosLivrosContainer>
                {livros.map(livros=>
                <LivroImagem src={livros.src}/>)}   
            </NovosLivrosContainer>
            <CardRecomenda
                titulo="Talvez você se interesse por..."
                subtitulo="Era Uma Vez"
                descricao="Livro sobre contos de fadas"
                img={imagemLivro}
            />
        </UltimosLancamentosContainer>
        
        
    )
}

export default UltimosLancamentos