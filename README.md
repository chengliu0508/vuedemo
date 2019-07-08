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
