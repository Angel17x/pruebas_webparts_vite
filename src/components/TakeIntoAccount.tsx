import * as React from 'react';
import styles from './TakeIntoAccount.module.scss';
import Lottie, { LottieRefCurrentProps } from 'lottie-react';
import Lego from '../lottie/Lottie Lego.json';

export const TakeIntoAccount: React.FC = () => {

  const lottieRef = React.useRef<LottieRefCurrentProps>(null);

  const handleMouseEnter = () => {
    lottieRef.current?.play();
  };

  const handleMouseLeave = () => {
    lottieRef.current?.stop();
  };

  return (
    <div className={styles.container}>
      <h2>Toma en cuenta</h2>
      <div className={styles.containerTextIcon}>
        <p>
          Dependiendo de la confidencialidad de la información que se desarrolle en
          nuestras Comunidades de Práctica, <span> sus miembros son previamente autorizados
            para acceder a las mismas.</span>
        </p>
        <div
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className={styles.iconContainer}
        >
          <Lottie
            lottieRef={lottieRef}
            animationData={Lego}
            loop={false}
            autoplay={false}
          />
        </div>
      </div>
    </div>
  );
}