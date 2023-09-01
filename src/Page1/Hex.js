import React from 'react'
import './Hex.scss'
import { GiKnifeFork } from 'react-icons/gi';
import { BiCoffeeTogo } from 'react-icons/bi';

const Hex = () => {
    return (
        <div className='hex'>
            <div className='hex_item'>
                <GiKnifeFork className='hex_icon' />
                <span>Morning</span>
            </div>
            <div className='hex_item'>
                <GiKnifeFork className='hex_icon' />
                <span>Lunch</span>
            </div>
            <div className='hex_item'>
                <GiKnifeFork className='hex_icon' />
                <span>Dinner</span>
            </div>
            <div className='hex_item'>
                <BiCoffeeTogo className='hex_icon' />
                <span>Snack</span>
            </div>
        </div>
    )
}

export default Hex