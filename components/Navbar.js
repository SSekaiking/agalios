import React from 'react'
import config from '../web.config'
import Link from 'next/link'

export default function Navbar() {
    return (
        <div>
            <div className="navbar">
                <div className="right">
                    <span>Login to your Account</span>
                </div>
            </div>
            <Link href="/">
                <a className="button">
                    <div className="logo"></div>
                </a>
            </Link>
            
            <style jsx>{`
                .navbar{
                    height: 30px;
                    width: 100%;
                    background: #1c1d1d;
                    padding: 4px 10vw; 
                }
                .navbar .right{
                    float: right;
                }
                .logo{
                    background: url("${config.logo}");
                    background-repeat: no-repeat;
                    background-size: contain;
                    height: 75px;
                    width: 300px;
                    margin: 40px auto;
                }
            `}</style>
        </div>
    )
}
