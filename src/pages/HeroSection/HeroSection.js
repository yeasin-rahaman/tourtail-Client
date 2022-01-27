import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from './../../assets/images/Banner/1.png';
import banner2 from './../../assets/images/Banner/2.png';
import banner3 from './../../assets/images/Banner/3.png';
const HeroSection = () => {
    return (
        <div className="banner pb-5">
            <>
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={banner1}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>Gustave Flaubert</h3>
                            <p>“Travel makes one modest. You see what a tiny place you occupy in the world.”</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={banner2}
                            alt="Second slide"
                        />
                        <Carousel.Caption>
                            <h3>Ray Bradbury</h3>
                            <p>“See the world. It's more fantastic than any dream made or paid for in factories. Ask for no guarantees, ask for no security.”</p>
                        </Carousel.Caption>

                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={banner3}
                            alt="Third slide"
                        />
                        <Carousel.Caption>
                            <h3>Terry Pratchett</h3>
                            <p>“Twoflower was a tourist, the first ever seen on the discworld. Tourist, Rincewind had decided, meant 'idiot'.”</p>
                        </Carousel.Caption>

                    </Carousel.Item>
                </Carousel>
            </>
        </div>
    );
};

export default HeroSection;