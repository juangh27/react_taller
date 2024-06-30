// Filename - components/Footer.js

import React from "react";
import {
	Container, Row, } from "react-bootstrap"

import "./style.css"

function Footer () {
	return (
		<footer>
			<Container fluid className="footer">
				<Row className="justify-content-md-center text-bg-secondary p-3" >
				Copyright ©- Juan Miguel Gonzalez Hernandez 	-  2024
				</Row>
			</Container>
		</footer>

	)
};
export default Footer;
