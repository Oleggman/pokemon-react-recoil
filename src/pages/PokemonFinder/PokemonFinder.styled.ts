import styled from "styled-components";

export const PokemonForm = styled.form`
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
`;

export const Input = styled.input`
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
`;

export const FormButton = styled.button`
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
`;