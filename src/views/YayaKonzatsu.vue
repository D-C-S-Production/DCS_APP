<template>
	<div id="yaya-konzatsu">
		<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css">
		<svg class="side-color-03" viewBox="0 0 1280 1">
			<path id="side-color-03" d="M 0 0 L 1280 0">
			</path>
		</svg>
		<div id="congestion-03">
			<span style="font-size:124px;">ただいまの混雑状況は</span>
		</div>
		<svg class="vertical-color-03" viewBox="0 0 1 650">
			<path id="vertical-color-03" d="M 0 0 L 0 650">
			</path>
		</svg>
		<svg class="meter-A-03">
			<rect id="meter-A-03" rx="0" ry="0" x="0" y="0" width="494" height="575">
			</rect>
		</svg>
		<svg class="meter-B-03">
			<rect id="meter-B-03" rx="0" ry="0" x="0" y="0" width="494" height="115">
			</rect>
		</svg>
		<svg class="meter-C-03">
			<rect id="meter-C-03" rx="0" ry="0" x="0" y="0" width="494" height="115">
			</rect>
		</svg>
		<svg class="meter-D-03">
			<rect id="meter-D-03" rx="0" ry="0" x="0" y="0" width="494" height="115">
			</rect>
		</svg>
		<svg class="meter-E-03">
			<rect id="meter-E-03" rx="0" ry="0" x="0" y="0" width="494" height="115">
			</rect>
		</svg>
		<div id="letter-03">
			<span></span><span style="font-size:128px;">やや</span><br><span style="font-size:216px;">混雑</span>
		</div>
	</div>
</template>

<script>
export default {
	name: "YayaKonzatsu"
}
</script>

<style>
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		border: none;
	}
	#yaya-konzatsu {
		position: absolute;
		width: 1280px;
		height: 800px;
		background-color: rgba(1,0,0,1);
		overflow: hidden;
		--web-view-name: 1280 Web – 1;
		--web-view-id: yaya-konzatsu;
		--web-scale-on-resize: true;
		--web-enable-deep-linking: true;
	}
	#side-color-03 {
		fill: transparent;
		stroke: rgba(255,255,255,1);
		stroke-width: 1px;
		stroke-linejoin: miter;
		stroke-linecap: butt;
		stroke-miterlimit: 4;
		shape-rendering: auto;
	}
	.side-color-03 {
		overflow: visible;
		position: absolute;
		width: 1280px;
		height: 1px;
		left: 0.5px;
		top: 166.5px;
		transform: matrix(1,0,0,1,0,0);
	}
	#congestion-03 {
		left: 20px;
		top: 0px;
		position: absolute;
		overflow: visible;
		width: 1054px;
		white-space: nowrap;
		text-align: left;
		font-family: HGPGothicE;
		font-style: normal;
		font-weight: normal;
		font-size: 102px;
		color: rgba(255,255,255,1);
	}
	#vertical-color-03 {
		fill: transparent;
		stroke: rgba(255,255,255,1);
		stroke-width: 1px;
		stroke-linejoin: miter;
		stroke-linecap: butt;
		stroke-miterlimit: 4;
		shape-rendering: auto;
	}
	.vertical-color-03 {
		filter: drop-shadow(0px 3px 6px rgba(255, 255, 255, 0.161));
		overflow: visible;
		position: absolute;
		width: 19px;
		height: 668px;
		left: 640.5px;
		top: 166.5px;
		transform: matrix(1,0,0,1,0,0);
	}
	#meter-D-03 {
		fill: rgba(128,128,128,1);
		stroke: rgba(0,0,0,1);
		stroke-width: 1px;
		stroke-linejoin: miter;
		stroke-linecap: butt;
		stroke-miterlimit: 4;
		shape-rendering: auto;
	}
	.meter-D-03 {
		position: absolute;
		overflow: visible;
		width: 494px;
		height: 115px;
		left: 712px;
		top: 656px;
	}
	#meter-A-03 {
		fill: rgba(128,128,128,1);
		stroke: rgba(0,0,0,1);
		stroke-width: 1px;
		stroke-linejoin: miter;
		stroke-linecap: butt;
		stroke-miterlimit: 4;
		shape-rendering: auto;
	}
	.meter-A-03 {
		position: absolute;
		overflow: visible;
		width: 500px;
		height: 575px;
		left: 712px;
		top: 196px;
	}
	#meter-E-03 {
		fill: rgba(255,234,0,1);
		stroke: rgba(0,0,0,1);
		stroke-width: 1px;
		stroke-linejoin: miter;
		stroke-linecap: butt;
		stroke-miterlimit: 4;
		shape-rendering: auto;
	}
	.meter-E-03 {
		position: absolute;
		overflow: visible;
		width: 494px;
		height: 115px;
		left: 712px;
		top: 426px;
	}
	#meter-C-03 {
		fill: rgba(128,128,128,1);
		stroke: rgba(0,0,0,1);
		stroke-width: 1px;
		stroke-linejoin: miter;
		stroke-linecap: butt;
		stroke-miterlimit: 4;
		shape-rendering: auto;
	}
	.meter-C-03 {
		position: absolute;
		overflow: visible;
		width: 494px;
		height: 115px;
		left: 712px;
		top: 311px;
	}
	#meter-B-03 {
		opacity: 0.92;
		fill: rgba(128,128,128,1);
		stroke: rgba(0,0,0,1);
		stroke-width: 1px;
		stroke-linejoin: miter;
		stroke-linecap: butt;
		stroke-miterlimit: 4;
		shape-rendering: auto;
	}
	.meter-B-03 {
		position: absolute;
		overflow: visible;
		width: 512px;
		height: 133px;
		left: 712px;
		top: 196px;
	}
	#letter-03 {
		left: 101px;
		top: 250px;
		position: absolute;
		overflow: visible;
		width: 444px;
		white-space: nowrap;
		text-align: left;
		font-family: HGPGothicE;
		font-style: normal;
		font-weight: normal;
		font-size: 100px;
		color: rgba(255,234,0,1);
	}
</style>