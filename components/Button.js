import React from 'react'

export default function Button(props) {

    return (
        <button {...props}>
            {props.children}
            <style jsx>{`
                button{
                font-size: 22px;
                color: #ffffff;
                border: none;    
                outline: none;
                cursor: pointer;
                padding: 10px 20px;
                position: relative;
                border: 1px solid #f33d00;
                border-radius: 37px;
                background: #f33d001c;
            }
            button::before, button::after {
                    content: '';
                    z-index: 0;
                    margin: -2%;
                    border: 1px solid #f33d00;
                    border-radius: 37px;
                    position: absolute;
                    top: 0;
                    bottom: 0;
                    left: 0;
                    right: 0;
                }
                button::before{
                        clip-path: inset(0% calc(100% - 15px) calc(100% - 15px) 0%);
                }
                button:hover::before{
                    animation: clipMeBefore 0.7s forwards 1;
                }
                @keyframes clipMeBefore {
                    0% {
                        clip-path: inset(0% calc(100% - 15px) calc(100% - 15px) 0%);
                    }
                    100% {
                        clip-path: inset(0% 40% 40% 0%);
                        border-width: 3px;
                    }
                }
                button::after{
                    clip-path: inset(calc(100% - 15px) 0% 0% calc(100% - 15px));
                }
                button:hover::after{
                    animation: clipMeAfter 0.7s forwards 1;
                }
                @keyframes clipMeAfter {
                    0% {
                        clip-path: inset(calc(100% - 15px) 0% 0% calc(100% - 15px));
                    }
                    100% {
                        clip-path: inset(40% 0% 0% 40%);
                        border-width: 3px;
                    }
                }
                
            `}</style>
        </button>
    )
}
