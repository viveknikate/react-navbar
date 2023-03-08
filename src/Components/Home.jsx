import React from 'react'
import { useState } from 'react';

const Home = () => {

    const[color,setColor]=useState('black');
    
    return (
        <>
            <h1>HomePage</h1>
            <h2>My Favorite color is ::{' '} 
                <span id='demo'>
                    {color}
                </span>
            </h2>
            <button 
                    onClick={()=>{
                                    setColor('Orange');
                                    document.getElementById('demo').style.color='orange';
                                }}
                    style={{backgroundColor:'orange'}}
            >
                Orange
            </button>

            <button 
                    onClick={()=>
                                {
                                    setColor('Green');
                                    document.getElementById('demo').style.color='green';
                                }}
                    style={{backgroundColor:'rgba(0,255,0,.5)'}}
                    
                >
                    Green
                </button>

            <button 
                    onClick={()=>{
                                    setColor('Blue');
                                    document.getElementById('demo').style.color='blue';
                                }
                            }
                    style={{backgroundColor:'rgba(0,0,255,.5)'}}
                >
                    Blue
                </button>

            <button 
                    onClick={()=>{
                                        setColor('Pink');
                                        document.getElementById('demo').style.color='Pink'
                                }
                            }
                    style={{backgroundColor:'pink'}}
                >
                    Pink
                </button>

            <button 
                    onClick={()=>{
                                    setColor('Red');
                                    document.getElementById('demo').style.color='red';
                                }   
                            }
                    style={{backgroundColor:'red'}}
                >
                    Red
                </button>
        </>
    );
}
export default Home
