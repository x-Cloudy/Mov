import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa6";
import './Footer.css'

export default function Footer() {
  return (
    <footer className='footer-container'>
      <div className="footer-content">
        
        <div className='social-icons-container'>
          <a href="http://" target="_blank" rel="noopener noreferrer">
            <FaFacebookF />
          </a>
          <a href="http://" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
          <a href="http://" target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </a>
          <a href="http://" target="_blank" rel="noopener noreferrer">
            <FaYoutube />
          </a>
        </div>

        <div className="footer-links">
          <ul>
            <li>Audiodescrição</li>
            <li>Central de Ajuda</li>
            <li>Cartão pré-pago</li>
            <li>Imprensa</li>
            <li>Relações com investidores</li>
            <li>Carreiras</li>
            <li>Termos de Uso</li>
            <li>Privacidade</li>
            <li>Avisos legais</li>
            <li>Preferências de cookies</li>
            <li>informações comrporativas</li>
            <li>Entre em contato</li>
          </ul>
        </div>

        <button className="footer-btn">Código do serviço</button>

        <p>© 2010-2024 MovCont, Inc. <span>/</span><span>Desenvolvido por <a href="https://x-cloudy.github.io/Portifolio/" target="_blank" rel="noopener noreferrer" id="dev-name">Juan Rodrigues</a></span></p>
      </div>

    </footer>
  )
}