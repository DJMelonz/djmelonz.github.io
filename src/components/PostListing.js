import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

import PostTime from './PostTime';

const PostListing = ({ slug, title, posted, description, timeToRead }) => (
  <article>
    <Link to={slug} className='block py-4'>
      <h2>{title}</h2>

      <PostTime
        posted={posted}
        timeToRead={timeToRead} />

      <p>{description}</p>
    </Link>
  </article>
);

PostListing.propTypes = {
  slug: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  posted: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  timeToRead: PropTypes.number.isRequired
};

export default PostListing;
