import style from '../default.module.css'
import Image from "next/image";
import {planData} from '../const/cardData'

export default function Planeamientos(){
    return(
    <article className={style.article}>
        <header className={style.header}>
            <h1 className={style.headerPlan}>Planeamientos Creados</h1>
            <form action="/api/planeamiento" method='POST' >
                <button type='submit' className={style.addPlaneamiento}>
                        <h1 className={style.crearText}>Crear nuevo planeamiento</h1>
                        <Image src={'plus.svg'} width={30} height={30} alt="Plus"></Image>
                </button>
            </form>

        </header>

        <div className={`${style.slider} ${style.plan}`}>
            <Image className={style.leftArrow} src='arrowLeft.svg' width={50} height={50} alt="Left Arrow"  />
            <div className={style.cardsContainer}>
            {
                planData.map(item => (
                    <div className={style.card} style={{backgroundColor: `${item.color}`}} key={item.id}>
                        <p className={style.antetituloCard}>{item.subtitle}</p>
                        <h1 className={style.titleCard}>{item.subject}</h1>
                        <p className={style.dateCard}>{item.date}</p>
                        <h2 className={style.gradeCard}>{item.grade}</h2>
                        <h2 className={style.unitCard}><span className={style.unitCardSpan}>Unidad: </span>{item.unit}</h2>

                        <button className={style.buttonDownload}>Descargar PDF</button>
                        <p className={style.seeActivities}>Ver Actividades Asociadas</p>
                    </div>
                ))
            }
            </div>
            
            <Image className={style.rightArrow} src='arrowRight.svg' width={50} height={50} alt="Left Arrow"  />
        </div>
    </article>
    )
}