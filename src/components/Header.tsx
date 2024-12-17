import * as React from "react";
import styles from './header.module.scss';
import Union from '../assets/Union.svg';
export const Header: React.FC = () => {
  return (
    <section className={styles.headerContainer}>
      <img src={Union} alt="Imagen de unión" />
      <p className={styles.text}>
        Las Comunidades de Práctica son espacios
        digitales promovidos por Mercantil entre profesionales
        con intereses afines que se apoyan para <span>intercambiar experiencias y aprender colaborativamente, generando conocimiento en la organización.</span>
      </p>
    </section>
  )
}