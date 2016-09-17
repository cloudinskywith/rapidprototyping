# Framer starter kit with iPhone 6 (750x1334)

device = new Framer.DeviceView();
device.setupContext();
device.deviceType = "iphone-6-silver-hand";
device.contentScale = 1;

background = new BackgroundLayer
  backgroundColor: "white"


# layer的width和height默认值都是200
# print background.width 可知屏幕宽度是750 1334

myLayer = new Layer

myLayerPostion = new Layer
  backgroundColor:"aqua"
  y:myLayer.maxY + 10 # layer在上一个layer底部10px下

myLayerSize = new Layer #自定义高宽
  x:110
  y:0
  backgroundColor:"blue"
  width: 210
  width: 640

myLayerCircle = new Layer #圆形的layer
  x:0
  y:220
  height: 200
  width:200
  backgroundColor:'gray'
  borderRadius: "50%"

myLayerRoundedRectangle = new Layer #给正方形20px的圆角
  x:270
  y:220
  height: 200
  width: 200
  backgroundColor: 'green'
  borderRadius:'20px'

myLayerRotated = new Layer # 旋转45°
  x:570
  y:250
  height: 150
  width: 150
  backgroundColor: 'navy'
  rotation: 45

myLayerBackground = new Layer #设置背景色为orange
  x: 0
  y: 450
  height: 200
  width: 200
  backgroundColor:"orange"

myLayerScale = new Layer# 缩放大两倍
  x:320
  y: 500
  height: 100
  width: 100
  backgroundColor: 'purple'
  scale: 2

myBlurLayer = new Layer #模糊10%
  x: 540
  y: 450
  height: 200
  width: 200
  backgroundColor:"red"
  blur: 10

myLayerShadow = new Layer #给点阴影效果
  x: 0
  y: 680
  height: 200
  width: 200
  backgroundColor: 'teal'
  shadowX: 10
  shadowY: 10
  shadowColor: 'rgba(0,0,0,0.4)'

myLayerOpacity = new Layer #透明度0.3
  x: 270
  y: 680
  height: 200
  width: 200
  backgroundColor: 'yellow'
  opacity: 0.3

myLayerVisible = new Layer #隐藏layer
  x: 540
  y: 680
  height: 200
  width: 200
  backgroundColor: "black"
  visible: false

tabBarLayer = new Layer #展示一个tabbar
  x:0
  y:Screen.height - 98
  width: 750
  height: 98
  image:'images/tab-bar.png'
