import * as React from "react"
import { CardBenefit } from "./CardBenefit";
import Tuerca from '../lottie/Group 746.json';
import Libro from '../lottie/Libro.json';
import Reloj from '../lottie/Reloj.json';
import Bombillo from '../lottie/Bombillo.json';
import Rompecabezas from '../lottie/Rompecabezas.json';
import styles from "./CardBenefit.module.scss";

export const Benefits: React.FC = () => {
  return (
    <div>
      <div className={styles.containerBenefits}>
        <CardBenefit
          animationData={Libro}
          description="Convierte en capital intelectual conocimientos a lo largo de la organización"
        />
        <CardBenefit
          animationData={Tuerca}
          description="Creación de biblioteca de soluciones."
        />
        <CardBenefit
          animationData={Bombillo}
          description="Aprovechamiento de networking para la resolución de problemas."
        />
        <CardBenefit
          animationData={Rompecabezas}
          description="Desarrollo de capacidades técnicas en la práctica profesional."
        />
        <CardBenefit
          animationData={Reloj}
          description="Acceso 24/7 en línea a temas específicos y experiencia de expertos."
        />
      </div>
    </div>
  );
} 