import { Link } from 'react-router-dom'
import { useState } from 'react'
import './Navbar.css'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [isScoOpen, setIsScoOpen] = useState(false)
  const [isPYOpen, setIsPYOpen] = useState(false)
  const [isDotNetOpen, setIsDotNetOpen] = useState(false)
  const [isNodeOpen, setIsNodeOpen] = useState(false)
  const [isDataEntryOpen, setIsDataEntryOpen] = useState(false)
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const toggleServices = () => {
    setIsServicesOpen(!isServicesOpen),
    setIsScoOpen(!isScoOpen),
    setIsPYOpen(!isPYOpen),
    setIsDotNetOpen(!isDotNetOpen),
    setIsNodeOpen(!isNodeOpen),
    setIsDataEntryOpen(!isDataEntryOpen)
  }

  const NodeMenu = [
  
    
    {
      title: 'Node',
      items: [
        'Node.js Development',
        'Express.js Framework',
        'RESTful APIs',
        'Real-time Applications',
        'Microservices',
        'Server-side Development',
        'Full Stack Solutions'
      ]
    }
  ]
  const DataEntryMenu = [
     
    {
      title: 'Data Entry',
      items: [
        'Data Processing',
        'Data Migration',
        'Excel Data Entry',
        'Database Management',
        'Data Cleaning',
        'Data Validation',
        'Bulk Data Entry'
      ]
    }
  ]
  const DotNetMenu = [
  
    {
      title: 'ASP.NET',
      items: [
        'ASP.NET Core Development',
        'MVC Applications',
        'Web API Development',
        'Entity Framework',
        'C# Programming',
        'Custom Solutions',
        'Maintenance & Support'
      ]
    }
  ]
  const servicesMenu = [
  
    {
      title: 'ASP.NET',
      items: [
        'ASP.NET Core Development',
        'MVC Applications',
        'Web API Development',
        'Entity Framework',
        'C# Programming',
        'Custom Solutions',
        'Maintenance & Support'
      ]
    },
    {
      title: 'Node',
      items: [
        'Node.js Development',
        'Express.js Framework',
        'RESTful APIs',
        'Real-time Applications',
        'Microservices',
        'Server-side Development',
        'Full Stack Solutions'
      ]
    },
    {
      title: 'Data Entry',
      items: [
        'Data Processing',
        'Data Migration',
        'Excel Data Entry',
        'Database Management',
        'Data Cleaning',
        'Data Validation',
        'Bulk Data Entry'
      ]
    }
  ]
  const ScoMenu = [
    {
      title: 'SEO',
      items: [
        'Local SEO',
        'Technical SEO',
        'On-Page SEO',
        'Off-Page SEO',
        'SEO Audits',
        'Keyword Research',
        'Content Optimization'
      ]
    }
  ]
  const PYMenu = [
    {
      title: 'Python',
      items: [
        'Python Development',
        'Django Framework',
        'Flask Framework',
        'Data Analysis',
        'Web Scraping',
        'API Development',
        'Automation Scripts'
      
      ]
    }
  ]

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <img 
            src="/image/logo.png" 
            alt="ACS CODE X" 
            className="logo-image"
            onError={(e) => {
              e.target.style.display = 'none';
            }}
          />
          {/*<span className="logo-text">ACS CODE X</span>*/}
        </Link>
        
        <div className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
          <Link to="/" className="navbar-link" onClick={() => setIsMenuOpen(false)}>
            Home
          </Link>
          <div 
            className="navbar-dropdown"
            onMouseEnter={() => setIsScoOpen(true)}
            onMouseLeave={() => setIsScoOpen(false)}
          >
            <button 
              className={`navbar-link dropdown-toggle ${isScoOpen ? 'active' : ''}`}
              onClick={toggleServices}
            >
             SCO
              <span className="dropdown-arrow">{isScoOpen ? '▲' : '▼'}</span>
            </button>
            
            {isScoOpen && (
              <div className="dropdown-menu">
                <div className="dropdown-content">
                  {ScoMenu.map((service, index) => (
                    <div key={index} className="dropdown-column">
                      <Link 
                        to="/seo"
                        onClick={() => {
                          setIsScoOpen(false)
                          setIsMenuOpen(false)
                        }}
                        className="dropdown-header-link"
                      >
                        <h3 className="dropdown-header">{service.title}</h3>
                      </Link>
                      <ul className="dropdown-list">
                        {service.items.map((item, itemIndex) => (
                          <li key={itemIndex}>
                            <Link 
                              to={`/services#${item.toLowerCase().replace(/\s+/g, '-')}`}
                              onClick={() => {
                                setIsServicesOpen(false)
                                setIsMenuOpen(false)
                              }}
                            >
                              {item}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
          <div 
            className="navbar-dropdown"
            onMouseEnter={() => setIsPYOpen(true)}
            onMouseLeave={() => setIsPYOpen(false)}
          >
            <button 
              className={`navbar-link dropdown-toggle ${isPYOpen ? 'active' : ''}`}
              onClick={toggleServices}
            >
             PYTHON
              <span className="dropdown-arrow">{isPYOpen ? '▲' : '▼'}</span>
            </button>
            
            {isPYOpen && (
              <div className="dropdown-menu">
                <div className="dropdown-content">
                  {PYMenu.map((service, index) => (
                    <div key={index} className="dropdown-column">
                      <h3 className="dropdown-header">{service.title}</h3>
                      <ul className="dropdown-list">
                        {service.items.map((item, itemIndex) => (
                          <li key={itemIndex}>
                            <Link 
                              to={`/services#${item.toLowerCase().replace(/\s+/g, '-')}`}
                              onClick={() => {
                                setIsServicesOpen(false)
                                setIsMenuOpen(false)
                              }}
                            >
                              {item}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
          <div 
            className="navbar-dropdown"
            onMouseEnter={() => setIsDotNetOpen(true)}
            onMouseLeave={() => setIsDotNetOpen(false)}
          >
            <button 
              className={`navbar-link dropdown-toggle ${isDotNetOpen ? 'active' : ''}`}
              onClick={toggleServices}
            >
              ASP.NET
              <span className="dropdown-arrow">{isDotNetOpen ? '▲' : '▼'}</span>
            </button>
            
            {isDotNetOpen && (
              <div className="dropdown-menu">
                <div className="dropdown-content">
                  {DotNetMenu.map((service, index) => (
                    <div key={index} className="dropdown-column">
                      <h3 className="dropdown-header">{service.title}</h3>
                      <ul className="dropdown-list">
                        {service.items.map((item, itemIndex) => (
                          <li key={itemIndex}>
                            <Link 
                              to={`/services#${item.toLowerCase().replace(/\s+/g, '-')}`}
                              onClick={() => {
                                setIsServicesOpen(false)
                                setIsMenuOpen(false)
                              }}
                            >
                              {item}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
          <div 
            className="navbar-dropdown"
            onMouseEnter={() => setIsNodeOpen(true)}
            onMouseLeave={() => setIsNodeOpen(false)}
          >
            <button 
              className={`navbar-link dropdown-toggle ${isNodeOpen ? 'active' : ''}`}
              onClick={toggleServices}
            >
              NODE.JS
              <span className="dropdown-arrow">{isNodeOpen ? '▲' : '▼'}</span>
            </button>
            
            {isNodeOpen && (
              <div className="dropdown-menu">
                <div className="dropdown-content">
                  {NodeMenu.map((service, index) => (
                    <div key={index} className="dropdown-column">
                      <h3 className="dropdown-header">{service.title}</h3>
                      <ul className="dropdown-list">
                        {service.items.map((item, itemIndex) => (
                          <li key={itemIndex}>
                            <Link 
                              to={`/services#${item.toLowerCase().replace(/\s+/g, '-')}`}
                              onClick={() => {
                                setIsServicesOpen(false)
                                setIsMenuOpen(false)
                              }}
                            >
                              {item}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
          <div 
            className="navbar-dropdown"
            onMouseEnter={() => setIsDataEntryOpen(true)}
            onMouseLeave={() => setIsDataEntryOpen(false)}
          >
            <button 
              className={`navbar-link dropdown-toggle ${isDataEntryOpen ? 'active' : ''}`}
              onClick={toggleServices}
            >
                DATA ENTRY
              <span className="dropdown-arrow">{isDataEntryOpen ? '▲' : '▼'}</span>
            </button>
            
            {isDataEntryOpen && (
              <div className="dropdown-menu">
                <div className="dropdown-content">
                  {DataEntryMenu.map((service, index) => (
                    <div key={index} className="dropdown-column">
                      <h3 className="dropdown-header">{service.title}</h3>
                      <ul className="dropdown-list">
                        {service.items.map((item, itemIndex) => (
                          <li key={itemIndex}>
                            <Link 
                              to={`/services#${item.toLowerCase().replace(/\s+/g, '-')}`}
                              onClick={() => {
                                setIsServicesOpen(false)
                                setIsMenuOpen(false)
                              }}
                            >
                              {item}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <Link to="/about" className="navbar-link" onClick={() => setIsMenuOpen(false)}>
            ABOUT
          </Link>
          <Link to="/contact" className="navbar-link" onClick={() => setIsMenuOpen(false)}>
            CONTACT
          </Link>
          <a href="#proposal" className="navbar-cta" onClick={() => setIsMenuOpen(false)}>
            GET FREE PROPOSAL
          </a>
        </div>

        <div className="navbar-toggle" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  )
}

export default Navbar


