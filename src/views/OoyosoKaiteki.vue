<template>
<html>
<head>
<meta charset="utf-8"/>
<meta http-equiv="X-UA-Compatible" content="IE=edge"/>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>1280 Web – 1</title>
</head>
<body>
<div id="ID1280_Web__1">
	<svg class="side-color" viewBox="0 0 1280 1">
		<path id="side-color" d="M 0 0 L 1280 0">
		</path>
	</svg>
	<div id="congestion-01">
		<span style="font-size:128px;">ただいまの混雑状況は</span>
	</div>
	<svg class="vertical-color" viewBox="0 0 1 650">
		<path id="vertical-color" d="M 0 0 L 0 650">
		</path>
	</svg>
<!-- meter_01~05を順に整理しようとすると枠線が消えるためこのまま-->
	<svg class="meter_02">
		<rect id="meter_02" rx="0" ry="0" x="0" y="0" width="494" height="575">
		</rect>
	</svg>
	<svg class="meter_05">
		<rect id="meter_05" rx="0" ry="0" x="0" y="0" width="494" height="115">
		</rect>
	</svg>
	<svg class="meter_04">
		<rect id="meter_04" rx="0" ry="0" x="0" y="0" width="494" height="115">
		</rect>
	</svg>
	<svg class="meter_01">
		<rect id="meter_01" rx="0" ry="0" x="0" y="0" width="494" height="115">
		</rect>
	</svg>
	<svg class="meter_03">
		<rect id="meter_03" rx="0" ry="0" x="0" y="0" width="494" height="115">
		</rect>
	</svg>
	<div id="letter_01">
		<span></span><span style="font-size:96px;">おおよそ</span><br><span style="font-size:216px;">快適</span>
	</div>
</div>
</body>
</html>
</template>

<style id="applicationStylesheet" type="text/css">
 /*
  リセットCSSがないと混雑表示ディスプレイがずれるので導入
  html5doctor.com Reset Stylesheet
  v1.6.1
  Last Updated: 2010-09-17
  Author: Richard Clark - http://richclarkdesign.com
  Twitter: @rich_clark
  */

  html, body, div, span, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  abbr, address, cite, code,
  del, dfn, em, img, ins, kbd, q, samp,
  small, strong, sub, sup, var,
  b, i,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section, summary,
  time, mark, audio, video {
      margin:0;
      padding:0;
      border:0;
      outline:0;
      font-size:100%;
      vertical-align:baseline;
      background:transparent;
  }

  body {
      line-height:1;
  }

  article,aside,details,figcaption,figure,
  footer,header,hgroup,menu,nav,section {
      display:block;
  }

  nav ul {
      list-style:none;
  }

  blockquote, q {
      quotes:none;
  }

  blockquote:before, blockquote:after,
  q:before, q:after {
      content:'';
      content:none;
  }

  a {
      margin:0;
      padding:0;
      font-size:100%;
      vertical-align:baseline;
      background:transparent;
  }

  /* change colours to suit your needs */
  ins {
      background-color:#ff9;
      color:#000;
      text-decoration:none;
  }

  /* change colours to suit your needs */
  mark {
      background-color:#ff9;
      color:#000;
      font-style:italic;
      font-weight:bold;
  }

  del {
      text-decoration: line-through;
  }

  abbr[title], dfn[title] {
      border-bottom:1px dotted;
      cursor:help;
  }

  table {
      border-collapse:collapse;
      border-spacing:0;
  }

  /* change border colour to suit your needs */
  hr {
      display:block;
      height:1px;
      border:0;  
      border-top:1px solid #cccccc;
      margin:1em 0;
      padding:0;
  }

  input, select {
      vertical-align:middle;
  }

	.mediaViewInfo {
		--web-view-name: 1280 Web – 1;
		--web-view-id: ID1280_Web__1;
		--web-scale-on-resize: true;
		--web-enable-deep-linking: true;
	}
	:root {
		--web-view-ids: ID1280_Web__1;
	}
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		border: none;
	}
	#ID1280_Web__1 {
		position: absolute;
		width: 1280px;
		height: 800px;
		background-color: rgba(1,0,0,1);
		overflow: hidden;
		--web-view-name: 1280 Web – 1;
		--web-view-id: ID1280_Web__1;
		--web-scale-on-resize: true;
		--web-enable-deep-linking: true;
	}
	#side-color {
		fill: transparent;
		stroke: rgba(255,255,255,1);
		stroke-width: 1px;
		stroke-linejoin: miter;
		stroke-linecap: butt;
		stroke-miterlimit: 4;
		shape-rendering: auto;
	}
	.side-color {
		overflow: visible;
		position: absolute;
		width: 1280px;
		height: 1px;
		left: 0.5px;
		top: 166.5px;
		transform: matrix(1,0,0,1,0,0);
	}
	#congestion-01 {
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
	#vertical-color {
		fill: transparent;
		stroke: rgba(255,255,255,1);
		stroke-width: 1px;
		stroke-linejoin: miter;
		stroke-linecap: butt;
		stroke-miterlimit: 4;
		shape-rendering: auto;
	}
	.vertical-color {
		filter: drop-shadow(0px 3px 6px rgba(255, 255, 255, 0.161));
		overflow: visible;
		position: absolute;
		width: 19px;
		height: 668px;
		left: 640.5px;
		top: 166.5px;
		transform: matrix(1,0,0,1,0,0);
	}
	#meter_01 {
		fill: rgba(128,128,128,1);
		stroke: rgba(0,0,0,1);
		stroke-width: 1px;
		stroke-linejoin: miter;
		stroke-linecap: butt;
		stroke-miterlimit: 4;
		shape-rendering: auto;
	}
	.meter_01 {
		position: absolute;
		overflow: visible;
		width: 494px;
		height: 115px;
		left: 712px;
		top: 656px;
	}
	#meter_02 {
		fill: rgba(0,255,51,1);
		stroke: rgba(0,0,0,1);
		stroke-width: 1px;
		stroke-linejoin: miter;
		stroke-linecap: butt;
		stroke-miterlimit: 4;
		shape-rendering: auto;
	}
	.meter_02 {
		position: absolute;
		overflow: visible;
		width: 500px;
		height: 575px;
		left: 712px;
		top: 196px;
	}
	#meter_03 {
		fill: rgba(128,128,128,1);
		stroke: rgba(0,0,0,1);
		stroke-width: 1px;
		stroke-linejoin: miter;
		stroke-linecap: butt;
		stroke-miterlimit: 4;
		shape-rendering: auto;
	}
	.meter_03 {
		position: absolute;
		overflow: visible;
		width: 494px;
		height: 115px;
		left: 712px;
		top: 426px;
	}
	#meter_04 {
		fill: rgba(128,128,128,1);
		stroke: rgba(0,0,0,1);
		stroke-width: 1px;
		stroke-linejoin: miter;
		stroke-linecap: butt;
		stroke-miterlimit: 4;
		shape-rendering: auto;
	}
	.meter_04 {
		position: absolute;
		overflow: visible;
		width: 494px;
		height: 115px;
		left: 712px;
		top: 311px;
	}
	#meter_05 {
		fill: rgba(128,128,128,1);
		stroke: rgba(0,0,0,1);
		stroke-width: 1px;
		stroke-linejoin: miter;
		stroke-linecap: butt;
		stroke-miterlimit: 4;
		shape-rendering: auto;
	}
	.meter_05 {
		position: absolute;
		overflow: visible;
		width: 512px;
		height: 133px;
		left: 712px;
		top: 196px;
	}
	#letter_01 {
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
