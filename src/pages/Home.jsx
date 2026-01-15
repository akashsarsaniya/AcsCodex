import './Home.css'

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero2">
      <div >
        <img 
            src="/image/banner2.png" 
            alt="ACS CODE X" 
            className="banner"
            onError={(e) => {
              e.target.style.display = 'none';
            }}
          />
          <a href="#proposal" className="hero-cta2">
              SEND MY FREE PROPOSAL
            </a>
        </div>
      </section>
     

      {/* Reviews Banner */}
      <section className="reviews-banner" style={{ padding: '.5rem 0', minHeight: 'unset' }}>
        <div className="reviews-container" style={{ gap: '1.2rem', padding: 0 }}>
          <div className="review-item" style={{ padding: '0.5rem 1.2rem' }}>
            <h3 className="review-platform" style={{ fontSize: '1.1rem', marginBottom: '0.3rem' }}>Google</h3>
            <div className="review-stars" style={{ fontSize: '1.1rem', marginBottom: '0.2rem' }}>
              <span className="star">★</span>
              <span className="star">★</span>
              <span className="star">★</span>
              <span className="star">★</span>
              <span className="star">★</span>
            </div>
            <p className="review-count" style={{ fontSize: '0.95rem', margin: 0 }}>150+ Reviews</p>
          </div>
          
          <div className="review-item" style={{ padding: '0.5rem 1.2rem' }}>
            <h3 className="review-platform" style={{ fontSize: '1.1rem', marginBottom: '0.3rem' }}>Clutch</h3>
            <div className="review-stars" style={{ fontSize: '1.1rem', marginBottom: '0.2rem' }}>
              <span className="star">★</span>
              <span className="star">★</span>
              <span className="star">★</span>
              <span className="star">★</span>
              <span className="star">★</span>
            </div>
            <p className="review-count" style={{ fontSize: '0.95rem', margin: 0 }}>100+ Reviews</p>
          </div>
          
          <div className="review-item" style={{ padding: '0.5rem 1.2rem' }}>
            <div className="upcity-logo" style={{ display: 'flex', alignItems: 'center', gap: 5, marginBottom: '0.3rem' }}>
              <svg width="18" height="18" viewBox="0 0 24 24" style={{ verticalAlign: 'middle' }} fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L15 9L22 10L15 11L12 18L9 11L2 10L9 9L12 2Z" fill="white" opacity="0.9"/>
                <path d="M12 6L13 9.5L16.5 10L13 10.5L12 14L11 10.5L7.5 10L11 9.5L12 6Z" fill="white"/>
              </svg>
              <h3 className="review-platform" style={{ fontSize: '1.1rem', margin: 0 }}>UpCity</h3>
            </div>
            <div className="review-stars" style={{ fontSize: '1.1rem', marginBottom: '0.2rem' }}>
              <span className="star">★</span>
              <span className="star">★</span>
              <span className="star">★</span>
              <span className="star">★</span>
              <span className="star">★</span>
            </div>
            <p className="review-count" style={{ fontSize: '0.95rem', margin: 0 }}>50+ Reviews</p>
          </div>
        </div>
      </section>
     

      {/* Results Section */}
      <section className="results">
        <div className="container">
          <h2 className="section-title">Our Clients Get Results</h2>
          
          <div className="results-grid">
            <div className="result-card">
              <div className="result-header">
          <img src="image/men.png" alt="Client testimonial" className="result-image" />

                <h3>"The results speak for themselves!"</h3>
              </div>
              <div className="result-stats">
                <div className="result-stat">
                  <h4>+664%</h4>
                  <p>Organic Traffic</p>
                </div>
                <div className="result-stat">
                  <h4>+360%</h4>
                  <p>Online Leads</p>
                </div>
              </div>
              <p className="result-description">
                Our digital marketing company used SEO & PPC to increase the overall 
                traffic to the new website by 664%. These online marketing solutions, 
                along with the new conversion-focused website, boosted the client's 
                online leads by over 360%.
              </p>
              <a href="#" className="result-link">Read Case Study →</a>
            </div>
            
            <div className="result-card">
              <div className="result-header">
              <img src="image/women.png" alt="Client testimonial" className="result-image" />
                <h3>"AK Service goes above and beyond!"</h3>
              </div>
              <div className="result-stats">
                <div className="result-stat">
                  <h4>+800%</h4>
                  <p>Online Leads</p>
                </div>
                <div className="result-stat">
                  <h4>+640%</h4>
                  <p>Conversion Rate</p>
                </div>
              </div>
              <p className="result-description">
                Our digital marketing experts developed a modern website which yielded 
                an impressive 800% uptick in leads and a 640% increase in conversion rate.
              </p>
              <a href="#" className="result-link">Read Case Study →</a>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="trust">
        <div className="container">
          <h2 className="section-title">WORK WITH A TRUSTED MARKETING AGENCY</h2>
          <p className="trust-text bullet-text">
          ACS CODE X is an industry-leading <strong>full-stack development and digital marketing agency</strong>, 
          delivering <strong>result-driven marketing solutions</strong> since 2025. We help businesses 
          grow online through a <strong>strategy-first approach</strong>, combining <strong>advanced technology, 
            data-driven SEO, and performance marketing tools.</strong></p>

          <p className="trust-text bullet-text">
           Our team specializes in website development, SEO services, Google Business Profile optimization,
            paid advertising, and conversion-focused marketing strategies designed to increase traffic, leads, 
            and revenue.
          </p>
          <p className="trust-text bullet-text">
          We work with businesses of all sizes from startups and local businesses to multi-location 
          enterprises — across almost every industry. Our affordable digital marketing packages are 
          tailored to fit any budget without compromising quality or results.
          </p>
          <p className="trust-text bullet-text">
          Partner with a trusted SEO and marketing company that believes in transparency and performance. 
          We offer flexible month-to-month contracts, allowing us to prove our value through measurable growth,
           real rankings, and consistent ROI — every single month.
          </p>
          
          <p className="trust-text bullet-text">
          Grow your business with a full-stack development and marketing partner you can trust.

          </p>
          
        </div>
      </section>
      <section className="stats-section" >
        <div className="container stats-container">
          <div className="stats-content">
            <div className="stats-header">
              <img src="image/logo.png" alt="AK Stats Logo" className="stats-logo" />
              <span className="stats-title">STATS</span>
            </div>
            <p className="stats-description">
              Gain visibility into your online performance with AK Stats, our proprietary reporting solution. Beyond tracking performance metrics, it transforms complex marketing data into actionable intelligence. AK Stats helps you understand your campaign status, why it matters and how we're optimizing for your success.
            </p>
            <a href="#" className="stats-button">
              LEARN MORE
            </a>
          </div>
          <div className="stats-image-wrapper">
            <img 
              src="image/stat.png"
              alt="AK Stats dashboard on laptop"
              className="stats-image"
            />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials">
        <div className="container">
          <h2 className="section-title">What Our Clients Are Saying</h2>
          <p className="section-subtitle">
            Don't just take our word for it. Hear from our clients how our full-service 
            marketing agency has helped them achieve their growth goals:
          </p>
          
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <h4>"They do everything they say…no BS!"</h4>
              <p>
                "AK Service is a much-needed blessing and exceeded our expectations in every way. 
                They are honest, straightforward, they take care of ALL your needs quickly, they 
                are reliable, you can count on them and most of all, they do everything they say 
                they will do, no BS."
              </p>
              <p className="testimonial-author">— Marci Wiersma, Broker</p>
            </div>
            
            <div className="testimonial-card">
              <h4>"These guys are incredible!"</h4>
              <p>
                "These guys are incredible. They've helped us to grow our business and now the 
                biggest problem we seem to come across is having too much business – which is 
                the ideal problem to have. We are right where we wanted to be and AK Service 
                made that possible. Thanks guys!"
              </p>
              <p className="testimonial-author">— Whitney Wells Lewis, Practice Manager</p>
            </div>
            
            <div className="testimonial-card">
              <h4>"Unrivaled customer support!"</h4>
              <p>
                "Working with the AK Service team has been a most pleasant experience! Their 
                dedication and passion for what they do are exemplified by their unrivaled 
                customer support and attentiveness to the specific needs of our business."
              </p>
              <p className="testimonial-author">— Chad Montgomery, CEO</p>
            </div>
          </div>
        </div>
      </section>

      {/* AI SEO Section */}
     

      {/* Services Section */}
      <section className="services">
        <div className="container">
          <h2 className="section-title">Our Digital Marketing Services</h2>
          <p className="section-subtitle">
          ACS CODE X is a results-driven digital marketing agency delivering scalable strategies that increase visibility, generate qualified leads, and support long-term business growth.
          </p>
          
          <div className="services-grid">
            <div className="service-card">
            <h3 className="service-title python">
  <i className="fa-brands fa-python"></i>
  Python Development
</h3>
              <p>
              Our Python development services deliver scalable, secure, and high-performance applications. We build custom web apps, APIs, automation tools, and data-driven solutions using Django, Flask, and modern Python frameworks to support business growth and efficiency.

              </p>
            </div>
            
            <div className="service-card">
            <h3 className="service-title web">
  <i className="fa-solid fa-laptop-code"></i>
  Website Design & Development
</h3>
              <p>
              With millions of websites on the internet, you want to be sure your website stands out, 
              represents you well and most importantly, helps your organization grow. Our digital media 
              agency creates visually stunning, mobile-responsive websites that provide the best possible 
              user experience.
              </p>
            </div>
            
            <div className="service-card">
            <h3 className="service-title aspnet">
  <i className="fa-brands fa-microsoft"></i>
  ASP.NET
</h3>
              <p>
              Our enterprise ASP.NET development services deliver secure, scalable, and high-performance web 
              applications for businesses. We build custom ASP.NET Core and MVC solutions, APIs, and enterprise
               systems to support local business growth and digital transformation.
              </p>
            </div>
            
            <div className="service-card">
            <h3 className="service-title node">
  <i className="fa-brands fa-node-js"></i>
  Node.js
</h3>
              <p>
              Our enterprise Node.js development services deliver scalable, secure, and high-performance 
              applications for businesses. We build custom APIs, real-time apps, and backend solutions using
               Node.js to support local business growth and enterprise digital transformation.
              </p>
            </div>
            
            <div className="service-card">
            <h3 className="service-title seo">
  <i className="fa-solid fa-chart-line"></i>
  Search Engine Optimization (SEO)
</h3>
              <p>
              Through careful keyword research and white hat practices, our digital marketing agency 
              helps you achieve high rankings in the major search engines. Our comprehensive SEO strategies 
              include on-page optimization, technical audits and local internet marketing services to drive 
              organic visibility and traffic to your site.

              </p>
            </div>
            
            <div className="service-card">
            <h3 className="service-title social">
  <i className="fa-solid fa-share-nodes"></i>
  Social Media Marketing
</h3>
              <p>
              Social media marketing is critical to staying connected with your audience. 
              Working independently of, or side-by-side with you, our B2B internet marketing 
              agency helps keep your social community engaged. We develop tailored strategies 
              across all relevant platforms and manage targeted ad campaigns to maximize your ROI.

              </p>
            </div>
            
            <div className="service-card">
            <h3 className="service-title ppc">
  <i className="fa-solid fa-bullhorn"></i>
  Pay Per Click (PPC)
</h3>
              <p>
              While SEO offers long-term growth, sometimes you need an immediate boost.
               Our online advertising firm's PPC campaign ensures the money you spend is put to the very
                best possible use. We manage ad campaigns across Google Ads, Bing and social platforms to 
                deliver maximum conversions.

              </p>
            </div>

            <div className="service-card">
            <h3 className="service-title content">
  <i className="fa-solid fa-pen-nib"></i>
  Content Writing
</h3>
              <p>
              Our content writers know search engine optimization and create great marketing copy that is 
              designed to be informative and compelling and push your business objectives. Entrust your 
              copywriting to the best internet marketing company to publish quality content that builds 
              authority.


              </p>
            </div>
            <div className="service-card">
            <h3 className="service-title reputation">
  <i className="fa-solid fa-star"></i>
  Reputation Management
</h3>
              <p>
              Your reputation is everything. Our team of experts can help protect and enhance your reputation online for tangible, long-term results. Our full-service marketing agency boasts a proprietary pay-for-performance tool that simplifies your reputation management across platforms and multiple accounts.



              </p>
            </div>
            <div className="service-card">
            <h3 className="service-title cro">
  <i className="fa-solid fa-chart-simple"></i>
  Conversion Rate Optimization (CRO)
</h3>
              <p>
              Turn more site visitors into customers! Our experts utilize the latest conversion optimization 
              techniques to help increase the percentage of passive website visitors into active users. 
              Through A/B testing, user behavior analysis and strategic redesigns, our advertising and 
              digital marketing agency optimizes your sales funnel.


              </p>
            </div>
            <div className="service-card">
            <h3 className="service-title amazon">
  <i className="fa-brands fa-amazon"></i>
  Amazon Marketing
</h3>
              <p>
              Getting found on Amazon is not easy! Competition is fierce and thick. Partner with the best digital marketing agency, and we'll help your products get found in this massive marketplace. We implement proven strategies to enhance your brand presence, improve rankings and boost sales on the world's largest online retail platform.

              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section-home" id="proposal">
        <div className="container">
          <h2 className="section-title">READY TO GROW YOUR BUSINESS?</h2>
          <p className="section-subtitle">
          Looking for a results-driven digital marketing and website development agency that delivers real business growth not just clicks and impressions? ACS CODE X provides SEO, performance marketing, and custom website development solutions. Contact us today to grow your business online.

          </p>
          <a href="/contact" className="cta-button">
            GET MY FREE PROPOSAL
          </a>
          <p className="cta-phone">OR CALL (866) 908-4748</p>
        </div>
      </section>
     
    </div>
  )
}

export default Home

