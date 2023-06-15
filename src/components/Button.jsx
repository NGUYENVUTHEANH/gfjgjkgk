import React, { Component } from 'react';

class Button extends Component {
    render() {
        return (
            <Button
                style={{ background: this.props.background, color: this.props.color }}
            >
                {this.props.text}
            </Button>
        );
    }
}

export default Button;