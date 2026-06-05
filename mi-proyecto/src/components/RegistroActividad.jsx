import '../css/RegistroActividad.css';

function RegistroActividad({ fecha }) {
    if (!fecha) return null;

    const dia = String(fecha.getDate()).padStart(2, '0');
    const mes = String(fecha.getMonth() + 1).padStart(2, '0');
    const anio = fecha.getFullYear();
    const horas = String(fecha.getHours()).padStart(2, '0');
    const minutos = String(fecha.getMinutes()).padStart(2, '0');

    return (
        <section className="registro-actividad">
            <p>
                Última actualización de la lista: {dia}/{mes}/{anio} a las {horas}:{minutos} hs.
            </p>
        </section>
    );
}

export default RegistroActividad;
