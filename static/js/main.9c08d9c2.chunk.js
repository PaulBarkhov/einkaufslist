(this.webpackJsonpeinkaufslist=this.webpackJsonpeinkaufslist||[]).push([[0],{27:function(t,e,a){},28:function(t,e,a){},39:function(t,e,a){"use strict";a.r(e);a(22);var n=a(2),s=a.n(n),i=a(12),r=a.n(i),c=(a(27),a(21)),o=a(4),p=a(5),l=a(7),m=a(6),h=(a(28),a(42)),d=a(43),u=a(41),j=a.p+"static/media/broccoli.7c49f702.svg",b=a.p+"static/media/apple.f9cbf62c.svg",g=a.p+"static/media/spinach.99955154.png",O=a.p+"static/media/berry.a9fe4193.svg",f=a(40),y=a(0),x=function(t){Object(l.a)(a,t);var e=Object(m.a)(a);function a(){var t;Object(o.a)(this,a);for(var n=arguments.length,s=new Array(n),i=0;i<n;i++)s[i]=arguments[i];return(t=e.call.apply(e,[this].concat(s))).state={checked:void 0,quantity:1,key:""},t.componentDidMount=function(){console.log("Component did mount"),t.setState({key:Math.random().toString(36).substring(2,15)})},t.handleChange=function(e){t.props.getData(t.props.art,t.props.item.name,t.state.quantity,e.target.checked,t.state.key),t.setState({checked:e.target.checked})},t.isChecked=function(){return t.state.checked?t.props.published?Object(y.jsx)("del",{children:t.props.item.name}):Object(y.jsx)("b",{children:t.props.item.name}):Object(y.jsx)(y.Fragment,{children:t.props.item.name})},t.increaseQuantity=function(){t.props.getData(t.props.art,t.props.item.name,t.state.quantity+1,t.state.checked,t.state.key),t.setState({quantity:t.state.quantity+1})},t.decreaseQuantity=function(){1===t.state.quantity&&(t.props.getData(t.props.art,t.props.item.name,t.state.quantity-1,!1,t.state.key),t.setState({checked:!t.state.checked}))},t.renderQuantity=function(){var e;return e=t.state.quantity<1||void 0===t.state.quantity?1:t.state.quantity,!t.props.published&&t.state.checked?Object(y.jsxs)("div",{style:{float:"right"},children:[Object(y.jsx)("i",{class:"fas fa-plus",onClick:t.increaseQuantity}),Object(y.jsx)("span",{style:{margin:"0 10px",fontWeight:"700"},children:e}),Object(y.jsx)("i",{class:"fas fa-minus",onClick:t.decreaseQuantity})]}):t.props.published?Object(y.jsx)("span",{style:{float:"right",margin:"0 10px",fontWeight:"700"},children:t.props.item.quantity}):void 0},t}return Object(p.a)(a,[{key:"render",value:function(){var t=this.isChecked(),e=this.renderQuantity();return Object(y.jsxs)(f.a,{children:[Object(y.jsx)("input",{type:"checkbox",id:this.state.key,onChange:this.handleChange,checked:this.state.checked}),Object(y.jsx)("label",{htmlFor:this.state.key,style:{marginBottom:"0",marginLeft:"5px"},children:t}),e]},this.state.key)}}]),a}(n.Component),v=function(t){Object(l.a)(a,t);var e=Object(m.a)(a);function a(){var t;Object(o.a)(this,a);for(var n=arguments.length,s=new Array(n),i=0;i<n;i++)s[i]=arguments[i];return(t=e.call.apply(e,[this].concat(s))).state={isOpen:!1},t.setIsOpen=function(){t.setState({isOpen:!t.state.isOpen})},t.renderItemList=function(){return t.props.items.map((function(e){return Object(y.jsx)(x,{item:e,art:t.props.art,getData:t.props.getData,published:t.props.published})}))},t}return Object(p.a)(a,[{key:"render",value:function(){var t=this.renderItemList();return Object(y.jsx)(y.Fragment,{children:Object(y.jsxs)("div",{className:"list",children:[Object(y.jsx)("img",{src:this.props.icon,alt:"icon"}),Object(y.jsx)("span",{onClick:this.setIsOpen,style:{fontSize:"1.5rem",marginLeft:"10px",display:"inline-block",width:"80%",padding:"10px"},children:this.props.artName}),Object(y.jsx)(d.a,{isOpen:this.state.isOpen,children:Object(y.jsxs)(u.a,{style:{marginTop:"10px"},children:[t,Object(y.jsx)(f.a,{children:Object(y.jsx)(h.a,{onClick:this.setIsOpen,children:"\u0421\u0432\u0435\u0440\u043d\u0443\u0442\u044c"})})]})})]})})}}]),a}(n.Component),k=function(t){Object(l.a)(a,t);var e=Object(m.a)(a);function a(){var t;Object(o.a)(this,a);for(var n=arguments.length,s=new Array(n),i=0;i<n;i++)s[i]=arguments[i];return(t=e.call.apply(e,[this].concat(s))).state={isOpen:!1},t.setIsOpen=function(){t.setState({isOpen:!t.state.isOpen})},t.renderList=function(e,a,n){var s=t.props.list.data.filter((function(t){return t.art===e}));return 0!==s.length?Object(y.jsxs)("div",{className:"list",style:{padding:"0"},children:[Object(y.jsx)("span",{onClick:t.setIsOpen,style:{fontSize:"1.5rem",marginLeft:"10px",display:"inline-block",width:"80%",padding:"10px 0"},children:""===t.props.list.listName?"\u041d\u043e\u0432\u044b\u0439 \u0441\u043f\u0438\u0441\u043e\u043a":t.props.lists.listName}),Object(y.jsx)(d.a,{isOpen:t.state.isOpen,children:Object(y.jsx)(u.a,{children:Object(y.jsx)(v,{getData:t.props.getData,art:e,items:s,artName:a,icon:n,published:!0})})})]}):Object(y.jsx)(y.Fragment,{})},t}return Object(p.a)(a,[{key:"render",value:function(){if(0===this.props.list.data.length)return Object(y.jsx)(y.Fragment,{});var t=this.renderList("vegetables","\u041e\u0432\u043e\u0449\u0438",j),e=this.renderList("fruits","\u0424\u0440\u0443\u043a\u0442\u044b",b),a=this.renderList("greens","\u0417\u0435\u043b\u0435\u043d\u044c",g),n=this.renderList("berries","\u042f\u0433\u043e\u0434\u044b",O);return Object(y.jsxs)(y.Fragment,{children:[t,e,a,n]})}}]),a}(n.Component),N=function(t){Object(l.a)(a,t);var e=Object(m.a)(a);function a(){var t;Object(o.a)(this,a);for(var n=arguments.length,s=new Array(n),i=0;i<n;i++)s[i]=arguments[i];return(t=e.call.apply(e,[this].concat(s))).renderLists=function(){return t.props.lists.map((function(e){return Object(y.jsx)(k,{list:e,getData:t.props.getData})}))},t}return Object(p.a)(a,[{key:"render",value:function(){var t=this.renderLists();return Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)("header",{children:Object(y.jsx)("h1",{children:"\u0421\u043f\u0438\u0441\u043a\u0438 \u043f\u043e\u043a\u0443\u043f\u043e\u043a"})}),t,Object(y.jsx)(h.a,{color:"primary",style:{width:"calc(100% - 20px)",margin:"10px"},onClick:this.props.togglePapa,children:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u043d\u043e\u0432\u044b\u0439 \u0441\u043f\u0438\u0441\u043e\u043a"})]})}}]),a}(n.Component),D=function(t){Object(l.a)(a,t);var e=Object(m.a)(a);function a(){var t;Object(o.a)(this,a);for(var n=arguments.length,s=new Array(n),i=0;i<n;i++)s[i]=arguments[i];return(t=e.call.apply(e,[this].concat(s))).vegetables=[{name:"\u041f\u043e\u043c\u0438\u0434\u043e\u0440"},{name:"\u041e\u0433\u0443\u0440\u0435\u0446"},{name:"\u041f\u0435\u0440\u0435\u0446"},{name:"\u0411\u0430\u043a\u043b\u0430\u0436\u0430\u043d"},{name:"\u041a\u0430\u0431\u0430\u0447\u043e\u043a"},{name:"\u041a\u0430\u0440\u0442\u043e\u0444\u0435\u043b\u044c"},{name:"\u041b\u0443\u043a"},{name:"\u041c\u043e\u0440\u043a\u043e\u0432\u044c"},{name:"\u0410\u0432\u043e\u043a\u0430\u0434\u043e"},{name:"\u0411\u0430\u0442\u0430\u0442"},{name:"\u0421\u0432\u0435\u043a\u043b\u0430"},{name:"\u0427\u0435\u0441\u043d\u043e\u043a"}],t.fruits=[{name:"\u0410\u0431\u0440\u0438\u043a\u043e\u0441"},{name:"\u0410\u043d\u0430\u043d\u0430\u0441"},{name:"\u0410\u043f\u0435\u043b\u044c\u0441\u0438\u043d"},{name:"\u0410\u0440\u0431\u0443\u0437"},{name:"\u0411\u0430\u043d\u0430\u043d"},{name:"\u0412\u0438\u043d\u043e\u0433\u0440\u0430\u0434"},{name:"\u0413\u0440\u0430\u043d\u0430\u0442"},{name:"\u0413\u0440\u0435\u0439\u043f\u0444\u0440\u0443\u0442"},{name:"\u0413\u0440\u0443\u0448\u0430"},{name:"\u0414\u044b\u043d\u044f"},{name:"\u041a\u0438\u0432\u0438"},{name:"\u041b\u0430\u0439\u043c"},{name:"\u041b\u0438\u043c\u043e\u043d"},{name:"\u041c\u0430\u043d\u0433\u043e"},{name:"\u041c\u0430\u043d\u0434\u0430\u0440\u0438\u043d"},{name:"\u041d\u0435\u043a\u0442\u0430\u0440\u0438\u043d"},{name:"\u041f\u0435\u0440\u0441\u0438\u043a"},{name:"\u0421\u043b\u0438\u0432\u0430"},{name:"\u042f\u0431\u043b\u043e\u043a\u043e"}],t.greens=[{name:"\u0411\u0430\u0437\u0438\u043b\u0438\u043a"},{name:"\u041b\u0443\u043a"},{name:"\u041b\u0443\u043a \u043f\u043e\u0440\u0435\u0439"},{name:"\u041f\u0435\u0442\u0440\u0443\u0448\u043a\u0430"},{name:"\u0420\u0443\u043a\u043e\u043b\u0430"},{name:"\u0421\u0430\u043b\u0430\u0442"},{name:"\u0421\u0430\u043b\u0430\u0442 \u043a\u0438\u0442\u0430\u0439\u0441\u043a\u0438\u0439"},{name:"\u0420\u043e\u043c\u0430\u043d\u043e"},{name:"\u0428\u043f\u0438\u043d\u0430\u0442"}],t.berries=[{name:"\u0412\u0438\u0448\u043d\u044f"},{name:"\u0415\u0436\u0435\u0432\u0438\u043a\u0430"},{name:"\u0417\u0435\u043c\u043b\u044f\u043d\u0438\u043a\u0430"},{name:"\u041a\u043b\u0443\u0431\u043d\u0438\u043a\u0430"},{name:"\u041a\u043b\u044e\u043a\u0432\u0430"},{name:"\u041a\u0440\u044b\u0436\u043e\u0432\u043d\u0438\u043a"},{name:"\u041c\u0430\u043b\u0438\u043d\u0430"},{name:"\u0421\u043c\u043e\u0440\u043e\u0434\u0438\u043d\u0430"},{name:"\u0425\u0443\u0440\u043c\u0430"},{name:"\u0427\u0435\u0440\u0435\u0448\u043d\u044f"},{name:"\u0427\u0435\u0440\u043d\u0430\u044f \u0441\u043c\u043e\u0440\u043e\u0434\u0438\u043d\u0430"}],t}return Object(p.a)(a,[{key:"render",value:function(){return Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)("header",{children:Object(y.jsx)("input",{placeholder:"\u041d\u043e\u0432\u044b\u0439 \u0441\u043f\u0438\u0441\u043e\u043a",className:"newListName",onChange:this.props.setListName})}),Object(y.jsx)(v,{getData:this.props.getData,art:"vegetables",items:this.vegetables,artName:"\u041e\u0432\u043e\u0449\u0438",icon:j}),Object(y.jsx)(v,{getData:this.props.getData,art:"fruits",items:this.fruits,artName:"\u0424\u0440\u0443\u043a\u0442\u044b",icon:b}),Object(y.jsx)(v,{getData:this.props.getData,art:"greens",items:this.greens,artName:"\u0417\u0435\u043b\u0435\u043d\u044c",icon:g}),Object(y.jsx)(v,{getData:this.props.getData,art:"berries",items:this.berries,artName:"\u042f\u0433\u043e\u0434\u044b",icon:O}),Object(y.jsx)(h.a,{color:"info",onClick:this.props.addNewList,style:{float:"right",margin:"10px"},children:"Ok"})]})}}]),a}(n.Component),L=function(t){Object(l.a)(a,t);var e=Object(m.a)(a);function a(){var t;Object(o.a)(this,a);for(var n=arguments.length,s=new Array(n),i=0;i<n;i++)s[i]=arguments[i];return(t=e.call.apply(e,[this].concat(s))).state={data:[],lists:[],listName:"",visible:!1},t.componentDidUpdate=function(e){e.lists,t.state.lists},t.getData=function(e,a,n,s,i){var r=Object(c.a)(t.state.data).filter((function(t){return t.key!==i}));s&&r.push({art:e,name:a,quantity:n,checked:s,key:i}),t.setState({data:r})},t.qwerqwer=function(){console.log("\u0442\u0440\u0430 \u043b\u0430 \u043b\u0430")},t.togglePapa=function(){t.setState({visible:!t.state.visible})},t.addNewList=function(){t.togglePapa();var e=t.state,a=e.lists,n=e.data,s={listName:e.listName,data:n};n.length>0&&(a.push(s),t.setState({lists:a,data:[],listName:""}))},t.setListName=function(e){t.setState({listName:e.target.value})},t}return Object(p.a)(a,[{key:"render",value:function(){return this.state.visible?Object(y.jsx)(D,{getData:this.getData,addNewList:this.addNewList,setListName:this.setListName}):Object(y.jsx)(N,{lists:this.state.lists,getData:this.qwerqwer,togglePapa:this.togglePapa})}}]),a}(n.Component);r.a.render(Object(y.jsx)(s.a.StrictMode,{children:Object(y.jsx)(L,{})}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.9c08d9c2.chunk.js.map