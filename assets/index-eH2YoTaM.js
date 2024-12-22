import{d as n,r as s,u as c,j as o,F as u,L as x}from"./index-Ct1ClzgS.js";import{b as g}from"./pokemonApi-BwR6fMZF.js";import{N as f}from"./notiflix-aio-3.2.7.min-DUxo8DLb.js";const b=n.form`
  position: relative;
  display: flex;
  flex-direction: row;
  width: 100%;
  max-width: 400px;
  margin: 40px auto 0;
  border-radius: 2px;
  padding: 10px 20px;
  background: rgba(57, 63, 84, 0.8);
  &:after {
    content: "";
    position: absolute;
    left: 0px;
    right: 0px;
    bottom: 0px;
    z-index: 999;
    height: 2px;
    border-bottom-left-radius: 2px;
    border-bottom-right-radius: 2px;
    background-position: 0% 0%;
    background: linear-gradient(to right, #B294FF, #57E6E6, #FEFFB8, #57E6E6, #B294FF, #57E6E6);
    background-size: 500% auto;
    animation: gradient 3s linear infinite;
  }
`,h=n.input`
  border-style: none; 
  background: transparent; 
  outline: none;
  flex-grow: 1;
  color: #BFD2FF;
  font-size: 24px;
  line-height: 2.4rem;
  vertical-align: middle;
  &::-webkit-input-placeholder {
    color: #7881A1;
  }
`,F=n.button`
  padding: 0; 
  background: none; 
  border: none; 
  outline: none;
  color: #7881A1;
  font-size: 24px;
  line-height: 2.4rem;
  vertical-align: middle;
  transition: color .25s;
  cursor: pointer;
  &:hover {
    color: #BFD2FF;
  }
`,y=()=>{const[r,d]=s.useState(""),[l,i]=s.useState(!1),p=c(),m=async t=>{t.preventDefault();const e=r.trim().toLowerCase();i(!0);try{const a=await g(e);a&&p(`/pokemons/${e}`,{state:{pokemon:a}})}catch{f.Notify.failure(`Pokemon with name ${e} not found!`)}finally{i(!1)}};return o.jsxs(o.Fragment,{children:[o.jsxs(b,{onSubmit:m,children:[o.jsx(h,{type:"text",placeholder:"Enter pokemon name",value:r,onChange:t=>d(t.target.value)}),o.jsx(F,{type:"submit",children:o.jsx(u,{})})]}),l&&o.jsx(x,{})]})};export{y as default};
