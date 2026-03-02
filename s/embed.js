let destination = "";

function showError(msg) {
	document.querySelector('.spinner')?.remove();
	document.querySelector('p')?.remove();
	const box = document.createElement('div');
	box.style.cssText = 'background:rgba(220,50,50,0.15);border:1px solid rgba(220,50,50,0.4);border-radius:8px;padding:1rem 1.5rem;max-width:420px;text-align:center';
	box.innerHTML = `<h3 style="color:#f87171;margin-bottom:0.5rem">⚠ Connection Failed</h3><p style="color:#fca5a5;font-size:0.82rem">${msg}</p>`;
	document.body.appendChild(box);
}

try {
	const raw = location.hash.slice(1);
	if (!raw) throw new Error("No URL provided.");
	destination = new URL(raw);
	if (!destination.protocol || destination.protocol === 'null:') {
		destination = new URL("https://" + raw);
	}
} catch (err) {
	showError(`Bad URL: ${err.message}`);
	throw err;
}

registerSW()
	.then(() => {
		window.open(
			__uv$config.prefix + __uv$config.encodeUrl(destination.toString()),
			"_self",
		);
	})
	.catch((err) => {
		showError(`Proxy error: ${err.message}`);
	});