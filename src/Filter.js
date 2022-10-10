import React from 'react';
import styled from 'styled-components';

const StyledFilter = styled.div`
    text-align: left;
  `

const Filter = ({ selected, setSelected }) => {
  const changeSelect = ({ target: { value } }) => setSelected(value);
  
  return (
    <StyledFilter>
      <label htmlFor="selectPriority">Filter by </label>
        <select name="selectPriority" onChange={changeSelect}>
          <option value="all">All</option>
          <option value="high">High</option>
          <option value="mid">Middle</option>
          <option value="low">Low</option>
        </select>
    </StyledFilter>
  );
};

export default Filter;
