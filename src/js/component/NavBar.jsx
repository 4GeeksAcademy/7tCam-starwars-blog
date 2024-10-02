import React, {useContext} from "react";
import { Context } from "../store/appContext";

import { Link } from "react-router-dom";
const Navbar = () => {
    // accdeder propiedades<>store y funciones
    const {store,actions}=useContext(Context)

    return (
        <nav className="navbar navbar-dark mb-2 sticky-top" style={{ backgroundColor: '#010409' }}>
            <div className="container">
            <Link to="/">
                <img src="https://www.freepnglogos.com/uploads/star-wars-logo-31.png" alt="Logo" className="navbar-brand mb-0 py-0" style={{ height: '80px', marginLeft: "55px" }} />
            </Link>
            <div className="ml-auto">
                <div className="dropdown">
                    <button className="btn dropdown-toggle bg-info" style={{ color: 'white'}} type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                        Favorites <span className="badge bg-secondary">{store.favoriteList.length}</span>
                    </button>
                    <ul className="bg-info  dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuButton" style={{color: 'white',width: '240px'  }}>
                        {
                            store.favoriteList.map((item, index) => {
                                return (<li key={item.id} className=" dropdown-item" style={{ color: 'white', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '4px 4px' }}>
      <span>{item.name}</span>
      <button 
        onClick={() => actions.deleteFavorite(item)}
        className="btn btn-danger btn-sm"
        style={{ width: '30px', padding: '2px', marginLeft: '8px' }}>
        <i className="fas fa-trash"></i>
      </button>
    </li>)
                            })
                        }
                    </ul>
                </div>
            </div>
            </div>
        </nav>
    );
};
export default Navbar;