import "./Search.css"

import React from "react";
const Search = ({className=""}) => {
    return (
        <>
            <div className={`row justify-content-center ${className}`}>
                <form to="/productos" className="">
                    <div className="input-group ">
                        <input className="form-control" type="search" placeholder="Buscar..." />
                        <div className="input-group-append">
                            <button type="submit" className="btn"><i className="fas fa-search"></i></button>
                        </div>
                    </div>
                </form>
            </div>

        </>
    )
}
export default Search;