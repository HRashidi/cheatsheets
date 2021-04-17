import React from 'react';

import './cheat-board.styles.scss';

const CheatBoard = ({ onChange }) => {
	const handleChange = e => {
		if(onChange) onChange(e);
	}

	let boardTitle = 'Merge/Rebase';
	let boardCards = [
		{
			title : 'Merge branch into current',
			commands : [
				'git merge branch'
			]
		},
		{
			title : 'Rebase into branch',
			commands : [
				'git rebase branch',
				'git rebase master branch'
			]
		},
		{
			title : 'Abort rebase',
			commands : [
				'git rebase --abort',
			]
		},
		{
			title : 'Merge tool to solve conflicts',
			commands : [
				'git mergetool',
			]
		},
		{
			title : 'To view the merge conflicts',
			commands : [
				'git diff',
				'complete conflict diff',
				'git diff --base $file',
				'against base file',
				'git diff --ours $file',
				'against your changes',
				'git diff --theirs $file',
				'against other changes'
			]
		},
		{
			title : 'To discard conflicting patch',
			commands : [
				'git reset --hard',
				'git rebase --skip'
			]
		},
		{
			title : 'After resolving conflicts',
			commands : [
				'git add $conflicting_file',
				'do for all resolved files',
				'git rebase --continue'
			]
		},
		
	]
	return (
	<div className="cheat-board">
		<h2 class="board-title">{boardTitle}</h2>
		{
			boardCards.map((board, index) => {
				return 
				<div key={index} className="board-card">
					<h3 class="board-card-title">{board.title}</h3>
					<ul>
						{
							board.commands.map((command, index) => {
								<li key={index}>{command}</li>
							})
						}
						
					</ul>
				</div>
			})
		}
		
		<div class="board-card">
			<h3 class="board-card-title">To view the merge conflicts</h3>
			<ul>
				<li>git diff</li>
				<li class="tip">complete conflict diff</li>
				<li>git diff --base $file</li>
				<li class="tip">against base file</li>
				<li>git diff --ours $file</li>
				<li class="tip">against your changes</li>
				<li>git diff --theirs $file</li>
				<li class="tip">against other changes</li>
			</ul>
		</div>
	</div>
)};

export default CheatBoard;