import './App.css'

function App() {
  return (
    <div className="App">
      <header className="header">
        <div className="brand">
          <h1>Relax Spa</h1>
          <p>Women-only wellness and beauty studio</p>
        </div>
        <nav>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <section id="home" className="hero">
          <div className="hero-overlay" />
          <div className="hero-content">
            <span className="eyebrow">Ladies Only</span>
            <h2>Refresh. Renew. Rejuvenate.</h2>
            <p>Personalized spa treatments designed exclusively for women in a calm, private environment.</p>
            <div className="hero-actions">
              <a href="#contact" className="button primary">Book Appointment</a>
              <a href="#services" className="button secondary">View Services</a>
            </div>
          </div>
        </section>

        <section id="about" className="section about-section">
          <div className="section-header">
            <h2>About Relax Spa</h2>
            <p>Relax Spa is a boutique wellness center created especially for women. We offer premium treatments, private rooms, and a calming atmosphere built around comfort and care.</p>
          </div>
          <div className="feature-grid">
            <div className="feature-card">
              <h3>Private Ladies-Only Space</h3>
              <p>Every service is offered in a women-only setting to ensure privacy and relaxation.</p>
            </div>
            <div className="feature-card">
              <h3>Expert Therapists</h3>
              <p>Highly trained professionals deliver personalized treatments for body, skin, and soul.</p>
            </div>
            <div className="feature-card">
              <h3>Natural Products</h3>
              <p>We use nourishing products with natural extracts for a gentle and glowing experience.</p>
            </div>
          </div>
        </section>

        <section id="why" className="section why-section">
          <div className="section-header">
            <h2>Why Choose Us</h2>
            <p>We combine luxury, privacy, and expert care to deliver a spa experience that feels truly special.</p>
          </div>
          <div className="feature-grid">
            <div className="feature-card highlight-card">
              <h3>Women-Focused Care</h3>
              <p>Every treatment is designed with women's wellness in mind.</p>
            </div>
            <div className="feature-card highlight-card">
              <h3>Tranquil Ambiance</h3>
              <p>Relax in a soft, peaceful environment made for comfort and calm.</p>
            </div>
            <div className="feature-card highlight-card">
              <h3>Flexible Booking</h3>
              <p>Book your preferred slot and enjoy a personalized appointment.</p>
            </div>
          </div>
        </section>

        <section id="services" className="section services-section">
          <div className="section-header">
            <h2>Our Services</h2>
            <p>Choose from our curated service menu, all designed for a ladies-only wellness experience.</p>
          </div>
          <div className="service-grid">
            <article className="service-card">
              <h3>Massage Therapy</h3>
              <p>Full body aromatherapy massage to melt stress and restore balance.</p>
            </article>
            <article className="service-card">
              <h3>Facial Treatments</h3>
              <p>Glow-enhancing facials tailored to your skin type and hydration needs.</p>
            </article>
            <article className="service-card">
              <h3>Nail Care</h3>
              <p>Manicure and pedicure treatments with premium polish and nail care.</p>
            </article>
            <article className="service-card">
              <h3>Bridal Prep</h3>
              <p>Special bridal packages for wedding-ready skin, nails, and relaxation.</p>
            </article>
            <article className="service-card">
              <h3>Herbal Steam Bath</h3>
              <p>Relaxing steam therapy in our private ladies-only room.</p>
            </article>
            <article className="service-card">
              <h3>Yoga & Wellness</h3>
              <p>Gentle yoga sessions designed to improve flexibility and calm the mind.</p>
            </article>
          </div>
        </section>

        <section id="contact" className="section contact-section">
          <div className="section-header">
            <h2>Contact Us</h2>
            <p>Book your appointment today or reach out for more information.</p>
          </div>
          <div className="contact-card">
            <p><strong>Email:</strong> parassharma6569@gmail.com</p>
            <p><strong>Phone:</strong> 8126055304</p>
            <p><strong>Location:</strong> Relax Spa Studio, Jaipur, Rajasthan</p>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>&copy; 2026 Relax Spa. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App;
