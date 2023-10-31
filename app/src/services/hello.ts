/* eslint-disable no-useless-catch */

const service = {
  getHello: async () => {
    try {
      const response = 'Hello world!';
      return response;
    } catch (e: unknown) {
      throw e;
    }
  }
};

export default service;
