import { NavLink } from "react-router";
import styled from "styled-components";

export const Header = styled.header`
    padding: 12px 16px;
    background-color: #fff;
`;

export const Nav = styled.nav`
    display: flex;
    gap: 40px;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
`;

export const StyledNavLink = styled(NavLink)`
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    font-size: 32px;
    font-weight: 700;
    color: rgb(0, 6, 31);
    transition: color 200ms;
    padding: 4px 8px;
    &:hover {
        color: rgb(160, 160, 160);
    }

    &.active {
        color: rgb(80, 80, 80);
        border-bottom: 5px solid rgb(80, 80, 80);
    }
`;