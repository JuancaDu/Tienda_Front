import "./Productos.css";
import Menu from "../Menu/Menu";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function FormProductos() {
  //const navigate = useNavigate();
  const MySwal = withReactContent(Swal);
  const navigate = useNavigate();

  let params = useParams(); // captura parameetros de la url { cedula }

  const InicializarForm = async () => {
    // validar si hay algo en el parametro cedula
    if (params.codigoproducto) {
      // hacer un get por cedula para traer los datos
      // despues de tener los datos asociales a los input los datos correspondientes
      const response = await fetch(
        "http://localhost:8080/Producto/" + params.codigoproducto
      );
      const data = await response.json();
      console.log(data);
      document.getElementById("codigo_Producto").value = data.codigo_Producto;
      document.getElementById("nombre_Producto").value = data.nombre_Producto;
      document.getElementById("nit_Proveedor").value = data.nit_Proveedor;
      document.getElementById("iva_Producto").value = data.iva_Producto;
      document.getElementById("precio_Venta_Producto").value = data.precio_Venta_Producto;
    }
  };
  useEffect(() => {
    //sirve para ejecutar esa funcion apenas carga o cuando cambia una variable dentro de la funcion
    InicializarForm();
  }, []);

  const crearNuevoProducto = async (e) => {
    e.preventDefault();

    const codigoproducto = document.getElementById("codigo_Producto").value;
    const nombreProducto = document.getElementById("nombre_Producto").value;
    const nitProveedor = document.getElementById("nit_Proveedor").value;
    const ivaProducto = document.getElementById("iva_Producto").value;
    const precioVentaProducto = document.getElementById("precio_Venta_Producto").value;

    if (
      codigoproducto &&
      nitProveedor &&
      nombreProducto &&
      ivaProducto &&
      precioVentaProducto
    ) {
      const usuarioCompleto = {
        codigo_Producto: codigoproducto,
        nombre_Producto: nitProveedor,
        nit_Proveedor: precioVentaProducto,
        iva_Producto: nombreProducto,
        precio_Venta_Producto: ivaProducto,
        
      };
      const response = await fetch("http://localhost:8080/saveProducto", {
        //aqui envia la inf
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, *cors, same-origin
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(usuarioCompleto), // body data type must match "Content-Type" header
      });
      const respuesta = await response.json();

      if (respuesta) {
        MySwal.fire(
          "Producto agregado",
          "El producto se agregado correctamente",
          "success"
        );

        navigate("/codigoproducto");
      } else {
        MySwal.fire(
          "Datos Incompletos",
          "Por favor complete todos los campos", "error"
        );
      }
    }
  };

  return (
    <>
      <div className="flex">
        <Menu></Menu>
        <div className="anchoMenu">
          <form>
            <div className="productoTitulo">
              <h1>Ingresar Productos</h1>
            </div>
            <div className="Contenido_Producto">
              <div className="Contenido_Productos_div">
                <div className="Contenido_Producto_cuadros">
                  <label htmlFor="Producto"> Código producto </label>
                  <input
                    id="codigo_Producto"
                    type="text"
                    name="codigo_Producto"
                    placeholder="Digite el código del producto"
                  />
                  <br />
                </div>

                <div className="Contenido_Producto_cuadros">
                  <label htmlFor="Usuario"> Usuario </label>
                  <input
                    id="ivaproducto"
                    type="text"
                    name="usuario_Usuarios"
                    placeholder="Digite el ivaproducto"
                  />
                  <br />
                </div>
              </div>

              <div className="Contenido_Usuarios_div">
                <div className="Contenido_Usuarios_cuadros">
                  <label htmlFor="Nombre_Completo"> Nombre Completo </label>
                  <input
                    type="text"
                    id="nombre_Usuarios"
                    placeholder="Digite el nombre"
                  />
                  <br />
                </div>

                <div className="Contenido_Usuarios_cuadros">
                  <label htmlFor="Contraseña"> Contraseña </label>
                  <input
                    type="text"
                    id="clave_Usuarios"
                    placeholder="Digite la contrasena"
                  />
                  <br />
                </div>
              </div>

              <div className="Contenido_Usuarios_div">
                <div className="Contenido_Usuarios_cuadros">
                  <label htmlFor="Correo_Electronico">
                    {" "}
                    Correo Electronico{" "}
                  </label>
                  <input
                    type="text"
                    id="correo_Usuarios"
                    placeholder="Digite el correo"
                  />
                  <br />
                </div>
              </div>
            </div>

            <div className="botones_Usuarios">
              <div className="botones_Usuarios_conte">
                <button
                  type="submit"
                  id="consultar_Usuarios"
                  className="btn btn-primary btn-lg active"
                  onClick={crearNuevoUsuario}
                >
                  Guardar
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default FormUsuario;