import React from 'react';
import OurGuide1 from './../../../assets/images/OurGuide(1).jpg'
import OurGuide2 from './../../../assets/images/OurGuide(2).jpg'
import OurGuide3 from './../../../assets/images/OurGuide(3).jpg'
import OurGuide4 from './../../../assets/images/OurGuide(4).jpg'

const ExpertTeam = () => {
    return (
        <div className='container py-5'>
            <div className="text-center pt-5 pb-3">
                <h1 style={{ fontSize: "60px" }}>Our Guides</h1>
            </div>
            <div class="row row-cols-1 row-cols-md-4 g-4 mt-5">
                <div class="col">
                    <div class="card h-100 hover">
                        <img src={OurGuide1} class="card-img-top img-fluid" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">BEATRICE PRIOR</h5>
                            <p class="card-text">Tour Guide</p>
                        </div>

                    </div>
                </div>
                <div class="col">
                    <div class="card h-100 hover">
                        <img src={OurGuide2} class="card-img-top img-fluid" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">EDWARD DUGHLAS</h5>
                            <p class="card-text">Tour Planer</p>
                        </div>

                    </div>
                </div>
                <div class="col">
                    <div class="card h-100 hover">
                        <img src={OurGuide3} class="card-img-top img-fluid img-fluid" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">PETER PARKER</h5>
                            <p class="card-text">Tour Expert</p>
                        </div>

                    </div>
                </div>
                <div class="col">
                    <div class="card h-100 hover">
                        <img src={OurGuide4} class="card-img-top img-fluid img-fluid" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">LIZA THOMAS</h5>
                            <p class="card-text">Tour Guide</p>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default ExpertTeam;