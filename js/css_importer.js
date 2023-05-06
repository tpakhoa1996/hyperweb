(async () => {
	const style = document.createElement('style');
	const href = window.location.href;
	document.head.appendChild(style);

	let cssURL = null;
	if (/^https?:\/\/+([^:/]+\.)?123duw\.com(\/.*)?$/.test(href)) {
		cssURL = 'https://raw.githubusercontent.com/tpakhoa1996/hyperweb/main/css/123duw.css';
	}

	style.textContent = await (await fetch(cssURL)).text();
})();
