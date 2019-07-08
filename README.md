<!DOCTYPE html>
<html>

<head>
	<meta charset="utf-8">
	<title>event位置</title>
	<style>
			#hue,#saturation,#value{
				height:300px;
				width:10px;
				padding:10px;
				margin:20px;
				display:inline-block;
			}
			#hue{
				background:linear-gradient(to bottom, #f00 0%, #ff0 17%, #0f0 33%, #0ff 50%, #00f 67%, #f0f 83%, #f00 100%);
			}

			#saturation{
				width:100px;
				background: green;
				position:relative;
			}
			.saturation__white,.saturation__black{
				position: absolute;
				top: 0;
				left: 0;
				right: 0;
				bottom: 0;
			}
			.saturation__white{
				background: linear-gradient(to right, #fff, rgba(255, 255, 255, 0));
			}
			.saturation__black{
				background: linear-gradient(to top, #000, rgba(0, 0, 0, 0));
			}

			#value{
				background:linear-gradient(to top, rgba(255, 69, 0, 0) 0%, rgb(255, 69, 0, 1) 100%);
			}
			
	</style>
</head>

<body>
	<!-- 色调 -->
	<div id="hue" onclick="getHue()"></div>
	<!-- 饱和度 -->
	<div id="saturation" onclick="getHue()">
		<div class="saturation__white"></div>
		<div class="saturation__black"></div>
	</div>
	<!-- 透明度 -->
	<div id="value"></div>
	<script>
		function getHue(){
			var e = window.event || arguments.callee.caller.arguments[0];
			console.log('clientWidth ',e.target.clientWidth);
			console.log('clientHeight ',e.target.clientHeight);
			console.log('pageX ',e.pageX);
			console.log('pageY ',e.pageY);
			console.log('offsetX ',e.offsetX);
			console.log('offsetY ',e.offsetY);
			console.log('e.clientX ',e.clientX);
			console.log('e.clientY ',e.clientY);

			var rect = e.target.getBoundingClientRect();
			console.log('getBoundingClientRect ',rect,rect.top,rect.right,rect.bottom,rect.left);
			
		}
	</script>
</body>

</html>
<!DOCTYPE html>
<html>
<head> 
<meta charset="utf-8"> 
<title>animation tranform</title> 
<style>
  #box1 {
    height: 100px;
    width: 100px;
    left:200px;
    background: green;
    /* transition: background 2s ease,transform 2s ease-in 1s; */
    transform:translate3d(50px, 0, 0);
    transition:transform 3s ease-in-out ;
    /*transition-property transition-duration transition-timing-function运动速率*/
  }
  /* #box1:hover{background:red;transform:rotate(180deg) scale(.5,.5);} */
  #box1:hover{transform:translate3d(100px, 0, 0);}

  .box2 {
    height:100px;width:100px;border:15px solid black;
    animation: changebox 10s ease-in-out  3 alternate paused;
    /*animation-name animation-duration animation-timing-function 
    animation-delay animation-iteration-count循环资料 animation-direction动画方式*/
    /*
      animation-iteration-count = infinite | number

      animation-fill-mode(定义元素动画结束以后或者未开始的元素样式)
      默认值为none，标示，不会在动画结束或者未开始时给元素 添加样式 
      （1）forwards:表示动画结束后，元素直接接使用当前样式。
      （2）backwards:表示在动画延迟时间元素使用关键帧中from的属性值或者to属性值（当animation-direction为reverse或者alternate-reverse时）
          

      animation-direction: normal 正序播放
      animation-direction: reverse 倒序播放
      animation-direction: alternate 交替播放
      animation-direction: alternate-reverse 反向交替播放

      animation-play-state = running | paused
    */
  }
  .box2:hover {
    animation-play-state: running;
  }
  @keyframes changebox {
    10% {  background:red;  }
    50% {  width:80px;  }
    70% {  border:15px solid yellow;  }
    100% {  width:180px;  height:180px;  }

    /* from {left:0px;}
    to {left:200px;} */
  }
</style>
</head>
<body>
<div>

  <div id="box1">transform</div>
  <div class="box2">animation</div>

</div>

<script>
 

</script>

</body>
</html>
