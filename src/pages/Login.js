import React from 'react'
import { useHistory } from 'react-router-dom'
import loginUser from '../strapi/loginUser'
import registerUser from '../strapi/registerUser'
import { UserContext } from '../context/user'

export default function Login() {
  const history = useHistory()
  const { userLogin, alert, showAlert } = React.useContext(UserContext)

  const [email, setEmail] = React.useState('')
  const [password, setParword] = React.useState('')
  const [username, setUsername] = React.useState('default')
  const [isMember, setIsMember] = React.useState(true)

  let isEmpty = !email || !password || !username || alert.show

  const toggleMember = () => {
    setIsMember((prevMember) => {
      let isMember = !prevMember
      isMember ? setUsername('default') : setUsername('')
      return isMember
    })
  }
  const handleSubmit = async (e) => {
    showAlert({ msg: 'pleasewait... :)' })

    e.preventDefault()
    let response
    if (isMember) {
      response = await loginUser({ email, password })
    } else {
      response = await registerUser({ email, password, username })
    }
    if (response) {
      const {
        jwt: token,
        user: { username },
      } = response.data
      const newUser = { token, username }
      userLogin(newUser)
      showAlert({
        msg: `Welcome : ${username}. Enjoy your shopping...`,
      })
      history.push('/products')
    } else {
      showAlert({
        msg: 'there was an error. please try again ',
        type: 'danger',
      })
    }
  }

  return (
    <section className='form section'>
      <h2 className='section-title'>{isMember ? 'sign in' : 'register'}</h2>
      <form className='login-form'>
        <div className='form-control'>
          <label htmlFor='email'>email</label>
          <input
            type='email'
            id='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className='form-control'>
          <label htmlFor='password'>password</label>
          <input
            type='password'
            id='password'
            value={password}
            onChange={(e) => setParword(e.target.value)}
          />
        </div>
        {!isMember && (
          <div className='form-control'>
            <label htmlFor='username'>username</label>
            <input
              type='text'
              id='username'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
        )}
        {isEmpty && (
          <p className='form-empty'> please fill out all the field</p>
        )}

        {!isEmpty && (
          <button
            type='submit'
            className='btn btn-block btn-primary'
            onClick={handleSubmit}
          >
            submit
          </button>
        )}
        <p className='register-link'>
          {isMember ? 'need to register...' : 'already a member?'}
          <button type='button' onClick={toggleMember}>
            Click Here
          </button>
        </p>
      </form>
    </section>
  )
}
