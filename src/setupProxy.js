const { createProxyMiddleware } = require("http-proxy-middleware");

//const target = `${MyContants._base_port}/${MyContants._base_url}`
//const _target = target;
//const _target = URL._base_url_real_MCP;

module.exports = function (app) {
   /* app.use(
    "/",
    createProxyMiddleware({
      //voor de MCP app
      target: "http://localhost:3000",
      //Voor de Echte MCP bij Jelle
      //target: 'http://10.12.20.217:8050/MCP',
      changeOrigin: true,
    })
  );  */
};
