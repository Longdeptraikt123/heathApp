import React from 'react'
import './Grid.scss';
import image1 from '../img2/photo1.jpg'
import image2 from '../img2/photo2.jpg'
import image3 from '../img2/photo3.jpg'
import image4 from '../img2/photo4.jpg'
import image5 from '../img2/photo5.jpg'
import image6 from '../img2/photo6.jpg'
import image7 from '../img2/photo7.jpg'
import image8 from '../img2/photo8.jpg'
import { IoIosArrowUp } from 'react-icons/io';

const Grid = () => {
    const scrollTop = () => {
        window.scrollTo(0, 0)
    }
    const data = [
        {
            heading: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…',
            text: '#魚料理  #和食  #DHA',
            img: image1

        },
        {
            heading: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…',
            text: '#魚料理  #和食  #DHA',
            img: image2

        },
        {
            heading: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…',
            text: '#魚料理  #和食  #DHA',
            img: image3

        },
        {
            heading: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…',
            text: '#魚料理  #和食  #DHA',
            img: image4

        },
        {
            heading: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…',
            text: '#魚料理  #和食  #DHA',
            img: image5

        },
        {
            heading: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…',
            text: '#魚料理  #和食  #DHA',
            img: image6

        },
        {
            heading: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…',
            text: '#魚料理  #和食  #DHA',
            img: image7

        },
        {
            heading: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…',
            text: '#魚料理  #和食  #DHA',
            img: image8

        },
    ]
    return (
        <div className='grid'>
            <div className='grid_wrapper'>
                {data.map(item => {
                    return (
                        <div className='grid_item'>
                            <div className='grid_image'>
                                <img src={item.img} alt='' />
                                <div className='grid_text'>
                                    <span>2021.05.17   23:25</span>
                                </div>
                            </div>
                            <p>{item.heading}</p>
                            <span>{item.text}</span>
                        </div>
                    )
                })}
            </div>
            <div className='grid_btn'>
                <button>コラムをもっと見る</button>
            </div>
            <div onClick={scrollTop} className='grid_scroll'>
                <IoIosArrowUp className='grid_icon' />
            </div>
        </div>
    )
}

export default Grid