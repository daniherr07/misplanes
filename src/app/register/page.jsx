import Image from 'next/image'
import style from './register.module.css'



export default function Register(){


    return(
        <main className={style.main}>
            <form action="" className={style.form}>
                <h1 className={style.title}>Crear Cuenta</h1>

                <div className={style.div}>
                    <label htmlFor="name" className={style.label}>Nombre (para planeamientos)</label>
                    <input type="text" id='name' name='name' placeholder='Licdo. José Miguel Ferrer' className={`${style.name} ${style.input}`}/>
                </div>
                

                <div className={style.div}> 
                    <label htmlFor="user" className={style.label}>Usuario</label>
                    <input type="text" id='user' name='id' placeholder='jose123' className={`${style.user} ${style.input}`}/>
                </div>

                <div className={style.div}>
                    <label htmlFor="email" className={style.label}>Correo</label>
                    <input type="text" id='email' name='email' placeholder='jose123@gmail.com' className={`${style.email} ${style.input}`}/>
                </div>

                <div className={style.div}>
                    <label htmlFor="email2" className={style.label}>Confirmar Correo</label>
                    <input type="text" id='email2' name='email2' className={`${style.email2} ${style.input}`}/>
                </div>

                <div className={style.div}>
                    <label htmlFor="passContainer" className={style.label}>Contraseña</label>
                    <div className={style.passContainer} id='passContainer'>
                        <input type="text" name='password' placeholder='*************' id='password' className={`${style.password} ${style.input}`} />
                        <Image src={"eye.svg"} width={20} height={20} alt='Eye' className={style.eye}></Image>
                    </div>
                </div>

                <div className={style.div}>
                    <label htmlFor="passContainer2" className={style.label}>Confirmar Contraseña</label>
                    <div className={style.passContainer2}>
                        <input type="text" name='password2' id='password' className={`${style.password2} ${style.input}`}/>
                        <Image src={"eye.svg"} width={20} height={20} alt='Eye'className={style.eye}></Image>
                    </div>
                </div>

                <div className={style.checkBoxContianer}>
                    <input type="checkbox" name="license" id="license" className={style.license} />
                    <p className={style.licenseP}>Lorem ipsum dolor sit amet, consecteur</p>
                </div>

                <button type="submit" className={style.submitBtn}>Crear Cuenta</button>
            </form>
        </main>
    )
}