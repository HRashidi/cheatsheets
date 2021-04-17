import React from 'react';
import { Link } from 'react-router-dom';

import './tool-icon.styles.scss';

const ToolIcon = ({ title, routeName, imageUrl}) => {
	
	return (
	<div className="tool-icon">
		<div className="icon">
			<Link to={process.env.PUBLIC_URL + routeName} >
				<img src={process.env.PUBLIC_URL + imageUrl} alt={title}/>
			</Link>
		</div>
		<div className="title">
			<h2>{title}</h2>
		</div>
	</div>
)}

export default ToolIcon;
