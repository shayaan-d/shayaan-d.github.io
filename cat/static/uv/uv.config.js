self.__uv$config = {
    prefix: '/cat/static/tiw/',
    bare:'https://bare.benrogo.net',
    encodeUrl: Ultraviolet.codec.xor.encode,
    decodeUrl: Ultraviolet.codec.xor.decode,
    handler: '/cat/static/uv/uv.handler.js',
    bundle: '/cat/static/uv/uv.bundle.js',
    config: '/cat/static/uv/uv.config.js',
    sw: '/cat/static/uv/uv.sw.js',
};
