import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const url =
    "https://api-task-app-idl3-production.up.railway.app/api/products/";
  const [toDos, setToDos] = useState();
  const fetchApi = async () => {
    const response = await fetch(url);
    console.log(response.status);
    const resJson = await response.json();
    setToDos(resJson);
  };
  useEffect(() => {
    fetchApi();
  }, []);
  return (
    <div className="App">
      <div className="header">
        <span>Control de Tareas</span>
      </div>
        <div className="btn-add-task" > + Agregar nueva tarea </div>
      <div className="card-container">
        <ul className="w-3/5">
          {!toDos
            ? "Cargando tareas...⏳"
            : toDos.map((toDos, index) => {
                return (
                  <div
                    key={index}
                    className="border-solid border-2 border-sky-500 mb-1 rounded-md card"
                  >
                    <h2>Título: <span className="font-black">{toDos.title}</span> </h2>
                    <p>Descripción: <span className="font-medium">{toDos.description}</span> </p>
                    <p>Estado: {toDos.status === 1 ? "✅" : "❌"}</p>
                    <div className="btn-container">
                      <button className="btn btn-edit">Editar</button>
                      <button className="btn btn-delete">Eliminar</button>
                    </div>
                  </div>
                );
              })}
        </ul>
      </div>
    </div>
  );
}

export default App;
