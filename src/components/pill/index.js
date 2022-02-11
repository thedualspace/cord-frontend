import React from "react";
import styled from 'styled-components';

const Pill = ({ rating }) => (
    <PillCont>
        <div>{rating}</div>
    </PillCont>
)


const PillCont = styled.div`
    display: flex;
    color: ${props => props.theme.fontLight};
    align-items: flex-start;
    div {
        padding: 5px;
        display: flex;
        align-items: center;
        background: ${props => props.theme.primary};
        border-radius: 5px;
        flex-grow: 0;
    }
`
export default Pill;