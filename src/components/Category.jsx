import { FaPizzaSlice, FaHamburger } from "react-icons/fa";
import { GiNoodles, GiChopsticks } from "react-icons/gi";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

import React from "react";

function Category() {
    return (
        <List>
            <SLink to={"/Cuisine/Italian"}>
                <FaPizzaSlice />
                <h4>Italian</h4>
            </SLink>
            <SLink to={"/Cuisine/American"}>
                <FaHamburger />
                <h4>American</h4>
            </SLink>
            <SLink to={"/Cuisine/Thai"}>
                <GiNoodles />
                <h4>Thai</h4>
            </SLink>
            <SLink to={"/Cuisine/Chinese"}>
                <GiChopsticks />
                <h4>Chinese</h4>
            </SLink>
        </List>
    );
}

const List = styled.div`
    display: flex;
    justify-content: center;
    margin: 2rem, 0rem;
`;

const SLink = styled(NavLink)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    margin-right: 2rem;
    text-decoration: none;
    padding: 0.5rem;
    background: linear-gradient(35deg, #494949, #313131);
    width: 12rem;
    height: 10rem;
    cursor: pointer;
    transform: scale(0.8);

    &:hover {
    }

    h4 {
        color: #fff;
        font-size: 1rem;
    }
    svg {
        color: #fff;
        font-size: 1.7rem;
    }
    &.active {
        background: linear-gradient(to right, #f27121, #e94057);
        -webkit-box-shadow: inset 0px 0px 30px #323232;
        -moz-box-shadow: inset 0px 0px 30px #323232;
        box-shadow: inset 0px 0px 30px #323232;
        outline: none;

        svg {
            color: #fff;
        }
        h4 {
            color: #fff;
        }
    }
`;

export default Category;
