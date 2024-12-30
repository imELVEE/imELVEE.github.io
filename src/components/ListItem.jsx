import React from 'react';
import PropTypes from 'prop-types';

import "./ListItem.css";

const ListItem = ({ icon, image, title, description, onClick }) => {
    return (
        <li className="custom-list-item" onClick={onClick}>
            <div className="custom-list-icon">
                {/* Render either the icon or the image */}
                {icon && React.cloneElement(icon, { className: 'custom-icon' })}
                {image && <img src={image} alt={title} className="custom-image" />}
            </div>
            <div className="custom-list-content">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </li>
    );
};

// Prop validation
ListItem.propTypes = {
    icon: PropTypes.element, // React component for an icon
    image: PropTypes.string, // Path to an image
    title: PropTypes.string.isRequired, // Title for the item
    description: PropTypes.string.isRequired, // Description for the item
    onClick: PropTypes.func, // Optional click handler
};

ListItem.defaultProps = {
    icon: null,
    image: null,
    onClick: null,
};

export default ListItem;
