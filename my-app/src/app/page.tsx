import React from 'react';
import style from './styles.module.css'

export default function Home() {
  return (
    <div className={style.homecontainer}>
      <header className={style.homeheader}>
        <h1>HOME</h1>
        <div className={style.buttoncontainer}>
          <a href="/login" className={style.button}>Login</a>
          <a href="/registro" className={style.button}> Registrar</a>
        </div>
      </header>

      <main className={style.homecontent}>
        <div className={style.centeredcontent}>
          <h2>Bem-vindo à nossa aplicação!</h2>
          <br />
          <p>Explore os recursos incríveis que oferecemos.</p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam et natus minus veritatis.
            Quae est a suscipit incidunt laudantium ex recusandae omnis maxime et, qui facere pariatur accusamus ullam ad.</p>
          <br />
        </div>
      </main>
      </div>
  )
}
