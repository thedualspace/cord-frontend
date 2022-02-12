import React, { useState } from "react";
import styled from 'styled-components';



// You need to create your own checkbox component with a custom checkmark

const ExpandableFilter = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <ExpandableFilterWrapper>
            <Title onClick={() => setIsOpen(!isOpen)}>
                <span>{isOpen ? String.fromCharCode(0xFF0D) : String.fromCharCode(0xFF0B)} {title}</span>
            </Title>
            <Content isOpen={isOpen} aria-expanded={!isOpen}>
                {children}
            </Content>
        </ExpandableFilterWrapper >
    );
}

const ExpandableFilterWrapper = styled.div`
    flex-direction: column;
`;
const Title = styled.div`
    font-size: 20px;

`;

const Content = styled.div`
    flex-direction: column;
    transition: ${props => props.isOpen ? "max-height 1s cubic-bezier(0, 0, 0, 1)" : "max-height 1s ease-in-out"};
    max-height: ${props => props.isOpen ? "900px" : 0};
    overflow: ${props => props.isOpen ? "visible" : "hidden"};
`;

export default ExpandableFilter