import style from '../default.module.css'
import Image from "next/image";
import {activityData} from '../const/cardData'

export default function Actividades(){
    return(
    <article className={style.article}>
        <header className={style.header}>
            <h1>Actividades Creadas</h1>
        </header>

        <div className={`${style.slider} ${style.act}`}>
            <Image className={style.leftArrow} src='arrowLeft.svg' width={50} height={50} alt="Left Arrow"  />
            {
                activityData.map(item => (
                    <div className={style.card} style={{backgroundColor: `${item.color}`}} key={item.id}>
                        <h1 className={style.titleCard}>{item.subject}</h1>
                        <p className={style.dateCard}>{item.date}</p>
                        <h2 className={style.gradeCard}>{item.grade}</h2>
                        <h2 className={style.descCard}>{item.description}</h2>

                        <button className={style.buttonDownload}>Descargar PDF</button>
                    </div>
                ))
            }
            <Image className={style.rightArrow} src='arrowright.svg' width={50} height={50} alt="Left Arrow"  />
        </div>
    </article>
    )
}