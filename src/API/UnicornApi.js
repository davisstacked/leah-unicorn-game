import axios from 'axios';
const BASE_URL = 'https://ponychallenge.trustpilot.com';


// API class tying together methods used to communicate with API

class UnicornApi {
  static async request(endpoint, data = {}, method = "get") {
    const url = `${BASE_URL}/${endpoint}`;

    try {
      return (await axios({ url, method, data })).data;
    } catch (err) {
      console.error("API Error coming from CLASS API:", err.response);
      let message = err.response.data;
      throw message;
    }
  }

  // individual API routes

  // [POST] /pony-challenge/maze -> create new maze game
  static async getNewMaze(data) {
    let res = await this.request(`pony-challenge/maze`, data, "post");
    return res.maze_id;
  }

  // [GET] /pony-challenge/maze/{maze_id} -> get maze current state
  static async getMazeCurrentState(mazeId) {
    let res = await this.request(`pony-challenge/maze/${mazeId}`);
    return res;
  }

  // [POST] /pony-challenge/maze/{maze-id} -> make next move in the maze
  static async makeMove(data, mazeId) {
    let res = await this.request(`pony-challenge/maze/${mazeId}`, data, 'post');
    return res;
  }
}

export default UnicornApi;
