import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Link } from 'react-router-dom';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './BlogSlider.css';

const blogData = [
    {
        id: 1,
        title: "The Future of Agentic AI in Digital Marketing",
        image: "/image/ai-blog-1.png",
        description: "Discover how autonomous AI agents are revolutionizing lead generation and customer engagement strategies through intelligent automation.",
        link: "/blog/future-agentic-ai"
    },
    {
        id: 2,
        title: "Autonomous Sales Agents: Qualify Leads 24/7",
        image: "/image/ai-blog-2.png",
        description: "Learn how to deploy AI agents that handle top-of-funnel outreach and qualify prospects while your team focusing on closing.",
        link: "/blog/autonomous-sales-agents"
    },
    {
        id: 3,
        title: "Agentic SEO: Intent-Based Discovery",
        image: "/image/ai-blog-3.png",
        description: "Moving beyond keywords to intent-based discovery. See how AI agents plan and execute complex SEO-driven content calendars automatically.",
        link: "/blog/agentic-seo-intent"
    },
    {
        id: 4,
        title: "Multi-Agent Systems: Orchestrating Growth",
        image: "/image/ai-blog-4.png",
        description: "Unlock the power of multiple AI agents working together to solve complex business problems and streamline your marketing tech stack.",
        link: "/blog/multi-agent-systems"
    },
    {
        id: 5,
        title: "Global Scale with AI Workflow Automation",
        image: "/image/ai-blog-5.png",
        description: "Scale your productivity across borders with intelligent AI workflows that operate autonomously in any time zone.",
        link: "/blog/global-ai-workflows"
    },
    {
        id: 6,
        title: "Modular AI: Building Blocks for Business",
        image: "/image/ai-blog-6.png",
        description: "Explore the modular approach to Agentic AI, where custom-built agents handle specific tasks like data analysis and content creation.",
        link: "/blog/modular-ai-blocks"
    }
];

const BlogSlider = () => {
    return (
        <section className="blog-section">
            <div className="container">
                <div className="blog-header">
                    <h2 className="section-title">Latest From Our Blog</h2>
                </div>
            </div>

            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={10}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 5000, disableOnInteraction: false }}
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
                        slidesPerView: 3,
                    },
                    1400: {
                        slidesPerView: 4,
                    }
                }}
                className="blog-swiper"
            >
                {blogData.map((blog) => (
                    <SwiperSlide key={blog.id}>
                        <div className="blog-card">
                            <Link to={blog.link} className="blog-image-link">
                                <div className="blog-image">
                                    <img src={blog.image} alt={blog.title} />
                                </div>
                            </Link>
                            <div className="blog-content">
                                <h3 className="blog-title">
                                    <Link to={blog.link}>{blog.title}</Link>
                                </h3>
                                <p className="blog-description">{blog.description}</p>
                                <Link to={blog.link} className="blog-more-btn">
                                    Read More <i className="fa-solid fa-arrow-right"></i>
                                </Link>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default BlogSlider;
