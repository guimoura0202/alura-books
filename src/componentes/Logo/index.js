import logo from '../../imagens/logo.svg';
import './style.css';
function Logo() {
    return (
        <div className='logo'>
          <img src={logo} alt='Logo da Alura Books' className='image-logo'></img>
          <p><strong>Alura </strong>Books</p>
        </div>
    )
}

export default Logo;