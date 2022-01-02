import React from 'react';
import styles from './indexpage.module.scss';
import { Timer } from './Timer';

export function IndexPage() {
  return (
    <div className='container'>
      <Timer/>
    </div>
  );
}
