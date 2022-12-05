import { useEffect, useState } from 'react';
import { Alert, AlertIcon } from '@chakra-ui/react';
import { useSelector, useDispatch } from 'react-redux';
import { notificationActions } from '../notificationsSlice';

export const Notification = () => {
  const dispatch = useDispatch();
  const { notification } = useSelector((state) => state.notifications);
  const [show, setShow] = useState(false);

  const TIMEOUT = 10000;

  useEffect(() => {
    if (Object.keys(notification).length === 0) {
      // empty
    } else {
      setShow(true);
      setTimeout(() => {
        clear();
      }, TIMEOUT);
    }
  }, [notification]);

  const clear = () => {
    setShow(false);
    dispatch(notificationActions.clearNotification());
  };

  return show ? (
    <Alert
      status={notification.status}
      position='fixed'
      bottom='10'
      zIndex='100'
    >
      <AlertIcon />
      {notification.message}
    </Alert>
  ) : null;
};
