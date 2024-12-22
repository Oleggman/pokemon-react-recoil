import styled from "styled-components";

export const PokemonImg = styled.img`
    width: 200px;
    height: 200px;
    margin: 24px auto;
    background-color: #fff;
    border-radius: 50%;
    padding: 20px;
`;

export const PokemonName = styled.h1`
    text-transform: uppercase;
    font-size: 40px;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    color: #fff;
    text-align: center;
    margin-bottom: 20px;
`;

export const StatsDiv = styled.div`
    display: flex;
    justify-content: space-around;
    font-size: 28px;
    color: #fff;
    margin-bottom: 20px;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
`;

export const BackButton = styled.button`
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
`;