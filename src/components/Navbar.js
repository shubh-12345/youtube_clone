import React, { useState } from 'react'
import AsideBar from './AsideBar'
import MainSection from './MainSection'
import './Navbar.css'


const Navbar = (props) => {

    const [search, setSearch] = useState("")






    const getInputValue = () => {
        console.log(document.getElementById('inputField').value)
        setSearch(document.getElementById('inputField').value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
    }
    return (
        <>

            <nav className="navbar">
                <div className="navbar-container">
                    <button className='nav-item bars bars-btn' ><i className="fa-solid fa-bars"></i></button>
                    <div className="logo"><img src={require('../images/logo2.jpg')} alt="logo" /></div>

                    <form onSubmit={handleSubmit}>
                        <input className="form-control" id='inputField' type="search" placeholder="Search" />
                        <button className="form-btn hovertext" data-hover='Search' type='submit' onClick={getInputValue}><i className="fa-sharp fa-solid fa-magnifying-glass" ></i></button>
                    </form>

                    <ul className='nav-menu'>
                        <div className='nav-item right hovertext' data-hover="Create"><li ><i className="fa-solid fa-video"></i></li></div>
                        <div className='nav-item right hovertext' data-hover="Notifications"><li ><i className="fa-solid fa-bell"></i></li></div>
                        <div className='nav-item right'><li ><i className="fa-solid fa-circle"></i></li></div>
                    </ul>

                </div>
            </nav>
            <AsideBar />
            <MainSection search={search} category={props.category} />
        </>
    )
}

export default Navbar
