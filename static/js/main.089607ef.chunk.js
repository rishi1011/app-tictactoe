(this["webpackJsonpapp-tictactoe"]=this["webpackJsonpapp-tictactoe"]||[]).push([[0],{13:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var r=n(3),s=n(4),i=n(6),a=n(5),c=n(8),u=n(1),o=n.n(u),l=n(7),h=n.n(l),d=(n(13),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(t){var n=t.getCLS,r=t.getFID,s=t.getFCP,i=t.getLCP,a=t.getTTFB;n(e),r(e),s(e),i(e),a(e)}))}),j=n(0),v=function(e){for(var t=[],n=0;n<e.length;n++)for(var r=0;r<e[n].length;r++)t.push(e[n][r]);for(var s=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],i=0;i<s.length;i++){var a=Object(c.a)(s[i],3),u=a[0],o=a[1],l=a[2];if(t[u]&&t[u]===t[o]&&t[u]===t[l]){var h=[],d=f(u);h.push(d);var j=f(o);h.push(j);var v=f(l);return h.push(v),{winner:t[u],winnerIdxs:h}}}return null},f=function(e){return e>=0&&e<=2?[0,e-0]:e>=3&&e<=5?[1,e-3]:[2,e-6]},b=function(e){return Object(j.jsx)("button",{className:"square",onClick:e.onClick,children:e.value})},p=function(e){return Object(j.jsx)("button",{className:"square winner",onClick:e.onClick,children:e.value})},x=function(e){Object(i.a)(n,e);var t=Object(a.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"renderSquare",value:function(e,t){var n=this,r=this.props.winnerIdxs,s=function(e,t,n){for(var r=0;r<n.length;r++){var s=n[r];if(s[0]===e&&s[1]===t)return!0}return!1}(e,t,r);return console.log(s),s?Object(j.jsx)(p,{value:this.props.squares[e][t],onClick:function(){return n.props.handleClick(e,t)}}):Object(j.jsx)(b,{value:this.props.squares[e][t],onClick:function(){return n.props.handleClick(e,t)}})}},{key:"render",value:function(){for(var e=this,t=[],n=0;n<3;n++)for(var r=0;r<3;r++)t.push([n,r]);var s=t.map((function(t,n){return e.renderSquare(t[0],t[1])}));return Object(j.jsx)("div",{id:"grid",children:s})}}]),n}(o.a.Component),O=function(e){Object(i.a)(n,e);var t=Object(a.a)(n);function n(e){var s;return Object(r.a)(this,n),(s=t.call(this,e)).state={history:[{squares:Array(3).fill(0).map((function(e){return Array(3).fill(null)}))}],stepNumber:0,location:[0,0],xIsNext:!0},s}return Object(s.a)(n,[{key:"handleClick",value:function(e,t){var n=this.state.history.slice(0,this.state.stepNumber+1),r=n[n.length-1],s=Array(3).fill(0).map((function(e,t){return r.squares[t].slice()})),i=v(s);(null!==i?i.winner:null)||s[e][t]||(s[e][t]=this.state.xIsNext?"X":"O",this.setState({history:n.concat([{squares:s}]),stepNumber:this.state.stepNumber+1,location:[e,t],xIsNext:!this.state.xIsNext}))}},{key:"reset",value:function(){this.setState({history:[{squares:Array(3).fill(0).map((function(e){return Array(3).fill(null)}))}],stepNumber:0,location:[0,0],xIsNext:!0})}},{key:"jumpTo",value:function(e){var t=this.state.history.slice();if(0===e){this.setState({stepNumber:e,location:[0,0],xIsNext:e%2===0})}else{var n=function(e,t,n){for(var r=n[e].squares,s=n[t].squares,i=0;i<r.length;i++)for(var a=0;a<s.length;a++)if(r[i][a]!==s[i][a])return[i,a];return[0,0]}(e,e-1,t);this.setState({stepNumber:e,location:n,xIsNext:e%2===0})}}},{key:"render",value:function(){var e,t=this,n=this.state.history,r=n[this.state.stepNumber],s=v(r.squares);e=null!==s?s.winner:null;var i,a=function(e){for(var t=0;t<e.length;t++)for(var n=0;n<e[t].length;n++)if(null===e[t][n])return!1;return!0}(r.squares),c=[];e?(i="Winner "+e,c=s.winnerIdxs,console.log(c)):i=a?"Game Tied":"Next move: "+(this.state.xIsNext?"X":"O");var u=n.map((function(e,n){var r=0===n?"Go to start":"Go to step "+n;return Object(j.jsx)("li",{children:Object(j.jsx)("button",{className:"step-btn",onClick:function(){return t.jumpTo(n)},children:r})},n)})),o=this.state.location;return Object(j.jsxs)("div",{id:"main-container",children:[Object(j.jsxs)("div",{id:"content",children:[Object(j.jsxs)("div",{id:"container1",children:[Object(j.jsx)("div",{id:"header",children:Object(j.jsx)("div",{children:Object(j.jsx)("div",{className:"h1",children:i})})}),Object(j.jsx)("div",{id:"location",children:"[".concat(o[0],"] [").concat(o[1],"]")}),Object(j.jsx)("div",{id:"board",children:Object(j.jsx)(x,{winnerIdxs:c,squares:r.squares,handleClick:function(e,n){return t.handleClick(e,n)}})})]}),Object(j.jsxs)("div",{id:"container2",children:[Object(j.jsx)("div",{className:"side-h1",children:"Moves"}),Object(j.jsx)("div",{id:"side-bar",children:Object(j.jsx)("ol",{children:u})})]})]}),Object(j.jsx)("div",{className:"footer",children:Object(j.jsx)("button",{className:"btn",onClick:function(){return t.reset()},children:"Reset"})})]})}}]),n}(o.a.Component);h.a.render(Object(j.jsx)(O,{}),document.getElementById("root")),d()}},[[15,1,2]]]);
//# sourceMappingURL=main.089607ef.chunk.js.map