import './leftShowStep.css';
import ImageAndTitle from './ImageAndTitle';

const LeftShowStep = () => {
  const fideTesisleri = {
    title: '1-FIDE TESISLERI',
    images: [
      '../../img/1-fideTesisi1.jpg',
      '../../img/1-fideTesisi2.jpg',
      '../../img/1-fideTesisi3.jpg',
    ],
  };
  const topraksızSera = {
    title: '2-Topraksız Tarım seraları',
    images: [
      '../../img/2-topraksızTarım1.jpg',
      '../../img/2-topraksızTarım2.jpg',
      '../../img/2-topraksızTarım3.jpg',
    ],
  };
  const hidroponikSera = {
    title: '3-Hidroponik Tarım Seraları',
    images: [
      '../../img/3-hidroponikSera1.jpg',
      '../../img/3-hidroponikSera2.jpg',
      '../../img/3-hidroponikSera3.jpg',
    ],
  };
  const products = {
    title: '4-Ürünler',
    images: [
      '../../img/4-ürünler1.jpg',
      '../../img/4-ürünler2.jpg',
      '../../img/4-ürünler3.jpg',
    ],
  };

  return (
    <>
      <div className="col-1-of-2">
        <div className="tesis">
          <ImageAndTitle
            title={fideTesisleri.title}
            image={fideTesisleri.images}
          />
          <ImageAndTitle
            title={topraksızSera.title}
            image={topraksızSera.images}
          />
          <ImageAndTitle
            title={hidroponikSera.title}
            image={hidroponikSera.images}
          />
          <ImageAndTitle title={products.title} image={products.images} />
        </div>
      </div>
    </>
  );
};

export default LeftShowStep;
