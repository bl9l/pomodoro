import { Button } from '@mui/material';
import React from 'react';
import styles from './timer.module.scss';

export function Timer() {
  return (
    <div className={styles.Timer}>
      <div className={styles.Counter}>
        00:00
      </div>

      <Button variant="contained">
        Старт
      </Button>
    </div>
  );
}
