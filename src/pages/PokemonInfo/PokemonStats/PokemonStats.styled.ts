import styled from "styled-components";

export const PokemonStatsDiv = styled.div`
    display: flex;
    justify-content: space-around;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
`;

export const DataListBox = styled.div`
    padding: 28px;
    backdrop-filter: blur(14px);
    background-color: rgba(255, 255, 255, 0.2);
    border-radius: 20px;
`;

export const DataListHeader = styled.h3`
    font-size: 28px;
    color: white;
    margin-bottom: 16px;
    text-align: center;
`;

export const DataList = styled.div`
    list-style: none;
    color: white;
    display: flex;
    flex-direction: column;
    gap: 8px;
    font-size: 20px;
    width: 280px;
    align-items: center;
`;