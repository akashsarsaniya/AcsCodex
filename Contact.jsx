import { useState } from 'react'
import './Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    budget: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert('Thank you for contacting ACS CODE X! We will reach out shortly.')
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      budget: '',
      message: ''
    })
  }

  return (
    <div className="contact">

      {/* Contact Content */}
      <section className="contact-content">
        <div className="container">
          <div className="contact-wrapper">

            {/* Contact Info */}
            <div className="contact-info">
              <h2>Contact Us – ACS CODE X</h2>

              <p>
                At <strong>ACS CODE X</strong>, we help businesses scale with powerful digital solutions tailored to their goals. 
                Whether you need advanced SaaS development, expert full-stack engineering, high-performance API development, 
                custom CMS solutions, or strategic digital marketing — our team is here to support your growth.
              </p>

              <h3 style={{ marginTop:"15px" }}>Let’s Work Together</h3>
              <p>
                Have a project in mind? Looking for a reliable development or marketing partner?
                Reach out today — our specialists will get back to you within 24 hours.
              </p>

              <div className="info-items">
                <div className="info-item">
                  <h3>Email</h3>
                  <p>contact@acscodex.com</p>
                </div>

                <div className="info-item">
                  <h3>Phone</h3>
                  <p>+91 9041314973</p>
                </div>

                <div className="info-item">
                  <h3>Website</h3>
                  <p>www.acscodex.com</p>
                </div>
              </div>

              <div className="cta-box">
                <h3>Start Your Project Today</h3>
                <p>Tell us your requirements — our experts will guide you with the best digital solution.</p>
                <a href="#form" className="cta-link">Send Inquiry →</a>
              </div>

              {/* Expertise Section */}
              <div className="expertise">
                <h3>Our Core Expertise</h3>
                <ul>
                  <li><strong>SaaS Development:</strong> Scalable, secure custom SaaS applications</li>
                  <li><strong>Full-Stack Development:</strong> .NET Core, Node.js, React, Angular, Laravel, Python, JavaScript</li>
                  <li><strong>API Development & Integrations:</strong> High-performance & secure API systems</li>
                  <li><strong>Custom CMS Development:</strong> Sitefinity, Sitecore, Webflow, WordPress, Shopify, Magento</li>
                  <li><strong>Digital Marketing:</strong> SEO, Google Ads, Meta Ads, Content Writing</li>
                </ul>
              </div>

              <div className="about">
                <h3>About Us</h3>
                <p>
                  ACS CODE X is a leading technology and digital growth agency developing modern, scalable, high-performance
                  digital solutions. We merge advanced software engineering with results-focused digital marketing — enabling
                  businesses to grow smarter and faster.
                </p>
                <p>
                  Our team of expert developers, designers, and marketers builds solutions that are technically strong and
                  business-oriented.
                </p>
              </div>

              <div className="why">
                <h3>Why Choose ACS CODE X?</h3>
                <ul>
                  <li>✔ Proven expertise in modern technologies</li>
                  <li>✔ Transparent communication & fast delivery</li>
                  <li>✔ Custom solutions for Startups, SMBs, Enterprises</li>
                  <li>✔ Full service — Development + Marketing under one roof</li>
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div className="contact-form-wrapper" id="form">
              <h2>Send Us a Message</h2>
              <p>Fill out the form below — our team will reach out soon.</p>

              <form className="contact-form" onSubmit={handleSubmit}>
                
                <div className="form-group">
                  <label htmlFor="name">Name *</label>
                  <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required placeholder="Full Name"/>
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required placeholder="name@email.com"/>
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone *</label>
                  <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} required placeholder="+91 XXXXXXXXXX"/>
                </div>

                <div className="form-group">
                  <label htmlFor="company">Company / Business Name *</label>
                  <input type="text" id="company" name="company" value={formData.company} onChange={handleChange} required placeholder="Your Company Name"/>
                </div>

                <div className="form-group">
                  <label htmlFor="budget">Project Budget *</label>
                  <select id="budget" name="budget" value={formData.budget} onChange={handleChange} required>
                    <option value="">Select Budget Range</option>
                    <option value="under-25k">Under ₹25,000</option>
                    <option value="25-75k">₹25,000 - ₹75,000</option>
                    <option value="75k-2lakh">₹75,000 - ₹2,00,000</option>
                    <option value="2lakh-5lakh">₹2,00,000 - ₹5,00,000</option>
                    <option value="above-5lakh">Above ₹5,00,000</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" name="message" rows="5" value={formData.message} onChange={handleChange} placeholder="Tell us about your project..."></textarea>
                </div>

                <button type="submit" className="submit-button">
                  Submit Inquiry
                </button>

              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
