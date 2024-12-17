import * as React from 'react';
import styles from './ComunidadesActivas.module.scss';
import comunidad1 from '../assets/comunidades-1.svg';
import comunidad2 from '../assets/comunidades-2.svg';

export const ComunidadesActivas: React.FC = () => {
  return (
    <div className={styles.container}>
      <h2>Comunidades Activas</h2>
      <div className={styles.containerImages}>
        <div className={styles.hoverContainer}>
          <img src={comunidad1} alt="Comunidad 1" />
        </div>
        <div className={styles.hoverContainer}>
          <img src={comunidad2} alt="Comunidad 2" />
        </div>
      </div>
      <p>Estamos preparándonos para formar nuevas comunidades.</p>
    </div>
  )
}