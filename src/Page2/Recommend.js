import React from 'react'
import './Recommend.scss';

function Recommend() {
    const data = [
        {
            heading: 'RECOMMENDED COLUMN',
            text: 'オススメ'
        },
        {
            heading: 'RECOMMENDED DIET',
            text: 'ダイエット'
        },
        {
            heading: 'RECOMMENDED BEAUTY',
            text: '美容'
        },
        {
            heading: 'RECOMMENDED HEALTH',
            text: '健康'
        }
    ]
    return (
        <div className='rec'>
            <div className='rec_wrapper'>
                {data.map(item => {
                    return (
                        <div className='rec_item'>
                            <h2>
                                {item.heading}
                            </h2>
                            <hr />
                            <p>{item.text}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Recommend