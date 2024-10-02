import React, { useContext} from "react"; //useEffect
import  Cartas  from "../component/Cards.jsx";
import { Context } from "../store/appContext";
import  Navbar  from "../component/NavBar.jsx";
// import { Footer } from "../component/footer";
export const Home = () => {
	// store:propiedades actions:funciones
const {store, actions} = useContext(Context)

	return (
		<div style={{ backgroundColor: '#0d1117' }}>
		{/* <h1>qwerty</h1> */}
			<Navbar /> 
			<div className="container contenedor-tarjetas mx-auto px-5 w-100">
				<Cartas/>
			</div>
				{/* <div className="d-flex flex-row justify-content-center">
					
					{store.personajes.map((item, index) =>
						<Cartas key={index} personajes={item} />
					)}
				</div>  */}
			{/* <Footer /> */}
		</div>

	)
};
