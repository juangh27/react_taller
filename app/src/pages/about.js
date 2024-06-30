
// Filename - pages/about.js

import React from "react";
import { Container, Row } from "react-bootstrap";

const About = () => {
	return (
		<div>
			<Container>
				<Row className="md-center" >
					<h1>
						Nostros
					</h1>
				</Row>

				<Row className="md-center" >

					<p>
						En [Nombre de su taller mecánico], nos apasiona brindar a nuestros clientes
						servicios de reparación de automóviles de
						la más alta calidad a precios asequibles. Contamos con un equipo de
						mecánicos experimentados y certificados que pueden realizar cualquier reparación,
						desde revisiones menores hasta revisiones generales importantes.
					</p>
				</Row>

				<Row>
					<h1>
						Esta es solo una muestra basica de como se veria la pagina, el diseño asi como colores e imagenes se agregan a peticion del cliente
					</h1>
				</Row>

			</Container>
		</div>
	);
};

export default About;