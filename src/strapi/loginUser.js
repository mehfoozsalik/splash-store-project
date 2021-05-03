//login user
import axios from 'axios'
import url from '../utils/URL'

async function loginUser({ email, password }) {
  const responce = await axios
    .post(`${url}/auth/local`, { identifier: email, password })
    .catch((error) => console.log(error))
  return responce
}
export default loginUser
