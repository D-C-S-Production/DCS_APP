<template>
	<div id="ooyoso-kaiteki">
		<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css">
		<svg class="side-color-02" viewBox="0 0 1280 1">
			<path id="side-color-02" d="M 0 0 L 1280 0">
			</path>
		</svg>
		<div id="congestion-02">
			<span style="font-size:124px;">ただいまの混雑状況は</span>
		</div>
		<svg class="vertical-color-02" viewBox="0 0 1 650">
			<path id="vertical-color-02" d="M 0 0 L 0 650">
			</path>
		</svg>
		<svg class="meter-A-02">
			<rect id="meter-A-02" rx="0" ry="0" x="0" y="0" width="494" height="575">
			</rect>
		</svg>
		<svg class="meter-B-02">
			<rect id="meter-B-02" rx="0" ry="0" x="0" y="0" width="494" height="115">
			</rect>
		</svg>
		<svg class="meter-C-02">
			<rect id="meter-C-02" rx="0" ry="0" x="0" y="0" width="494" height="115">
			</rect>
		</svg>
		<svg class="meter-D-02">
			<rect id="meter-D-02" rx="0" ry="0" x="0" y="0" width="494" height="115">
			</rect>
		</svg>
		<svg class="meter-E-02">
			<rect id="meter-E-02" rx="0" ry="0" x="0" y="0" width="494" height="115">
			</rect>
		</svg>
		<div id="letter-02">
			<span></span><span style="font-size:96px;">おおよそ</span><br><span style="font-size:216px;">快適</span>
		</div>
	</div>
</template>

<script>
export default {
	name: "OoyosoKaiteki"
}
</script>

<style>
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		border: none;
	}
	#ooyoso-kaiteki {
		position: absolute;
		width: 1280px;
		height: 800px;
		background-color: rgba(1,0,0,1);
		overflow: hidden;
		--web-view-name: 1280 Web – 1;
		--web-view-id: ooyoso-kaiteki;
		--web-scale-on-resize: true;
		--web-enable-deep-linking: true;
	}
	#side-color-02 {
		fill: transparent;
		stroke: rgba(255,255,255,1);
		stroke-width: 1px;
		stroke-linejoin: miter;
		stroke-linecap: butt;
		stroke-miterlimit: 4;
		shape-rendering: auto;
	}
	.side-color-02 {
		overflow: visible;
		position: absolute;
		width: 1280px;
		height: 1px;
		left: 0.5px;
		top: 166.5px;
		transform: matrix(1,0,0,1,0,0);
	}
	#congestion-02 {
		left: 20px;
		top: 32px;
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
	#vertical-color-02 {
		fill: transparent;
		stroke: rgba(255,255,255,1);
		stroke-width: 1px;
		stroke-linejoin: miter;
		stroke-linecap: butt;
		stroke-miterlimit: 4;
		shape-rendering: auto;
	}
	.vertical-color-02 {
		filter: drop-shadow(0px 3px 6px rgba(255, 255, 255, 0.161));
		overflow: visible;
		position: absolute;
		width: 19px;
		height: 668px;
		left: 640.5px;
		top: 166.5px;
		transform: matrix(1,0,0,1,0,0);
	}
	#meter-D-02 {
		fill: rgba(128,128,128,1);
		stroke: rgba(0,0,0,1);
		stroke-width: 1px;
		stroke-linejoin: miter;
		stroke-linecap: butt;
		stroke-miterlimit: 4;
		shape-rendering: auto;
	}
	.meter-D-02 {
		position: absolute;
		overflow: visible;
		width: 494px;
		height: 115px;
		left: 712px;
		top: 656px;
	}
	#meter-A-02 {
		fill: rgba(0,255,51,1);
		stroke: rgba(0,0,0,1);
		stroke-width: 1px;
		stroke-linejoin: miter;
		stroke-linecap: butt;
		stroke-miterlimit: 4;
		shape-rendering: auto;
	}
	.meter-A-02 {
		position: absolute;
		overflow: visible;
		width: 500px;
		height: 575px;
		left: 712px;
		top: 196px;
	}
	#meter-E-02 {
		fill: rgba(128,128,128,1);
		stroke: rgba(0,0,0,1);
		stroke-width: 1px;
		stroke-linejoin: miter;
		stroke-linecap: butt;
		stroke-miterlimit: 4;
		shape-rendering: auto;
	}
	.meter-E-02 {
		position: absolute;
		overflow: visible;
		width: 494px;
		height: 115px;
		left: 712px;
		top: 426px;
	}
	#meter-C-02 {
		fill: rgba(128,128,128,1);
		stroke: rgba(0,0,0,1);
		stroke-width: 1px;
		stroke-linejoin: miter;
		stroke-linecap: butt;
		stroke-miterlimit: 4;
		shape-rendering: auto;
	}
	.meter-C-02 {
		position: absolute;
		overflow: visible;
		width: 494px;
		height: 115px;
		left: 712px;
		top: 311px;
	}
	#meter-B-02 {
		fill: rgba(128,128,128,1);
		stroke: rgba(0,0,0,1);
		stroke-width: 1px;
		stroke-linejoin: miter;
		stroke-linecap: butt;
		stroke-miterlimit: 4;
		shape-rendering: auto;
	}
	.meter-B-02 {
		position: absolute;
		overflow: visible;
		width: 512px;
		height: 133px;
		left: 712px;
		top: 196px;
	}
	#letter-02 {
		left: 101px;
		top: 289px;
		position: absolute;
		overflow: visible;
		width: 444px;
		white-space: nowrap;
		text-align: left;
		font-family: HGPGothicE;
		font-style: normal;
		font-weight: normal;
		font-size: 100px;
		color: rgba(0,255,51,1);
	}
</style>