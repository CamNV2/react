import React from 'react';
import './button-admin.scss';

const Button = ({ children, ...otherProps }) => {
    return (
        <button className="btn" {...otherProps}>
            {children}
        </button>
    );
}

export default Button