// Filename - pages/contact.js

import React from "react";
import { Container, Row } from "react-bootstrap";

const Contact = () => {
	return (
		<div>
			<Container>
				<Row className="md-center" >
					<h1>
						Contacto
					</h1>
				</Row>

				<Row className="md-center" >

					<p>
						Contáctenos:

						[Nombre de su taller mecánico]
						[Su dirección]
						[Su número de teléfono]
						[Su dirección de correo electrónico]

						Horario de atención:

						Lunes a viernes: 8:00 AM - 5:00 PM
						Sábado: 8:00 AM - 12:00 PM
						Domingo: Cerrado
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

export default Contact;
