(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3da66288"],{"165f":function(t,e,a){"use strict";a("d81d"),a("b0c0");var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("FileTitle",{attrs:{title:t.title}}),a("v-row",[a("v-col",[t._t("default")],2)],1)],1)},n=[],r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("h2",[t._v(t._s(t.title))])},s=[],l={name:"FileTitle",props:{title:String}},o=l,c=a("2877"),u=Object(c["a"])(o,r,s,!1,null,null,null),d=u.exports,v={name:"FileBase",props:{title:String},components:{FileTitle:d}},m=v,p=a("6544"),h=a.n(p),f=a("62ad"),g=a("a523"),F=a("0fd9"),_=Object(c["a"])(m,i,n,!1,null,null,null),b=_.exports;h()(_,{VCol:f["a"],VContainer:g["a"],VRow:F["a"]});var L=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-row",[a("v-col",{staticClass:"text-left text-md-right font-weight-black",attrs:{cols:"12",md:"3"}},[t._v(" "+t._s(t.name)+" ")]),t.isList?a("v-col",{attrs:{cols:"12",md:"9"}},[a("v-list",{staticClass:"py-0",attrs:{color:"grey lighten-3",dense:""}},t._l(t.value,(function(e,i){return a("v-list-item",{key:i,staticClass:"px-0"},[a("v-list-item-content",{staticClass:"py-0 pb-1"},[t._v(" "+t._s(e)+" ")])],1)})),1)],1):a("v-col",{attrs:{cols:"12",md:"9"}},[t._v(" "+t._s(t.value)+" ")]),a("v-col",[a("v-divider")],1)],1)},w=[],D={name:"FileField",props:{name:String,value:[String,Array]},computed:{isList:function(){return Array.isArray(this.value)}}},C=D,V=(a("a989"),a("ce7e")),x=a("8860"),y=a("da13"),O=a("5d23"),$=Object(c["a"])(C,L,w,!1,null,"7d3e21bb",null),j=$.exports;h()($,{VCol:f["a"],VDivider:V["a"],VList:x["a"],VListItem:y["a"],VListItemContent:O["a"],VRow:F["a"]});e["a"]={name:"MixinFile",props:{data:Object},computed:{getTitle:function(){var t=void 0!==this.data.title?this.data.title:this.data.name;return t},getCharacters:function(){return this.getListData("characters.data")},getPlanets:function(){return this.getListData("planets.data")},getStarships:function(){return this.getListData("starships.data")},getVehicles:function(){return this.getListData("vehicles.data")},getSpecies:function(){return this.getListData("species.data")},getFilms:function(){return this.getListData("films.data")},getResidents:function(){return this.getListData("residents.data")},getPeople:function(){return this.getListData("people.data")},getPilots:function(){return this.getListData("pilots.data")},getHomeworld:function(){return this.getListData("homeworld.data")}},components:{FileBase:b,FileField:j},methods:{getListData:function(t){var e=this.data[t].map((function(t){var e=void 0!==t.title?t.title:t.name;return e}));return e.length>0?e:"n/a"}}}},"5bcd":function(t,e,a){},"8ce9":function(t,e,a){},a989:function(t,e,a){"use strict";var i=a("5bcd"),n=a.n(i);n.a},ccde:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("FileBase",{attrs:{title:t.getTitle}},[a("v-container",[a("FileField",{attrs:{name:"Rotation period",value:t.data.rotation_period}}),a("FileField",{attrs:{name:"Orbital period",value:t.data.orbital_period}}),a("FileField",{attrs:{name:"Diameter",value:t.data.diameter}}),a("FileField",{attrs:{name:"Climate",value:t.data.climate}}),a("FileField",{attrs:{name:"Gravity",value:t.data.gravity}}),a("FileField",{attrs:{name:"Terrain",value:t.data.terrain}}),a("FileField",{attrs:{name:"Surface water",value:t.data.surface_water}}),a("FileField",{attrs:{name:"Population",value:t.data.population}}),a("FileField",{attrs:{name:"Residents",value:t.getResidents}}),a("FileField",{attrs:{name:"Films",value:t.getFilms}})],1)],1)},n=[],r=a("165f"),s={name:"PlanetsFile",mixins:[r["a"]]},l=s,o=a("2877"),c=a("6544"),u=a.n(c),d=a("a523"),v=Object(o["a"])(l,i,n,!1,null,null,null);e["default"]=v.exports;u()(v,{VContainer:d["a"]})},ce7e:function(t,e,a){"use strict";var i=a("5530"),n=(a("8ce9"),a("7560"));e["a"]=n["a"].extend({name:"v-divider",props:{inset:Boolean,vertical:Boolean},render:function(t){var e;return this.$attrs.role&&"separator"!==this.$attrs.role||(e=this.vertical?"vertical":"horizontal"),t("hr",{class:Object(i["a"])({"v-divider":!0,"v-divider--inset":this.inset,"v-divider--vertical":this.vertical},this.themeClasses),attrs:Object(i["a"])({role:"separator","aria-orientation":e},this.$attrs),on:this.$listeners})}})}}]);
//# sourceMappingURL=chunk-3da66288.964322d9.js.map