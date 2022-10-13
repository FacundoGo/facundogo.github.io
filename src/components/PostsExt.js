import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom'
import './Posts.css'

export default class Posts extends Component {
  render() {
    return (
<Card style={{ width: '13rem' }}>
<Link to={`/${this.props.name}`}></Link>
    <Card.Footer >
    <a href className="card-label">
    <span className="emoji" role="img" aria-label={this.props.emoji}> {this.props.emoji}</span> 
    <a href="https://www.linkedin.com/in/facundogomezvera/" target="_blank" rel="noreferrer">{this.props.name}</a>
    </a>
    </Card.Footer>
  </Card>
    )
  }
}
