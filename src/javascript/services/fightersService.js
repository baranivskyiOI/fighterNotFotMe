import { callApi } from '../helpers/apiHelper';

class FighterService {
  #endpoint = 'fighters.json';

  async getFighters() {
    try {
      const apiResult = await callApi(this.#endpoint);
      return apiResult;
    } catch (error) {
      throw error;
    }
  }
  async getFighterDetails(id) {
    console.log(1);
    try{
      const endpoint = `details/fighter/${id}.json`
      console.log(endpoint);
      const result = await callApi(endpoint, 'GET')
      console.log(result);
      return result
    }catch (error) {
      throw error;
    }
  }
}


export const fighterService = new FighterService();
