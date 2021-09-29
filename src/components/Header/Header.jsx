import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
// import Logo from "../../images/Logo_Flor_de_lis.png";
import Logo from "../../images/Logo.png";
import getFetch from "../../mocks/products";
import getFetchCategories from "../../mocks/categories";
import Search from "../Search/Search";
import { NavDropdown } from "react-bootstrap";
import "./Header.css";
import getFetchSubCategories from "../../mocks/subCategories";
export const Header = () => {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(!show);
  const closeNav = () => setShow(false);
  const [listCategory, setListCategory] = useState([]);
  const [subListCategory, setSubListCategory] = useState([]);

  useEffect(() => {
    const getFetchCategory = async () => {
      await getFetchCategories
        .then((res) => {
          setListCategory(res);
          console.log("Categorias ", listCategory);
        })
        .catch((error) => console.log(error));
    };
    const getFetchSubCategory = async () => {
      await getFetchSubCategories
        .then((res) => {
          setSubListCategory(res);
          console.log("res =>", res);
          console.log("SubCategorias ", subListCategory);
        })
        .catch((error) => console.log(error));
    };
    getFetchCategory();
    getFetchSubCategory();
    console.log("SubCategorias ", subListCategory);
  }, []);
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
                  <>
                    <div key={category.id} className="divmenu2">
                      {category.subCategory ?
                      (
                        <NavDropdown
                            title={category.title}
                            className={category.subCategory ? "title-menu":"title-link"}
                            id="basic-nav-dropdown"
                        >
                          {subListCategory.filter(subCategory=> subCategory.id_category == category.id).map(subCategory =>
                                          <div key={subCategory.id}>
                                              <NavDropdown.Item   href={`/productos/${category.title}/${subCategory.title}`}>{subCategory.title}</NavDropdown.Item>
                                          </div>
                                      )}
                              <NavDropdown.Divider />
                              <NavDropdown.Item href={`/productos/${category.title}`}>Ver más</NavDropdown.Item>
                        </NavDropdown>
                      ):(
                        <NavDropdown.Item 
                          title={category.title} 
                          className={category.subCategory ? "title-menu":"title-link"}
                          href={`/productos/${category.title}`}
                          >
                            {category.title}
                          </NavDropdown.Item>
                      )}
                      
                       
                    </div>
                  </>
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
