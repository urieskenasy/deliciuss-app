import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
function Recipe() {
    let params = useParams();
    const [details, setDetails] = useState({});
    const [activeTab, setActiveTab] = useState("instructions");
    const fetchDetails = async () => {
        const data = await fetch(
            `https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}
            `
        );
        const detailData = await data.json();
        setDetails(detailData);
    };

    useEffect(() => {
        fetchDetails();
    }, [params.name]);

    return (
        <DetailWrapper>
            <div>
                <h2>{details.title}</h2>
                <img src={details.image} alt={details.title} />
            </div>
            <Info>
                <Button
                    className={activeTab === "instructions" ? "active" : ""}
                    onClick={() => setActiveTab("instructions")}
                    style={{ cursor: "pointer" }}
                >
                    Instructions
                </Button>
                <Button
                    style={{ cursor: "pointer" }}
                    className={activeTab === "ingredients" ? "active" : ""}
                    onClick={() => setActiveTab("ingredients")}
                >
                    Ingredients
                </Button>
                {activeTab === "instructions" && (
                    <div>
                        <h3
                            dangerouslySetInnerHTML={{
                                __html: details.summary,
                            }}
                        ></h3>
                        <h3
                            dangerouslySetInnerHTML={{
                                __html: details.instructions,
                            }}
                        ></h3>
                    </div>
                )}
                {activeTab === "ingredients" && (
                    <ul>
                        {details.extendedIngredients.map((Ingredient) => {
                            return (
                                <li key={Ingredient.id}>
                                    {Ingredient.original}
                                </li>
                            );
                        })}
                    </ul>
                )}
            </Info>
        </DetailWrapper>
    );
}

const DetailWrapper = styled.div`
    margin-top: 10rem;
    margin-bottom: 5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .active {
        background: linear-gradient(35deg, #494949, #313131);
        color: #fff;
    }
    h2 {
        margin-bottom: 2rem;
    }
    li {
        font-size: 1.2rem;
        line-height: 2.5rem;
    }
    ul {
        margin-top: 2rem;
    }
`;

const Button = styled.button`
    padding: 1rem 2rem;
    color: #313131;
    background: white;
    border: 1px solid #000;
    margin: 0.1rem 0;
    font-weight: 600;
`;

const Info = styled.div``;

export default Recipe;
