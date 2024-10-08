import style from '../nothing.module.css'
import Image from "next/image";

export default function Planeamientos(){
    return(
    <article className={style.article}>
        <header className={style.header}>
            <h1>Planeamientos Creados</h1>
            <div className={style.addPlaneamiento}>
                <h1>Crear nuevo planeamiento</h1>
                <Image src={'plus.svg'} width={30} height={30} alt="Plus"></Image>
            </div>
        </header>

        <div className={`${style.slider} ${style.plan}`}>
            <Image className={style.leftArrow} src='arrowLeft.svg' width={50} height={50} alt="Left Arrow"  />
            <div className={style.planesContent}>
                <p>Sin planes en estos momentos</p>
            </div>
            <Image className={style.rightArrow} src='arrowright.svg' width={50} height={50} alt="Left Arrow"  />
        </div>
    </article>
    )
}