import React from 'react';

import Header from '../../components/header/header.component';
import Breadcrumb from '../../components/breadcrumb/breadcrumb.component';

// fetch(`/src/data/${dataName}.json`)
// 		.then((res) => res.json())
// 		.then((videos) => videos.filter((video) => {
// 		return video.id === videoID;
// 		}))
// 		.then((matched) => setVideo(matched[0]));
// 	}, []);
import './cheat-page.styles.scss';

const CheatPage = ({match}) => {

	let dataName = match.params.name;
	let bread_items = [
		{title: 'Home', routeName: `/`},
		{title: dataName, routeName: `/${dataName}`},
	]
	// const [ video, setVideo ] = React.useState(null); // 'video', not 'videos'
	// const { dataName } = React.useParams();
	console.log(dataName);
	// React.useEffect(() => {
	// fetch(`/src/data/${dataName}.json`)
	// 	.then(res => res.body)
	// 	.then(body => body.getReader())
	// 	.then(data => console.log(data))
	// }, []);
	// const [filteredProducts, setFilterProducts] = React.useState(products);

	const handleChange = e => {
		let { value } = e.target;
		searchFn(value);
	};
	
	const searchFn = value => {
		// let ـfilteredProducts = products.filter(item =>
		// 	item.name.toLowerCase().includes(value.toLowerCase()));
		// setFilterProducts(ـfilteredProducts);
	};
	return (
		<div className="cheat-page">
			<Header onChange={handleChange}/>
			<Breadcrumb items={bread_items} />

			<div className="content">

			</div>
			cheat <br/>
			cheat <br/>
			cheat <br/>
			cheat <br/>
			cheat <br/>
			cheat <br/>
			cheat <br/>
			cheat <br/>
			cheat <br/>
			cheat <br/>
			cheat <br/>
			cheat <br/>
			cheat <br/>
			cheat <br/>
			cheat <br/>
			cheat <br/>
			cheat <br/>
			cheat <br/>
		</div>
	)

}

export default CheatPage;