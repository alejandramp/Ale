import { useState } from "react";
import Boton from "../components/Boton";
import Modal from "../components/Modal";

function Dudas() {

    const [nombre, setNombre] = useState("");
    const [correo, setCorreo] = useState("");
    const [comentario, setComentario] = useState("");

    const [mostrar, setMostrar] = useState(false);
    const [mensaje, setMensaje] = useState("");

    function cerrarModal() {
        setMostrar(false);
    }

    function mostrarModal() {
        setMostrar(true);
    }

    function enviarFormulario(evento) {
        evento.preventDefault();

        if (nombre.trim() === "" ||
            correo.trim() === "" ||
            comentario.trim() === ""
        ) {
            setMensaje("complete todos los campos del formulario.")
        } else {
            setMensaje("Se envió correctamente.")
            limpiarFormulario()
        }
        setMostrar(true);

    }

    function limpiarFormulario() {
        setNombre("");
        setCorreo("");
        setComentario("");
    }

    return (
        <main>
            <h1>Dudas</h1>
            <form onSubmit={enviarFormulario}>
                <label>Nombre:</label>
                <input
                    type="text"
                    value={nombre}
                    onChange={(evento) => setNombre(evento.target.value)}
                />

                <label>Correo:</label>
                <input
                    type="email"
                    value={correo}
                    onChange={(evento) => setCorreo(evento.target.value)}
                />
                <label>Comentario:</label>
                <textarea
                    value={comentario}
                    onChange={(evento) => setComentario(evento.target.value)}
                />

                <button type="submit">Enviar</button>
            </form>

            {mostrar && (
                <Modal>
                   <h2>Mensaje</h2>
                   <p>{mensaje}</p>
                    <Boton funcion={cerrarModal} texto="Cerrar">Aceptar</Boton>
                </Modal>
            )}
        </main>
    )

}

export default Dudas;