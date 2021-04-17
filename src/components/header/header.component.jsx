import React from 'react';

import Logo from '../../assets/images/xlord.png';
import './header.styles.scss';


const Header = ({onChange}) => {
	const handleChange = event => {
		if(onChange) onChange(event)
	}

	return (
	<div className="header">
		<div className="logo-container">
			<div className="logo">
				<img src={Logo} alt="logo"/>
			</div>
			<div className="title">
				Cheat Sheet Repo
			</div>
		</div>
		{/* <FormInput 
			type='search'
			name='search'
			placeholder='command ...'
			handleChange={handleChange}
			required/> */}
	</div>
)};

export default Header;