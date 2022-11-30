import './whatHaveWeDone.css';

import LeftShowStep from './LeftShowStep/LeftShowStep';
import RightImageWithExplanation from './RightImageWithExplanation/RightImageWithExplanation';

const WhatHaveWeDone = () => {
  return (
    <>
      <div className="row">
        <LeftShowStep />
        <RightImageWithExplanation />
      </div>
    </>
  );
};

export default WhatHaveWeDone;
