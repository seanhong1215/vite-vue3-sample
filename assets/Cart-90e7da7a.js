import{_ as b,f as m,o as l,c as a,g as y,a as t,F as h,r as p,h as c,t as d,n as v,b as g,i as f,v as A}from"./index-2b41ac5a.js";const C={data(){return{products:[],product:{},status:{loadingItem:""},form:{user:{name:"",email:"",tel:"",address:""},message:""},cart:{},isLoading:!1,coupon_code:""}},methods:{getProducts(){const e=`${{}.VUE_APP_API}/api/${{}.VUE_APP_PATH}/products/all`;this.isLoading=!0,this.$http.get(e).then(n=>{this.products=n.data.products,console.log("products:",n),this.isLoading=!1})},addToCart(e,n=1){const i=`${{}.VUE_APP_API}/api/${{}.VUE_APP_PATH}/cart`;this.status.loadingItem=e;const r={product_id:e,qty:n};this.$http.post(i,{data:r}).then(o=>{console.log(o),this.status.loadingItem="",this.getCart()})},getCart(){const e=`${{}.VUE_APP_API}/api/${{}.VUE_APP_PATH}/cart`;this.isLoading=!0,this.$http.get(e).then(n=>{this.cart=n.data.data,console.log(n),this.isLoading=!1})},updateCart(e){const n=`${{}.VUE_APP_API}/api/${{}.VUE_APP_PATH}/cart/${e.id}`;this.isLoading=!0,this.status.loadingItem=e.id;const i={product_id:e.product_id,qty:e.qty};this.$http.put(n,{data:i}).then(r=>{console.log(r),this.getCart(),this.status.loadingItem="",this.isLoading=!1})},removeCartItem(e){this.status.loadingItem=e;const n=`${{}.VUE_APP_API}/api/${{}.VUE_APP_PATH}/cart/${e}`;this.isLoading=!0,this.$http.delete(n).then(i=>{console.log(i),this.status.loadingItem="",this.getCart(),this.isLoading=!1})}},created(){this.getProducts(),this.getCart()}},I={class:"container"},k={class:"row mt-4"},x={class:"col-md-7"},V={class:"table align-middle"},L=t("thead",null,[t("tr",null,[t("th",null,"圖片"),t("th",null,"商品名稱"),t("th",null,"價格"),t("th")])],-1),U={style:{width:"200px"}},E={class:"h5"},$={class:"btn-group btn-group-sm"},T=["onClick","disabled"],w={key:0,class:"spinner-border spinner-grow-sm"},H={class:"col-md-5"},q={class:"sticky-top"},N={class:"table align-middle"},B=t("thead",null,[t("tr",null,[t("th"),t("th",null,"品名"),t("th",{style:{width:"110px"}},"數量"),t("th",null,"單價")])],-1),z=["disabled","onClick"],D={key:0,class:"text-success"},F={class:"input-group input-group-sm"},S=["onUpdate:modelValue","disabled","onChange"],M={class:"input-group-text"},j={class:"text-end"},G={key:0,class:"text-success"},J=t("td",{colspan:"3",class:"text-end"},"總計",-1),K={class:"text-end"},O={key:0},Q=t("td",{colspan:"3",class:"text-end text-success"},"折扣價",-1),R={class:"text-end text-success"};function W(e,n,i,r,o,_){const P=m("Loading");return l(),a(h,null,[y(P,{active:o.isLoading},null,8,["active"]),t("div",I,[t("div",k,[t("div",x,[t("table",V,[L,t("tbody",null,[(l(!0),a(h,null,p(o.products,s=>(l(),a("tr",{key:s.id},[t("td",U,[t("div",{style:v([{height:"100px","background-size":"cover","background-position":"center"},{backgroundImage:`url(${s.imageUrl})`}])},null,4)]),t("td",null,d(s.title),1),t("td",null,[t("div",E,"現在只要 "+d(s.origin_price)+" 元",1)]),t("td",null,[t("div",$,[t("button",{type:"button",class:"btn btn-outline-danger",onClick:u=>_.addToCart(s.id),disabled:o.status.loadingItem===s.id},[o.status.loadingItem===s.id?(l(),a("span",w)):c("",!0),g(" 加到購物車 ")],8,T)])])]))),128))])])]),t("div",H,[t("div",q,[t("table",N,[B,t("tbody",null,[o.cart.carts?(l(!0),a(h,{key:0},p(o.cart.carts,s=>(l(),a("tr",{key:s.id},[t("td",null,[t("button",{type:"button",class:"btn btn-outline-danger btn-sm",disabled:o.status.loadingItem===s.id,onClick:u=>_.removeCartItem(s.id)}," x ",8,z)]),t("td",null,[g(d(s.product.title)+" ",1),s.coupon?(l(),a("div",D," 已套用優惠券 ")):c("",!0)]),t("td",null,[t("div",F,[f(t("input",{type:"number",class:"form-control","onUpdate:modelValue":u=>s.qty=u,disabled:o.status.loadingItem===s.id,onChange:u=>_.updateCart(s)},null,40,S),[[A,s.qty,void 0,{number:!0}]]),t("div",M,"/ "+d(s.product.unit),1)])]),t("td",j,[o.cart.final_total!==o.cart.total?(l(),a("small",G,"折扣價：")):c("",!0),g(" "+d(e.$filters.currency(s.final_total)),1)])]))),128)):c("",!0)]),t("tfoot",null,[t("tr",null,[J,t("td",K,d(e.$filters.currency(o.cart.total)),1)]),o.cart.final_total!==o.cart.total?(l(),a("tr",O,[Q,t("td",R,d(e.$filters.currency(o.cart.final_total)),1)])):c("",!0)])])])])])])],64)}const Y=b(C,[["render",W]]);export{Y as default};