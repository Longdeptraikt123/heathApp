import React from 'react'
import './Boxes.scss'
import image1 from '../img/image1.jpg'
import image2 from '../img/image2.jpg'
import image3 from '../img/image3.jpg'
import image4 from '../img/image4.jpg'
import image5 from '../img/image7.jpg'
import image6 from '../img/image6.jpg'
import image7 from '../img/image7.jpg'
import image8 from '../img/image5.jpg'
import { IoIosArrowUp } from 'react-icons/io';

const Boxes = () => {
    const scrollTop = () => {
        window.scrollTo(0, 0)
    }


    const data = [
        {
            image: image1,
            text: '5.21 Morning'
        },
        {
            image: image2,
            text: '5.21 Lunch'
        },
        {
            image: image3,
            text: '5.21 Dinner'
        },
        {
            image: image4,
            text: '5.21 Snack'
        },
        {
            image: image5,
            text: '5.20 Morning'
        },
        {
            image: image6,
            text: '5.20 Lunch'
        },
        {
            image: image7,
            text: '5.20 Dinner'
        },
        {
            image: image8,
            text: '5.20 Snack'
        },
    ]
    return (
        <div className='boxes'>
            <div className='boxes_wrapper'>
                {
                    data.map(item => {
                        return (
                            <div className='boxes_item'>
                                <img src={item.image} alt='#' />
                                <div className='boxes_text'>
                                    <span>{item.text}</span>
                                </div>
                            </div>
                        )
                    })
                }
                <div className='boxes_btn'>
                    <button>記録をもっと見る</button>

                </div>
            </div>
            <div onClick={scrollTop} className='boxes_scroll'>
                <IoIosArrowUp className='boxes_icon' />
            </div>
        </div>
    )
}

export default Boxes