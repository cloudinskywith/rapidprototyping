var background, device, myBlurLayer, myLayer, myLayerBackground, myLayerCircle, myLayerOpacity, myLayerPostion, myLayerRotated, myLayerRoundedRectangle, myLayerScale, myLayerShadow, myLayerSize, myLayerVisible, tabBarLayer;

device = new Framer.DeviceView();

device.setupContext();

device.deviceType = "iphone-6-silver-hand";

device.contentScale = 1;

background = new BackgroundLayer({
  backgroundColor: "white"
});

myLayer = new Layer;

myLayerPostion = new Layer({
  backgroundColor: "aqua",
  y: myLayer.maxY + 10
});

myLayerSize = new Layer({
  x: 110,
  y: 0,
  backgroundColor: "blue",
  width: 210,
  width: 640
});

myLayerCircle = new Layer({
  x: 0,
  y: 220,
  height: 200,
  width: 200,
  backgroundColor: 'gray',
  borderRadius: "50%"
});

myLayerRoundedRectangle = new Layer({
  x: 270,
  y: 220,
  height: 200,
  width: 200,
  backgroundColor: 'green',
  borderRadius: '20px'
});

myLayerRotated = new Layer({
  x: 570,
  y: 250,
  height: 150,
  width: 150,
  backgroundColor: 'navy',
  rotation: 45
});

myLayerBackground = new Layer({
  x: 0,
  y: 450,
  height: 200,
  width: 200,
  backgroundColor: "orange"
});

myLayerScale = new Layer({
  x: 320,
  y: 500,
  height: 100,
  width: 100,
  backgroundColor: 'purple',
  scale: 2
});

myBlurLayer = new Layer({
  x: 540,
  y: 450,
  height: 200,
  width: 200,
  backgroundColor: "red",
  blur: 10
});

myLayerShadow = new Layer({
  x: 0,
  y: 680,
  height: 200,
  width: 200,
  backgroundColor: 'teal',
  shadowX: 10,
  shadowY: 10,
  shadowColor: 'rgba(0,0,0,0.4)'
});

myLayerOpacity = new Layer({
  x: 270,
  y: 680,
  height: 200,
  width: 200,
  backgroundColor: 'yellow',
  opacity: 0.3
});

myLayerVisible = new Layer({
  x: 540,
  y: 680,
  height: 200,
  width: 200,
  backgroundColor: "black",
  visible: false
});

tabBarLayer = new Layer({
  x: 0,
  y: Screen.height - 98,
  width: 750,
  height: 98,
  image: 'images/tab-bar.png'
});
