import{d as a,j as e,b as S,r as u,e as L}from"./index-Dx12sLBT.js";import{a as P}from"./pokemonApi-CDAoPUDP.js";const v=a.div`
    display: flex;
    justify-content: space-around;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
`,l=a.div`
    padding: 28px;
    backdrop-filter: blur(14px);
    background-color: rgba(255, 255, 255, 0.2);
    border-radius: 20px;
`,x=a.h3`
    font-size: 28px;
    color: white;
    margin-bottom: 16px;
    text-align: center;
`,m=a.div`
    list-style: none;
    color: white;
    display: flex;
    flex-direction: column;
    gap: 8px;
    font-size: 20px;
    width: 280px;
    align-items: center;
`,w=({types:n,abilities:i,stats:s})=>e.jsxs(v,{children:[e.jsxs(l,{children:[e.jsx(x,{children:"Types:"}),e.jsx(m,{children:n.map(t=>e.jsx("li",{children:t.type.name},t.slot))})]}),e.jsxs(l,{children:[e.jsx(x,{children:"Abilities:"}),e.jsx(m,{children:i.map(t=>e.jsx("li",{children:t.ability.name},t.ability.name))})]}),e.jsxs(l,{children:[e.jsx(x,{children:"Base Stats:"}),e.jsx(m,{children:s.map(t=>e.jsxs("li",{children:[e.jsxs("strong",{children:[t.stat.name,":"]})," ",t.base_stat]},t.stat.name))})]})]}),D=a.img`
    width: 200px;
    height: 200px;
    margin: 24px auto;
    background-color: #fff;
    border-radius: 50%;
    padding: 20px;
`,z=a.h1`
    text-transform: uppercase;
    font-size: 40px;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    color: #fff;
    text-align: center;
    margin-bottom: 20px;
`,A=a.div`
    display: flex;
    justify-content: space-around;
    font-size: 28px;
    color: #fff;
    margin-bottom: 20px;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
`,T=({pokemon:n})=>{const{name:i,sprites:s,types:t,abilities:o,stats:r,weight:c,height:d}=n;return e.jsxs("div",{children:[(s==null?void 0:s.front_default)&&e.jsx(D,{src:s.front_default,alt:i}),e.jsx(z,{children:i}),e.jsxs(A,{children:[e.jsxs("p",{children:["Height: ",d/10," m"]}),e.jsxs("p",{children:["Weight: ",c/10," kg"]})]}),e.jsx(w,{types:t,abilities:o,stats:r})]})},G=()=>{var p,f;const n=S(),[i,s]=u.useState((p=n.state)==null?void 0:p.pokemon),{pokemonId:t}=L();if(u.useEffect(()=>{var h;const b=async()=>{const y=await P(t);s(y)};(h=n.state)!=null&&h.pokemon||b()},[(f=n.state)==null?void 0:f.pokemon,t]),!i)return null;const{name:o,sprites:r,types:c,abilities:d,stats:j,weight:g,height:k}=i;return e.jsx(T,{pokemon:{name:o,sprites:r,types:c,abilities:d,stats:j,weight:g,height:k}})};export{G as default};
