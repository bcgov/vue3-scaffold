const service = {
  getHello: async () => {
    try {
      const response = 'Welcome to the Vue 3 Scaffold!';
      return response; 
    }
    catch(e: unknown) {
      throw e;
    }
  }
};
  
export default service;
