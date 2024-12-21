import { Suspense } from "react";
import { Outlet } from "react-router";
import { Header, Nav, StyledNavLink } from "./SharedLayout.styled";
import { CgPokemon } from "react-icons/cg";
import { FaSearch } from "react-icons/fa";

export const SharedLayout = () => {
    return (
        <>
            <Header>
                <Nav>
                    <StyledNavLink to='/' ><CgPokemon />Home</StyledNavLink>
                    <StyledNavLink to='/pokemons' ><FaSearch/> Pokemon Finder</StyledNavLink>
                </Nav>
            </Header>

            <main>
                <Suspense>
                    <Outlet />
                </Suspense>
            </main>
        </>
    );
}