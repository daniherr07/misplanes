import NavBar from '../components/navbar/navbar';
import styles from './addedPlaneamiento.module.css';
import Image from 'next/image';


export default function CreadoPlaneamiento() {
  return ( 
    <>
    <NavBar></NavBar>
    <div className={styles.planeamientoContainer}>
      {/* Formulario de creación de planeamiento */}
      <div className={styles.formularioContainer}>
        <h2 className={styles.titlePlaneamiento}>Crear planeamiento</h2>
        <form className={styles.form}>
          <select className={styles.selectInput}>
            <option value="">Centro educativo</option>
          </select>
          <select className={styles.selectInput}>
            <option value="">Ciclo educativo</option>
          </select>
          <select className={styles.selectInput}>
            <option value="">Nivel</option>
          </select>
          <select className={styles.selectInput}>
            <option value="">Materia</option>
          </select>
          <select className={styles.selectInput}>
            <option value="">Unidad</option>
          </select>
          <button type="submit" className={styles.buttonCrear}>
            Crear planeamiento
          </button>
        </form>
      </div>

      {/* Vista previa del planeamiento */}
      <div className={styles.previewContainer}>
        <div className={styles.previewHeader}>
          <p>Programación interpretada multiparadigma (112 horas)</p>
        </div>
        <div className={styles.previewContent}>
          <p>Si desea acceder a la versión completa, utilice sus créditos</p>
          <div className={styles.actividadesGrid}>
            <div className={styles.actividadCard}>
              <h3>Actividad #1</h3>
              <p>Ciencias</p>
              <p>Elaborar infografía acerca de los elementos que intervienen en la naturaleza</p>
            </div>
            <div className={styles.actividadCard}>
              <h3>Actividad #2</h3>
              <p>Ciencias</p>
              <p>Elaborar infografía acerca de los elementos que intervienen en la naturaleza</p>
            </div>
            <div className={styles.actividadCard}>
              <h3>Actividad #3</h3>
              <p>Ciencias</p>
              <p>Elaborar infografía acerca de los elementos que intervienen en la naturaleza</p>
            </div>
          </div>
        </div>
        <button className={styles.buttonVerCompleto}>
          Ver completo  <span className={styles.creditos}>5</span>
        </button>
      </div>
    </div>

    </>
  );
}
