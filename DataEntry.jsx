import React from 'react'
import './DataEntry.css'

const DataEntry = () => {
    return (
        <div className="dataentry-page">


            <section className="services-section">
                <div className="container">
                    <div className="services-grid">
                        <div className="service-card">
                            <div className="service-icon">
                                <i className="fas fa-tasks"></i>
                            </div>
                            <h3>Data Processing</h3>
                            <p>Fast and accurate data processing services for large-scale datasets.</p>
                        </div>

                        <div className="service-card">
                            <div className="service-icon">
                                <i className="fas fa-exchange-alt"></i>
                            </div>
                            <h3>Data Migration</h3>
                            <p>Seamless transfer of data between systems with zero data loss.</p>
                        </div>

                        <div className="service-card">
                            <div className="service-icon">
                                <i className="fas fa-file-excel"></i>
                            </div>
                            <h3>Excel Data Entry</h3>
                            <p>Expert Excel data entry, formatting, and spreadsheet management.</p>
                        </div>

                        <div className="service-card">
                            <div className="service-icon">
                                <i className="fas fa-database"></i>
                            </div>
                            <h3>Database Management</h3>
                            <p>Comprehensive database maintenance, updates, and organization.</p>
                        </div>

                        <div className="service-card">
                            <div className="service-icon">
                                <i className="fas fa-broom"></i>
                            </div>
                            <h3>Data Cleaning</h3>
                            <p>Remove duplicates, errors, and inconsistencies from your datasets.</p>
                        </div>

                        <div className="service-card">
                            <div className="service-icon">
                                <i className="fas fa-check-double"></i>
                            </div>
                            <h3>Data Validation</h3>
                            <p>Ensure data accuracy and integrity with comprehensive validation checks.</p>
                        </div>

                        <div className="service-card">
                            <div className="service-icon">
                                <i className="fas fa-layer-group"></i>
                            </div>
                            <h3>Bulk Data Entry</h3>
                            <p>High-volume data entry services with guaranteed accuracy and speed.</p>
                        </div>
                    </div>
                </div>
            </section>


        </div>
    )
}

export default DataEntry
