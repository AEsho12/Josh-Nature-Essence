import React, { useState } from 'react';
import emailjs from '@emailjs/browser';



import { TbBrandTelegram, TbBrandInstagram, TbBrandTiktok, TbBrandFacebook, TbBrandLinkedin, TbBrandTwitter } from 'react-icons/tb';
import { AiOutlineMail, AiOutlineShoppingCart, AiOutlineArrowUp } from 'react-icons/ai';
import { GrContact } from 'react-icons/gr';
import { SlCalender } from 'react-icons/sl';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import './style.css';

import video from '../assets/videos/mainVideo.mp4';


import logo from '../assets/logo.PNG';
import IG1 from '../assets/IG1.png';
import IG2 from '../assets/IG2.png';
import IG3 from '../assets/IG3.png';
import IG4 from '../assets/IG4.png';
import IG5 from '../assets/IG5.png';
import IG6 from '../assets/IG6.png';
import IG7 from '../assets/IG7.png';
import IG8 from '../assets/IG8.png';
import IG9 from '../assets/IG9.png';
import IG10 from '../assets/IG10.png';
import IG11 from '../assets/IG11.png';
import IG12 from '../assets/IG12.png';
import IG13 from '../assets/IG13.png';
import IG14 from '../assets/IG14.png';
import IG15 from '../assets/IG15.png';
import IG16 from '../assets/IG16.png';
import IG17 from '../assets/IG17.png';
import IG18 from '../assets/IG18.png';
import IG19 from '../assets/IG19.png';
import IG20 from '../assets/IG20.png';
import IG21 from '../assets/IG21.png';
import IG22 from '../assets/IG22.png';
import IG23 from '../assets/IG23.png';
import IG24 from '../assets/IG24.png';



const Header = () => {

    const sendEmail = (e) => {
        e.preventDefault();


        emailjs.sendForm('service_5fkjdzt', 'template_n8jatde', e.target, 'UGMR-p7TjS5eLHXFa')
        emailjs.sendForm('service_5fkjdzt', 'template_i5tvyg9', e.target, 'UGMR-p7TjS5eLHXFa')
    }
    const notify = () => {
        toast.success('You have successfully subscribed!', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    }
    const [visible, setVisible] = useState(false)

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300) {
            setVisible(true)
        }
        else if (scrolled <= 300) {
            setVisible(false)
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
            /* you can also use 'auto' behaviour
               in place of 'smooth' */
        });
    };

    window.addEventListener('scroll', toggleVisible);

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
                
                <form onSubmit={sendEmail}>
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
                            <img src={IG1} class="w-100" />
                            <div class="overlay"></div>
                        </a>
                    </div>
                    <div class="col-4 g-2 content">
                        <a href="https://www.instagram.com/p/CqlpdyrtzqN/">
                            <img src={IG3} class="w-100" />
                            <div class="overlay"></div>
                        </a>
                    </div>
                    <div class="col-4 g-2 content">
                        <a href="https://www.instagram.com/p/CrZIsucNpzW/">
                            <img src={IG4} class="w-100" />
                            <div class="overlay"></div>
                        </a>
                    </div>
                    <div class="col-4 g-2 content">
                        <a href="https://www.instagram.com/p/CrRZO2TtIeE/">
                            <img src={IG5} class="w-100" />
                            <div class="overlay"></div>
                        </a>
                    </div>
                    <div class="col-4 g-2 content">
                        <a href="https://www.instagram.com/p/CrNrZJmP5ZG/">
                            <img src={IG6} class="w-100" />
                            <div class="overlay"></div>
                        </a>
                    </div>
                    <div class="col-4 g-2 content">
                        <a href="https://www.instagram.com/p/CrDxiaoOCaF/">
                            <img src={IG8} class="w-100" />
                            <div class="overlay"></div>
                        </a>
                    </div>
                    <div class="col-4 g-2 content">
                        <a href="https://www.instagram.com/p/CrDq1cGtopM/">
                            <img src={IG9} class="w-100" />
                            <div class="overlay"></div>
                        </a>
                    </div>
                    <div class="col-4 g-2 content">
                        <a href="https://www.instagram.com/p/CrB0lpFtvvG/">
                            <img src={IG10} class="w-100" />
                            <div class="overlay"></div>
                        </a>
                    </div>
                    <div class="col-4 g-2 content">
                        <a href="https://www.instagram.com/p/Cqu6c_aJu_1/">
                            <img src={IG11} class="w-100" />
                            <div class="overlay"></div>
                        </a>
                    </div>
                    <div class="col-4 g-2 content">
                        <a href="https://www.instagram.com/p/CqqnoKcNjfT/">
                            <img src={IG12} class="w-100" />
                            <div class="overlay"></div>
                        </a>
                    </div>
                    <div class="col-4 g-2 content">
                        <a href="https://www.instagram.com/p/CqpmiooNejP/">
                            <img src={IG13} class="w-100" />
                            <div class="overlay"></div>
                        </a>
                    </div>
                    <div class="col-4 g-2 content">
                        <a href="https://www.instagram.com/p/CqmyAtJNx6C/">
                            <img src={IG15} class="w-100" />
                            <div class="overlay"></div>
                        </a>
                    </div>
                    <div class="col-4 g-2 content">
                        <a href="https://www.instagram.com/p/Cqi9bDLslzz/">
                            <img src={IG16} class="w-100" />
                            <div class="overlay"></div>
                        </a>
                    </div>
                    <div class="col-4 g-2 content">
                        <a href="https://www.instagram.com/p/Cqh-5Vnthln/">
                            <img src={IG17} class="w-100" />
                            <div class="overlay"></div>
                        </a>
                    </div>
                    <div class="col-4 g-2 content">
                        <a href="https://www.instagram.com/p/CqfMYumNg2U/">
                            <img src={IG18} class="w-100" />
                            <div class="overlay"></div>
                        </a>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Header