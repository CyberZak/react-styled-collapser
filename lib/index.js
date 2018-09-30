module.exports=function(e){var t={};function n(i){if(t[i])return t[i].exports;var o=t[i]={i:i,l:!1,exports:{}};return e[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(i,o,function(t){return e[t]}.bind(null,o));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=3)}([function(e,t){e.exports=require("react")},function(e,t){e.exports=require("prop-types")},function(e,t){e.exports=require("styled-components")},function(e,t,n){"use strict";n.r(t);var i=n(0),o=n.n(i),r=n(1),s=n.n(r),a=n(2),l=n.n(a);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const p={None:"none",Initial:"initial",Processing:"processing"};class u extends o.a.Component{constructor(e){super(e),this.state={transitionState:p.None,startTime:0,collapsed:e.collapsed},this.contentRef=o.a.createRef()}static getDerivedStateFromProps(e,t){return e.collapsed===t.collapsed?null:{transitionState:p.Initial,startTime:Date.now(),collapsed:e.collapsed}}componentDidMount(){this.measureContentHeight()}componentDidUpdate(){this.measureContentHeight(),this.state.transitionState===p.Initial&&(setTimeout(()=>{delete this.timeoutId,this.setState({transitionState:p.Processing})},0),setTimeout(()=>{this.setState({transitionState:p.None,startTime:0})},this.props.duration))}measureContentHeight(){this.contentHeight=this.contentRef.current.clientHeight}render(){const{transitionState:e,collapsed:t}=this.state,{duration:n,easing:i,collapsedHeight:r,hasCropper:s}=this.props,a=r&&t&&e===p.None,l=n+"ms "+i,c={transition:`height ${l}`,maxHeight:a?r+"px":"none"};e===p.Initial?c.height=(t?this.contentHeight:r)+"px":e===p.Processing?c.height=(t?r:this.contentHeight)+"px":t&&!r&&(c.display="none");const u={transition:`opacity ${l}`};return o.a.createElement("div",{className:this.props.className,style:c},o.a.createElement(f,{innerRef:this.contentRef},this.props.children),!(!s||!r)&&o.a.createElement(h,{className:a?"shown":"",style:u}))}}c(u,"propTypes",{duration:s.a.number,easing:s.a.string,collapsed:s.a.bool,collapsedHeight:s.a.number,hasCropper:s.a.bool}),c(u,"defaultProps",{duration:200,easing:"ease",collapsed:!1,collapsedHeight:0,hasCropper:!0});var d=l()(u)`
    overflow-y: hidden;
	position: relative;
`;const h=l.a.div`
    position: absolute;
    left: 0;
    bottom: 0;
    background: linear-gradient(to bottom,
        rgba(255, 255, 255, 0) 0%,
        rgba(255, 255, 255, 1) 100%);
    width: 100%;
    height: 10px;
    opacity: 0;
    visibility: hidden;

    &.shown {
        opacity: 1;
		visibility: visible;
    }
`,f=l.a.div`
	overflow: hidden;
`;t.default=d}]);