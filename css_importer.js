(async () => {
	const style = document.createElement('style');
	const href = window.location.href;

	let cssURL = null;
	if (/^https?:\/\/+([^:/]+\.)?123duw\.com(\/.*)?$/.test(href)) {
		cssURL = 'https://raw.githubusercontent.com/tpakhoa1996/hyperweb/main/css/123duw.css?hash=4';
	} else if (/^https?:\/\/+([^:/]+\.)?bqg126\.com(\/.*)?$/.test(href)) {
    	cssURL = 'https://raw.githubusercontent.com/tpakhoa1996/hyperweb/main/css/bqg126.css?hash=4';
	}

	if (cssURL !== null) {
		style.textContent = await (await fetch(cssURL)).text();
		document.head.appendChild(style);
	}
})();
