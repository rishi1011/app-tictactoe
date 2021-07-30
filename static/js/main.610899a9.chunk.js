(this["webpackJsonpapp-tictactoe"]=this["webpackJsonpapp-tictactoe"]||[]).push([[0],{13:function(e,t,r){},15:function(e,t,r){"use strict";r.r(t);var n=r(3),s=r(4),i=r(6),a=r(5),c=r(8),o=r(1),l=r.n(o),u=r(7),h=r.n(u),d=(r(13),function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,16)).then((function(t){var r=t.getCLS,n=t.getFID,s=t.getFCP,i=t.getLCP,a=t.getTTFB;r(e),n(e),s(e),i(e),a(e)}))}),v=r(0),j=function(e){for(var t=[],r=0;r<e.length;r++)for(var n=0;n<e[r].length;n++)t.push(e[r][n]);for(var s=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],i=0;i<s.length;i++){var a=Object(c.a)(s[i],3),o=a[0],l=a[1],u=a[2];if(t[o]&&t[o]===t[l]&&t[o]===t[u]){var h=[],d=b(o);h.push(d);var v=b(l);h.push(v);var j=b(u);return h.push(j),{winner:t[o],winnerIdxs:h}}}return null},b=function(e){return e>=0&&e<=2?[0,e-0]:e>=3&&e<=5?[1,e-3]:[2,e-6]};var f=function(e){var t=e.hover;return console.log("hover",t),t||document.getElementsByClassName("square")[0].classList.remove("hover"),Object(v.jsx)("button",{className:"square hover",onClick:e.onClick,children:e.value})},x=function(e){return Object(v.jsx)("button",{className:"square winner",onClick:e.onClick,children:e.value})},p=function(e){Object(i.a)(r,e);var t=Object(a.a)(r);function r(){return Object(n.a)(this,r),t.apply(this,arguments)}return Object(s.a)(r,[{key:"renderSquare",value:function(e,t){var r=this,n=this.props.winnerIdxs,s=!0;return JSON.stringify(n)!==JSON.stringify([])&&(s=!1),function(e,t,r){for(var n=0;n<r.length;n++){var s=r[n];if(s[0]===e&&s[1]===t)return!0}return!1}(e,t,n)?Object(v.jsx)(x,{value:this.props.squares[e][t],onClick:function(){return r.props.handleClick(e,t)}}):Object(v.jsx)(f,{value:this.props.squares[e][t],onClick:function(){return r.props.handleClick(e,t)},hover:s})}},{key:"render",value:function(){for(var e=this,t=[],r=0;r<3;r++)for(var n=0;n<3;n++)t.push([r,n]);var s=t.map((function(t,r){return e.renderSquare(t[0],t[1])}));return Object(v.jsx)("div",{id:"grid",children:s})}}]),r}(l.a.Component),O=function(e){Object(i.a)(r,e);var t=Object(a.a)(r);function r(e){var s;return Object(n.a)(this,r),(s=t.call(this,e)).state={history:[{squares:Array(3).fill(0).map((function(e){return Array(3).fill(null)}))}],stepNumber:0,location:[0,0],reverse:!1,xIsNext:!0},s}return Object(s.a)(r,[{key:"handleClick",value:function(e,t){var r=this.state.history.slice(0,this.state.stepNumber+1),n=r[r.length-1],s=Array(3).fill(0).map((function(e,t){return n.squares[t].slice()})),i=j(s);(null!==i?i.winner:null)||s[e][t]||(s[e][t]=this.state.xIsNext?"X":"O",this.setState({history:r.concat([{squares:s}]),stepNumber:this.state.stepNumber+1,location:[e,t],xIsNext:!this.state.xIsNext}))}},{key:"reset",value:function(){this.setState({history:[{squares:Array(3).fill(0).map((function(e){return Array(3).fill(null)}))}],stepNumber:0,location:[0,0],reverse:!1,xIsNext:!0})}},{key:"jumpTo",value:function(e){var t=this.state.history.slice();if(0===e){this.setState({stepNumber:e,location:[0,0],xIsNext:e%2===0})}else{var r=function(e,t,r){for(var n=r[e].squares,s=r[t].squares,i=0;i<n.length;i++)for(var a=0;a<s.length;a++)if(n[i][a]!==s[i][a])return[i,a];return[0,0]}(e,e-1,t);this.setState({stepNumber:e,location:r,xIsNext:e%2===0})}}},{key:"sortList",value:function(){this.setState({reverse:!this.state.reverse})}},{key:"render",value:function(){var e,t=this,r=this.state.history,n=r[this.state.stepNumber],s=j(n.squares);e=null!==s?s.winner:null;var i,a=function(e){for(var t=0;t<e.length;t++)for(var r=0;r<e[t].length;r++)if(null===e[t][r])return!1;return!0}(n.squares),c=[];e?(i="Winner "+e,c=s.winnerIdxs,console.log(c)):i=a?"Game Tied":"Next move: "+(this.state.xIsNext?"X":"O");var o=r.map((function(e,n){t.state.reverse&&(n=r.length-n-1);var s=0===n?"Go to start":"Go to step "+n;return Object(v.jsx)("li",{children:Object(v.jsx)("button",{className:"step-btn",onClick:function(){return t.jumpTo(n)},children:s})},n)})),l=this.state.location;return Object(v.jsxs)("div",{id:"main-container",children:[Object(v.jsxs)("div",{id:"content",children:[Object(v.jsxs)("div",{id:"container1",children:[Object(v.jsx)("div",{id:"header",children:Object(v.jsx)("div",{children:Object(v.jsx)("div",{className:"h1",children:i})})}),Object(v.jsx)("div",{id:"location",children:"[".concat(l[0],"] [").concat(l[1],"]")}),Object(v.jsx)("div",{id:"board",children:Object(v.jsx)(p,{winnerIdxs:c,squares:n.squares,handleClick:function(e,r){return t.handleClick(e,r)}})})]}),Object(v.jsxs)("div",{id:"container2",children:[Object(v.jsx)("div",{className:"side-h1",children:"Moves"}),Object(v.jsx)("div",{id:"sort-area",children:Object(v.jsxs)("label",{className:"switch",children:[Object(v.jsx)("input",{type:"checkbox",checked:this.state.reverse}),Object(v.jsx)("span",{onClick:function(){return t.sortList(o)},className:"slider"})]})}),Object(v.jsx)("div",{id:"side-bar",children:Object(v.jsx)("ol",{children:o})})]})]}),Object(v.jsx)("div",{className:"footer",children:Object(v.jsx)("button",{className:"btn",onClick:function(){return t.reset()},children:"Reset"})})]})}}]),r}(l.a.Component);h.a.render(Object(v.jsx)(O,{}),document.getElementById("root")),d()}},[[15,1,2]]]);
//# sourceMappingURL=main.610899a9.chunk.js.map