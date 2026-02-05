import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import './TestimonialsSlider.css';

const testimonialsData = [
    {
        id: 1,
        quote: "AK Service is a much-needed blessing and exceeded our expectations in every way. They are honest, straightforward, they take care of ALL your needs quickly, they are reliable, you can count on them and most of all, they do everything they say they will do, no BS.",
        author: "Marci Wiersma, Broker",
        title: "They do everything they say…no BS!"
    },
    {
        id: 2,
        quote: "These guys are incredible. They've helped us to grow our business and now the biggest problem we seem to come across is having too much business – which is the ideal problem to have. We are right where we wanted to be and AK Service made that possible.",
        author: "Whitney Wells Lewis, Practice Manager",
        title: "These guys are incredible!"
    },
    {
        id: 3,
        quote: "Working with the AK Service team has been a most pleasant experience! Their dedication and passion for what they do are exemplified by their unrivaled customer support and attentiveness to the specific needs of our business.",
        author: "Chad Montgomery, CEO",
        title: "Unrivaled customer support!"
    },
    {
        id: 4,
        quote: "We've seen a measurable increase in both site traffic and qualified leads since partnering with AK Service. Their data-driven approach is exactly what we needed to take our digital presence to the next level.",
        author: "Sarah Jenkins, Marketing Director",
        title: "Measurable growth!"
    },
    {
        id: 5,
        quote: "The team at AK Service is responsive, knowledgeable, and proactive. They don't just execute tasks; they provide strategic guidance that has helped us navigate the complex digital landscape.",
        author: "David Chen, Founder",
        title: "Strategic partners"
    },
    {
        id: 6,
        quote: "Professional, reliable, and results-oriented. The team transformed our outdated site into a lead-generating machine. Highly recommended!",
        author: "James Wilson, Director",
        title: "Results-oriented team"
    }
];

const TestimonialsSlider = () => {
    return (
        <div className="testimonials-slider-container">
            <h2 className="section-title">What Our Clients Are Saying</h2>
            <p className="section-subtitle">
                Don't just take our word for it. Hear from our clients how our full-service
                marketing agency has helped them achieve their growth goals:
            </p>
            <Swiper
                modules={[Navigation, Autoplay]}
                spaceBetween={30}
                slidesPerView={1}
                navigation
                autoplay={{ delay: 4000, disableOnInteraction: false, pauseOnMouseEnter: true }}
                breakpoints={{
                    320: {
                        slidesPerView: 2,
                        spaceBetween: 10,
                    },
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    1024: {
                        slidesPerView: 4,
                    },
                    1280: {
                        slidesPerView: 5,
                    },
                }}
                className="testimonials-swiper"
            >
                {testimonialsData.map((item) => (
                    <SwiperSlide key={item.id}>
                        <div className="testimonial-slide-card">
                            <h4>"{item.title}"</h4>
                            <p>"{item.quote}"</p>
                            <p className="testimonial-author">— {item.author}</p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default TestimonialsSlider;
