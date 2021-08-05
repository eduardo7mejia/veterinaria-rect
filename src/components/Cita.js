import React from 'react';
import PropTypes from 'prop-types';

const Cita = ({ cita, eliminarCita }) => (
  <div className="cita col-md-12 col-xs-12 col-sm-12">
    <div className="form-group">
      <p>Mascota: <span>{cita.mascota}</span></p>
      <p>Dueño: <span>{cita.propietario}</span></p>
      <p>Fecha de ingreso: <span>{cita.fecha}</span></p>
      <p>Hora: <span>{cita.hora}</span></p>
      <p>Síntomas: <span>{cita.sintomas}</span></p>
      <div className="form-group">
        <button onClick={() => eliminarCita(cita.id)} className="btn btn-outline-danger  btn-block text-uppercase">
          Eliminar cita
        </button>
      </div>
    </div>
  </div>
);
Cita.propTypes={
  cita: PropTypes.object.isRequired,
  eliminarCita: PropTypes.func.isRequired
}
export default Cita;