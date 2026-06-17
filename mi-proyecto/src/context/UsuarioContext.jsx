import { useState, useEffect, createContext, useContext } from "react";

export const UsuarioContext = createContext();

export const UsuarioProvider = ({ children }) => {

    const [usuario, setUsuario] = useState(() => {
        const guardado = localStorage.getItem('usuario');
        if (guardado) {
            return JSON.parse(guardado);
        }
        return {
            nombre: 'Juan Perez',
            dni: '123456789',
            rol: 'Docente',
            institucion: 'Facultad de Ingenieria'
        };
    });

    useEffect(() => {
        localStorage.setItem('usuario', JSON.stringify(usuario));
    }, [usuario]);

    const actualizarPerfil = (nuevosDatos) => {
        setUsuario((prev) => ({
            ...prev,
            ...nuevosDatos
        }));
    };

    return (
        <UsuarioContext.Provider value={{ usuario, actualizarPerfil }}>
            {children}
        </UsuarioContext.Provider>
    );
};