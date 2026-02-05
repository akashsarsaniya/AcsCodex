import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import './TrustSlider.css';

const trustData = [
    {
        icon: "🚀",
        text: "ACS CODE X is an industry-leading <strong>full-stack development and digital marketing agency</strong>, delivering <strong>result-driven marketing solutions</strong> since 2025. We help businesses grow online through a <strong>strategy-first approach</strong>, combining <strong>advanced technology, data-driven SEO, and performance marketing tools.</strong>"
    },
    {
        icon: "🛠️",
        text: "Our team specializes in website development, SEO services, Google Business Profile optimization, paid advertising, and conversion-focused marketing strategies designed to increase traffic, leads, and revenue."
    },
    {
        icon: "🌍",
        text: "We work with businesses of all sizes from startups and local businesses to multi-location enterprises — across almost every industry. Our affordable digital marketing packages are tailored to fit any budget without compromising quality or results."
    },
    {
        icon: "📈",
        text: "Partner with a trusted SEO and marketing company that believes in transparency and performance. We offer flexible month-to-month contracts, allowing us to prove our value through measurable growth, real rankings, and consistent ROI — every single month."
    },
    {
        icon: "🤖",
        text: "Leverage the power of <strong>Agentic AI</strong> with custom autonomous agents and workflows. We integrate <strong>intelligent automation</strong> to streamline operations, reduce manual work, and provide <strong>data-driven decision support</strong> that scales your productivity."
    },
    {
        icon: "🤝",
        text: "Grow your business with a full-stack development and marketing partner you can trust."
    }
];

const TrustSlider = () => {
    return (
        <section className="trust-section">
            <div className="container">
                <h2 className="section-title">WORK WITH A TRUSTED AGENCY</h2>

                {/* Desktop Grid View */}
                <div className="trust-desktop-grid">
                    {trustData.map((item, index) => (
                        <div className="trust-card" key={index}>
                            <div className="trust-card-icon">{item.icon}</div>
                            <p className="trust-text" dangerouslySetInnerHTML={{ __html: item.text }}></p>
                        </div>
                    ))}
                </div>

                {/* Mobile Slider View */}
                <div className="trust-mobile-slider">
                    <Swiper
                        modules={[Autoplay, Pagination]}
                        spaceBetween={15}
                        slidesPerView={2}
                        pagination={{ clickable: true }}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: true
                        }}
                        breakpoints={{
                            320: { slidesPerView: 2, spaceBetween: 10 },
                            480: { slidesPerView: 2, spaceBetween: 15 }
                        }}
                    >
                        {trustData.map((item, index) => (
                            <SwiperSlide key={index}>
                                <div className="trust-card">
                                    <div className="trust-card-icon">{item.icon}</div>
                                    <p className="trust-text" dangerouslySetInnerHTML={{ __html: item.text }}></p>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default TrustSlider;
