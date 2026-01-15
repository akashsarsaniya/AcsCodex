import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./About.css";

const About = () => {

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div className="about">

      {/* HERO */}
      <section className="hero" data-aos="fade-up">
        <h1>About Us – ACS CODE X</h1>
        <p>
          A leading technology and digital growth agency helping businesses build,
          scale & transform through modern software solutions and marketing.
        </p>
      </section>

      <div className="container">

        {/* Intro */}
        <section className="about-section" data-aos="fade-up">
          <p>
            We combine innovation, engineering excellence and strategic marketing
            to create digital ecosystems that convert ideas into scalable products.
          </p>
          <p>
            From SaaS platforms and CMS builds to SEO & full-stack applications —
            we build with precision & performance.
          </p>
        </section>

        {/* Who We Are */}
        <section className="about-section" data-aos="fade-up">
          <h2>Who We Are</h2>
          <p>
            A team of developers, strategists and marketers committed to delivering
            next-level digital solutions.
          </p>
          <p><em>"Smart, scalable & future-ready digital experiences."</em></p>
        </section>

        {/* Services */}
        <section className="about-section" data-aos="fade-up">
          <h2>Our Services</h2>
          <p>We offer complete development + digital growth solutions:</p>

          <ul className="bullet-list">
            <li>SaaS Development — cloud-ready & secure platforms</li>
            <li>Full-Stack Development — .NET, React, Node, Angular, Python</li>
            <li>API Development & Integrations — secure & high-performance</li>
            <li>Custom CMS — WordPress, Webflow, Shopify, Sitefinity, Magento</li>
            <li>Digital Marketing — SEO, Google & Meta Ads, Content Creation</li>
          </ul>
        </section>

        {/* Why Us */}
        <section className="about-section" data-aos="fade-up">
          <h2>Why Choose Us?</h2>

          <div className="features-grid">

            <div className="feature-card" data-aos="zoom-in">
              <h3>💡 Expertise</h3>
              <p>Product + Marketing under one roof.</p>
            </div>

            <div className="feature-card" data-aos="zoom-in">
              <h3>⚙ Modern Stack</h3>
              <p>.NET Core, React, Node.js, Python, CMS.</p>
            </div>

            <div className="feature-card" data-aos="zoom-in">
              <h3>🚀 Scalable Builds</h3>
              <p>Future-ready engineering foundation.</p>
            </div>

            <div className="feature-card" data-aos="zoom-in">
              <h3>🤝 Transparency</h3>
              <p>Clear timelines & communication.</p>
            </div>

            <div className="feature-card" data-aos="zoom-in">
              <h3>🌍 Global Delivery</h3>
              <p>Clients across multiple regions.</p>
            </div>

            <div className="feature-card" data-aos="zoom-in">
              <h3>📈 Results Focused</h3>
              <p>Growth & ROI-driven strategies.</p>
            </div>

          </div>
        </section>

        {/* Vision */}
        <section className="about-section centered" data-aos="fade-up">
          <h2>Our Vision</h2>
          <p>To empower businesses with technology & digital growth at scale.</p>
        </section>

        {/* Commitment */}
        <section className="about-section centered" data-aos="fade-up">
          <h2>Our Commitment</h2>
          <p>
            We build relationships — not just projects. Your success is our goal.
          </p>
        </section>

        {/* CTA */}
        <section className="cta-box about-section" data-aos="zoom-in">
          <h2>Ready to Start Your Project?</h2>
          <p>Let's build together. SaaS, CMS or full-stack — we do it all.</p>
          <a href="/contact-us" className="cta-btn">Get Free Consultation</a>
        </section>

      </div>
    </div>
  );
};

export default About;
