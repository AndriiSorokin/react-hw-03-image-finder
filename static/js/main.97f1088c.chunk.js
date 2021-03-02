(this["webpackJsonpreact-hw-03-image-finder"]=this["webpackJsonpreact-hw-03-image-finder"]||[]).push([[0],{25:function(e,t,a){},65:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(18),o=a.n(c),s=(a(25),a(9)),i=a(4),l=a(5),u=a(7),h=a(6),m=a(19),d=a.n(m),g=a(0),b=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={query:""},e.handleSearch=function(t){e.setState({query:t.target.value})},e.handleSubmit=function(t){t.preventDefault(),e.props.onSubmit(e.state.query),e.setState({query:""})},e}return Object(l.a)(a,[{key:"render",value:function(){return Object(g.jsx)("header",{className:"Searchbar",children:Object(g.jsxs)("form",{onSubmit:this.handleSubmit,className:"SearchForm",children:[Object(g.jsx)("button",{type:"submit",className:"SearchForm-button",children:Object(g.jsx)("span",{className:"SearchForm-button-label",children:"Search"})}),Object(g.jsx)("input",{value:this.state.query,onChange:this.handleSearch,className:"SearchForm-input",type:"text",placeholder:"Search images and photos"})]})})}}]),a}(n.Component),j=function(e){var t=e.webformatURL,a=e.largeImageURL,n=e.activeImages;return Object(g.jsx)("li",{onClick:n,className:"ImageGalleryItem",children:Object(g.jsx)("img",{className:"ImageGalleryItem-image","data-source":a,src:t,alt:"img"})})},p=function(e){var t=e.images,a=e.activeImages;return Object(g.jsx)("ul",{className:"ImageGallery",children:t.map((function(e){return Object(g.jsx)(j,{webformatURL:e.webformatURL,largeImageURL:e.largeImageURL,activeImages:a},e.id)}))})},f=function(e){var t=e.searchImages;return Object(g.jsx)("button",{className:"Button btn",onClick:t,type:"submit",children:"Load more"})},y=a(20),v=a.n(y),O=function(){return Object(g.jsx)(v.a,{type:"Puff",color:"#00BFFF",height:70,width:70,timeout:3e3})},w=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).handleKeyDown=function(t){"Escape"===t.code&&e.props.onModal()},e.handleCloseModal=function(t){t.currentTarget===t.target&&e.props.onModal()},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){var e=this.props.largeImageURL;return Object(g.jsx)("div",{className:"Overlay",onClick:this.handleCloseModal,children:Object(g.jsx)("div",{className:"Modal",children:Object(g.jsx)("img",{src:e,alt:"big img"})})})}}]),a}(n.Component),x=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={images:[],page:1,searchQuery:"",loader:!1,error:!1,showModal:!1,largeImageURL:""},e.onChangeQuery=function(t){e.setState({searchQuery:t,page:1,images:[]})},e.searchImages=function(){var t=e.state,a=t.page,n=t.searchQuery;e.setState({loader:!0}),d.a.get("https://pixabay.com/api/?q=".concat(n,"&page=").concat(a,"&key=18687503-307ceda9bac4583df41d15aed&image_type=photo&orientation=horizontal&per_page=12")).then((function(t){e.setState((function(e){return{images:[].concat(Object(s.a)(e.images),Object(s.a)(t.data.hits)),page:e.page+1}})),window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})})).catch((function(t){return e.setState({error:t})})).finally((function(){return e.setState({loader:!1})}))},e.openModal=function(){e.setState((function(e){return{showModal:!e.showModal}}))},e.activeImages=function(t){var a=t.target;console.log(a);var n=a.dataset.source;e.setState({largeImageURL:n}),e.openModal()},e}return Object(l.a)(a,[{key:"componentDidUpdate",value:function(e,t){t.searchQuery!==this.state.searchQuery&&this.searchImages()}},{key:"render",value:function(){var e=this.state,t=e.images,a=e.loader,n=e.error,r=e.showModal,c=e.largeImageURL;return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(b,{onSubmit:this.onChangeQuery}),Object(g.jsx)(p,{images:t,activeImages:this.activeImages}),t.length>0&&!a&&Object(g.jsx)(f,{searchImages:this.searchImages}),a&&Object(g.jsx)(O,{}),n&&Object(g.jsx)("h1",{children:"Sorry error..."}),r&&Object(g.jsx)(w,{onModal:this.openModal,largeImageURL:c})]})}}]),a}(n.Component);o.a.render(Object(g.jsx)(r.a.StrictMode,{children:Object(g.jsx)(x,{})}),document.getElementById("root"))}},[[65,1,2]]]);
//# sourceMappingURL=main.97f1088c.chunk.js.map