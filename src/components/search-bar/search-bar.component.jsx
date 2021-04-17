import React from 'react';

import { ReactComponent as SearchingIcon} from '../../assets/images/search-icon.svg';
import FormInput from '../form-input/form-input.component';
import './search-bar.styles.scss';


const SearchBar = ({ onChange }) => {
	const handleChange = e => {
		if(onChange) onChange(e);
	}
	return (
	<div className="search-bar">
		<SearchingIcon className="icon" />
		<FormInput 
			type='search'
			name='search'
			placeholder='command ...'
			handleChange={handleChange}
			required/>
	</div>
)};

export default SearchBar;