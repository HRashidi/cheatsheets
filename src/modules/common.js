export const textSlicer = (text, length) => {
	return text.slice(0, length) + (text.length > length ? ' ...': '');
}

export const deepCopy = obj => {
	return JSON.parse(JSON.stringify(obj));
}