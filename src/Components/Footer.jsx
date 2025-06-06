import ContactEmail from './EmailJS.jsx';

export default function Footer() {
  return (
    <footer>
      <section id="footer">
        <hr className="rounded" />
        <h2 id="footer-title">Let's Work Together</h2>
        <p id="footer-text">Send me a message regarding the project or job you would like to work with me on and I'll get back to you as soon as possible.</p>
        < ContactEmail />
      </section>
    </footer>
  );
}