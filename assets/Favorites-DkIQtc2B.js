import{p as g,j as e,u as f,a as r,r as m,f as i,b as h}from"./index-Uy0fBLzU.js";import{S as p}from"./index-Pqg2k8k2.js";import{c as x,d as u,s as j,F as v,P as F,C}from"./Filter-dN5hEhFO.js";import{d as P}from"./psychologist-DvuPd2nU.js";const b=g.div`
  .containerImg {
    width: 100%;
    height: 700px;
    overflow: hidden;
  }

  .defaultImg {
    width: 100%;
    border-radius: 14px;
    background: #f3f3f2,
      linear-gradient(
        180deg,
        rgba(18, 20, 23, 0.5) 0%,
        rgba(18, 20, 23, 0.5) 100%
      );
    object-fit: cover;
  }
`,y=()=>e.jsx(b,{children:e.jsx("div",{className:"containerImg ",children:e.jsx("img",{className:"defaultImg",src:P,alt:"placeholder"})})});function w(){const t=f(),a=r(x),o=r(u),n=r(j),c=3;m.useEffect(()=>{t(i({filter:"",type:"favorites"}))},[t,o]);const l=s=>e.jsx(C,{dataCard:s}),d=s=>{t(i({filter:s,type:"favorites"}))};return e.jsx(p,{className:"carsListSection",titleClassName:"titleCatalog",children:n?e.jsx(h,{}):e.jsx(e.Fragment,{children:Array.isArray(a)&&a.length!==0?e.jsxs(e.Fragment,{children:[e.jsx(v,{onFilterChange:d}),e.jsx(F,{data:a,itemsPerPage:c,renderCardList:l})]}):e.jsx(y,{})})})}export{w as default};