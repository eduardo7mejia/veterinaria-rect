import React, { Fragment, useState, useEffect } from "react";
import Formulario from "./components/Formularios";
import Cita from "./components/Cita";
import Footer from "./components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaw } from "@fortawesome/free-solid-svg-icons";


function App() {
  // Citas en local storage
  let citasIniciales = JSON.parse(localStorage.getItem('citas'));
  if(!citasIniciales) {
    citasIniciales = [];
  }
  //arreglo de citas
  const [citas, guardarCitas] = useState(citasIniciales);
  //Use Effect para realizar ciertas operaciones cuando el state cambia
  useEffect(() =>{
    let citasIniciales = JSON.parse(localStorage.getItem('citas'));
    if (citasIniciales) {
      localStorage.setItem('citas', JSON.stringify(citas));
    }else{
      localStorage.setItem('citas', JSON.stringify([]));
    }
  },[citas]);

  //Función que tome las citas actaules y agregue la nueva
  const crearCita = cita => {
    console.log(citas);
    guardarCitas([...citas, cita])
  };
// Función para eliminar una cita
  const eliminarCita = id => {
    console.log(id);
    const nuevasCitas = citas.filter(cita => cita.id !== id);
    guardarCitas(nuevasCitas);
  }
  //Mensaje condicional
  const titulo = citas.length === 0 ? 'No hay citas' : 'Citas Pendientes';
  return (
    //Fragment para colocar más de dos elementos
    <Fragment>
      <div className="container p-2">
        <h2>
          <FontAwesomeIcon icon={faPaw} style={{ color: "white" }} />{" "}
          Veterinaria{" "}
          <FontAwesomeIcon icon={faPaw} style={{ color: "white" }} />
        </h2>
        <div className="row">
          <div className="col-md-6 col-sm-12">
            <Formulario
            crearCita={crearCita}
            />
          </div>
          <div className="col-md-6 col-sm-12">
            <h4 className="bg-warning text-white text-center">
              {titulo}
            </h4>
            {citas.map(cita => (
              <Cita 
              key={cita.id} cita={cita} eliminarCita={eliminarCita} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
}
export default App;
