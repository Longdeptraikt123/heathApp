import React from 'react'
import './Record.scss'
import image1 from '../img3/img2.jpg'
import image2 from '../img3/img3.jpg'
import image3 from '../img3/img1.jpg'

function Record() {
    const data = [
        {
            heading: 'BODY RECORD',
            text: '自分のカラダの記録',
            image: image1
        },
        {
            heading: 'MY EXERCISE',
            text: '自分の運動の記録',
            image: image2
        },
        {
            heading: 'MY DIARY',
            text: '自分の日記',
            image: image3
        }
    ]
    return (
        <div className='record'>
            <div className='record_wrapper'>
                {data.map(item => {
                    return (
                        <div className='record_item'>
                            <div className='record_img'>
                                <img src={item.image} alt='' />
                            </div>
                            <div className='record_text'>
                                <h3>{item.heading}</h3>
                                <span>{item.text}</span>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Record