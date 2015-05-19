'use strict';
import React, { Component } from 'react';
import FluxComponent from 'flummox/component';
import Context from './Context';
import App from './components/App';

let context = new Context();

class OuterComponent extends Component {
  render () {
    return (
      <FluxComponent
        flux={this.props.flux}
        connectToStores={['userAddress']}>
        <App/>
      </FluxComponent>
    );
  }
}

React.render(<OuterComponent flux={context}/>, document.body);
