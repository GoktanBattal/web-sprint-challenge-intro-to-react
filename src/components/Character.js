// Write your Character component here
import React from "react";
import styled from "styled-components";

const BodyContainer = styled.div`
    display: flex;
    flex-wrap: no-wrap;
    justify-content: space-between;
    margin: 10px;
    padding: 5px 10px;
    background: #d4c6bd;
    width: 50%;
    min-width: 350px;
    border-radius: 8px;
`;
const NameContent = styled.div`
    color: #4e2f1c;
    font-size: 24px;
    font-family: 'Unlock', cursive;
`;

const BirthYearContent = styled.div`
    background-color: #5a5a5a;
    border-top-left-radius: 5px;
    border-bottom-right-radius: 5px;
    border-top-right-radius: 12px;
    border-bottom-left-radius: 12px;
    padding: 4px 10px;
`;
const BirthInsideContent = styled.div`
    color: #d4c6bd;
    font-size: 15px;
    font-family: 'Unlock', cursive;
`;

const Character = (props) => {
    return (
        <BodyContainer>
            <NameContent>{props.info.name ? props.info.name : ''}</NameContent>
            <BirthYearContent>
                <BirthInsideContent>{props.info.birth_year ? props.info.birth_year : ''}</BirthInsideContent>
            </BirthYearContent>
        </BodyContainer>
    );
}

export default Character;