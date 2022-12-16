import React, { useEffect, useState } from 'react'
import './MainSection.css'
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar'

const MainSection = (props) => {
    const [click1,setCLick1]=useState(false);
    const [video,setVideos]=useState([]);
    const [progress, setProgress] = useState(0)
    
    const apiKey=process.env.REACT_APP_API_KEY
    

    useEffect(()=>{
        setCLick1(props.click)
    },[props.click])

    

    useEffect(()=>{
        fetchVideo()
    },[props.search])

    const fetchVideo=async()=>{
        setProgress(20)
        let url=`https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${props.search?props.search:props.category}&key=${apiKey}&maxResults=12`

        let data=await fetch(url)
        let parseData=await data.json()
        setProgress(100)
        setVideos(parseData.items)
    }

    
    return (
        <>
        <LoadingBar
                color='#f11946'
                progress={progress}
                onLoaderFinished={() => setProgress(0)}
            />
        <div className={`section-container ${click1?'section-container-toggle':''}`}>
            
            <nav className='sec-navbar'>
                <ul>
                    <li><Link className='sec-nav-link' to='/'>All</Link></li>
                    <li><Link className='sec-nav-link' to='/cricket'>Cricket</Link></li>
                    <li><Link className='sec-nav-link' to='/music'>Music</Link></li>
                    <li><Link className='sec-nav-link' to='/physics'>Physics</Link></li>
                    <li><Link className='sec-nav-link' to='computerhardware'>Computer Hardware</Link></li>
                    <li><Link className='sec-nav-link' to='/adventure'>Adventure</Link></li>
                    <li><Link className='sec-nav-link' to='/football'>Football</Link></li>
                    <li><Link className='sec-nav-link' to='/machines'>Machines</Link></li>
                    <li><Link className='sec-nav-link' to='/drawing'>Drawing</Link></li>
                    <li><Link className='sec-nav-link' to='/comedy'>Comedy</Link></li>
                    <li><Link className='sec-nav-link' to='/movies'>Movies</Link></li>
                    

                </ul>
            </nav>
            <div className='video-section'>

                {video && video.map((element)=>{
                    return <VideoCard click={click1} src={element.id.videoId} title={element.snippet.title} channelid={element.snippet.channelId} />
                })}

                
                
         

            </div>
        </div>
        </>
    )
}

export default MainSection
