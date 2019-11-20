import React from 'react';
import './style.css';

class PopupContainer extends React.Component {
    render() {
        const {isDisplay} = this.props;
        return(
        <div className={isDisplay ? 'pc-container' : 'pc-container hidden'}>
            {this.props.children}
        </div>
        );
    }
}

export default PopupContainer;