import React from 'react';
import Tools from "../../data/tools.data";
import ToolIcon from '../../components/tool-icon/tool-icon.component';
import Logo from '../../assets/images/xlord.png';
import './main-page.styles.scss';

const MainPage = () => (
	<div className="home-page">
		<div className="logo-container">
			<h1>
				Cheat Sheet Repo
			</h1>
			<div className="logo">
				<img src={Logo} alt='logo'/>
			</div>
		</div>
		<div className="tools-container">
			{
				Tools.map(
					tool => <ToolIcon key={tool._id} {...tool} />
				)
			}
		</div>
	</div>
);

export default MainPage;