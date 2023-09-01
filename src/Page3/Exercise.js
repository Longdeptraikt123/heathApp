import React from 'react'
import './Exercise.scss'
import { IoIosArrowUp } from 'react-icons/io';

const Exercise = () => {
    const scrollTop = () => {
        window.scrollTo(0, 0)
    }
    return (
        <div className='exercise'>
            <div className='exercise_wrapper'>
                <div className='exercise_heading'>
                    <span>MY <br /> EXERCISE</span>
                    <p>2021.05.21</p>
                </div>
                <div className='exercise_table'>

                    <div className='exercise_table-box'>

                        <div className='exercise_table-item'>

                            <div className='exercise_table-text'>
                                <span>家事全般（立位・軽い）</span>
                                <p>26kcal</p>
                            </div>

                            <div className='exercise_table-minutes'>
                                <span>10 min</span>
                            </div>

                        </div>

                        <div className='exercise_table-item'>

                            <div className='exercise_table-text'>
                                <span>家事全般（立位・軽い）</span>
                                <p>26kcal</p>
                            </div>

                            <div className='exercise_table-minutes'>
                                <span>10 min</span>
                            </div>

                        </div>
                        <div className='exercise_table-item'>

                            <div className='exercise_table-text'>
                                <span>家事全般（立位・軽い）</span>
                                <p>26kcal</p>
                            </div>

                            <div className='exercise_table-minutes'>
                                <span>10 min</span>
                            </div>

                        </div>
                        <div className='exercise_table-item'>

                            <div className='exercise_table-text'>
                                <span>家事全般（立位・軽い）</span>
                                <p>26kcal</p>
                            </div>

                            <div className='exercise_table-minutes'>
                                <span>10 min</span>
                            </div>

                        </div>

                    </div>

                    <div className='exercise_table-box'>

                        <div className='exercise_table-item'>

                            <div className='exercise_table-text'>
                                <span>家事全般（立位・軽い）</span>
                                <p>26kcal</p>
                            </div>

                            <div className='exercise_table-minutes'>
                                <span>10 min</span>
                            </div>

                        </div>

                        <div className='exercise_table-item'>

                            <div className='exercise_table-text'>
                                <span>家事全般（立位・軽い）</span>
                                <p>26kcal</p>
                            </div>

                            <div className='exercise_table-minutes'>
                                <span>10 min</span>
                            </div>

                        </div>
                        <div className='exercise_table-item'>

                            <div className='exercise_table-text'>
                                <span>家事全般（立位・軽い）</span>
                                <p>26kcal</p>
                            </div>

                            <div className='exercise_table-minutes'>
                                <span>10 min</span>
                            </div>

                        </div>
                        <div className='exercise_table-item'>

                            <div className='exercise_table-text'>
                                <span>家事全般（立位・軽い）</span>
                                <p>26kcal</p>
                            </div>

                            <div className='exercise_table-minutes'>
                                <span>10 min</span>
                            </div>

                        </div>

                    </div>
                    <div onClick={scrollTop} className='exercise_scroll'>
                        <IoIosArrowUp className='exercise_icon' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Exercise