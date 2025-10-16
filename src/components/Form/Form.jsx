import { useState } from "react";

export const Form = () => {
    const [ user, setUser] = useState({
        name: "",
        email: "",
        pass: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        setUser({
            ...user,
            [name]: value
        });
    };


    const handleSumbit = () => {
        e.preventDefault();

        setNombre("");
        setEmail("");
        setContraseña("");
    }
  return (
    <form onSubmit={handleSumbit}>
        <input onChange={handleChange} value={nombre} type="text" placeholder="Ingrese Nombre" name="nombre" />
        <input onChange={handleChange} value={email} type="email" placeholder="Ingrese Email" name="email" />
        <input onChange={handleChange} value={contraseña} type="password" placeholder="Ingrese Contraseña" name="pass" />
        <input type="sumbit" value={"Enviar"} />
    </form>
  )
}
