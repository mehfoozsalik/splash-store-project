// register user
import axios from 'axios'
import url from '../utils/URL'
async function registerUser({ email, password, username }) {
  const responce = await axios
    .post(`${url}/auth/local/register`, { username, email, password })
    .catch((error) => console.log(error))
  return responce
}
export default registerUser
