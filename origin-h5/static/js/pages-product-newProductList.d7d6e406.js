(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-product-newProductList"],{"022a":function(t,a,e){"use strict";var i=e("d3be"),n=e.n(i);n.a},"0cda":function(t,a,e){var i=e("24fb");a=i(!1),a.push([t.i,'@charset "UTF-8";\n/* 页面左右间距 */\n/* 文字尺寸 */\n/*文字颜色*/\n/* 边框颜色 */\n/* 图片加载中颜色 */\n/* 行为相关颜色 */uni-page-body[data-v-2cfe9f42],\n.content[data-v-2cfe9f42]{background:#f8f8f8}body.?%PAGE?%[data-v-2cfe9f42]{background:#f8f8f8}.banner-image[data-v-2cfe9f42]{width:100%}.section-tit[data-v-2cfe9f42]{font-size:%?30?%;color:#303133;background:#fff;margin-top:%?16?%;text-align:center;padding-top:%?20?%;padding-bottom:%?20?%}\n/* 商品列表 */.goods-list[data-v-2cfe9f42]{display:flex;flex-wrap:wrap;padding:0 %?30?%;background:#fff}.goods-list .goods-item[data-v-2cfe9f42]{display:flex;flex-direction:column;width:48%;padding-bottom:%?40?%}.goods-list .goods-item[data-v-2cfe9f42]:nth-child(2n+1){margin-right:4%}.goods-list .image-wrapper[data-v-2cfe9f42]{width:100%;height:%?330?%;border-radius:3px;overflow:hidden;background-color:#fff}.goods-list .image-wrapper uni-image[data-v-2cfe9f42]{width:100%;height:100%;opacity:1}.goods-list .title[data-v-2cfe9f42]{font-size:%?32?%;color:#303133;line-height:%?80?%}.goods-list .title2[data-v-2cfe9f42]{font-size:%?24?%;color:#909399;line-height:%?40?%;height:%?80?%;overflow:hidden;text-overflow:ellipsis;display:block}.goods-list .price-box[data-v-2cfe9f42]{display:flex;align-items:center;justify-content:space-between;padding-right:%?10?%;font-size:%?24?%;color:#909399}.goods-list .price[data-v-2cfe9f42]{font-size:%?32?%;color:#fa436a;line-height:1}.goods-list .price[data-v-2cfe9f42]:before{content:"$";font-size:%?26?%}',""]),t.exports=a},"133e":function(t,a,e){"use strict";e("7a82");var i=e("4ea4").default;Object.defineProperty(a,"__esModule",{value:!0}),a.fetchContent=function(){return(0,n.default)({method:"GET",url:"/home/content"})},a.fetchHotProductList=function(t){return(0,n.default)({method:"GET",url:"/home/hotProductList",params:t})},a.fetchNewProductList=function(t){return(0,n.default)({method:"GET",url:"/home/newProductList",params:t})},a.fetchProductCateList=function(t){return(0,n.default)({method:"GET",url:"/home/productCateList/"+t})},a.fetchRecommendProductList=function(t){return(0,n.default)({method:"GET",url:"/home/recommendProductList",params:t})};var n=i(e("ecb2"))},"269b":function(t,a,e){"use strict";e("7a82");var i=e("4ea4").default;Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0,e("99af");var n=i(e("c7eb")),o=i(e("1da1")),d=e("133e"),r=i(e("4d44")),s={components:{uniLoadMore:r.default},data:function(){return{loadingType:"more",productList:[],searchParam:{pageNum:1,pageSize:6}}},onLoad:function(t){this.loadData()},onPullDownRefresh:function(){this.loadData("refresh")},onReachBottom:function(){this.searchParam.pageNum++,this.loadData()},methods:{loadData:function(){var t=arguments,a=this;return(0,o.default)((0,n.default)().mark((function e(){var i,o;return(0,n.default)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(i=t.length>0&&void 0!==t[0]?t[0]:"add",o=t.length>1?t[1]:void 0,"add"!==i){e.next=8;break}if("nomore"!==a.loadingType){e.next=5;break}return e.abrupt("return");case 5:a.loadingType="loading",e.next=9;break;case 8:a.loadingType="more";case 9:"refresh"===i&&(a.searchParam.pageNum=1,a.productList=[]),(0,d.fetchNewProductList)(a.searchParam).then((function(t){var e=t.data;0===t.data.length?(a.loadingType="nomore",a.searchParam.pageNum--):(t.data.length<a.searchParam.pageSize?(a.loadingType="nomore",a.searchParam.pageNum--):a.loadingType="more",a.productList=a.productList.concat(e)),"refresh"===i&&(1==o?uni.hideLoading():uni.stopPullDownRefresh())}));case 11:case"end":return e.stop()}}),e)})))()},navToDetailPage:function(t){var a=t.id;uni.navigateTo({url:"/pages/product/product?id=".concat(a)})},stopPrevent:function(){}}};a.default=s},"4d44":function(t,a,e){"use strict";e.r(a);var i=e("9979"),n=e("6066");for(var o in n)["default"].indexOf(o)<0&&function(t){e.d(a,t,(function(){return n[t]}))}(o);e("022a");var d=e("f0c5"),r=Object(d["a"])(n["default"],i["b"],i["c"],!1,null,"103989d4",null,!1,i["a"],void 0);a["default"]=r.exports},6066:function(t,a,e){"use strict";e.r(a);var i=e("f7d2"),n=e.n(i);for(var o in i)["default"].indexOf(o)<0&&function(t){e.d(a,t,(function(){return i[t]}))}(o);a["default"]=n.a},"6bf9":function(t,a,e){"use strict";var i=e("9c42"),n=e.n(i);n.a},"70eb":function(t,a,e){"use strict";e.r(a);var i=e("269b"),n=e.n(i);for(var o in i)["default"].indexOf(o)<0&&function(t){e.d(a,t,(function(){return i[t]}))}(o);a["default"]=n.a},"76a5":function(t,a,e){"use strict";e.d(a,"b",(function(){return n})),e.d(a,"c",(function(){return o})),e.d(a,"a",(function(){return i}));var i={uniLoadMore:e("4d44").default},n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-uni-view",{staticClass:"content"},[e("v-uni-image",{staticClass:"banner-image",attrs:{src:"/static/banner2.jpeg"}}),e("v-uni-view",{staticClass:"section-tit"},[t._v("Products")]),e("v-uni-view",{staticClass:"goods-list"},t._l(t.productList,(function(a,i){return e("v-uni-view",{key:i,staticClass:"goods-item",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.navToDetailPage(a)}}},[e("v-uni-view",{staticClass:"image-wrapper"},[e("v-uni-image",{attrs:{src:a.pic,mode:"aspectFit"}})],1),e("v-uni-text",{staticClass:"title clamp"},[t._v(t._s(a.name))]),e("v-uni-text",{staticClass:"title2"},[t._v(t._s(a.subTitle))]),e("v-uni-view",{staticClass:"price-box"},[e("v-uni-text",{staticClass:"price"},[t._v(t._s(a.price))]),e("v-uni-text",[t._v("Sold "+t._s(a.sale))])],1)],1)})),1),e("uni-load-more",{attrs:{status:t.loadingType}})],1)},o=[]},"7a90":function(t,a,e){"use strict";e.r(a);var i=e("76a5"),n=e("70eb");for(var o in n)["default"].indexOf(o)<0&&function(t){e.d(a,t,(function(){return n[t]}))}(o);e("6bf9");var d=e("f0c5"),r=Object(d["a"])(n["default"],i["b"],i["c"],!1,null,"2cfe9f42",null,!1,i["a"],void 0);a["default"]=r.exports},"962d":function(t,a,e){var i=e("24fb");a=i(!1),a.push([t.i,".uni-load-more[data-v-103989d4]{display:flex;flex-direction:row;height:%?80?%;align-items:center;justify-content:center}.uni-load-more__text[data-v-103989d4]{font-size:%?28?%;color:#999}.uni-load-more__img[data-v-103989d4]{height:24px;width:24px;margin-right:10px}.uni-load-more__img>uni-view[data-v-103989d4]{position:absolute}.uni-load-more__img>uni-view uni-view[data-v-103989d4]{width:6px;height:2px;border-top-left-radius:1px;border-bottom-left-radius:1px;background:#999;position:absolute;opacity:.2;-webkit-transform-origin:50%;transform-origin:50%;-webkit-animation:load-data-v-103989d4 1.56s ease infinite;animation:load-data-v-103989d4 1.56s ease infinite}.uni-load-more__img>uni-view uni-view[data-v-103989d4]:nth-child(1){-webkit-transform:rotate(90deg);transform:rotate(90deg);top:2px;left:9px}.uni-load-more__img>uni-view uni-view[data-v-103989d4]:nth-child(2){-webkit-transform:rotate(180deg);transform:rotate(180deg);top:11px;right:0}.uni-load-more__img>uni-view uni-view[data-v-103989d4]:nth-child(3){-webkit-transform:rotate(270deg);transform:rotate(270deg);bottom:2px;left:9px}.uni-load-more__img>uni-view uni-view[data-v-103989d4]:nth-child(4){top:11px;left:0}.load1[data-v-103989d4],\n.load2[data-v-103989d4],\n.load3[data-v-103989d4]{height:24px;width:24px}.load2[data-v-103989d4]{-webkit-transform:rotate(30deg);transform:rotate(30deg)}.load3[data-v-103989d4]{-webkit-transform:rotate(60deg);transform:rotate(60deg)}.load1 uni-view[data-v-103989d4]:nth-child(1){-webkit-animation-delay:0s;animation-delay:0s}.load2 uni-view[data-v-103989d4]:nth-child(1){-webkit-animation-delay:.13s;animation-delay:.13s}.load3 uni-view[data-v-103989d4]:nth-child(1){-webkit-animation-delay:.26s;animation-delay:.26s}.load1 uni-view[data-v-103989d4]:nth-child(2){-webkit-animation-delay:.39s;animation-delay:.39s}.load2 uni-view[data-v-103989d4]:nth-child(2){-webkit-animation-delay:.52s;animation-delay:.52s}.load3 uni-view[data-v-103989d4]:nth-child(2){-webkit-animation-delay:.65s;animation-delay:.65s}.load1 uni-view[data-v-103989d4]:nth-child(3){-webkit-animation-delay:.78s;animation-delay:.78s}.load2 uni-view[data-v-103989d4]:nth-child(3){-webkit-animation-delay:.91s;animation-delay:.91s}.load3 uni-view[data-v-103989d4]:nth-child(3){-webkit-animation-delay:1.04s;animation-delay:1.04s}.load1 uni-view[data-v-103989d4]:nth-child(4){-webkit-animation-delay:1.17s;animation-delay:1.17s}.load2 uni-view[data-v-103989d4]:nth-child(4){-webkit-animation-delay:1.3s;animation-delay:1.3s}.load3 uni-view[data-v-103989d4]:nth-child(4){-webkit-animation-delay:1.43s;animation-delay:1.43s}@-webkit-keyframes load-data-v-103989d4{0%{opacity:1}100%{opacity:.2}}",""]),t.exports=a},9979:function(t,a,e){"use strict";e.d(a,"b",(function(){return i})),e.d(a,"c",(function(){return n})),e.d(a,"a",(function(){}));var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-uni-view",{staticClass:"uni-load-more"},[e("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:"loading"===t.status&&t.showIcon,expression:"status === 'loading' && showIcon"}],staticClass:"uni-load-more__img"},[e("v-uni-view",{staticClass:"load1"},[e("v-uni-view",{style:{background:t.color}}),e("v-uni-view",{style:{background:t.color}}),e("v-uni-view",{style:{background:t.color}}),e("v-uni-view",{style:{background:t.color}})],1),e("v-uni-view",{staticClass:"load2"},[e("v-uni-view",{style:{background:t.color}}),e("v-uni-view",{style:{background:t.color}}),e("v-uni-view",{style:{background:t.color}}),e("v-uni-view",{style:{background:t.color}})],1),e("v-uni-view",{staticClass:"load3"},[e("v-uni-view",{style:{background:t.color}}),e("v-uni-view",{style:{background:t.color}}),e("v-uni-view",{style:{background:t.color}}),e("v-uni-view",{style:{background:t.color}})],1)],1),e("v-uni-text",{staticClass:"uni-load-more__text",style:{color:t.color}},[t._v(t._s("more"===t.status?t.contentText.contentdown:"loading"===t.status?t.contentText.contentrefresh:t.contentText.contentnomore))])],1)},n=[]},"9c42":function(t,a,e){var i=e("0cda");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=e("4f06").default;n("7adbba46",i,!0,{sourceMap:!1,shadowMode:!1})},d3be:function(t,a,e){var i=e("962d");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=e("4f06").default;n("207a78aa",i,!0,{sourceMap:!1,shadowMode:!1})},f7d2:function(t,a,e){"use strict";e("7a82"),Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var i={name:"uni-load-more",props:{status:{type:String,default:"more"},showIcon:{type:Boolean,default:!0},color:{type:String,default:"#777777"},contentText:{type:Object,default:function(){return{contentdown:"Pull For More",contentrefresh:"Loading...",contentnomore:"No More"}}}},data:function(){return{}}};a.default=i}}]);