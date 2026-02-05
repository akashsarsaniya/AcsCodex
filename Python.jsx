import React from 'react'
import './Python.css'

const Python = () => {
    return (
        <div className="python-page">
            <img
                src="/image/banners/py.png"
                alt="ACS CODE X"
                className="banner"
                onError={(e) => {
                    e.target.style.display = 'none';
                }}
            />

            <section className="py-services-section">
                <div className="container">
                    <div className="services-grid">
                        <div className="service-card">
                            <div className="py_service-icon">
                                <i className="fab fa-python"></i>
                            </div>
                            <h3>Python Development</h3>
                            <p>Custom Python applications tailored to your business needs with clean, maintainable code.</p>
                        </div>

                        <div className="service-card">
                            <div className="py_service-icon">
                                <i className="fas fa-server"></i>
                            </div>
                            <h3>Django Framework</h3>
                            <p>Robust web applications using Django's powerful features for rapid development.</p>
                        </div>

                        <div className="service-card">
                            <div className="py_service-icon">
                                <i className="fas fa-flask"></i>
                            </div>
                            <h3>Flask Framework</h3>
                            <p>Lightweight, flexible web applications with Flask for microservices and APIs.</p>
                        </div>

                        <div className="service-card">
                            <div className="py_service-icon">
                                <i className="fas fa-chart-line"></i>
                            </div>
                            <h3>Data Analysis</h3>
                            <p>Transform raw data into actionable insights using pandas, NumPy, and visualization tools.</p>
                        </div>

                        <div className="service-card">
                            <div className="py_service-icon">
                                <i className="fas fa-spider"></i>
                            </div>
                            <h3>Web Scraping</h3>
                            <p>Automated data extraction from websites using BeautifulSoup, Scrapy, and Selenium.</p>
                        </div>

                        <div className="service-card">
                            <div className="py_service-icon">
                                <i className="fas fa-code"></i>
                            </div>
                            <h3>API Development</h3>
                            <p>RESTful and GraphQL APIs for seamless integration with your applications.</p>
                        </div>

                        <div className="service-card">
                            <div className="py_service-icon">
                                <i className="fas fa-robot"></i>
                            </div>
                            <h3>Automation Scripts</h3>
                            <p>Streamline repetitive tasks with custom automation solutions to boost productivity.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Python
