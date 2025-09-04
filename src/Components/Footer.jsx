import ContactEmail from './EmailJS.jsx';
import profileLinksArray from './ProfileLinksArray';

export default function Footer() {
  return (
    <footer>
      <section id="footer">
        <hr className="rounded" />
        <div id="footer-text-and-image-container">
          <div id="footer-text-container">
            <h2 id="footer-title">Let's Work Together</h2>
            <p id="footer-text">Send me a message regarding the project or job you would like to work with me on and I'll get back to you as soon as possible.</p>
          </div>  
          <img src="./assets/SmilePhoto.jpg" className="footer-photo" alt="Photo of Josh Willis Smiling Warmly" />
        </div>
        < ContactEmail />
        <div id="footer-links">
          {
            profileLinksArray.map((link) => (
              <a 
                href={link.href} 
                className="footer-link"
                target="_blank" 
                rel="noopener noreferrer"
                aria-label={"Go to: Josh's " + link.title + " Profile (opens in a new tab)"} 
                title={"Go to: Josh's " + link.title + " Profile (opens in a new tab)"}
              >
                {link.title}
              </a>
            ))
          }
        </div>
      </section>
    </footer>
  );
}