'use strict';
import {Store} from 'flummox';

export default class UserAddressStore extends Store {
  constructor (flux) {
    super();
    this.state = { name: '', email: '' };
  }

  handleChangeValue (name, value) {
    this.setState({ [name]: value });
  }
}
