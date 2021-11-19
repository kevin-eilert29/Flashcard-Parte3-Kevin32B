import React from "react";
import {NavLink} from 'react-router-dom';
import { Row } from 'react-materialize';

import Course from './course'

const Cursos = (props) => (
	<div>
		<Row>
			<div class="bar">
				<h5>Cursos</h5>
			</div>
			{props.cursosInfo.map(cursoInfo =>(
				<Course
					course={cursoInfo} 
				/>
			))}
		</Row>
		<NavLink to="/forms">
			<a class="btn-floating btn-large waves-effect waves-light red"><i class="material-icons">add</i></a>
		</NavLink>
	</div>
);

export default Cursos;