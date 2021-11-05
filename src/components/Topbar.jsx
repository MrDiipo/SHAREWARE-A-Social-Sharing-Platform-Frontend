import React, { Component } from 'react'
import SHAREWARE from "../assets/SHAREWARE.jpg"
import { Link } from 'react-router-dom'

export class Topbar extends Component {
    render() {
        return (
            <div className="bg-white shadow-sm mb-2">
            <div className="container">
            <nav className="navbar navbar-light navbar-expand">
            <Link to="/" className="navbar-brand">
            <img src={SHAREWARE} width="60" alt="Shareware"/>SHAREWARE
            </Link>
            <ul className="nav navbar-nav ml-auto">
            <li className="nav-item">
                <Link to="/signup" className="nav-link">Sign Up</Link>>
            </li>
            <li className="nav-item">
                <Link to="/login" className="nav-link">Login</Link>
            </li>
            </ul>
            </nav>
            </div>
            </div>
        )
    }
}

export default Topbar
