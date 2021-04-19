import React from "react";

import "./cheat-board.styles.scss";

const CheatBoard = ({ board, color, searchValue }) => {

	const activeField = data => data.toLowerCase().indexOf(searchValue.toLowerCase()) < 0;

	let { title, cards } = board;
	
	return (
	<div className="cheat-board" style={{backgroundColor: color}}>
		<h2 className="board-title">{title}</h2>
		{
			cards.map((board, index) => {
				return (
				<div key={"board-" + index} className="board-card">
					<h3 className={`board-card-title ${activeField(board.title) && 'inactive'}`}>{board.title}</h3>
					<ul>
						{
							board.commands.map(({cmd, tip}, index) => {
								return [
									<li key={index + "-cmd"} className={`cmd ${activeField(cmd) && 'inactive'}`}>{cmd}</li>,
									tip && <li key={index + "-tip"} className={`tip ${activeField(tip) && 'inactive'}`}>{tip}</li>
								]
							})
						}
					</ul>
				</div>)
			})
		}
	</div>
)};

export default CheatBoard;