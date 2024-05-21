import React from 'react';
import { useSpring, animated } from 'react-spring';
import { useSwipeable } from 'react-swipeable';
import { useNavigate } from 'react-router-dom';

const PageSwipe = () => {
  const navigate = useNavigate();
  const [style, api] = useSpring(() => ({ transform: 'translateY(0%)' }));

  const handlers = useSwipeable({
    onSwipedUp: (eventData) => {
      console.log("User Swiped Up!", eventData);
      api.start({ transform: 'translateY(-100%)' }).then(() => {
        navigate('/page1');
      });
    },
    delta: 50, // Minimum distance (in pixels) a user must swipe for it to trigger
    preventScrollOnSwipe: true, // Prevent scroll during swipe
  });

  return (
    <animated.div
      {...handlers}
      style={{
        ...style,
        height: '100vh',
        backgroundColor: 'lightblue',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        touchAction: 'none',
        position: 'absolute',
        width: '100%',
      }}
    >
      Swipe Up to Navigate
    </animated.div>
  );
};

export default PageSwipe;
