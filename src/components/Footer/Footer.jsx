import './Footer.css'

export const Footer = () => {
  return (
    <footer>
      <p className='footer-text'>Pagina creada por San</p>
      <a className='back-to-top'
        href="#"
        onClick={(e) => {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      >
        Back to Top ⬆
      </a>
    </footer>
  )
}
