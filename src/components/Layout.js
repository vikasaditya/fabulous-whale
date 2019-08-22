import React from 'react';
import {Helmet} from 'react-helmet';
import _ from 'lodash';

import {safePrefix} from '../utils';
import Header from './Header';
import Subscribe from './Subscribe';
import Footer from './Footer';

export default class Body extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Helmet>
                    <title>{_.get(this.props, 'pageContext.frontmatter.title') && _.get(this.props, 'pageContext.frontmatter.title') + ' - '}{_.get(this.props, 'pageContext.site.siteMetadata.title')}</title>
                    <meta charset="utf-8"/>
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <meta name="google" content="notranslate" />
                    <link href="https://fonts.googleapis.com/css?family=PT+Sans:400,400i,700,700i%7CPT+Serif:400,700" rel="stylesheet"/>
                    <link rel="stylesheet" href={safePrefix('assets/css/main.css')}/>
                </Helmet>
                  <div id="page" class={'site layout-' + _.get(this.props, 'pageContext.site.siteMetadata.layout_style') + ' palette-' + _.get(this.props, 'pageContext.site.siteMetadata.palette')}>
                    <Header {...this.props} />
                    <div id="content" class="site-content">
                      <main id="main" class="site-main inner">
                        {this.props.children}
                      </main>
                    </div>
                    {_.get(this.props, 'pageContext.site.data.subscribe.enabled') && 
                      <Subscribe {...this.props} />
                    }
                    <Footer {...this.props} />
                  </div>
            </React.Fragment>
        );
    }
}
