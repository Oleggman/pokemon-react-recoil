import styled from "styled-components";

export const Card = styled.div`
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
`;

export const CardImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: scale(calc(1 + (var(--hover, 0) * 0.25))) rotate(calc(var(--hover, 0) * -5deg));
  transition: transform 0.2s;
`;

export const CardFooter = styled.p`
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
`;