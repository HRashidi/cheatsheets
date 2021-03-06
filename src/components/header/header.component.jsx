import React from 'react';

import Logo from '../../assets/images/xlord.png';
import SearchBar from '../search-bar/search-bar.component';
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
		<div className="search-container">
			<SearchBar onChange={handleChange}/>
		</div>
		
	</div>
)};

export default Header;