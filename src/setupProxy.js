const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
   app.use(
    "/rss",
    createProxyMiddleware({
      target: "http://rss.opendata.belfla.be/",
      //Voor de Echte MCP bij Jelle
      //target: 'http://10.12.20.217:8050/MCP',
      changeOrigin: true,
    })
  ); 
};
