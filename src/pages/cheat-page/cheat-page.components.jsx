import React from 'react';

import Header from '../../components/header/header.component';
import Breadcrumb from '../../components/breadcrumb/breadcrumb.component';

import CheatBoard from '../../components/cheat-board/cheat-board.component';
import Spinner from '../../components/spinner/spinner.component';

import './cheat-page.styles.scss';

const colorList = ['#48456A', '#57562D', '#26656C', '#2F632E', '#2F4F3B', '#58572E', '#3C434A', '#5F2B65', '#55262E', '#5A2B33'];

const CheatPage = ({match}) => {

	let dataName = match.params.name;
	let bread_items = [
		{title: 'Home', routeName: `/`},
		{title: dataName, routeName: `/${dataName}`},
	];

	const [isLoaded, setLoaded] = React.useState(false);
	const [boards,   setBoards ] = React.useState([]);
	const [error,   setError ] = React.useState(null);
	React.useEffect(() => {
		async function fetchData(dataName) {
			try {
				let url = `${process.env.PUBLIC_URL}/data/${dataName}.data.json`;
				let res = await fetch(url);
				let boards = await res.json();
				setBoards(boards);
				
			} catch (error) {
				setError("Can't fetch the data");
			} finally {
				setLoaded(true);
			}
			
		};
		fetchData(dataName);
	}, [dataName]);

	const [searchValue, setSearchValue] = React.useState("");

	const handleChange = e => {
		let { value } = e.target;
		setSearchValue(value);
	};

	return (
		<div className="cheat-page">
			<Header onChange={handleChange}/>
			<Breadcrumb items={bread_items} />
			{
				isLoaded ?
				error ? 
				<div className="error-container">
					<p className="message">{error}</p>
				</div>
				:
				<div className="board-container">
					{
						boards.map(
							(board, index) => <CheatBoard key={board._id} board={board} color={colorList[index % 10]} searchValue={searchValue}/>
						)
					}
				</div>
				:
				<Spinner />
			}
			
			
		</div>
	)

}

export default CheatPage;