import './featured.css';

import FeaturedTitle from './FeaturedTitle';
import WhatHaveWeDone from '../WhatHaveWeDone/WhatHaveWeDone';

const Featured = () => {
  return (
    <>
      <main>
        <section className="section-about">
          <FeaturedTitle />
          <WhatHaveWeDone />
        </section>
      </main>
    </>
  );
};

export default Featured;
