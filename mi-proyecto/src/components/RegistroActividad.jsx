import '../css/RegistroActividad.css';

function RegistroActividad({ fecha }) {
    if (!fecha) return null;
    return (
        <section className="registro-actividad">
            <p>
                Última actualización de la lista:
                {' '}
                {fecha}
            </p>
        </section>
    );
}

export default RegistroActividad;