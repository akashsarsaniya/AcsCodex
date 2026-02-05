import './Home.css'
import ResultsSlider from '../components/ResultsSlider'
import TestimonialsSlider from '../components/TestimonialsSlider'
import BlogSlider from '../components/BlogSlider'
import TrustSlider from '../components/TrustSlider'

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero2">
        <div >
          <img
            src="/image/banner5.png"
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
      <section className="reviews-banner">
        <div className="container reviews-container">
          <div className="review-item">
            <h3 className="review-platform">
              <i className="fa-brands fa-google google-icon"></i>
              Google
            </h3>
            <div className="review-stars-wrapper">
              <div className="review-stars">
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="star">★</span>
              </div>
              <p className="review-count">150+ Reviews</p>
            </div>
          </div>

          <div className="review-item">
            <h3 className="review-platform">
              <svg className="clutch-icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
                <circle cx="12" cy="12" r="5" />
              </svg>
              Clutch
            </h3>
            <div className="review-stars-wrapper">
              <div className="review-stars">
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="star">★</span>
              </div>
              <p className="review-count">100+ Reviews</p>
            </div>
          </div>

          <div className="review-item">
            <h3 className="review-platform">
              <svg width="24" height="24" viewBox="0 0 24 24" className="upcity-icon" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L15 9L22 10L15 11L12 18L9 11L2 10L9 9L12 2Z" fill="currentColor" opacity="0.9" />
                <path d="M12 6L13 9.5L16.5 10L13 10.5L12 14L11 10.5L7.5 10L11 9.5L12 6Z" fill="currentColor" />
              </svg>
              UpCity
            </h3>
            <div className="review-stars-wrapper">
              <div className="review-stars">
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="star">★</span>
              </div>
              <p className="review-count">50+ Reviews</p>
            </div>
          </div>
        </div>
      </section>


      {/* Results Section */}
      <section className="results" style={{ display: 'none' }}>
        <ResultsSlider />
      </section>

      {/* Trust Section */}
      <TrustSlider />



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
            {/* <a href="#" className="stats-button">
              LEARN MORE
            </a> */}
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
      {/* Testimonials */}
      <section className="testimonials">
        <TestimonialsSlider />
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

      <section className="unified-cta-section" id="proposal">
        <div className="container unified-cta-container">
          <div className="cta-left-image">
            <img src="image/banner5.png" alt="Ready to grow your business" />
          </div>
          <div className="cta-right-content">
            <h2 className="cta-heading">READY TO GROW YOUR BUSINESS?</h2>
            <p className="cta-subtext">
              We got market strategies for every terrain & situations, whether plains or off roads.
              ACS CODE X delivers real business growth—not just clicks.
            </p>
            <div className="cta-actions">
              <a href="/contact" className="cta-primary-btn">GET MY FREE PROPOSAL</a>
              <p className="cta-phone-inline">OR CALL <strong>+91 9041314973</strong></p>
            </div>
          </div>
        </div>
      </section>

      <BlogSlider />


    </div >
  )
}

export default Home

