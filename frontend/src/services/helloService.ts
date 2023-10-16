import { appAxios } from './interceptors';

export default {
  /**
   * @function helloWorld
   * Returns the home page header
   * @returns {Promise} An axios response
   */
  helloWorld() {
    return appAxios().get('hello');
  },
};
