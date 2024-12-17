import * as React from 'react';
import styles from './CardBenefit.module.scss';
import Lottie, { LottieRefCurrentProps } from 'lottie-react';

export interface ICardBenefitProps {
  description: string;
  animationData: object;
}

export const CardBenefit: React.FC<ICardBenefitProps> = ({ description, animationData }) => {

  const lottieRef = React.useRef<LottieRefCurrentProps>(null);

  const handleMouseEnter = () => {
    lottieRef.current?.play();
  };

  const handleMouseLeave = () => {
    lottieRef.current?.stop();
  };

  return (
    <div className={styles.container}>
      <button
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <Lottie
          lottieRef={lottieRef}
          animationData={animationData}
          loop={false}
          autoplay={false}
        />
      </button>
      <div
        className={styles.card}>
        <p>{description}</p>
      </div>
    </div>
  );
}