import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import axios from 'axios';

const CharacterCard = styled.div`
    margin: 10%;
    background-color: black;
    color: white;
    justify-content: center;
    align-items: center;
    padding: 2.5%;
    overflow: hidden;

`;

const FirstCharacterColumn = styled.div`
    display: flex;
    column-gap: 50%;
    
`;

const SecondCharacterColumn = styled.div`

`;

const ThirdCharacterColumn = styled.div`
`;

const Par = styled.p`
   word-wrap: break-word;
   
`;

const ListOfCharacters = ( { character } ) => {

    const [homeworld, setHomeworld] = useState([]);

    const homeworldURL = character.homeworld;
    
    useEffect(() => {
        axios.get(homeworldURL)
        .then(response => {
            console.log(response.data.name);
            setHomeworld(response.data.name);
        })
    }, [])

    return (

    <CharacterCard>
        <h2>Name: {character.name} </h2>
        <FirstCharacterColumn>
        <SecondCharacterColumn>
        <Par>Gender: {character.gender} </Par>
        <Par>Eye Color: {character.eye_color} </Par>
        <Par>Hair Color: {character.hair_color} </Par>
        <Par>Skin Color: {character.skin_color} </Par>
        <Par>Height: {character.height} </Par>
        <Par>Mass: {character.mass} </Par>
        </SecondCharacterColumn>
        <ThirdCharacterColumn>
        <Par>Birth Year: {character.birth_year} </Par>
        <Par>Homeworld: {homeworld} </Par>
        <Par>Films: {character.films} </Par>
        <Par>Vehicles: {character.vehicles}</Par>
        <Par>Starships: {character.starships} </Par>
        <Par>Species: {character.species} </Par>
        </ThirdCharacterColumn>
        </FirstCharacterColumn>

    </CharacterCard>

    )

}

export default ListOfCharacters;