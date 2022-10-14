import React, { Component } from 'react';

export default class Image extends Component {
  render() {
    if(this.props.lap === "NoImage"){
        throw new Error("Image not found");
    }
    return (
        <img src={this.props.lap} alt="laptop" width='150px' height='200px' />
    )
  }
}
