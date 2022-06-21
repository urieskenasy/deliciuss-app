import Pages from "./pages/Pages";
import Category from "./components/Category";
import { BrowserRouter, Link } from "react-router-dom";
import Search from "./components/Search";
import styled from "styled-components";
import { GiKnifeFork } from "react-icons/gi";
function App() {
    return (
        <Order className="App">
            <BrowserRouter>
                <Nav>
                    <GiKnifeFork />
                    <Logo to={"/"}>Have fun :)</Logo>
                </Nav>
                <Category />
                <Search />
                <Pages />
            </BrowserRouter>
        </Order>
    );
}

const Logo = styled(Link)`
    text-decoration: none;
    font-size: 1.5rem;
    font-weight: 400;
    font-family: "Lobster Two", cursive;
`;

const Order = styled.div``;

const Nav = styled.div`
    padding: 4rem 0rem;
    display: flex;
    justify-content: center;
    align-items: center;
    svg {
        font-size: 3rem;
    }
`;

export default App;
