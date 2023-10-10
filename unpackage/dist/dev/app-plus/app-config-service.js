
var isReady=false;var onReadyCallbacks=[];
var isServiceReady=false;var onServiceReadyCallbacks=[];
var __uniConfig = {"pages":["pages/index/index","pages/ServerView/ServerView","pages/EnvironmentView/EnvironmentView","pages/NewView/NewView","pages/PersonalView/PersonalView","pages/detail/detail"],"window":{"navigationBarTextStyle":"black","navigationBarTitleText":"uni-app","navigationBarBackgroundColor":"#F8F8F8","backgroundColor":"#F8F8F8","background":"#efeff4"},"tabBar":{"color":"#666","selectedColor":"#0929F7","list":[{"text":"首页","pagePath":"pages/index/index","iconPath":"static/image/icon/home.png","selectedIconPath":"static/image/icon/home-s.png"},{"text":"全部服务","pagePath":"pages/ServerView/ServerView","iconPath":"static/image/icon/all-server.png","selectedIconPath":"static/image/icon/all-serveer-s.png"},{"text":"智慧环保","pagePath":"pages/EnvironmentView/EnvironmentView","iconPath":"static/image/icon/huanbao.png","selectedIconPath":"static/image/icon/huanbao-h.png"},{"text":"新闻","pagePath":"pages/NewView/NewView","iconPath":"static/image/icon/news.png","selectedIconPath":"static/image/icon/news-s.png"},{"text":"个人中心","pagePath":"pages/PersonalView/PersonalView","iconPath":"static/image/icon/peerson.png","selectedIconPath":"static/image/icon/person-s.png"}]},"darkmode":false,"nvueCompiler":"uni-app","nvueStyleCompiler":"uni-app","renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"智慧城市","compilerVersion":"3.8.12","entryPagePath":"pages/index/index","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000}};
var __uniRoutes = [{"path":"/pages/index/index","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"智慧城市"}},{"path":"/pages/ServerView/ServerView","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"全部服务","enablePullDownRefresh":false}},{"path":"/pages/EnvironmentView/EnvironmentView","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"智慧环保","enablePullDownRefresh":false}},{"path":"/pages/NewView/NewView","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"新闻","enablePullDownRefresh":false}},{"path":"/pages/PersonalView/PersonalView","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"个人中心","enablePullDownRefresh":false}},{"path":"/pages/detail/detail","meta":{},"window":{"navigationBarTitleText":"新闻详情页","enablePullDownRefresh":false}}];
__uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
__uniConfig.onServiceReady=function(callback){if(__uniConfig.serviceReady){callback()}else{onServiceReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"serviceReady",{get:function(){return isServiceReady},set:function(val){isServiceReady=val;if(!isServiceReady){return}const callbacks=onServiceReadyCallbacks.slice(0);onServiceReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:Math.round(f/20)})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,global:void 0,window:void 0,document:void 0,frames:void 0,self:void 0,location:void 0,navigator:void 0,localStorage:void 0,history:void 0,Caches:void 0,screen:void 0,alert:void 0,confirm:void 0,prompt:void 0,fetch:void 0,XMLHttpRequest:void 0,WebSocket:void 0,webkit:void 0,print:void 0}}}});
