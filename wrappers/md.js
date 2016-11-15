import React from 'react'
import moment from 'moment'
import Helmet from "react-helmet"
import ReadNext from '../components/ReadNext'
import Bio from 'components/Bio'
import { config } from 'config'
import { prefixLink } from 'gatsby-helpers'

import layout from 'css/layout.module.scss';

class MarkdownWrapper extends React.Component {
  render() {
    const { route } = this.props
    const post = route.page.data

    return (
      <div className={`markdown ${layout.l_container}`}>
        <Helmet
          title={`${post.title} | ${config.blogTitle}`}
          />

        <h1>{post.title}</h1>

        <p>
          <em>
            {moment(post.date).format('Do MMMM YYYY')}
          </em>
        </p>

        <div dangerouslySetInnerHTML={{ __html: post.body }} />

        <ReadNext post={post} pages={route.pages} />
      </div>
    )
  }
}

MarkdownWrapper.propTypes = {
  route: React.PropTypes.object,
}

export default MarkdownWrapper
