(async () => {
    const run = () => {
        alert("running");
        Array.from(document.querySelectorAll('.content-chapter > p')).forEach(p => {
            if (p.getAttributeNames().length > 0) {
                const beforeAttr = window.getComputedStyle(p, '::before')['content'].split(/\(|\)/)[1];
                const afterAttr = window.getComputedStyle(p, '::after')['content'].split(/\(|\)/)[1];

                let beforeText = p.getAttribute(beforeAttr);
                let affterText = p.getAttribute(afterAttr);

                p.setAttribute(beforeAttr, '');
                p.setAttribute(afterAttr, '');

                if (beforeText.endsWith('null')) {
                    beforeText = beforeText.slice(0, -4);
                }

                if (affterText.startsWith('null')) {
                    affterText = affterText.slice(4);
                }

                p.textContent = beforeText + p.textContent + affterText;
            }
        });
    }

    if (document.readyState === 'complete') {
        run();
    } else {
        window.addEventListener('load', run);
    }
})();