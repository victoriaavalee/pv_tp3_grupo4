import { useState, createContext, useContext } from "react";


const UsuarioContext = createContext();

export const UsuarioProvider = ({ children }) => {

    const [usuario, setUsuario] = useState({
        nombre: 'Juan Perez',
        dni: '123456789',
        rol: 'Docente',
        institucion: 'Facultad de Ingenieria'
    });


    const actualizarPerfil = (nuevosDatos) => {
        setUsuario((prev) => ({
            ...prev,
            ...nuevosDatos
        }));
    };

    return (
        <UsuarioContext.Provider value={{usuario, actualizarPerfil}}>
            {children}
        </UsuarioContext.Provider>)

}





