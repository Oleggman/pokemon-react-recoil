import{R as c,d as r,N as i,j as o,a as l,r as p}from"./index-DtUoOK0C.js";import{g as d}from"./pokemonApi-CDAoPUDP.js";const m=c({key:"pokemonsState",default:[]}),h=r.ul`
    padding: 20px;
    display: flex;
    gap: 40px;
    flex-wrap: wrap;
    justify-content: center;
`,f="/pokemon-react-recoil/assets/Poke_Ball-DLvYj19I.webp",x=r(i)`
  --blur: 16px;
  width: 280px;
  height: 260px;
  aspect-ratio: 4 / 3;
  position: relative;
  border-radius: 2rem;
  overflow: hidden;
  color: #000;
  transform: translateZ(0);
  cursor: pointer;
  border: 1px solid hsl(0 0% 100% / 0.5);
  transition: transform 0.3s ease, scale 0.3s ease;
  
  &:hover {
    scale: 1.1;
  }
`,u=r.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: scale(calc(1 + (var(--hover, 0) * 0.25))) rotate(calc(var(--hover, 0) * -5deg));
  transition: transform 0.2s;
`,k=r.p`
  padding: 0 1.5rem;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background: red;
  display: grid;
  gap: 0.5ch;
  background: hsl(0 0% 100% / 0.5);
  backdrop-filter: blur(var(--blur));
  height: 30%;
  align-content: center;
  font-size: 20px;
  font-weight: 700;
`,g=({pokemon:{name:e}})=>{const t=e.charAt(0).toUpperCase()+e.slice(1);return o.jsxs(x,{to:`/pokemons/${e}`,children:[o.jsx(u,{src:f,alt:"Pokemon photo"}),o.jsx(k,{children:t})]})},b=()=>{const[e,t]=l(m);return p.useEffect(()=>{(async()=>{var n;const a=await d();t((n=a==null?void 0:a.data)==null?void 0:n.results)})()},[t]),e?o.jsx(h,{children:e.map(s=>o.jsx(g,{pokemon:s},s.name))}):null},w=()=>o.jsx(b,{});export{w as default};
