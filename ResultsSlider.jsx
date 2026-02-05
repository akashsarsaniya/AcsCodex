import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './ResultsSlider.css';

const resultsData = [
    {
        id: 1,
        title: "Organic Traffic Growth",
        image: "/image/men.png",
        description: "Our digital marketing company used SEO & PPC to increase the overall traffic to the new website by 664%.",
        buttonText: "View Case Study",
        stats: "+664% Traffic"
    },
    {
        id: 2,
        title: "Lead Generation",
        image: "/image/women.png",
        description: "Our digital marketing experts developed a modern website which yielded an impressive 800% uptick in leads.",
        buttonText: "View Case Study",
        stats: "+800% Leads"
    },
    {
        id: 3,
        title: "Conversion Rate",
        image: "/image/menreview1.png",
        description: "Optimized landing pages and clear CTAs resulted in a 640% increase in conversion rate for our client.",
        buttonText: "View Case Study",
        stats: "+640% Conversions"
    },
    {
        id: 4,
        title: "Brand Awareness",
        image: "/image/menreview2.png",
        description: "Strategic social media campaigns engaged thousands of new users, significantly boosting brand recognition.",
        buttonText: "View Case Study",
        stats: "Brand Awareness"
    },
    {
        id: 5,
        title: "Revenue Growth",
        image: "/image/womenreview2.png",
        description: "Integrated marketing strategies across all channels drove a consistent month-over-month revenue increase.",
        buttonText: "View Case Study",
        stats: "Revenue Growth"
    },
    {
        id: 6,
        title: "Customer Retention",
        image: "/image/banner4.png",
        description: "Implemented  marketing automation to nurture existing clients, improving retention rates by 40%.",
        buttonText: "View Case Study",
        stats: "+40% Retention"
    }
];

const ResultsSlider = () => {
    return (
        <div className="results-slider-container">
            <h4 className="section-title">Our Clients Get Results</h4>
            <Swiper
                modules={[Navigation, Autoplay]}
                spaceBetween={30}
                slidesPerView={1}
                navigation
                autoplay={{ delay: 3500, disableOnInteraction: false, pauseOnMouseEnter: true }}
                breakpoints={{
                    320: {
                        slidesPerView: 2,
                        spaceBetween: 10,
                    },
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 3,
                    },
                    1024: {
                        slidesPerView: 5,
                    },
                    1280: {
                        slidesPerView: 6,
                    },
                }}
                className="results-swiper"
            >
                {resultsData.map((result) => (
                    <SwiperSlide key={result.id}>
                        <div className="result-slide-wrapper">
                            <h3 className="slide-title">{result.title}</h3>
                            <div className="result-slide-card">
                                <div className="slide-image-container">
                                    {/* Using a background image or img tag. Reference image shows full cover image. 
                       I'll use img tag for better accessible control but style it to cover. */}
                                    <img src={result.image} alt={result.title} className="slide-image" />
                                    <div className="slide-overlay">
                                        <div className="slide-content">
                                            <h4 className="slide-stats">{result.stats}</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default ResultsSlider;
