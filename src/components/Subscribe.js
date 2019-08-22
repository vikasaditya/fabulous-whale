import React from 'react';
import _ from 'lodash';

import {htmlToReact} from '../utils';
import SubscribeForm from './SubscribeForm';

export default class Subscribe extends React.Component {
    render() {
        return (
            <section class="subscribe">
              <div class="inner">
                <h2 class="subscribe-title">{_.get(this.props, 'pageContext.site.data.subscribe.title')}</h2>
                <p class="subscribe-text">
                  {htmlToReact(_.get(this.props, 'pageContext.site.data.subscribe.content'))}
                </p>
                <SubscribeForm {...this.props} />
              </div>
            </section>
        );
    }
}
