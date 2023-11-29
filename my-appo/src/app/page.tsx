import React from 'react';
import style from './styles.module.css'

export default function Home() {
  return (
    <div className={style.homecontainer}>
      <header className={style.homeheader}>
        <h1 className={style.h1}>HOME</h1>
        <div className={style.buttoncontainer}>
          <a href="/login" className={style.button}>Login</a>
          <a href="/registro" className={style.button}> Registrar</a>
        </div>
      </header>

      <main className={style.homecontent}>
        <div className={style.centeredcontent}>
          <h2 className={style.h1}>Bem-vindo a Aplicação do InovaWeek!</h2>
          <br />
          <p className={style.p}>Explore os recursos incríveis que oferecemos.</p> <br />
          <p className={style.p}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam et natus minus veritatis.
            Quae est a suscipit incidunt laudantium ex recusandae omnis maxime et, qui facere pariatur accusamus ullam ad.</p>
            <p className={style.p}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas totam omnis dolor sed vel minima hic quis magnam veniam, iste nulla.
              Repudiandae deleniti quidem molestiae accusamus cupiditate dolores reprehenderit vel.</p>
          <br />
        </div>
      </main>
      </div>
  )
}
