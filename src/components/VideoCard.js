import React from 'react'
import { useState,useEffect } from 'react';
import './VideoCard.css'

const VideoCard = (props) => {
    
    const [channelImage,setChannelImage]=useState("");
    const apiKey=process.env.REACT_APP_API_KEY

    

    useEffect(()=>{
        fetchChannelImage()
    },[props.channelid])

    const fetchChannelImage=async()=>{
        let url=`https://youtube.googleapis.com/youtube/v3/channels?part=snippet&id=${props.channelid}&key=${apiKey}`

        let data=await fetch(url)
        let parseData=await data.json()
        console.log(parseData)
        setChannelImage(parseData?.items[0]?.snippet?.thumbnails?.medium?.url)
    }
    return (
        <div className='frame-container'><iframe className={`frame `} title='myvideo1' allow='autoplay' src={`https://www.youtube.com/embed/${props.src}` } allowFullScreen  ></iframe>
            <div className={`video-text `}>
                <div className={`channelimg `}><img  src={channelImage} /></div>
                <div className={` video-title`}>{props.title.slice(0,60)}</div>
                </div>
        </div>
    )
}


export default VideoCard
