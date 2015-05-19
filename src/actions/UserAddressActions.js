'use strict';
import {Actions} from 'flummox';

export default class UserAddressActions extends Actions {
  changeValue (name, value) {
    return { name, value };
  }
}
