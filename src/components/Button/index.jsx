import './styles.css'

import { Component } from 'react'

export class Button extends Component {
  render() {
    const { text, onCLick, disabled } = this.props
    return (
      <button onClick={onCLick} className="button" disabled={disabled}>
        {text}
      </ button>
    )
  }
}
