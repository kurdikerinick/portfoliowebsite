import React from 'react';
import { useSpring, animated } from 'react-spring';

const Page1 = () => {
  const [style, api] = useSpring(() => ({ transform: 'translateY(100%)' }));
  api.start({ transform: 'translateY(0%)' });

  return (
    <animated.div
      style={{
        ...style,
        height: '100vh',
        backgroundColor: 'lightcoral',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        width: '100%',
      }}
    >
      <h1>New Page</h1>
    </animated.div>
  );
};

export default Page1;
