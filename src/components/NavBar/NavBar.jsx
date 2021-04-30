import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Input, Menu, Dropdown } from 'semantic-ui-react'
import FlagMenu from '../FlagMenu/FlagMenu'
import {flags} from '../FlagMenu/config'



export default class NavBar extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name })
    this.props.push(name)
  }

  render() {
      const { activeItem } = this.state
      
      return (
        <nav>
        <ul className="ul">
        <li><Dropdown placeholder='Identity' search selection options={flags} /></li>
          <li><Link to="/">Welcome to Fierce Equality</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/safezone">Safe Zone</Link></li>
          <li><Link to="/emergency">Emergency</Link></li>
          <li><Link to="/signup">Sign Up!</Link></li>
          <li><Link to="/login">Login!</Link></li>
          <li><Link to="/flagpage">flagpage</Link></li>
        </ul>
      </nav>
    )
  }
}
