import NavBar from '../components/navbar/navbar';
import styles from './addPlaneamiento.module.css';


export default function CrearPlaneamiento() {
  return ( 
    <>
    <NavBar></NavBar>
    <div className={styles.crearPlaneamientoContainer}>
      {/* Formulario de creación de planeamiento */}
      <div className={styles.formularioContainer}>
        <h2 className={styles.titlePlaneamiento}>Crear planeamiento</h2>
        <form className={styles.form}>
          <select className={styles.selectInput}>
            <option value="">Centro educativo</option>
            {/* Agrega las opciones reales */}
          </select>
          <select className={styles.selectInput}>
            <option value="">Ciclo educativo</option>
            {/* Agrega las opciones reales */}
          </select>
          <select className={styles.selectInput}>
            <option value="">Nivel</option>
            {/* Agrega las opciones reales */}
          </select>
          <select className={styles.selectInput}>
            <option value="">Materia</option>
            {/* Agrega las opciones reales */}
          </select>
          <select className={styles.selectInput}>
            <option value="">Unidad</option>
            {/* Agrega las opciones reales */}
          </select>
          <button type="submit" className={styles.buttonCrear}>
            Crear planeamiento
          </button>
        </form>
      </div>

      {/* Área de instrucciones */}
      <div className={styles.instruccionesContainer}>
        <p>Ingrese los datos en el recuadro para crear un planeamiento</p>
      </div>
    </div>
    </>
  );
}
