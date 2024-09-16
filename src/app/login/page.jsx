import Image from 'next/image'
import style from './login.module.css'

export default function Login() {


  return (
    <>
    <div className={style.loginContainer}>
      <div className={style.leftSide}>
        <h1 className={style.phrase}>Planea tus actividades diarias: somos una plataforma que te guía en el proceso de mediación pedagógica y creación de estrategias educativas</h1>
        <Image src={"logoWhite.svg"} width={500} height={500} alt='Imagen del Logo'/>
      </div>

      <main className={style.mainFormulario}>
        <h1 className={style.title}>Iniciar Sesión</h1>
        <form className={style.form} action='/api/login' method='POST'>
          <input
            type="text"
            id="usuario"
            placeholder='Ingrese su usuario'
            className={style.username}
            required
          />
          
          <input
            type="password"
            id="password"
            placeholder='Ingrese su contraseña'
            className={style.password}
            required
          />

        <button type="submit" className={style.submit}>Ingresar</button>
        </form>
      </main>
    </div>
      
    </>
  );
}