import React from "react";
import styled from 'styled-components';

const Checkbox = ({ onChange, collection, item }) => {
    //Find which genre (or rating etc.) this checkbox represents, then toggle it in genreOptions array.
    const handleChange = () => {
        const newCollection = [...collection];
        const index = collection.findIndex(obj => obj.id === item.id);
        newCollection[index] = { ...item, isActive: !item.isActive };
        onChange(newCollection)
    }

    return (
        <CheckboxCont>
            <input
                type="checkbox"
                name={item.name}
                value={item.isActive}
                onChange={handleChange}
            />
            <div>{item.name}</div>
        </CheckboxCont>
    )
}

const CheckboxCont = styled.div`
    position: relative;
    display: flex;
    margin: 16px 0;

    input {
        height: 20px;
        width: 20px;
        margin: 0;
    }

    div {
        display: flex;
        align-items: center;
        margin-left: 12px;
    }
`

export default Checkbox;