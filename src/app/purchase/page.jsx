import NavBar from '../components/navbar/navbar';
import style from './purchase.module.css';
import Image from 'next/image';


const monedasData = [
  { id: 1, cantidad: 4, precio: 1000 },
  { id: 2, cantidad: 8, precio: 2000 },
  { id: 3, cantidad: 12, precio: 4000 },
  { id: 4, cantidad: 16, precio: 8000 },
  { id: 5, cantidad: 32, precio: 16000 },
  { id: 6, cantidad: 64, precio: 32000 },
  { id: 7, cantidad: 128, precio: 64000 },
  { id: 8, cantidad: 256, precio: 128000 },
];

export default function ComprarMonedas() {
  return (
    <>
    <NavBar />
    <div className={style.containerMonedas}>
      <h2 className={style.titleMonedas}>Comprar monedas</h2>

      <div className={style.gridMonedas}>
        {monedasData.map((moneda) => (
          <div className={style.cardMoneda} key={moneda.id}>
            <Image src="coins.svg" alt="Icono Monedas" width={50} height={50} />
            <h3 className={style.cantidadMoneda}>{moneda.cantidad}</h3>
            <p className={style.precioMoneda}>₡{moneda.precio.toLocaleString()}</p>
            <button className={style.buttonComprar}>Comprar</button>
          </div>
        ))}
      </div>

      <p className={style.terminosMonedas}>
        Al comprar monedas, recibirás una cantidad determinada, no reembolsable, intransferible y revocable, las cuales no tienen ningún valor en moneda real. Al comprar monedas debes: 1) aceptas que eres mayor de 18 años y que estás autorizado a facturar tu cuenta mensualmente hasta que no se cancele la suscripción; 2) entiendes y aceptas los Términos de uso, que incluyen un acuerdo para arbitrar cualquier disputa entre tú y MisPlanes, y la Política de privacidad. Si cancelas, se te cobrará el período de facturación actual. Ver Términos de uso para otras limitaciones.
      </p>
    </div>
    </>
  );
}
