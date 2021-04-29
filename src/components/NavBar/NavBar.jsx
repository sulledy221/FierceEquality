import React, { Component } from 'react'
import { Input, Menu } from 'semantic-ui-react'
import FlagMenu from '../FlagMenu/FlagMenu'

export default class NavBar extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
      const { activeItem } = this.state
      
      return (
          <Menu secondary className="nav">
              <FlagMenu />
        <Menu.Item
          name='Welcome to Equality Legacy'
          active={activeItem === 'home'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='About'
          active={activeItem === 'home'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='Safe Zone Link'
          active={activeItem === 'home'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='Emergency'
          active={activeItem === 'home'}
          onClick={this.handleItemClick}
        />
        <Menu.Menu position='right'>
          <Menu.Item
            name='Sign In'
            active={activeItem === 'logout'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='Sign Up'
            active={activeItem === 'logout'}
            onClick={this.handleItemClick}
          />
        </Menu.Menu>
          <Menu.Item
            name='logout'
            active={activeItem === 'logout'}
            onClick={this.handleItemClick}
          />
      </Menu>
    )
  }
}
