(() => {
	let style = document.createElement('link', {
		rel: 'stylesheet',
		type: 'text/css',
		href: ''
	});

	const cssImporter = () => {
		style.remove();
		style = style.cloneNode(true)
		const href = document.location.href;
		if (/^https?:\/\/+([^:/]+\.)?123duw\.com(\/.*)?$/.test(href)) {
			style.href = 'https://github.com/tpakhoa1996/hyperweb/blob/main/css/123duw.css';
		}
		document.head.append(style);
	}

	cssImporter();

	let currentURL = document.location.href;

	const urlObserver = new MutationObserver(() => {
		if (document.location.href !== currentURL) {
			currentURL = window.location.href;
			cssImporter();
		}
	});

	urlObserver.observe(document, {childList: true, subtree: true});

	window.addEventListener('beforeunload', () => {
		urlObserver.disconnect();
	});
})();
