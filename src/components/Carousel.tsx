import * as React from 'react';
import { Arrow } from './Arrow';
import styles from './Carousel.module.scss';
import noticia1 from '../assets/Color.png';
import noticia2 from '../assets/Color.png';
import noticia3 from '../assets/Color.png';
import noticia4 from '../assets/Color.png';
import noticia5 from '../assets/Color.png';

interface IWelcomeState {
  activeSlide: number;
  error: string | undefined;
  loading: boolean;
  slides: { active: boolean }[]
}
export const Carousel: React.FC = () => {

  const [state, setState] = React.useState<IWelcomeState>({
    activeSlide: 0,
    error: undefined,
    loading: false,
    slides: [
      { active: true },
      { active: false },
      { active: false },
      { active: false },
      { active: false },

    ]
  });

  const _slideStyles = (index: number): React.CSSProperties => ({
    transform: `translateX(${(index - state.activeSlide) * 200}%)`,
    transition: 'transform 0.5s ease-in-out'
  });

  const _buttonClickSlide = (activeNumber: number): void => {
    const slides = state.slides.map((slide, index) => ({
      ...slide,
      active: index === activeNumber
    }));

    setState((prevState) => ({ ...prevState, activeSlide: activeNumber, slides: slides }));
  }
  const _nextSlide = (): void => {
    setState((prevState): IWelcomeState => {
      const slides = prevState.slides.map((slide, index) => ({
        ...slide,
        active: index === ((prevState.activeSlide + 1) % prevState.slides.length)
      }));
      return {
        ...prevState,
        activeSlide: (prevState.activeSlide + 1) % prevState.slides.length,
        slides: slides,
      }
    });
  }

  const _prevSlide = (): void => {
    setState((prevState): IWelcomeState => {
      const newActiveSlide = (prevState.activeSlide - 1 + prevState.slides.length) % prevState.slides.length;
      const slides = prevState.slides.map((slide, index) => ({
        ...slide,
        active: index === newActiveSlide
      }))
      return {
        ...prevState,
        activeSlide: newActiveSlide,
        slides: slides,
      };
    });
  }
  return (
    <section>
      <div className={styles.container}>
        <Arrow
          themePrimary='#009FDA'
          themeDark='#004E9B'
          direction={'left'}
          disabled={state.activeSlide === 0}
          onClick={_prevSlide}
        />
        <Arrow
          themePrimary='#009FDA'
          themeDark='#004E9B'
          direction='right'
          disabled={state.activeSlide === state.slides.length - 1}
          onClick={_nextSlide}
        />
        <div style={_slideStyles(0)} className={styles.containerContent}>
          <div className={styles.content}>
            <h2>Celebramos nuestro primer Encuentro de Gerentes de 2024: Crecimiento con propósito</h2>
            <img src={noticia1} />
          </div>
        </div>
        <div style={_slideStyles(1)} className={styles.containerContent}>
          <div className={styles.content}>
            <h2>Celebramos nuestro primer Encuentro de Gerentes de 2024: Crecimiento con propósito</h2>
            <img src={noticia2} />
          </div>
        </div>
        <div style={_slideStyles(2)} className={styles.containerContent}>
          <div className={styles.content}>
            <h2>Celebramos nuestro primer Encuentro de Gerentes de 2024: Crecimiento con propósito</h2>
            <img src={noticia3} />
          </div>
        </div>
        <div style={_slideStyles(3)} className={styles.containerContent}>
          <div className={styles.content}>
            <h2>Celebramos nuestro primer Encuentro de Gerentes de 2024: Crecimiento con propósito</h2>
            <img src={noticia4} />
          </div>
        </div>
        <div style={_slideStyles(4)} className={styles.containerContent}>
          <div className={styles.content}>
            <h2>Celebramos nuestro primer Encuentro de Gerentes de 2024: Crecimiento con propósito</h2>
            <img src={noticia5} />
          </div>
        </div>
        {
          state.slides.length > 0 &&
          <div className={styles.containerButtons}>
            {state.slides.map((slide, index) => (
              <button onClick={() => _buttonClickSlide(index)} key={index} className={`${styles.button} ${slide.active ? styles.active : ""}`} />
            ))}
          </div>
        }
      </div>
    </section>);
}