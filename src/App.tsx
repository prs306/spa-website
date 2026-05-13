import './App.css'

function App() {
  return (
    <div className="App">
      <header className="header">
        <h1>Relax Spa</h1>
        <nav>
          <a href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>
      <main>
        <section id="home">
          <h2>Welcome to Relax Spa</h2>
          <p>Experience ultimate relaxation and rejuvenation.</p>
        </section>
        <section id="services">
          <h2>Our Services</h2>
          <div className="services">
            <div className="service">
              <h3>Massage Therapy</h3>
              <p>Full body massage to relieve stress.</p>
            </div>
            <div className="service">
              <h3>Facial Treatments</h3>
              <p>Rejuvenate your skin with our facials.</p>
            </div>
            <div className="service">
              <h3>Nail Care</h3>
              <p>Professional manicure and pedicure.</p>
            </div>
          </div>
        </section>
        <section id="contact">
          <h2>Contact Us</h2>
          <p>Email: info@relaxspa.com</p>
          <p>Phone: (123) 456-7890</p>
        </section>
      </main>
      <footer>
        <p>&copy; 2023 Relax Spa. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;