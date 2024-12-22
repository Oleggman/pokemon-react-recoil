import{d as o,j as t,G as L,u as S,b as v,r as b,e as P}from"./index-DtUoOK0C.js";import{a as w}from"./pokemonApi-CDAoPUDP.js";const B=o.div`
    display: flex;
    justify-content: space-around;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
`,x=o.div`
    padding: 28px;
    backdrop-filter: blur(14px);
    background-color: rgba(255, 255, 255, 0.2);
    border-radius: 20px;
`,u=o.h3`
    font-size: 28px;
    color: white;
    margin-bottom: 16px;
    text-align: center;
`,m=o.div`
    list-style: none;
    color: white;
    display: flex;
    flex-direction: column;
    gap: 8px;
    font-size: 20px;
    width: 280px;
    align-items: center;
`,z=({types:n,abilities:a,stats:s})=>t.jsxs(B,{children:[t.jsxs(x,{children:[t.jsx(u,{children:"Types:"}),t.jsx(m,{children:n.map(e=>t.jsx("li",{children:e.type.name},e.slot))})]}),t.jsxs(x,{children:[t.jsx(u,{children:"Abilities:"}),t.jsx(m,{children:a.map(e=>t.jsx("li",{children:e.ability.name},e.ability.name))})]}),t.jsxs(x,{children:[t.jsx(u,{children:"Base Stats:"}),t.jsx(m,{children:s.map(e=>t.jsxs("li",{children:[t.jsxs("strong",{children:[e.stat.name,":"]})," ",e.base_stat]},e.stat.name))})]})]}),D=o.img`
    width: 200px;
    height: 200px;
    margin: 24px auto;
    background-color: #fff;
    border-radius: 50%;
    padding: 20px;
`,A=o.h1`
    text-transform: uppercase;
    font-size: 40px;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    color: #fff;
    text-align: center;
    margin-bottom: 20px;
`,G=o.div`
    display: flex;
    justify-content: space-around;
    font-size: 28px;
    color: #fff;
    margin-bottom: 20px;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
`,M=o.button`
    outline: none;
    border: none;
    background-color: transparent;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
    cursor: pointer;
    position: absolute;
    top: 88px;
    left: 8px;
    border-radius: 50%;
    transition: background-color 300ms ease;

    &:hover {
        backdrop-filter: blur(14px);
        background-color: rgba(255, 255, 255, 0.2);
    }
`;function T(n){return L({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M401.4 224h-214l83-79.4c11.9-12.5 11.9-32.7 0-45.2s-31.2-12.5-43.2 0L89 233.4c-6 5.8-9 13.7-9 22.4v.4c0 8.7 3 16.6 9 22.4l138.1 134c12 12.5 31.3 12.5 43.2 0 11.9-12.5 11.9-32.7 0-45.2l-83-79.4h214c16.9 0 30.6-14.3 30.6-32 .1-18-13.6-32-30.5-32z"},child:[]}]})(n)}const E=({pokemon:n})=>{const{name:a,sprites:s,types:e,abilities:i,stats:r,weight:c,height:d}=n,l=S(),p=()=>{l(-1)};return t.jsxs("div",{children:[t.jsx(M,{onClick:p,children:t.jsx(T,{size:40})}),(s==null?void 0:s.front_default)&&t.jsx(D,{src:s.front_default,alt:a}),t.jsx(A,{children:a}),t.jsxs(G,{children:[t.jsxs("p",{children:["Height: ",d/10," m"]}),t.jsxs("p",{children:["Weight: ",c/10," kg"]})]}),t.jsx(z,{types:e,abilities:i,stats:r})]})},C=()=>{var f,h;const n=v(),[a,s]=b.useState((f=n.state)==null?void 0:f.pokemon),{pokemonId:e}=P();if(b.useEffect(()=>{var g;const k=async()=>{const y=await w(e);s(y)};(g=n.state)!=null&&g.pokemon||k()},[(h=n.state)==null?void 0:h.pokemon,e]),!a)return null;const{name:i,sprites:r,types:c,abilities:d,stats:l,weight:p,height:j}=a;return t.jsx(E,{pokemon:{name:i,sprites:r,types:c,abilities:d,stats:l,weight:p,height:j}})};export{C as default};
