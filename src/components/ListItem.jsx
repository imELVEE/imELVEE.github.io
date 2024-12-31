import React from 'react';
import PropTypes from 'prop-types';

import "./ListItem.css";

const ListItem = ({ icon, image, title, description, projectLink }) => {
    return (
        <li className="custom-list-item" onClick={(e) => e.stopPropagation()}>
            <a href={projectLink} target="_blank" rel="noopener noreferrer" className="custom-list-link">
                <div className="custom-list-icon">
                    {/* Render either the icon or the image */}
                    {icon && React.cloneElement(icon, { className: 'custom-icon' })}
                    {image && <img src={image} alt={title} className="custom-image" />}
                </div>
                <div className="custom-list-content">
                    <h3>{title}</h3>
                    <p>{description}</p>
                </div>
            </a>
        </li>
    );
};

// Prop validation
ListItem.propTypes = {
    icon: PropTypes.element, // React component for an icon
    image: PropTypes.string, // Path to an image
    title: PropTypes.string.isRequired, // Title for the item
    description: PropTypes.string.isRequired, // Description for the item
    projectLink: PropTypes.string.isRequired, // URL to the repository
};

ListItem.defaultProps = {
    icon: null,
    image: null,
    projectLink: null,
};

export default ListItem;
