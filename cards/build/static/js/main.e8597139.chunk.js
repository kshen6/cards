(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,n){e.exports=n(19)},16:function(e,t,n){},17:function(e,t,n){},18:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n.n(a),u=n(3),r=n.n(u),i=(n(16),n(7)),o=n(4),c=n(5),l=n(8),d=n(6),h=n(1),f=n(9);n(17),n(18);var m=function(e){return s.a.createElement("div",{className:"card-wrapper"},e.num)},b=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(l.a)(this,Object(d.a)(t).call(this,e))).state={unused:[],used:[]},n.draw=n.draw.bind(Object(h.a)(n)),n.shuffle=n.shuffle.bind(Object(h.a)(n)),n.reset=n.reset.bind(Object(h.a)(n)),n.isDeckOut=n.isDeckOut.bind(Object(h.a)(n)),n}return Object(f.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.reset()}},{key:"draw",value:function(){this.setState(function(e){return{unused:e.unused.slice(1),used:e.used.concat([e.unused[0]])}}),this.forceUpdate(),console.log(this.state),console.log(this.isDeckOut())}},{key:"shuffle",value:function(){for(var e=this.state.unused,t=e.length-1;t>0;t--){var n=Math.floor(Math.random()*(t+1)),a=e[t];e[t]=e[n],e[n]=a}this.setState(function(){return{unused:e}})}},{key:"reset",value:function(){this.setState(function(e){return{unused:Object(i.a)(Array(53).keys()).slice(1),used:[]}})}},{key:"isDeckOut",value:function(){return!(this.state.unused.length>0)}},{key:"render",value:function(){return s.a.createElement("div",{className:"App"},s.a.createElement("h4",null,"Random Card Generator"),s.a.createElement("div",{className:"controls"},s.a.createElement("button",{onClick:this.draw,disabled:this.isDeckOut()},"Draw"),s.a.createElement("button",{onClick:this.shuffle},"Shuffle"),s.a.createElement("button",{onClick:this.reset},"Reset")),s.a.createElement("p",null,"Cards remaining: ",this.state.unused.length),s.a.createElement(m,{num:this.state.used.slice(-1)[0]}))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(s.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[10,1,2]]]);
//# sourceMappingURL=main.e8597139.chunk.js.map