import React from 'react'
import { Link } from "react-router-dom";

export function AddTaskForm () {
    return(
        <div>
            <form
            className="bg-white border-4 flex flex-col gap-x-4 border-blue-700 shadow-md  px-8 pt-6 pb-8 mb-4"
            // onSubmit={handleSubmit}
            >
            

            <div className="flex w-full">
              <div className="flex flex-col flex-1 items-center justify-center">
                <div className="mb-4">
                  <label
                    className="block text-blue-500 text-xl font-bold mb-2"
                    htmlFor="codigo"
                  >
                    Codigo <span className="text-red-700 font-extrabold text-2xl">*</span>
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-80 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline dark:bg-gray-200 dark:border-slate-500 dark:text-gray-900 focus:border-blue-400"
                    type="text"
                    placeholder="Codigo"
                    id="codigo"
                    name="codigo"
                    // onChange={handleChange}
                    // value={cliente.codigo}
                    minLength='6'
                    maxLength='6'
                    autoComplete="off"
                    required
                    
                  />
                </div>

                <div className="mb-4">
                  <label
                    className="block text-blue-500 text-xl font-bold mb-2"
                    htmlFor="nombres"
                  >
                    Nombres <span className="text-red-700 font-extrabold text-2xl">*</span>
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-80 py-2 px-3 text-blue-500 leading-tight focus:outline-none focus:shadow-outline dark:bg-gray-200 dark:border-slate-500 dark:text-gray-900 focus:border-blue-400"
                    type="text"
                    placeholder="Nombres"
                    id="nombres"
                    name="nombres"
                    // onChange={handleChange}
                    // value={cliente.nombres}
                    required
                    autoComplete="off"
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block text-blue-500  text-xl font-bold mb-2"
                    htmlFor="apellidos"
                  >
                    Apellidos <span className="text-red-700 font-extrabold text-2xl">*</span>
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-80 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline dark:bg-gray-200 dark:border-slate-500 dark:text-gray-900 focus:border-blue-400"
                    type="text"
                    placeholder="Apellidos"
                    id="apellidos"
                    name="apellidos"
                    // onChange={handleChange}
                    // value={cliente.apellidos}
                    required
                    autoComplete="off"
                  />
                </div>

                
              </div>
             
              

              
            </div>
          
            <div className="w-full flex items-center justify-center gap-10">
              
              <Link  to="../pages/addTask.js">
                Crear tarea
              </Link>
            </div>
            <p className="w-full text-end text-red-500 font-bold text-lg">* Campos obligatorios</p>
          </form>
        </div>
    )
}