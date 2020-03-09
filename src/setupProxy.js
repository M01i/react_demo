const {createProxyMiddleware} = require('http-proxy-middleware')

module.exports = function(app) {
    app.use('/vip', 
    createProxyMiddleware({ 
              target: 'https://vip.yunifang.com/yunifang/wap/goods/api/category/detail/',
              changeOrigin: true,
              pathRewrite:{
                  "^/vip":""
              } 
            }
         ));
    app.use('/ynf', 
    createProxyMiddleware({ 
              target: 'https://image.yunifang.com/cache/wap/',
              changeOrigin: true,
              pathRewrite:{
                  "^/ynf":""
              } 
            }
    ));
    app.use('/all', 
    createProxyMiddleware({ 
              target: 'https://vip.yunifang.com/goods/api/goods/',
              changeOrigin: true,
              pathRewrite:{
                  "^/all":""
              } 
            }
    ));
    app.use('/vip2', 
    createProxyMiddleware({ 
              target: 'https://vip.yunifang.com/yunifang/wap/goods/api/goods/detail/',
              changeOrigin: true,
              pathRewrite:{
                  "^/vip2":""
              } 
            }
         ));
    app.use('/vip3', 
    createProxyMiddleware({ 
                target: 'https://vip.yunifang.com/yunifang/wap/goods/api/home',
                changeOrigin: true,
                pathRewrite:{
                    "^/vip3":""
                } 
                }
            ));
}
