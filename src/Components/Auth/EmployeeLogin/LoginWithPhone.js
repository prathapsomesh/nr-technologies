import ResendOTPButton from '@/Components/shared/resendOTPButton';
import constants from '@/Config/constants';
import { labels } from '@/Config/labels';
import React, { useState } from 'react';
import { Alert, Button, Form } from 'react-bootstrap';
import OTPInput from 'react-otp-input';
import { useRouter } from 'next/router';

const LoginWithPhone = () => {
  const [values, setValues] = useState({
    phone: '',
    regexp: /^[0-9\b]+$/,
  });
  const router = useRouter();
  const [otp, setOTP] = useState('');
  const authStatus = 'OTP_REQUESTED_!';
  const authType = 'SIGN_IN_WITH_PHONE';

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleOTPChange = (otp) => {
    setOTP(otp);
  };

  const requestOTP = () => {
    router.replace({
      pathname: '/attendance',
    });
  };

  const confirmCode = () => {};

  const changePhoneChange = () => {
    setOTP('');
  };

  const otpRequested = true;

  const disabled = otpRequested && otp.toString().length !== 6;

  return (
    <div className="m-5">
      <h4 className="mb-4">{labels.LOGIN_WITH_OTP.EMPLOYEE_LOGIN}</h4>
      <Form.Group className="mb-4">
        <Form.Control
          type="number"
          name="phone"
          placeholder="Phone Number "
          id="phone"
          size="lg"
          required
          minLength={10}
          maxLength={10}
          onChange={handleChange}
          disabled={otpRequested}
          value={values.phone}
          onInput={(e) => (e.target.value = e.target.value.slice(0, 10))}
        />
      </Form.Group>

      {otpRequested ? (
        <div className="mt-4">
          <OTPInput
            value={otp}
            onChange={handleOTPChange}
            numInputs={6}
            separator={<span> </span>}
            inputStyle={{
              width: '2rem',
              height: '2rem',
              margin: '0 1rem 0 0',
              fontSize: '1rem',
              borderRadius: 2,
              border: '1px solid rgba(0,0,0,0.3)',
            }}
            renderInput={(props) => <input {...props} />}
            isInputNum={true}
          />
        </div>
      ) : null}

      <Form.Group className="mt-4">
        <Button
          variant="success"
          type="submit"
          size="md"
          id="sign-in-button"
          disabled={disabled}
          onClick={otpRequested ? confirmCode : requestOTP}
        >
          {otpRequested
            ? labels.LOGIN_WITH_OTP.CONFIRM_CODE
            : labels.LOGIN_WITH_OTP.SEND_OTP}
        </Button>
        {otpRequested ? (
          <>
            <ResendOTPButton onClick={requestOTP} />
            <Button
              variant="light"
              className="ms-2"
              onClick={changePhoneChange}
            >
              {labels.LOGIN_WITH_OTP.CHANGE_PHONE_NUMBER}
            </Button>
          </>
        ) : null}
      </Form.Group>

      {false && authType === constants.AUTH_TYPE.SIGN_IN_WITH_PHONE ? (
        <Alert variant={'danger'} className="mt-3">
          {labels.ERRORS?.LOGIN_WITH_PHONE[errorCode] ||
            labels.ERRORS.SOME_THING_WENT_WRONG}
        </Alert>
      ) : null}
    </div>
  );
};

export default LoginWithPhone;
