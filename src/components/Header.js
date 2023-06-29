import React from 'react';




import { TbBrandTelegram, TbBrandInstagram, TbBrandTiktok, TbBrandFacebook, TbBrandLinkedin, TbBrandTwitter } from 'react-icons/tb';

import 'react-toastify/dist/ReactToastify.css';


import './style.css';

import video from '../assets/videos/mainVideo.mp4';


import logo from '../assets/logo.PNG';
import IG1 from '../assets/IG1.png';

import IG3 from '../assets/IG3.png';
import IG4 from '../assets/IG4.png';
import IG5 from '../assets/IG5.png';
import IG6 from '../assets/IG6.png';

import IG8 from '../assets/IG8.png';
import IG9 from '../assets/IG9.png';
import IG10 from '../assets/IG10.png';
import IG11 from '../assets/IG11.png';
import IG12 from '../assets/IG12.png';
import IG13 from '../assets/IG13.png';

import IG15 from '../assets/IG15.png';
import IG16 from '../assets/IG16.png';
import IG17 from '../assets/IG17.png';
import IG18 from '../assets/IG18.png';




const Header = () => {

   
  

    return (
        <div className='container  my-5'>
            <div className="Logo text-center mb-3">
                <img src={logo} alt="logo" class="rounded-circle"
                    style={{
                        width: '10%'
                    }}
                />
            </div>

            <div className="Logo-text text-center">
                <h5> Nature Essence</h5>
                <p>Start living healthier & happier with Nature Essence.</p>
            </div>

            <div className="social text-center my-4">
                <div className="icon mx-3">
                    <a href="https://www.facebook.com/natureessence/" >
                        <TbBrandFacebook size={25} />
                    </a>
                </div>
                <div className="icon mx-3">
                    <a href="https://www.instagram.com/nature_essence.uk/?igshid=ZmI3MzJjNWI%3D">
                        <TbBrandInstagram size={25} />
                    </a>
                </div>
                <div className="icon mx-3">
                    <a href="https://www.linkedin.com/in/joshua-adetunji-479108157/">
                        <TbBrandLinkedin size={25} />
                    </a>

                </div>
                <div className="icon mx-3">
                    <a href="https://t.me/natureessence">
                        <TbBrandTelegram size={25} />
                    </a>
                </div>
                <div className="icon mx-3">
                    <a href="https://www.tiktok.com/@natureessence_offical">
                        <TbBrandTiktok size={25} />
                    </a>
                </div>
                <div className="icon mx-3">
                    <a href="https://twitter.com/JoshuaAHealth">
                        <TbBrandTwitter size={25} />
                    </a>
                </div>
            </div>
            <div className="boxes text-center mx-auto" >
                <div className="booking card my-2">
                    <button type="button" class="btn" data-toggle="modal" data-target="#firstModal" style={{backgroundColor: '#41644A'}}>
                        Contact Us
                    </button>
                </div>
                
                <form >
                    <div class="modal fade" id="firstModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                        <div class="modal-dialog modal-dialog-centered" role="document">
                            <div class="modal-content">
                                <div class="modal-header">
        
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div class="modal-body newsletter-body " >
                                    <h6 className="contact-text">Contact Us </h6>
                                    <p4 className="enquire-text font-weight-light">Feel free to email with any enquires</p4>

                                </div>
                                <div class="modal-footer mx-auto ">
                                    <div className="contact-email">natureessence@email.com</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>


            <div className="recent-posts text-center row">
                <div className="border  mx-auto mb-4" />
            </div>
            <div class="container" style={{ maxWidth: '700px' }}>
                <div class="row">
                    <div class="container mb-3" >
                        <video controls loop>
                            <source src={video} type="video/mp4" />
                        </video>
                    </div>
                 
                    <div class="col-4 g-2 content">
                        <a href="https://www.instagram.com/p/CqtMEdIAEYo/">
                            <img src={IG1} alt="insta post" class="w-100" />
                            <div class="overlay"></div>
                        </a>
                    </div>
                    <div class="col-4 g-2 content">
                        <a href="https://www.instagram.com/p/CqlpdyrtzqN/">
                            <img src={IG3} alt="insta post"  class="w-100" />
                            <div class="overlay"></div>
                        </a>
                    </div>
                    <div class="col-4 g-2 content">
                        <a href="https://www.instagram.com/p/CrZIsucNpzW/">
                            <img src={IG4} alt="insta post"  class="w-100" />
                            <div class="overlay"></div>
                        </a>
                    </div>
                    <div class="col-4 g-2 content">
                        <a href="https://www.instagram.com/p/CrRZO2TtIeE/">
                            <img src={IG5} alt="insta post"  class="w-100" />
                            <div class="overlay"></div>
                        </a>
                    </div>
                    <div class="col-4 g-2 content">
                        <a href="https://www.instagram.com/p/CrNrZJmP5ZG/">
                            <img src={IG6} alt="insta post" class="w-100" />
                            <div class="overlay"></div>
                        </a>
                    </div>
                    <div class="col-4 g-2 content">
                        <a href="https://www.instagram.com/p/CrDxiaoOCaF/">
                            <img src={IG8} alt="insta post" class="w-100" />
                            <div class="overlay"></div>
                        </a>
                    </div>
                    <div class="col-4 g-2 content">
                        <a href="https://www.instagram.com/p/CrDq1cGtopM/">
                            <img src={IG9} alt="insta post"  class="w-100" />
                            <div class="overlay"></div>
                        </a>
                    </div>
                    <div class="col-4 g-2 content">
                        <a href="https://www.instagram.com/p/CrB0lpFtvvG/">
                            <img src={IG10} alt="insta post" class="w-100" />
                            <div class="overlay"></div>
                        </a>
                    </div>
                    <div class="col-4 g-2 content">
                        <a href="https://www.instagram.com/p/Cqu6c_aJu_1/">
                            <img src={IG11} alt="insta post" class="w-100" />
                            <div class="overlay"></div>
                        </a>
                    </div>
                    <div class="col-4 g-2 content">
                        <a href="https://www.instagram.com/p/CqqnoKcNjfT/">
                            <img src={IG12} alt="insta post"  class="w-100" />
                            <div class="overlay"></div>
                        </a>
                    </div>
                    <div class="col-4 g-2 content">
                        <a href="https://www.instagram.com/p/CqpmiooNejP/">
                            <img src={IG13} alt="insta post"  class="w-100" />
                            <div class="overlay"></div>
                        </a>
                    </div>
                    <div class="col-4 g-2 content">
                        <a href="https://www.instagram.com/p/CqmyAtJNx6C/">
                            <img src={IG15} alt="insta post"  class="w-100" />
                            <div class="overlay"></div>
                        </a>
                    </div>
                    <div class="col-4 g-2 content">
                        <a href="https://www.instagram.com/p/Cqi9bDLslzz/">
                            <img src={IG16} alt="insta post"  class="w-100" />
                            <div class="overlay"></div>
                        </a>
                    </div>
                    <div class="col-4 g-2 content">
                        <a href="https://www.instagram.com/p/Cqh-5Vnthln/">
                            <img src={IG17} alt="insta post"  class="w-100" />
                            <div class="overlay"></div>
                        </a>
                    </div>
                    <div class="col-4 g-2 content">
                        <a href="https://www.instagram.com/p/CqfMYumNg2U/">
                            <img src={IG18} alt="insta post"  class="w-100" />
                            <div class="overlay"></div>
                        </a>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Header