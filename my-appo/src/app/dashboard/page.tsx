import React from 'react';
import styles from './styles.module.css';
import { Fragment } from 'react'

export default function DashBoard(){
    return(
        <div className={styles.dashboardcontainer}>
        <header className={styles.dashboardheader}>
          <h1 className={styles.h1}>Dashboard</h1>
        </header>
  
        <main className={styles.dashboardcontent}>
          <h2 className={styles.h1}>Bem-vindo ao Dashboard</h2>
          <p className={styles.p}>Aqui é possivel ver coisas relacionadas ao seu grupo do Inova week,
          alem de muitas outras informações adicionais que quiser</p>    

          
        </main>
  
        <footer className={styles.dashboardfooter}>
          <a className={styles.a} href="/"> Sair</a>
        </footer>
        </div>
    )
}