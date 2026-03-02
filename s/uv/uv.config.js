self.__uv$config = {
	prefix: "/s/ultraviolet/",
	bare: [
		"https://uv.holyubofficial.net/",
		"https://bare.derpygamer2142.com/",
		"https://uv-bare.onrender.com/",
	],
	encodeUrl: Ultraviolet.codec.xor.encode,
	decodeUrl: Ultraviolet.codec.xor.decode,
	handler: "/s/uv/uv.handler.js",
	bundle: "/s/uv/uv.bundle.js",
	config: "/s/uv/uv.config.js",
	sw: "/s/uv/uv.sw.js",
};
