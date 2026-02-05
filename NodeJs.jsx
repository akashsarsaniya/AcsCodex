import React from 'react'
import './NodeJs.css'

const NodeJs = () => {
    return (
        <div className="nodejs-page">


            <section className="services-section">
                <div className="container">
                    <div className="services-grid">
                        <div className="service-card">
                            <div className="service-icon">
                                <i className="fab fa-node-js"></i>
                            </div>
                            <h3>Node.js Development</h3>
                            <p>High-performance server-side applications with JavaScript/TypeScript.</p>
                        </div>

                        <div className="service-card">
                            <div className="service-icon">
                                <i className="fas fa-bolt"></i>
                            </div>
                            <h3>Express.js Framework</h3>
                            <p>Fast, minimalist web framework for building robust APIs and web apps.</p>
                        </div>

                        <div className="service-card">
                            <div className="service-icon">
                                <i className="fas fa-exchange-alt"></i>
                            </div>
                            <h3>RESTful APIs</h3>
                            <p>Scalable RESTful APIs for seamless client-server communication.</p>
                        </div>

                        <div className="service-card">
                            <div className="service-icon">
                                <i className="fas fa-broadcast-tower"></i>
                            </div>
                            <h3>Real-time Applications</h3>
                            <p>WebSocket integration for chat apps, live dashboards, and collaboration tools.</p>
                        </div>

                        <div className="service-card">
                            <div className="service-icon">
                                <i className="fas fa-cubes"></i>
                            </div>
                            <h3>Microservices</h3>
                            <p>Build modular, independently deployable services for enterprise scalability.</p>
                        </div>

                        <div className="service-card">
                            <div className="service-icon">
                                <i className="fas fa-server"></i>
                            </div>
                            <h3>Server-side Development</h3>
                            <p>Backend solutions optimized for performance and concurrency.</p>
                        </div>

                        <div className="service-card">
                            <div className="service-icon">
                                <i className="fas fa-layer-group"></i>
                            </div>
                            <h3>Full Stack Solutions</h3>
                            <p>End-to-end JavaScript applications with Node.js and modern frontend frameworks.</p>
                        </div>
                    </div>
                </div>
            </section>


        </div>
    )
}

export default NodeJs
