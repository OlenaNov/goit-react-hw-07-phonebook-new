import styled from "styled-components";

export const List = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;

    width: 400px;
    display: flex;
    flex-direction: column;
    gap: 20px;

`;

export const ElementContact = styled.li`
    display: flex;
    gap: 20px;

    padding: 24px;

    background-color: #b5e9e9;
    border: 2px solid lightblue;
    border-radius: 24px;
`;