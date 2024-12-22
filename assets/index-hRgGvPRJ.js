import{R as u,d as n,j as o,N as x,a as m,r as d}from"./index-D-7imxjZ.js";import{g as f,a as h}from"./pokemonApi-BwR6fMZF.js";import{N as g}from"./notiflix-aio-3.2.7.min-DEecyxQg.js";const b=u({key:"pokemonsState",default:[]}),k=n.button`
    appearance: none;
    background-color: #FFFFFF;
    border-radius: 40em;
    border-style: none;
    box-shadow: #ADCFFF 0 -12px 6px inset;
    box-sizing: border-box;
    color: #000000;
    cursor: pointer;
    display: block;
    font-family: -apple-system,sans-serif;
    font-size: 1.2rem;
    font-weight: 700;
    letter-spacing: -.24px;
    margin: 0 auto;
    outline: none;
    padding: 1rem 1.3rem;
    quotes: auto;
    text-align: center;
    text-decoration: none;
    transition: all .15s;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    
    &:hover {
        background-color: #FFC229;
        box-shadow: #FF6314 0 -6px 8px inset;
        transform: scale(1.125);
    }
`,F=({onLoadMore:t})=>o.jsx(k,{onClick:t,children:"Load more"}),y=n.ul`
    padding: 20px;
    display: flex;
    gap: 40px;
    flex-wrap: wrap;
    justify-content: center;
`,j="/pokemon-react-recoil/assets/Poke_Ball-DLvYj19I.webp",w=n(x)`
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
`,v=n.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: scale(calc(1 + (var(--hover, 0) * 0.25))) rotate(calc(var(--hover, 0) * -5deg));
  transition: transform 0.2s;
`,C=n.p`
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
`,L=({pokemon:{name:t}})=>{const s=t.charAt(0).toUpperCase()+t.slice(1);return o.jsxs(w,{to:`/pokemons/${t}`,children:[o.jsx(v,{src:j,alt:"Pokemon photo"}),o.jsx(C,{children:s})]})},N=({pokemons:t})=>t?o.jsx(y,{children:t.map(s=>o.jsx(L,{pokemon:s},s.name))}):null,R=()=>{const[t,s]=m(b),[i,c]=d.useState(null);d.useEffect(()=>{if(t.length>0)return;(async()=>{var e,l;const r=await f();s((e=r==null?void 0:r.data)==null?void 0:e.results),c((l=r==null?void 0:r.data)==null?void 0:l.next)})()},[s]);const p=async()=>{var a,r;if(i)try{const e=await h(i);if(!((a=e==null?void 0:e.data)!=null&&a.results))throw new Error;s([...t,...e.data.results]),c((r=e==null?void 0:e.data)==null?void 0:r.next)}catch{g.Notify.failure("Failed to load")}};return o.jsxs(o.Fragment,{children:[o.jsx(N,{pokemons:t}),o.jsx(F,{onLoadMore:p})]})};export{R as default};
