import './rightImageWithExplanation.css';

import PhotosInDone from './PhotosInDone';

const RightImageWithExplanation = () => {
  const images = [
    {
      srcSet:
        '/../../img/plasticSera.jpg 300w, /../../img/plasticSera.jpg 1000w',
      sizes: '(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px',
      alt: 'Photo 1',
      className: 'composition__photo composition__photo--p1',
      src: '/../../img/plasticSera.jpg',
    },
    {
      srcSet: '/../../img/camSera.jpg 300w, /../../img/camSera.jpg 1000w',
      sizes: '(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px',
      alt: 'Photo 2',
      className: 'composition__photo composition__photo--p2',
      src: '/../img/camSera.jpg',
    },
    {
      srcSet:
        '/../../img/toprakTarım.jpg 300w, /../../img/toprakTarım.jpg 1000w',
      sizes: '(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px',
      alt: 'Photo 3',
      className: 'composition__photo composition__photo--p3',
      src: '/../img/toprakTarım.jpg',
    },
  ];
  return (
    <>
      <div className="col-1-of-2">
        <div className="right_side">
          <PhotosInDone images={images} />
        </div>
      </div>
    </>
  );
};

export default RightImageWithExplanation;
