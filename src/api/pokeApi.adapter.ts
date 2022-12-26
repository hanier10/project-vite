import axios from "axios";
export class PokeApiAdapter {
  private readonly axios = axios;

  async getRequest(url: string) {
    const { data } = await axios.get(url);
    return data;
  }

  async post(url: string, data: any) {}

  async patch(url: string, data: any) {}

  async delete(url: string) {}
}
