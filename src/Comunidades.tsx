import * as React from 'react';

import { Benefits } from './components/Benefits';
import { Header } from './components/Header';
import { TakeIntoAccount } from './components/TakeIntoAccount';

export interface ComunidadesProps {

}

export interface ComunidadesState {

}


export class ComunidadesDePractica extends React.Component<ComunidadesProps, ComunidadesState> {
  constructor(props: ComunidadesProps) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <>
        <Header />
        <Benefits />
        <TakeIntoAccount />
      </>
    );
  }
}