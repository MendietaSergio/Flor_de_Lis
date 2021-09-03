import { useState } from "react"
import { Link } from 'react-router-dom'
import Logo from "../../images/Logo.png"
import Button from "../Button/Button"
import Search from "../Search/Search"
import './Header.css'
export const Header = () => {
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(!show);
    const closeNav = () => setShow(false);
    return (
        <>
            <div className="container shadow">
                <Search className="buscador_top"/>
                <div className="row">
                    <div className="col-2 logo">
                        <Link to="/">
                            <img src={Logo} onClick={closeNav} />
                        </Link>
                    </div>
                    <div className="col d-flex w-100 justify-content-end">
                        <button className="btn-menu" onClick={handleShow}>
                            <span>
                                <i className={show ? "fas fa-times" : "fas fa-bars"}></i>
                            </span>
                        </button>
                        <nav className={`menu d-flex align-items-center w-100 p-3 ${show ? "is-active" : ""}`}>
                            <>
                                <Link to="/" onClick={closeNav}>Inicio</Link>
                                <Link to="/productos" >Productos</Link>
                                <Link to="/contacto" onClick={closeNav}>Contacto</Link>
                                <Search className="buscador_header"/>
                            </>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    )
}