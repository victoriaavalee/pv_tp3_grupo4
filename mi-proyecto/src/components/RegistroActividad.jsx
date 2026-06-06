import '../css/RegistroActividad.css';

function formatearFecha(fecha) {
    const d = new Date(fecha);
    const dia = d.getDate().toString().padStart(2, '0');
    const mes = (d.getMonth() + 1).toString().padStart(2, '0');
    const anio = d.getFullYear();
    const horas = d.getHours().toString().padStart(2, '0');
    const minutos = d.getMinutes().toString().padStart(2, '0');
    return `${dia}/${mes}/${anio} a las ${horas}:${minutos} hs.`;
}

function RegistroActividad({ fecha }) {
    if (!fecha) return null;
    return (
        <section className="registro-actividad">
        <p>
            Última actualización de la lista: {formatearFecha(fecha)}
        </p>
        </section>
    );
}

export default RegistroActividad;
