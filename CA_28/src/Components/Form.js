import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { Button, Form, FormGroup } from 'react-bootstrap'

function UserForm (props) {
  let [info, setInfo] = useState({
    email: '',
    password: '',
    username: ''
  })

  function handleChange (e) {
    const { name, value } = e.target
    setInfo(prevValue => ({
      ...prevValue,
      [name]: value
    }))
  }

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const isAuthenticated = useSelector(state => state.authStore.isAuthenticated)

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/LinkList')
    }
  }, [isAuthenticated])

  return (
    <Form>
      <h1>{props.name}</h1>
      <FormGroup>
        {props.signup ? (
          <>
            <Form.Label for='username'>Username</Form.Label>
            <Form.Control
              type='text'
              name='username'
              placeHolder='Inser Username Here'
              value={info.username}
              onChange={e => handleChange(e)}
            />
          </>
        ) : null}

        <Form.Label for='email'>Email</Form.Label>
        <Form.Control
          type='text'
          name='email'
          value={info.email}
          placeHolder='Insert Email here'
          onChange={e => handleChange(e)}
        />

        <Form.Label for='password'>Password</Form.Label>
        <Form.Control
          type='text'
          name='password'
          value={info.password}
          placeHolder='Insert Password here'
          onChange={e => handleChange(e)}
        />
      </FormGroup>
      <Button
        variant='primary'
        type='submit'
        onClick={e => {
          e.preventDefault()

          info.email.length > 0 &&
            info.password.length > 0 &&
            dispatch(
              props.signup
                ? props.thunk(info.email, info.password, info.username)
                : props.thunk(info.email, info.password)
            )
          props.signup &&
            info.email.length > 0 &&
            info.password.length > 0 &&
            navigate('/login')
        }}
      >
        {props.name}
      </Button>
    </Form>
  )
}

export default UserForm
