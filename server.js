// 奥特曼卡牌对战 - PeerJS 自建信令服务器
// 作用：只负责让两个浏览器互相找到对方（撮合/握手），
// 游戏数据在 WebRTC 点对点之间直连，不经过本服务器。
const { PeerServer } = require('peer');

const PORT = parseInt(process.env.PORT || '9000', 10);
const KEY = process.env.PEER_KEY || 'peerjs';
let PATH = process.env.PEER_PATH || '/';
if (!PATH.startsWith('/')) PATH = '/' + PATH;
if (!PATH.endsWith('/')) PATH = PATH + '/';
const ALLOW_DISCOVERY = process.env.ALLOW_DISCOVERY === 'true';

const peerServer = PeerServer({
  port: PORT,
  path: PATH,
  key: KEY,
  allow_discovery: ALLOW_DISCOVERY,
});

console.log('[peer-server] 信令服务器已启动');
console.log('  端口 port :', PORT);
console.log('  路径 path :', PATH);
console.log('  密钥 key  :', KEY);
console.log('  本机访问  : ws://localhost:' + PORT + PATH);
console.log('  公网访问  : ws://<服务器IP或域名>:' + PORT + PATH);
console.log('  注意: 若游戏页面是 https，必须使用 wss（见 README 的 Nginx/HTTPS 配置）。');
