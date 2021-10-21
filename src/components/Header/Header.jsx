import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../../images/Logo.png";
import { getFirestore } from "../../services/getFirebase";
import Search from "../Search/Search";
import { NavDropdown } from "react-bootstrap";
import "./Header.css";

export const Header = () => {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(!show);
  const closeNav = () => setShow(false);
  const [listCategory, setListCategory] = useState([]);
  const [subListCategory, setSubListCategory] = useState([]);

  const dbQuery = getFirestore()
    useEffect(()=>{    
        getCategory()
        getSubCategory()
        
    },[])
    const getCategory = async () =>{
    await dbQuery.collection('category').get()
    .then(resp=>{
        setListCategory(resp.docs.map(item => ({id: item.id, ...item.data()})))
    })
    .catch(error => console.log(error))
    }
    
    const getSubCategory = async () =>{
    await dbQuery.collection('subCategory').get()
        .then(resp=>{
            setSubListCategory(resp.docs.map(item => ({id: item.id, ...item.data()})))
        })
    }
  return (
    <>
      <div className="container shadow">
        <Search className="buscador_top" />
        <div className="row">
          <div className="col-2 logo d-flex justify-content-center">
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
            <nav
              className={`menu d-flex align-items-center w-100 p-3 ${
                show ? "is-active" : ""
              }`}
            >
              <Link to="/" onClick={closeNav}>
                Inicio
              </Link>
              <NavDropdown title="Productos" id="basic-nav-dropdown">
                {listCategory.map((category) => (
                  
                    <div key={category.id} className="divmenu2">
                      {category.subCategory ?
                      (
                        <NavDropdown
                            title={category.name}
                            className={category.subCategory ? "title-menu":"title-link"}
                            id="basic-nav-dropdown"
                        >
                          {subListCategory.filter(subCategory=> subCategory.name_category == category.name).map(subCategory =>
                                          <div key={subCategory.id}>
                                              <NavDropdown.Item   href={`/productos/${category.name}/${subCategory.name}`}>{subCategory.name}</NavDropdown.Item>
                                          </div>
                                      )}
                              <NavDropdown.Divider />
                              <NavDropdown.Item href={`/productos/${category.name}`}>Ver más</NavDropdown.Item>
                        </NavDropdown>
                      ):(
                        <NavDropdown.Item 
                          title={category.name} 
                          className={category.subCategory ? "title-menu":"title-link"}
                          href={`/productos/${category.name}`}
                          >
                            {category.name}
                          </NavDropdown.Item>
                      )}
                      
                       
                    </div>
                  
                ))}
                <NavDropdown.Divider />
                <NavDropdown.Item href="/productos">Ver más</NavDropdown.Item>
              </NavDropdown>
              <Link to="/contacto" onClick={closeNav}>
                Contacto
              </Link>
              <Search className="buscador_header" to="/productos" />
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};
