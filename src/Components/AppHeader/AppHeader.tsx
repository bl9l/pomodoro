import React from 'react';
import styles from './appheader.module.scss';
import {Link} from "react-router-dom";
import logo from '../../assets/pomo.png';

export function AppHeader() {
  return (
    <div className={styles.Header}>
      <div className="container">
        <header className={styles.Content}>
          <Link to='/'>
            <div className={styles.LogoContainer}>
              <img src={logo} alt="Pomo" className={styles.Logo}/>
              <strong>Pomo</strong>
            </div>
          </Link>
          <nav>

            <Link to='/' className={styles.NavLink}>
              К таймеру
            </Link>
             <Link to='/statistics' className={styles.NavLink}>
               Статистика
             </Link>
          </nav>
        </header>
      </div>
    </div>
  );
}
