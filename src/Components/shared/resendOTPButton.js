import { labels } from '@/Config/labels';
import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';

const ResendOTPButton = ({ onClick }) => {
  const [resetTiming, setResetTiming] = useState(30);

  const sleep = (milliseconds) =>
    new Promise((resolve) => setTimeout(resolve, milliseconds));

  useEffect(() => {
    decreaseTime();
  }, [resetTiming]);

  const decreaseTime = async () => {
    if (resetTiming === 0) {
      return;
    }
    await sleep(1000);
    setResetTiming((prevState) => prevState - 1);
  };

  const resend = () => {
    setResetTiming(30);
    onClick();
  };
  return (
    <Button
      variant="warning"
      size="md"
      disabled={resetTiming !== 0}
      className="ms-2"
      onClick={resend}
    >
      {labels.LOGIN_WITH_OTP.RESEND_OTP}{' '}
      {resetTiming !== 0 ? 'in ' + resetTiming : ''}
    </Button>
  );
};
export default ResendOTPButton;
