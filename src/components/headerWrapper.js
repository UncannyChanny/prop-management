import React, { Component } from 'react';

class HeaderWrapper extends Component {
    render() {
        return (
            <div className='header-wrapper'>
                 <h1 className = 'header-wrapper_title'>Welome to HOA Manager!</h1>
                 <p className = 'header-wrapper_subtitle'>Please login in to continue</p>
                 {this.props.children}
            </div>
        )
    }
}

export default HeaderWrapper;