import ContactEmail from './EmailJS.jsx';

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
          <img src="./assets/SmilePhoto.jpg" className="footer-photo" alt="Second Photo of Site Owner Smiling" />
        </div>
        < ContactEmail />
        <div id="footer-links">
          <a href="https://github.com/joshleewillis">Github</a>
          <a href="https://www.linkedin.com/in/joshua-willis-45794293/">LinkedIn</a>
          <a href="https://www.freecodecamp.org/joshleewillis">FreeCodeCamp</a>
        </div>
      </section>
    </footer>
  );
}