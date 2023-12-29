import { labels } from '@/Config/labels';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { Alert, Button, Form, InputGroup } from 'react-bootstrap';
import { BsFillEyeFill, BsFillEyeSlashFill } from 'react-icons/bs';

const LoginWithEmail = () => {
  const [passwordType, setPasswordType] = useState('password');
  const [values, setValues] = useState({
    email: '',
    password: '',
  });
  const router = useRouter();

  const togglePassword = () => {
    if (passwordType === 'password') {
      setPasswordType('text');
      return;
    }
    setPasswordType('password');
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    router.replace({
      pathname: '/employees',
    });
  };
  return (
    <div className="m-5">
      <h4 className="mb-4">{labels.LOGIN_WITH_EMAIL.ADMIN_LOGIN}</h4>
      <Form onSubmit={onSubmit}>
        <Form.Group className="mb-3">
          <Form.Control
            type="email"
            name="email"
            placeholder="Email Id"
            id="email"
            size="lg"
            value={values.email}
            onChange={handleChange}
          />
        </Form.Group>

        <InputGroup className="mb-3">
          <Form.Control
            type={passwordType}
            name="password"
            placeholder="Password"
            id="password"
            size="lg"
            value={values.password}
            onChange={handleChange}
            autoComplete={'off'}
          />
          <Button onClick={togglePassword} variant="outline-dark">
            {passwordType === 'password' ? (
              <BsFillEyeSlashFill />
            ) : (
              <BsFillEyeFill />
            )}
          </Button>
        </InputGroup>

        <Button variant="success" type="submit" size="md">
          {labels.LOGIN_WITH_EMAIL.AFTER_FILLED_ALL_DETAILS}
        </Button>

        {false ? (
          <Alert variant={'danger'} className="mt-3">
            {labels.ERRORS?.LOGIN_WITH_EMAIL[errorCode] ||
              labels.ERRORS.SOME_THING_WENT_WRONG}
          </Alert>
        ) : null}
      </Form>
    </div>
  );
};

export default LoginWithEmail;
