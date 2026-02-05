import React from 'react'
import './AspNet.css'

const AspNet = () => {
    return (
        <div className="aspnet-page">


            <section className="services-section">
                <div className="container">
                    <div className="services-grid">
                        <div className="service-card">
                            <div className="service-icon">
                                <i className="fas fa-cloud"></i>
                            </div>
                            <h3>ASP.NET Core Development</h3>
                            <p>Modern, cross-platform applications with the latest ASP.NET Core technology.</p>
                        </div>

                        <div className="service-card">
                            <div className="service-icon">
                                <i className="fas fa-sitemap"></i>
                            </div>
                            <h3>MVC Applications</h3>
                            <p>Scalable Model-View-Controller applications with clean architecture patterns.</p>
                        </div>

                        <div className="service-card">
                            <div className="service-icon">
                                <i className="fas fa-exchange-alt"></i>
                            </div>
                            <h3>Web API Development</h3>
                            <p>RESTful APIs for seamless data exchange and third-party integrations.</p>
                        </div>

                        <div className="service-card">
                            <div className="service-icon">
                                <i className="fas fa-database"></i>
                            </div>
                            <h3>Entity Framework</h3>
                            <p>Efficient data access with ORM for SQL Server and other databases.</p>
                        </div>

                        <div className="service-card">
                            <div className="service-icon">
                                <i className="fab fa-microsoft"></i>
                            </div>
                            <h3>C# Programming</h3>
                            <p>Expert C# development for robust, type-safe enterprise applications.</p>
                        </div>

                        <div className="service-card">
                            <div className="service-icon">
                                <i className="fas fa-cogs"></i>
                            </div>
                            <h3>Custom Solutions</h3>
                            <p>Tailored ASP.NET solutions designed specifically for your business requirements.</p>
                        </div>

                        <div className="service-card">
                            <div className="service-icon">
                                <i className="fas fa-tools"></i>
                            </div>
                            <h3>Maintenance & Support</h3>
                            <p>Ongoing support and maintenance to keep your applications running smoothly.</p>
                        </div>
                    </div>
                </div>
            </section>


        </div>
    )
}

export default AspNet
