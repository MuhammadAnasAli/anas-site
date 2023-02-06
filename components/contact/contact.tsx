import Image from 'next/image';
import React from 'react';
import './contact.css'
import Img from '../../public/contact.png'
import { BsFillTelephoneFill } from 'react-icons/bs'
import { MdEmail, MdLocationOn } from 'react-icons/md'


let data = [
    { Icon: <BsFillTelephoneFill className='contact_icon' />, text: '0341-1128013' },
    { Icon: <MdEmail className='contact_icon' />, text: 'macubesoft@gmail.com' },
    { Icon: <MdLocationOn className='contact_icon' />, text: 'Macubesoft | Rehmat Mall Main Road Korangi No.4 Karachi </br> https://goo.gl/maps/m4Cgqn3LXmKNGx5X6' },
]
function Contact() {
    return (
        <div className='contact' id='contact'>
            <h2>Contact US</h2>
            <div className={`contact_div`}>
                <div className='contact_first_div'>
                    {
                        data.map((val, index) => {
                            return (
                                <div className='contact_individual' key={index}>
                                    {val.Icon}
                                    <p className='contact_text'>{val.text}</p>
                                </div>
                            )
                        })
                    }
                </div>
                <div className='contact_second_div'>
                    <Image src={Img} alt='img' className='contact_img' />
                </div>
            </div>
        </div>
    );
}

export default Contact;
