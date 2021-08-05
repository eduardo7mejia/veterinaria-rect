import React, { Fragment, useState } from "react";
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from "uuid";
uuidv4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'

const Formulario = ({ crearCita }) => {
  //Crear State de citas
  const [cita, actualizarCita] = useState({
    mascota: '',
    propietario: '',
    fecha: '',
    hora: '',
    sintomas: '',
  });

  const [error, actualizarError] = useState(false);

  //Función que se ejecuta cada que el usuario escribe en un input
  const actualizarState = (e) => {
    //función para actualizar cita
    actualizarCita({
      //Copiar state sirve para objetos y arreglos
      ...cita,
      [e.target.name]: e.target.value,
    });
  };

  //Extraer los valores de los input
  const { mascota, propietario, fecha, hora, sintomas } = cita;

  //Cuando el usuario presiona agregar cita
  const submitCita = (e) => {
    e.preventDefault();

    // Validar
    if (
      mascota.trim() === '' ||
      propietario.trim() === '' ||
      fecha.trim() === '' ||
      hora.trim() === '' ||
      sintomas.trim() === ''
    ) {
      actualizarError(true);
      return;
    }
    // Eliminar el mensaje previo
    actualizarError(false);

    // Asignar un ID
    cita.id = uuidv4();

    // Crear la cita
    console.log(cita);
    crearCita(cita);
    // Reiniciar el form[]
    actualizarCita({
      mascota: '',
      propietario: '',
      fecha: '',
      hora: '',
      sintomas: '',
    });
  };

  return (
    <Fragment>
      <h4 className="bg-warning text-white text-center">Crear cita</h4>
      {error ? (
        <p className="alert alert-danger">Todos los campos son obligatorios</p>
      ) : null}
      <form onSubmit={submitCita} className="cuadro">
        <div className="col-md-12 col-xs-12 col-sm-12">
          <div className="form-group">
            <label>Nombre de la mascota:</label>
            <input
              type="text"
              name="mascota"
              className="form-control"
              placeholder="Nombre de la mascota"
              onChange={actualizarState}
              value={mascota}
            />
          </div>
          <div className="form-group">
            <label>Nombre de el dueño:</label>
            <input
              type="text"
              name="propietario"
              className="form-control"
              placeholder="Rufino"
              onChange={actualizarState}
              value={propietario}
            />
          </div>
          <div className="form-group">
            <label>Fecha de ingreso:</label>
            <input
              type="date"
              name="fecha"
              className="form-control"
              onChange={actualizarState}
              value={fecha}
            />
          </div>
          <div className="form-group">
            <label>Hora de registro:</label>
            <input
              type="time"
              name="hora"
              className="form-control"
              onChange={actualizarState}
              value={hora}
            />
          </div>
          <div className="form-group">
            <label>Síntomas:</label>
            <textarea
              className="form-control"
              name="sintomas"
              onChange={actualizarState}
              value={sintomas}
            ></textarea>
          </div>
          <div className="form-group">
            <button
              type="submit"
              className="btn btn-warning  btn-block text-uppercase"
            >
              Agregar Cita
            </button>
          </div>
        </div>
      </form>
    </Fragment>
  );
};
Formulario.propTypes={
  crearCita: PropTypes.func.isRequired
}
export default Formulario;
