import './menu.css';
function Menu() {
  return (
    <div className="menu_Contenedor_Menu">
       <a href="/Inicio" className="bi-house">Inicio </a>
        <a href="/Usuario" className="bi-people ">Usuarios </a>
        <a href="/" className="bi-door-closed">Cerrar Sesion </a>
      </div>
  );
}

export default Menu;
