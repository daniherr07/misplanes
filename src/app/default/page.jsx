import NavBar from "../components/navbar/navbar";
import Actividades from "./components/Actividades";
import Planeamientos from "./components/Planeamientos";
import style from './default.module.css'
Actividades



export default function Nothing() {
    return(
        <>
        <NavBar></NavBar>
        <main className={style.main}>
            <Planeamientos></Planeamientos>
            <Actividades></Actividades>
        </main>
        </>
    );
}