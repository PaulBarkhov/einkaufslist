(this.webpackJsonpeinkaufslist=this.webpackJsonpeinkaufslist||[]).push([[0],{27:function(e,t,a){},28:function(e,t,a){},39:function(e,t,a){"use strict";a.r(t);a(22);var n=a(2),s=a.n(n),r=a(12),i=a.n(r),c=(a(27),a(4)),o=a(5),p=a(7),d=a(6),l=(a(28),a(42)),m=a(43),h=a.p+"static/media/broccoli.7c49f702.svg",u=a.p+"static/media/apple.f9cbf62c.svg",j=a.p+"static/media/spinach.99955154.png",b=a.p+"static/media/berry.a9fe4193.svg",g=a(41),O=a(40),f=a(1),y=function(e){Object(p.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={checked:void 0,quantity:1,key:""},e.componentDidMount=function(){console.log("Component did mount"),e.setState({key:Math.random().toString(36).substring(2,15)})},e.handleChange=function(t){e.props.getData(e.props.art,e.props.item.name,e.state.quantity,t.target.checked,e.state.key),e.setState({checked:t.target.checked})},e.isChecked=function(){return e.state.checked?e.props.published?Object(f.jsx)("del",{children:e.props.item.name}):Object(f.jsx)("b",{children:e.props.item.name}):Object(f.jsx)(f.Fragment,{children:e.props.item.name})},e.increaseQuantity=function(){e.props.getData(e.props.art,e.props.item.name,e.state.quantity+1,e.state.checked,e.state.key),e.setState({quantity:e.state.quantity+1})},e.decreaseQuantity=function(){1===e.state.quantity?(e.props.getData(e.props.art,e.props.item.name,e.state.quantity-1,!1,e.state.key),e.setState({checked:!e.state.checked})):e.setState({quantity:e.state.quantity-1})},e.renderQuantity=function(){var t;return t=e.state.quantity<1||void 0===e.state.quantity?1:e.state.quantity,!e.props.published&&e.state.checked?Object(f.jsxs)("div",{style:{float:"right"},children:[Object(f.jsx)("i",{className:"fas fa-minus",onClick:e.decreaseQuantity}),Object(f.jsx)("span",{style:{margin:"0 10px",fontWeight:"700"},children:t}),Object(f.jsx)("i",{className:"fas fa-plus",onClick:e.increaseQuantity})]}):e.props.published?Object(f.jsx)("span",{style:{float:"right",margin:"0 10px",fontWeight:"700"},children:e.props.item.quantity}):void 0},e}return Object(o.a)(a,[{key:"render",value:function(){var e=this.isChecked(),t=this.renderQuantity(),a=!0===this.props.darkMode?"rgb(36, 36, 36)":"rgb(255, 255, 255)";return Object(f.jsxs)(O.a,{style:{background:a,display:"flex",justifyContent:"space-between"},children:[Object(f.jsxs)("label",{className:"inputContainer",children:[e,Object(f.jsx)("input",{type:"checkbox",checked:this.state.checked,onChange:this.handleChange}),Object(f.jsx)("span",{className:"checkmark"})]}),t]},this.state.key)}}]),a}(n.Component),k=function(e){Object(p.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={isOpen:!1},e.setIsOpen=function(){e.setState({isOpen:!e.state.isOpen})},e.renderItems=function(){return e.props.items.map((function(t){return Object(f.jsx)(y,{item:t,art:e.props.art,getData:e.props.getData,published:e.props.published,darkMode:e.props.darkMode})}))},e}return Object(o.a)(a,[{key:"render",value:function(){var e=this.renderItems(),t=!0===this.props.darkMode?"rgb(36, 36, 36)":"rgb(255, 255, 255)";return Object(f.jsx)(f.Fragment,{children:Object(f.jsxs)("div",{className:"list",style:{background:t},children:[Object(f.jsx)("img",{src:this.props.icon,alt:"icon"}),Object(f.jsx)("span",{onClick:this.setIsOpen,style:{fontSize:"1.5rem",marginLeft:"10px",display:"inline-block",width:"80%",padding:"10px"},children:this.props.artName}),Object(f.jsx)(m.a,{isOpen:this.state.isOpen,children:Object(f.jsxs)(g.a,{style:{marginTop:"10px"},children:[e,Object(f.jsx)(O.a,{style:{textAlign:"center",background:t},onClick:this.setIsOpen,children:Object(f.jsx)("i",{className:"fas fa-chevron-up"})})]})})]})})}}]),a}(n.Component),x=function(e){Object(p.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={isOpen:!1},e.setIsOpen=function(){e.setState({isOpen:!e.state.isOpen})},e.getData=function(){console.log("tasdfvs")},e.renderList=function(t,a,n){var s=e.props.list.data.filter((function(e){return e.art===t}));return 0!==s.length?Object(f.jsx)(k,{getData:e.getData,art:t,items:s,artName:a,icon:n,published:!0,darkMode:e.props.darkMode}):Object(f.jsx)(f.Fragment,{})},e}return Object(o.a)(a,[{key:"render",value:function(){var e=!0===this.props.darkMode?"rgb(36, 36, 36)":"rgb(255, 255, 255)";if(0===this.props.list.data.length)return Object(f.jsx)(f.Fragment,{});var t=this.renderList("vegetables","\u041e\u0432\u043e\u0449\u0438",h),a=this.renderList("fruits","\u0424\u0440\u0443\u043a\u0442\u044b",u),n=this.renderList("greens","\u0417\u0435\u043b\u0435\u043d\u044c",j),s=this.renderList("berries","\u042f\u0433\u043e\u0434\u044b",b);return Object(f.jsx)(f.Fragment,{children:Object(f.jsxs)("div",{className:"list",style:{padding:"0",background:e},children:[Object(f.jsx)("span",{onClick:this.setIsOpen,style:{fontSize:"1.5rem",marginLeft:"10px",display:"inline-block",width:"80%",padding:"10px 0"},children:""===this.props.list.name?"\u041d\u043e\u0432\u044b\u0439 \u0441\u043f\u0438\u0441\u043e\u043a":this.props.list.name}),Object(f.jsxs)(m.a,{isOpen:this.state.isOpen,children:[t,a,n,s]})]})})}}]),a}(n.Component),v=function(e){Object(p.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).renderLists=function(){return e.props.lists.map((function(t){return Object(f.jsx)(x,{list:t,darkMode:e.props.darkMode})}))},e}return Object(o.a)(a,[{key:"render",value:function(){var e=this.renderLists(),t=0===this.props.lists.length?"\u0421\u043f\u0438\u0441\u043a\u043e\u0432 \u043f\u043e\u043a\u0430 \u043d\u0435\u0442":"\u0421\u043f\u0438\u0441\u043a\u0438 \u043f\u043e\u043a\u0443\u043f\u043e\u043a";return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("header",{children:Object(f.jsx)("h1",{children:t})}),e,Object(f.jsx)(l.a,{color:"primary",style:{width:"calc(100% - 20px)",margin:"10px"},onClick:this.props.togglePapa,children:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u043d\u043e\u0432\u044b\u0439 \u0441\u043f\u0438\u0441\u043e\u043a"})]})}}]),a}(n.Component),M=a(21),C=function(e){Object(p.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={name:"",data:[]},e.getData=function(t,a,n,s,r){var i=Object(M.a)(e.state.data).filter((function(e){return e.key!==r}));s&&i.push({art:t,name:a,quantity:n,checked:s,key:r}),e.setState({data:i})},e.setListName=function(t){e.setState({name:t.target.value})},e.addNewList=function(){e.props.getList(e.state.name,e.state.data)},e.arr=[{name:"vegetables",artName:"\u041e\u0432\u043e\u0449\u0438",icon:h,data:[{name:"\u041f\u043e\u043c\u0438\u0434\u043e\u0440"},{name:"\u041e\u0433\u0443\u0440\u0435\u0446"},{name:"\u041f\u0435\u0440\u0435\u0446"},{name:"\u0411\u0430\u043a\u043b\u0430\u0436\u0430\u043d"},{name:"\u041a\u0430\u0431\u0430\u0447\u043e\u043a"},{name:"\u041a\u0430\u0440\u0442\u043e\u0444\u0435\u043b\u044c"},{name:"\u041b\u0443\u043a"},{name:"\u041c\u043e\u0440\u043a\u043e\u0432\u044c"},{name:"\u0410\u0432\u043e\u043a\u0430\u0434\u043e"},{name:"\u0411\u0430\u0442\u0430\u0442"},{name:"\u0421\u0432\u0435\u043a\u043b\u0430"},{name:"\u0427\u0435\u0441\u043d\u043e\u043a"}]},{name:"fruits",artName:"\u0424\u0440\u0443\u043a\u0442\u044b",icon:u,data:[{name:"\u0410\u0431\u0440\u0438\u043a\u043e\u0441"},{name:"\u0410\u043d\u0430\u043d\u0430\u0441"},{name:"\u0410\u043f\u0435\u043b\u044c\u0441\u0438\u043d"},{name:"\u0410\u0440\u0431\u0443\u0437"},{name:"\u0411\u0430\u043d\u0430\u043d"},{name:"\u0412\u0438\u043d\u043e\u0433\u0440\u0430\u0434"},{name:"\u0413\u0440\u0430\u043d\u0430\u0442"},{name:"\u0413\u0440\u0435\u0439\u043f\u0444\u0440\u0443\u0442"},{name:"\u0413\u0440\u0443\u0448\u0430"},{name:"\u0414\u044b\u043d\u044f"},{name:"\u041a\u0438\u0432\u0438"},{name:"\u041b\u0430\u0439\u043c"},{name:"\u041b\u0438\u043c\u043e\u043d"},{name:"\u041c\u0430\u043d\u0433\u043e"},{name:"\u041c\u0430\u043d\u0434\u0430\u0440\u0438\u043d"},{name:"\u041d\u0435\u043a\u0442\u0430\u0440\u0438\u043d"},{name:"\u041f\u0435\u0440\u0441\u0438\u043a"},{name:"\u0421\u043b\u0438\u0432\u0430"},{name:"\u042f\u0431\u043b\u043e\u043a\u043e"}]},{name:"greens",artName:"\u0417\u0435\u043b\u0435\u043d\u044c",icon:j,data:[{name:"\u0411\u0430\u0437\u0438\u043b\u0438\u043a"},{name:"\u041b\u0443\u043a"},{name:"\u041b\u0443\u043a \u043f\u043e\u0440\u0435\u0439"},{name:"\u041f\u0435\u0442\u0440\u0443\u0448\u043a\u0430"},{name:"\u0420\u0443\u043a\u043e\u043b\u0430"},{name:"\u0421\u0430\u043b\u0430\u0442"},{name:"\u0421\u0430\u043b\u0430\u0442 \u043a\u0438\u0442\u0430\u0439\u0441\u043a\u0438\u0439"},{name:"\u0420\u043e\u043c\u0430\u043d\u043e"},{name:"\u0428\u043f\u0438\u043d\u0430\u0442"}]},{name:"berries",artName:"\u042f\u0433\u043e\u0434\u044b",icon:b,data:[{name:"\u0412\u0438\u0448\u043d\u044f"},{name:"\u0415\u0436\u0435\u0432\u0438\u043a\u0430"},{name:"\u0417\u0435\u043c\u043b\u044f\u043d\u0438\u043a\u0430"},{name:"\u041a\u043b\u0443\u0431\u043d\u0438\u043a\u0430"},{name:"\u041a\u043b\u044e\u043a\u0432\u0430"},{name:"\u041a\u0440\u044b\u0436\u043e\u0432\u043d\u0438\u043a"},{name:"\u041c\u0430\u043b\u0438\u043d\u0430"},{name:"\u0421\u043c\u043e\u0440\u043e\u0434\u0438\u043d\u0430"},{name:"\u0425\u0443\u0440\u043c\u0430"},{name:"\u0427\u0435\u0440\u0435\u0448\u043d\u044f"},{name:"\u0427\u0435\u0440\u043d\u0430\u044f \u0441\u043c\u043e\u0440\u043e\u0434\u0438\u043d\u0430"}]}],e.renderListGroups=function(){return e.arr.map((function(t){return Object(f.jsx)(k,{getData:e.getData,art:t.name,items:t.data,artName:t.artName,icon:t.icon,darkMode:e.props.darkMode})}))},e}return Object(o.a)(a,[{key:"render",value:function(){var e=this.renderListGroups(),t=!0===this.props.darkMode?"white":"black";return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("header",{children:Object(f.jsx)("input",{placeholder:"\u041d\u043e\u0432\u044b\u0439 \u0441\u043f\u0438\u0441\u043e\u043a",className:"newListName",onChange:this.setListName,style:{color:t}})}),e,Object(f.jsx)(l.a,{color:"primary",onClick:this.addNewList,style:{float:"right",margin:"10px"},children:"Ok"})]})}}]),a}(n.Component),w=function(e){Object(p.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={lists:[],visible:!1,darkMode:!1},e.componentDidMount=function(){window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches&&e.setState({darkMode:!0})},e.togglePapa=function(){e.setState({visible:!e.state.visible})},e.getList=function(t,a){e.togglePapa();var n=e.state.lists,s={name:t,data:a};a.length>0&&(n.push(s),e.setState({lists:n}))},e}return Object(o.a)(a,[{key:"render",value:function(){return this.state.darkMode&&(document.querySelector("body").style.background="black",document.querySelector("body").style.color="white"),console.log("rendering App"),this.state.visible?Object(f.jsx)(C,{getList:this.getList,darkMode:this.state.darkMode}):Object(f.jsx)(v,{lists:this.state.lists,togglePapa:this.togglePapa,darkMode:this.state.darkMode})}}]),a}(n.Component);i.a.render(Object(f.jsx)(s.a.StrictMode,{children:Object(f.jsx)(w,{})}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.bc6a5397.chunk.js.map