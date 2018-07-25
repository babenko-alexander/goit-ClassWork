import React from 'react';
import PropTypes from 'prop-types';

const Post = ({title, text, likes, date}) => {
    // console.log('props settings', props);
    return (
        <div>
            <h2>{title}</h2>
            <p>{text}</p>
            <p>Likes: {likes}</p>
            <p>Publication date: {date}</p>
        </div>
    )
};
Post.propTypes = {
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    likes: PropTypes.number,
    date: PropTypes.string,
};
Post.defaultProps = {
    likes: 0,
    date: `${Date.now()}`,
};

export default Post;


