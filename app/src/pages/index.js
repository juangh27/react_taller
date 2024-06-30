// Filename - pages/index.js

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';


import taller from './taller_1.jpg';
import "./css/index.css"

function Home() {
	return (
		<main>
			<Container>
				<Row>
					<h1 class="text-big" className='text-center'>
						Su taller mecánico de confianza
					</h1>
				</Row>
				<Row>
					<h2>
						Brindamos servicios completos de reparación de automóviles para que su vehículo funcione sin problemas.
					</h2>
				</Row>
				<Row>
					<img
						alt=""
						src={taller}
						className="d-inline-block align-top"
					/>{' '}
				</Row>
				<Row>
					<h1>
						Esta es solo una muestra basica de como se veria la pagina, el diseño asi como colores e imagenes se agregan a peticion del cliente
					</h1>
				</Row>



			</Container>
		</main>
	)
};

export default Home;
