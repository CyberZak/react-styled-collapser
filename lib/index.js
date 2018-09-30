module.exports=function(t){var e={};function n(i){if(e[i])return e[i].exports;var o=e[i]={i:i,l:!1,exports:{}};return t[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(i,o,function(e){return t[e]}.bind(null,o));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=3)}([function(t,e){t.exports=require("react")},function(t,e){t.exports=require("prop-types")},function(t,e){t.exports=require("styled-components")},function(t,e,n){"use strict";n.r(e);var i=n(0),o=n.n(i),r=n(1),s=n.n(r),a=n(2),l=n.n(a);function c(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}const p={None:"none",Initial:"initial",Processing:"processing"};class u extends o.a.Component{constructor(t){super(t),this.state={transitionState:p.None,startTime:0},this.contentRef=o.a.createRef()}componentWillReceiveProps(t){t.collapsed!==this.props.collapsed&&this.setState({transitionState:p.Initial,startTime:Date.now()})}componentDidMount(){this.measureContentHeight()}componentDidUpdate(){this.measureContentHeight(),this.state.transitionState===p.Initial&&(setTimeout(()=>{delete this.timeoutId,this.setState({transitionState:p.Processing})},0),setTimeout(()=>{this.setState({transitionState:p.None,startTime:0})},this.props.duration))}measureContentHeight(){this.contentHeight=this.contentRef.current.clientHeight}render(){const{transitionState:t}=this.state,{duration:e,easing:n,collapsed:i,collapsedHeight:r,hasCropper:s}=this.props,a=r&&i&&t===p.None,l=e+"ms "+n,c={transition:`height ${l}`,maxHeight:a?r+"px":"none"};t===p.Initial?c.height=(i?this.contentHeight:r)+"px":t===p.Processing?c.height=(i?r:this.contentHeight)+"px":i&&!r&&(c.display="none");const u={transition:`opacity ${l}`};return o.a.createElement("div",{className:this.props.className,style:c},o.a.createElement(f,{innerRef:this.contentRef},this.props.children),!(!s||!r)&&o.a.createElement(h,{className:a?"shown":"",style:u}))}}c(u,"propTypes",{duration:s.a.number,easing:s.a.string,collapsed:s.a.bool,collapsedHeight:s.a.number,hasCropper:s.a.bool}),c(u,"defaultProps",{duration:200,easing:"ease",collapsed:!1,collapsedHeight:0,hasCropper:!0});var d=l()(u)`
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
`;e.default=d}]);