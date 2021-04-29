import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Input, Menu } from 'semantic-ui-react'
import FlagMenu from '../FlagMenu/FlagMenu'


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
        <ul>
          <ol><Link to="/">Welcome to Fierce Equality</Link></ol>
          <ol><Link to="/about">About</Link></ol>
          <ol><Link to="/safezone">Safe Zone</Link></ol>
          <ol><Link to="/emergency">Emergency</Link></ol>
          <ol><Link to="/signup">Sign Up!</Link></ol>
          <ol><Link to="/login">Login!</Link></ol>
          <ol><Link to="/">Login!</Link></ol>

        </ul>
      </nav>
    )
  }
}
