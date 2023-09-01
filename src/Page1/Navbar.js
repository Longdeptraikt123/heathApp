import React, { useState } from 'react'
import './Navbar.scss'
import { ImProfile } from 'react-icons/im';
import { LiaMedalSolid } from 'react-icons/lia';
import { TbMessageReport } from 'react-icons/tb';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineClose } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import logo from '../img/logo.png'
const Navbar = () => {
    const [toggle, isToggle] = useState(false)
    return (
        <div className='navbar'>
            <div className='navbar_logo'>
                <Link to='/'><img src={logo} alt='#' /></Link>
            </div>
            <div className='navbar_links'>

                <div className='navbar_link'>
                    <ImProfile className='navbar_link-icon' />
                    <Link to='/page3'>自分の記録</Link >
                </div>

                <div className='navbar_link'>
                    <LiaMedalSolid className='navbar_link-icon' />
                    <a href='#a'>チャレンジ</a >
                </div>

                <div className='navbar_link'>
                    <TbMessageReport className='navbar_link-icon' />
                    <a href='#a'>お知らせ</a >
                </div>
                <div className='navbar_link navbar_links_hamburger_small-screen'>
                    <GiHamburgerMenu
                        className='navbar_link-icon'
                        onClick={(e) => {
                            e.preventDefault()
                            isToggle(!toggle)
                        }} />

                    {toggle && (
                        <div className='navbar_links_main_small-screen'>
                            <AiOutlineClose className='navbar_links_main_small-screen_close'
                                fontSize={25}
                                onClick={(e) => {
                                    e.preventDefault()
                                    isToggle(false)
                                }} />
                            <ul className='navbar_links_main_small-screen-ul'>
                                <li className='navbar_link'><Link onClick={() => isToggle(false)} to='/page3'>My record</Link></li>
                                <li className='navbar_link'><a onClick={() => isToggle(false)} href='#about'>体重グラフ</a></li>
                                <li className='navbar_link'><a onClick={() => isToggle(false)} href='#offer'>目標</a></li>
                                <li className='navbar_link'><a onClick={() => isToggle(false)} href='#blog'>選択中のコース</a></li>
                                <li className='navbar_link'><Link onClick={() => isToggle(false)} to='/page2'>Column list</Link></li>
                                <li className='navbar_link'><a onClick={() => isToggle(false)} href='#footer'>設定</a></li>
                            </ul>
                        </div>
                    )}
                </div>
            </div>


        </div>
    )
}

export default Navbar