import axios from "axios";

export default axios.create({
  baseURL:'https://api.rawg.io/api',
  params: {
    key:'19195537dfd244afbbb48534e69fb86f',
  }
})