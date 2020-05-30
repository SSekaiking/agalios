import React, { useEffect, useRef } from 'react'
import { database } from '../firebase';

var roomRef = database.ref('rooms/' + 4);

function sendTime(time) {
    roomRef.set({
        "currentTime": (time ? time : 0),
    });
}
export default function room() {
    const videoRef = useRef(null);

    useEffect(() => {
        videoRef.current.play();
        const interval = setInterval(() => {
            sendTime(videoRef.current.currentTime);
        }, 5000);
        roomRef.on('value', function (snapshot) {
            videoRef.current.currentTime = snapshot.val().currentTime;
        });

        return () => {
            clearInterval(interval);
        };
    }, []);

    return (
        <div>
            <video autoPlay ref={videoRef} controls>
                <source src="https://archive.org/download/nasa_eclips_022309/Nasa360_episode7_512kb.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <style jsx>{`
            display: flex;
            height: 100vh;
            video{
                margin: auto;
                width: 840px;
                height: auto;
            }
            `}</style>
        </div>
    )
}
