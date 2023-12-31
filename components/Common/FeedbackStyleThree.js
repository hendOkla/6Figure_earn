import React from 'react';
import * as Icon from 'react-feather';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";

const FeedbackStyleThree = () => {
    return (
        <>
            <div className="ml-feedback-area ptb-80">
                <div className="container">
                    <div className="section-title st-fs-28">
                        <span className="sub-title">Testimonials</span>
                        <h2>Our Clients Feedback</h2>
                        <div className="bar"></div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>

                    <Swiper
                        pagination={{
                            clickable: true,
                        }}
                        autoplay={{
                            delay: 6000,
                            pauseOnMouseEnter: true,
                        }}
                        modules={[Pagination, Autoplay]}
                        className="ml-feedback-slides"
                    >
                        <SwiperSlide>
                            <div className="single-testimonials-item">
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid ullam harum sit. Accusantium veritatis dolore ducimus illum, cumque excepturi, autem rerum illo amet placeat odit corporis!</p>

                                <div className="client-info">
                                    <img src="/images/client-image/client1.jpg" alt="image" />

                                    <div className="rating">
                                        <Icon.Star />
                                        <Icon.Star />
                                        <Icon.Star />
                                        <Icon.Star />
                                        <Icon.Star />
                                    </div>

                                    <h3 className="a-blog">Sarah Taylor</h3>
                                    <span>CEO at Envato</span>
                                </div> 
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="single-testimonials-item">
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid ullam harum sit. Accusantium veritatis dolore ducimus illum, cumque excepturi, autem rerum illo amet placeat odit corporis!</p>

                                <div className="client-info">
                                    <img src="/images/client-image/client2.jpg" alt="image" />

                                    <div className="rating">
                                        <Icon.Star />
                                        <Icon.Star />
                                        <Icon.Star />
                                        <Icon.Star />
                                        <Icon.Star />
                                    </div>

                                    <h3 className="a-blog">Steven Smith</h3>
                                    <span>CEO at Envato</span>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="single-testimonials-item">
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid ullam harum sit. Accusantium veritatis dolore ducimus illum, cumque excepturi, autem rerum illo amet placeat odit corporis!</p>

                                <div className="client-info">
                                    <img src="/images/client-image/client3.jpg" alt="image" />

                                    <div className="rating">
                                        <Icon.Star />
                                        <Icon.Star />
                                        <Icon.Star />
                                        <Icon.Star />
                                        <Icon.Star />
                                    </div>

                                    <h3 className="a-blog">James Eva</h3>
                                    <span>CEO at Envato</span>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>

                </div>

                {/* Shape Images */}
                <div className="user-shape1">
                    <img src="/images/agency-image/agency-user1.png" alt="shape" />
                </div>
                <div className="user-shape2">
                    <img src="/images/agency-image/agency-user2.png" alt="shape" />
                </div>
                <div className="user-shape3">
                    <img src="/images/agency-image/agency-user3.png" alt="shape" />
                </div>
                <div className="user-shape4">
                    <img src="/images/agency-image/agency-user4.png" alt="shape" />
                </div>
                <div className="user-shape5">
                    <img src="/images/agency-image/agency-user5.png" alt="shape" />
                </div>
                <div className="user-shape6">
                    <img src="/images/agency-image/agency-user6.png" alt="shape" />
                </div>
            </div>
        </>
    );
}

export default FeedbackStyleThree;