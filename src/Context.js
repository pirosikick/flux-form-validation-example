'use strict';
import {Flux} from 'flummox';
import UserAddressStore from './stores/UserAddressStore';
import UserAddressActions from './actions/UserAddressActions';

export default class Context extends Flux {
  constructor () {
    super();

    this.createActions('userAddress', UserAddressActions);
    this.createStore('userAddress', UserAddressStore);
  }
}
