import style from '../nothing.module.css'
import Image from "next/image";

export default function Actividades(){
    return(
    <article className={style.article}>
        <header className={style.header}>
            <h1>Actividades Creadas</h1>
        </header>

        <div className={`${style.slider} ${style.act}`}>
            <Image className={style.leftArrow} src='arrowLeft.svg' width={50} height={50} alt="Left Arrow"  />
            <div className={style.actividadesContent}>
                <p>Sin actividades en estos momentos</p>
            </div>
            <Image className={style.rightArrow} src='arrowright.svg' width={50} height={50} alt="Left Arrow"  />
        </div>
    </article>
    )
}