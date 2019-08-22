import React from 'react';
import _ from 'lodash';
import moment from 'moment-strftime';

import components, {Layout} from '../components/index';
import {getPages, Link, safePrefix} from '../utils';

export default class Home extends React.Component {
    render() {
        let display_posts = _.orderBy(getPages(this.props.pageContext.pages, '/posts'), 'frontmatter.date', 'desc');
        return (
            <Layout {...this.props}>
              {_.map(_.get(this.props, 'pageContext.frontmatter.sections'), (section, section_idx) => {
                  let GetSectionComponent = components[_.get(section, 'component')];
                  return (
                    <GetSectionComponent key={section_idx} {...this.props} section={section} site={this.props.pageContext.site} />
                  )
              })}
              <div class="post-feed">
                {_.map(display_posts, (post, post_idx) => (
                <article key={post_idx} class="post post-card">
                  <div class="post-card-inside">
                    {_.get(post, 'frontmatter.thumb_img_path') && 
                    <Link class="post-card-thumbnail" to={safePrefix(_.get(post, 'url'))}>
                      <img class="thumbnail" src={safePrefix(_.get(post, 'frontmatter.thumb_img_path'))} alt={_.get(post, 'frontmatter.title')} />
                    </Link>
                    }
                    <div class="post-card-content">
                      <header class="post-header">
                        <div class="post-meta">
                          <time class="published"
                          datetime={moment(_.get(post, 'frontmatter.date')).strftime('%Y-%m-%d %H:%M')}>{moment(_.get(post, 'frontmatter.date')).strftime('%B %d, %Y')}</time>
                        </div>
                        <h2 class="post-title"><Link to={safePrefix(_.get(post, 'url'))} rel="bookmark">{_.get(post, 'frontmatter.title')}</Link></h2>
                      </header>
                      <div class="post-excerpt">
                        <p>{_.get(post, 'frontmatter.excerpt')}</p>
                        <p class="read-more">
                          <Link class="button inverse" to={safePrefix(_.get(post, 'url'))}>Read more</Link>
                        </p>
                      </div>
                    </div>
                  </div>
                </article>
                ))}
              </div>
            </Layout>
        );
    }
}
