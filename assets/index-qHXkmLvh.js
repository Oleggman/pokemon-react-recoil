import{R as p,d as a,j as o,N as x,a as d,r as m}from"./index-Ct1ClzgS.js";import{N as f}from"./notiflix-aio-3.2.7.min-DUxo8DLb.js";import{g as h,a as g}from"./pokemonApi-BwR6fMZF.js";const b=p({key:"pokemonsState",default:[]}),k=p({key:"nextPokemonsState",default:null}),y=a.button`
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
`,F=({onLoadMore:t})=>o.jsx(y,{onClick:t,children:"Load more"}),j=a.ul`
    padding: 20px;
    display: flex;
    gap: 40px;
    flex-wrap: wrap;
    justify-content: center;
`,w="/pokemon-react-recoil/assets/Poke_Ball-DLvYj19I.webp",v=a(x)`
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
`,C=a.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: scale(calc(1 + (var(--hover, 0) * 0.25))) rotate(calc(var(--hover, 0) * -5deg));
  transition: transform 0.2s;
`,L=a.p`
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
`,N=({pokemon:{name:t}})=>{const n=t.charAt(0).toUpperCase()+t.slice(1);return o.jsxs(v,{to:`/pokemons/${t}`,children:[o.jsx(C,{src:w,alt:"Pokemon photo"}),o.jsx(L,{children:n})]})},P=({pokemons:t})=>t?o.jsx(j,{children:t.map(n=>o.jsx(N,{pokemon:n},n.name))}):null,R=()=>{const[t,n]=d(b),[i,c]=d(k);m.useEffect(()=>{if(t.length>0)return;(async()=>{var e,l;const r=await h();n((e=r==null?void 0:r.data)==null?void 0:e.results),c((l=r==null?void 0:r.data)==null?void 0:l.next)})()},[n]);const u=async()=>{var s,r;if(i)try{const e=await g(i);if(!((s=e==null?void 0:e.data)!=null&&s.results))throw new Error;n([...t,...e.data.results]),c((r=e==null?void 0:e.data)==null?void 0:r.next)}catch{f.Notify.failure("Failed to load")}};return o.jsxs(o.Fragment,{children:[o.jsx(P,{pokemons:t}),(t==null?void 0:t.length)&&o.jsx(F,{onLoadMore:u})]})};export{R as default};
