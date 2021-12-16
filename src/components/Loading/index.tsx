import React from 'react';
import Lottie from 'react-lottie';

import animationData from '../../assets/loading.json';
import { StyledContainer } from './style';

const Loading = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <StyledContainer>
      <Lottie
        options={defaultOptions}
        height={200}
        width={200}
        isStopped={false}
        isPaused={false}
      />
    </StyledContainer>
  );
};

export default Loading;
