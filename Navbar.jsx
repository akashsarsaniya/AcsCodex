import { Link } from 'react-router-dom'
import { useState, useRef } from 'react'
import './Navbar.css'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [isScoOpen, setIsScoOpen] = useState(false)
  const [isPYOpen, setIsPYOpen] = useState(false)
  const [isDotNetOpen, setIsDotNetOpen] = useState(false)
  const [isNodeOpen, setIsNodeOpen] = useState(false)
  const [isDataEntryOpen, setIsDataEntryOpen] = useState(false)

  // Timeout refs for delayed closing
  const scoTimeoutRef = useRef(null)
  const pyTimeoutRef = useRef(null)
  const dotNetTimeoutRef = useRef(null)
  const nodeTimeoutRef = useRef(null)
  const dataEntryTimeoutRef = useRef(null)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const toggleServices = () => {
    setIsServicesOpen(!isServicesOpen)
  }

  const toggleSco = () => {
    setIsScoOpen(!isScoOpen)
  }

  const togglePY = () => {
    setIsPYOpen(!isPYOpen)
  }

  const toggleDotNet = () => {
    setIsDotNetOpen(!isDotNetOpen)
  }

  const toggleNode = () => {
    setIsNodeOpen(!isNodeOpen)
  }

  const toggleDataEntry = () => {
    setIsDataEntryOpen(!isDataEntryOpen)
  }

  // Delayed close handlers
  const handleScoMouseEnter = () => {
    if (scoTimeoutRef.current) clearTimeout(scoTimeoutRef.current)
    setIsScoOpen(true)
  }

  const handleScoMouseLeave = () => {
    scoTimeoutRef.current = setTimeout(() => setIsScoOpen(false), 300)
  }

  const handlePYMouseEnter = () => {
    if (pyTimeoutRef.current) clearTimeout(pyTimeoutRef.current)
    setIsPYOpen(true)
  }

  const handlePYMouseLeave = () => {
    pyTimeoutRef.current = setTimeout(() => setIsPYOpen(false), 300)
  }

  const handleDotNetMouseEnter = () => {
    if (dotNetTimeoutRef.current) clearTimeout(dotNetTimeoutRef.current)
    setIsDotNetOpen(true)
  }

  const handleDotNetMouseLeave = () => {
    dotNetTimeoutRef.current = setTimeout(() => setIsDotNetOpen(false), 300)
  }

  const handleNodeMouseEnter = () => {
    if (nodeTimeoutRef.current) clearTimeout(nodeTimeoutRef.current)
    setIsNodeOpen(true)
  }

  const handleNodeMouseLeave = () => {
    nodeTimeoutRef.current = setTimeout(() => setIsNodeOpen(false), 300)
  }

  const handleDataEntryMouseEnter = () => {
    if (dataEntryTimeoutRef.current) clearTimeout(dataEntryTimeoutRef.current)
    setIsDataEntryOpen(true)
  }

  const handleDataEntryMouseLeave = () => {
    dataEntryTimeoutRef.current = setTimeout(() => setIsDataEntryOpen(false), 300)
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
            onMouseEnter={handleScoMouseEnter}
            onMouseLeave={handleScoMouseLeave}
          >
            <button
              className={`navbar-link dropdown-toggle ${isScoOpen ? 'active' : ''}`}
              onClick={toggleSco}
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
            onMouseEnter={handlePYMouseEnter}
            onMouseLeave={handlePYMouseLeave}
          >
            <button
              className={`navbar-link dropdown-toggle ${isPYOpen ? 'active' : ''}`}
              onClick={togglePY}
            >
              PYTHON
              <span className="dropdown-arrow">{isPYOpen ? '▲' : '▼'}</span>
            </button>

            {isPYOpen && (
              <div className="dropdown-menu">
                <div className="dropdown-content">
                  {PYMenu.map((service, index) => (
                    <div key={index} className="dropdown-column">
                      <Link
                        to="/python"
                        onClick={() => {
                          setIsPYOpen(false)
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
                              to="/python"
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
            onMouseEnter={handleDotNetMouseEnter}
            onMouseLeave={handleDotNetMouseLeave}
          >
            <button
              className={`navbar-link dropdown-toggle ${isDotNetOpen ? 'active' : ''}`}
              onClick={toggleDotNet}
            >
              ASP.NET
              <span className="dropdown-arrow">{isDotNetOpen ? '▲' : '▼'}</span>
            </button>

            {isDotNetOpen && (
              <div className="dropdown-menu">
                <div className="dropdown-content">
                  {DotNetMenu.map((service, index) => (
                    <div key={index} className="dropdown-column">
                      <Link
                        to="/aspnet"
                        onClick={() => {
                          setIsDotNetOpen(false)
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
                              to="/aspnet"
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
            onMouseEnter={handleNodeMouseEnter}
            onMouseLeave={handleNodeMouseLeave}
          >
            <button
              className={`navbar-link dropdown-toggle ${isNodeOpen ? 'active' : ''}`}
              onClick={toggleNode}
            >
              NODE.JS
              <span className="dropdown-arrow">{isNodeOpen ? '▲' : '▼'}</span>
            </button>

            {isNodeOpen && (
              <div className="dropdown-menu">
                <div className="dropdown-content">
                  {NodeMenu.map((service, index) => (
                    <div key={index} className="dropdown-column">
                      <Link
                        to="/nodejs"
                        onClick={() => {
                          setIsNodeOpen(false)
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
                              to="/nodejs"
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
            onMouseEnter={handleDataEntryMouseEnter}
            onMouseLeave={handleDataEntryMouseLeave}
          >
            <button
              className={`navbar-link dropdown-toggle ${isDataEntryOpen ? 'active' : ''}`}
              onClick={toggleDataEntry}
            >
              DATA ENTRY
              <span className="dropdown-arrow">{isDataEntryOpen ? '▲' : '▼'}</span>
            </button>

            {isDataEntryOpen && (
              <div className="dropdown-menu">
                <div className="dropdown-content">
                  {DataEntryMenu.map((service, index) => (
                    <div key={index} className="dropdown-column">
                      <Link
                        to="/dataentry"
                        onClick={() => {
                          setIsDataEntryOpen(false)
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
                              to="/dataentry"
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
          <a href="tel:+18669084748" className="navbar-link mobile-only-link" onClick={() => setIsMenuOpen(false)}>
            <i className="fa-solid fa-phone" style={{ marginRight: '10px' }}></i> CALL US
          </a>
          <a href="https://wa.me/18669084748" className="navbar-link mobile-only-link" target="_blank" rel="noopener noreferrer" onClick={() => setIsMenuOpen(false)}>
            <i className="fa-brands fa-whatsapp" style={{ marginRight: '10px', color: '#25D366' }}></i> WHATSAPP
          </a>
        </div>

        <div
          className={`navbar-overlay ${isMenuOpen ? 'active' : ''}`}
          onClick={() => setIsMenuOpen(false)}
        ></div>

        <div className="navbar-actions">
          <a href="https://wa.me/18669084748" className="mobile-whatsapp-btn" target="_blank" rel="noopener noreferrer" title="WhatsApp Us">
            <i className="fa-brands fa-whatsapp"></i>
          </a>
          <a href="tel:+18669084748" className="mobile-call-btn" title="Call Us">
            <i className="fa-solid fa-phone"></i>
          </a>

          <div className={`navbar-toggle ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar


