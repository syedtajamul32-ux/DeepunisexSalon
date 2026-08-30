import { useEffect, useState } from 'react';
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  CalendarDays,
  ChevronLeft,
  ChevronRight,
  Clock3,
  Facebook,
  Gem,
  Instagram,
  MapPin,
  Menu,
  Phone,
  Scissors,
  Sparkles,
  Star,
  X,
} from 'lucide-react';

const phone = '083558 94115';
const tel = 'tel:08355894115';
const mapUrl = 'https://www.google.com/maps/search/?api=1&query=Deep+Unisex+Salon+Sanpada+Navi+Mumbai';

const services = [
  { name: 'Precision Haircuts', note: 'Cut, finish & styling', icon: Scissors },
  { name: 'Colour & Highlights', note: "L'Oréal Professional", icon: Sparkles },
  { name: 'Hair Spa & Treatment', note: 'Repair, nourish & restore', icon: Gem },
  { name: 'Bridal & Occasion', note: 'Make-up, hair & drape', icon: Star },
  { name: 'Grooming Rituals', note: 'Beard, shave & threading', icon: Sparkles },
  { name: 'Texture & Braids', note: 'Braids, dreadlocks & more', icon: Scissors },
];

const reviews = [
  { name: 'Amruta Tambe', text: 'Faisal was very good and professional in his service. I did haircut and highlights with global colour and the results are amazing.', role: 'Haircut & colour' },
  { name: 'Priyanka Patekar', text: 'I came for first time, very good experience. Sangita did my hairwash and blow dry, it was done very nicely.', role: 'Wash & blow dry' },
  { name: 'Maya Vadkar', text: 'I highly recommend Deep Salon! I stay in Ghatkopar but I specially travel here for my hair treatments because the service is always excellent.', role: 'Hair treatment' },
  { name: 'Tejasvini Suvarna', text: 'I had a rather bold haircut idea and he executed it perfectly. I\'m more than happy with my haircut!', role: 'Precision haircut' },
  { name: 'Nikeeta Ghatge', text: 'Sangeeta does the best threading, painless and without any skin peeling. Also got my haircut done from Faisal, services are good.', role: 'Threading & haircut' },
  { name: 'Vishakha Khilari', text: "Deep Salon's work is excellent and very professional. Manpreet did my hair spa and haircut, the service was really very good.", role: 'Hair spa' },
];

const gallery = [
  { src: 'https://images.pexels.com/photos/3993471/pexels-photo-3993471.jpeg?auto=compress&cs=tinysrgb&w=800', label: 'Styling in progress', className: 'tall' },
  { src: 'https://images.pexels.com/photos/853427/pexels-photo-853427.jpeg?auto=compress&cs=tinysrgb&w=1200', label: 'Inside the studio', className: 'wide' },
  { src: 'https://images.pexels.com/photos/4981476/pexels-photo-4981476.jpeg?auto=compress&cs=tinysrgb&w=800', label: 'Colour, perfected', className: '' },
  { src: 'https://images.pexels.com/photos/7750108/pexels-photo-7750108.jpeg?auto=compress&cs=tinysrgb&w=800', label: 'The styling chairs', className: '' },
  { src: 'https://images.pexels.com/photos/7195805/pexels-photo-7195805.jpeg?auto=compress&cs=tinysrgb&w=1200', label: 'Wash & care rituals', className: 'wide' },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [reviewIndex, setReviewIndex] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setVisible(true), 100);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    const timer = window.setInterval(() => setReviewIndex((index) => (index + 1) % reviews.length), 5000);
    return () => window.clearInterval(timer);
  }, []);

  const nextReview = () => setReviewIndex((index) => (index + 1) % reviews.length);
  const previousReview = () => setReviewIndex((index) => (index - 1 + reviews.length) % reviews.length);

  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="brand" href="#home" aria-label="Deep Unisex Salon home">
          <span className="brand-mark">D</span>
          <span><strong>DEEP</strong><small>UNISEX SALON</small></span>
        </a>
        <nav className={menuOpen ? 'main-nav open' : 'main-nav'}>
          {['Home', 'Services', 'Gallery', 'Reviews', 'Location', 'Contact'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMenuOpen(false)}>{item}</a>
          ))}
          <a className="nav-book mobile-book" href={tel}><Phone size={15} /> Book appointment</a>
        </nav>
        <a className="nav-book" href={tel}><Phone size={15} /> Book appointment</a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </header>

      <main>
        <section className={`hero ${visible ? 'is-visible' : ''}`} id="home">
          <div className="hero-image" />
          <div className="hero-content content-wrap">
            <div className="eyebrow"><span /> Est. in Navi Mumbai <span /></div>
            <p className="hero-kicker">The art of looking your best</p>
            <h1>Where style meets <em>precision.</em></h1>
            <p className="hero-copy">A considered hair and beauty experience for every kind of you, right in the heart of Sanpada.</p>
            <div className="hero-actions">
              <a href={tel} className="button button-gold">Book your appointment <ArrowUpRight size={17} /></a>
              <a href="#services" className="text-link">Explore services <ArrowDown size={16} /></a>
            </div>
            <div className="hero-detail"><MapPin size={15} /> Palm Beach Road, Sanpada <span /> Open today · 10:00 AM — 9:00 PM</div>
          </div>
          <div className="hero-scroll">Scroll to explore <ArrowDown size={14} /></div>
        </section>

        <section className="intro section-pad" id="about">
          <div className="content-wrap intro-grid">
            <div className="section-label">01 / The Deep difference</div>
            <div className="intro-copy"><p className="display-copy">Every appointment is a little <em>ritual.</em></p><p className="body-copy">At Deep, we believe great hair is not just about how you look when you leave. It is about the confidence you carry with you. Our stylists bring technical precision, honest advice and a warm, personal touch to every chair.</p><a className="arrow-link" href="#services">Discover our approach <ArrowRight size={16} /></a></div>
            <div className="stat-block"><div className="stat-number">4.8<span>★</span></div><div className="stat-caption">Rated by 301+ happy clients<br />on Google</div><div className="stat-line" /></div>
          </div>
        </section>

        <section className="services section-pad" id="services">
          <div className="content-wrap"><div className="section-heading"><div><div className="section-label">02 / What we do</div><h2>Made for your<br /><em>next look.</em></h2></div><p>Thoughtful services. Brilliant products.<br />Results that feel like you.</p></div><div className="services-list">{services.map(({ name, note, icon: Icon }, index) => <div className="service-row" key={name}><span className="service-number">0{index + 1}</span><Icon size={22} strokeWidth={1.3} /><div><h3>{name}</h3><p>{note}</p></div><ArrowUpRight className="service-arrow" size={20} /></div>)}</div></div>
        </section>

        <section className="gallery section-pad" id="gallery"><div className="content-wrap"><div className="section-heading gallery-heading"><div><div className="section-label">03 / A glimpse inside</div><h2>The Deep<br /><em>world.</em></h2></div><p>Come as you are.<br />Leave feeling unmistakably you.</p></div><div className="gallery-grid">{gallery.map((item) => <figure key={item.src} className={item.className}><img src={item.src} alt={item.label} /><figcaption><span>{item.label}</span><ArrowUpRight size={15} /></figcaption></figure>)}</div></div></section>

        <section className="reviews section-pad" id="reviews"><div className="content-wrap review-layout"><div><div className="section-label">04 / Words from you</div><h2>Good hair<br /><em>travels.</em></h2><div className="google-rating"><div className="google-mark">G</div><div><strong>4.8 <span>★★★★★</span></strong><small>301 Google reviews</small></div></div><div className="review-controls"><button onClick={previousReview} aria-label="Previous review"><ChevronLeft size={19} /></button><span>{String(reviewIndex + 1).padStart(2, '0')} / {String(reviews.length).padStart(2, '0')}</span><button onClick={nextReview} aria-label="Next review"><ChevronRight size={19} /></button></div></div><div className="review-card"><div className="quote-mark">“</div><div className="stars">★★★★★</div><blockquote>{reviews[reviewIndex].text}</blockquote><div className="review-author"><div className="avatar">{reviews[reviewIndex].name.charAt(0)}</div><div><strong>{reviews[reviewIndex].name}</strong><small>{reviews[reviewIndex].role}</small></div><span className="verified">Verified review</span></div></div></div></section>

        <section className="location section-pad" id="location"><div className="content-wrap location-grid"><div className="map-frame"><iframe title="Deep Unisex Salon location" src="https://www.google.com/maps?q=Deep+Unisex+Salon+Sanpada+Navi+Mumbai&output=embed" loading="lazy" /></div><div className="location-copy"><div className="section-label">05 / Find us</div><h2>Your next look<br />starts <em>here.</em></h2><p>Shop no 03 Ground, Raj Uday CHS, Palm Beach Rd, Sector 1, Sector 13, Sanpada, Navi Mumbai, Maharashtra 400705</p><div className="hours"><div><Clock3 size={18} /><span><strong>Opening hours</strong>Every day · 10:00 AM — 9:00 PM</span></div><div><Phone size={18} /><span><strong>Call us</strong>{phone}</span></div></div><a className="button button-outline" href={mapUrl} target="_blank" rel="noreferrer">Get directions <ArrowUpRight size={17} /></a></div></div></section>

        <section className="booking" id="contact"><div className="content-wrap booking-inner"><div className="section-label">06 / Make it yours</div><h2>Ready for your<br /><em>next look?</em></h2><p>Good things are worth making time for.</p><a className="button button-gold" href={tel}><Phone size={17} /> Call to book appointment</a><a className="booking-phone" href={tel}>{phone}</a></div></section>
      </main>

      <footer className="footer"><div className="content-wrap footer-grid"><div className="brand footer-brand"><span className="brand-mark">D</span><span><strong>DEEP</strong><small>UNISEX SALON</small></span></div><p>Hair, beauty & confidence<br />in Sanpada, Navi Mumbai.</p><div className="footer-address"><MapPin size={15} /> Shop no 03 Ground, Raj Uday CHS,<br />Palm Beach Road, Sanpada</div><div className="socials"><a href="#contact" aria-label="Instagram"><Instagram size={18} /></a><a href="#contact" aria-label="Facebook"><Facebook size={18} /></a></div></div><div className="content-wrap footer-bottom"><span>© 2024 Deep Unisex Salon. All rights reserved.</span><span>Crafted for your confidence.</span></div></footer>
    </div>
  );
}

export default App;
