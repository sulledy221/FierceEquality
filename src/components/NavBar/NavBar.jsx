import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Input, Menu, Dropdown, Icon } from 'semantic-ui-react'
import {flagLinks} from './config'
import './NavBar.css';




export default class NavBar extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name })
  }

  render() {
      const { activeItem } = this.state
      const {user, handleLogout} = this.props
      console.log('user -->', user)
      return (
        <nav>
        <ul className="ul">
        <li><Dropdown placeholder='Identity' selection options={flagLinks} /></li>
          <li><Link to="/">Welcome to Fierce Equality</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/safezone">Safe Zone</Link></li>
          <li><Link to="/emergency">Emergency</Link></li>
          {
            user ? <li><Link to="/" onClick={handleLogout} >Logout?</Link></li> : (
              <>
              <li><Link to="/signup">Sign Up!</Link></li>
              <li><Link to="/login">Login!</Link></li>
              </>
            )
          }
          
        </ul>
      </nav>
    )
  }
}
