import React from 'react'
import { CartContext } from '../context/cart'
import { UserContext } from '../context/user'
import { useHistory } from 'react-router-dom'
import EmptyCart from '../components/Cart/EmptyCart'
import {
  CardElement,
  StripeProvider,
  Elements,
  injectStripe,
} from 'react-stripe-elements'
import submitOrder from '../strapi/submitOrder'

function Checkout(props) {
  const { cart, total, clearCart } = React.useContext(CartContext)
  const { user, showAlert, hideAlert, alert } = React.useContext(UserContext)
  const history = useHistory()

  const [name, setName] = React.useState('')
  const [error, setError] = React.useState('')
  const isEmpty = !name || alert.show
  async function handleSubmit(e) {
    showAlert({ msg: 'submitting order.. please Wait' })

    e.preventDefault()
    const response = await props.stripe
      .createToken()
      .catch((error) => console.log(error))

    const { token } = response
    if (token) {
      setError('')
      const { id } = token
      let order = await submitOrder({
        name: name,
        total: total,
        items: cart,
        stripeTokenId: id,
        userToken: user.token,
      })
      if (order) {
        showAlert({ msg: 'your order is complete' })
        clearCart()
        history.push('/')
        return
      } else {
        showAlert({
          msg: 'there was an error with your order. please try again',
          type: 'danger',
        })
      }
    } else {
      hideAlert()
      setError(response.error.message)
    }
  }
  if (cart.length < 1) return <EmptyCart />

  return (
    <section className='section form'>
      <form className='checkout-form'>
        <h2 className='section-title'>Checkout</h2>
        <h3>
          order total: <span>${total}</span>
        </h3>
        <div className='form-control'>
          <label htmlFor='name'>name</label>
          <input
            type='text'
            id='name'
            value={name}
            onChange={(e) => {
              setName(e.target.value)
            }}
          />
        </div>

        <div className='strip-input'>
          <label htmlFor='card-element'>Credit card input</label>
          <p className='strip-info'>
            {' '}
            Test using this cerdit card: <span>4242 4242 4242 4242</span> <br />
            enter any 5 digits for the zip
            <br />
            enter any 3 digits for CVC
          </p>
        </div>

        <CardElement className='card-element'></CardElement>

        {error && <p className='form-empty'>{error}</p>}

        {isEmpty ? (
          <p className='form-empty'> please fill out name field</p>
        ) : (
          <button
            type='submit'
            onClick={handleSubmit}
            className='btn btn-primary btn-block'
          >
            submit
          </button>
        )}
      </form>
    </section>
  )
}
const CardForm = injectStripe(Checkout)
const StripeWrapper = () => {
  return (
    <StripeProvider apiKey='pk_test_51IkwpsAQipqxZmNr9qvpr3lTHM2Rmm2vbaKcXkVFlOJo6eJ5w4C5n3jsvmu1vFpe24y7C18MxfMR1ovN74FB8YOz00muAohU8L'>
      <Elements>
        <CardForm></CardForm>
      </Elements>
    </StripeProvider>
  )
}
export default StripeWrapper
