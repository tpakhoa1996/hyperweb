(async () => {
    const run = () => {
        Array.from(document.querySelectorAll('.content-chapter > p')).forEach(p => {
            if (p.getAttributeNames().length > 0) {
                const beforeAttr = window.getComputedStyle(p, '::before')['content'].split(/\(|\)/)[1];
                const afterAttr = window.getComputedStyle(p, '::after')['content'].split(/\(|\)/)[1];
                p.textContent = p.getAttribute(beforeAttr) + p.textContent + p.getAttribute(afterAttr);
                p.setAttribute(beforeAttr, '');
                p.setAttribute(afterAttr, '');
            }
        });
    }

    if (document.readyState === 'complete') {
        run();
    } else {
        window.addEventListener('load', run);
    }
})();