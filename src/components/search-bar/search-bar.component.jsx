import React from 'react';

import { connect } from 'react-redux';
import { toggleSearchHidden } from '../../redux/view/view.actions';

import { ReactComponent as SearchingIcon} from '../../assets/images/search-icon.svg';

import './search-icon.styles.scss';


const SearchIcon = ({toggleSearchHidden, children}) => (
	<div className="search-icon" onClick={toggleSearchHidden}>
		<SearchingIcon className="icon" />
		{children}
	</div>
);

const mapDispatchToProps = dispatch => ({
	toggleSearchHidden: () => dispatch(toggleSearchHidden())
})

export default connect(null, mapDispatchToProps)(SearchIcon);