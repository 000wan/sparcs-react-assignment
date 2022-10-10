import React from 'react';
import styled from 'styled-components';
import './Feed.css';

const StyledFeed = styled.div`
    border: 1px solid black;
    border-radius: 10px;
    margin: 10px 25px;
    padding: 5px 20px;
  `

const priorityColor = {
    'high': 'red',
    'mid': 'orange',
    'low': 'green'
  };


const Feed = ({ priority, title, content, dueDate }) => {
  return (
    <StyledFeed>
      <div>
        <span className="feed--status" style={{color: priorityColor[priority]}}>● </span>
        <span> </span>
        <h3 className="feed--title">{title}</h3>
      </div>
      <p className="feed--content">{content}</p>
      <p className="feed--date">~ {dueDate}</p>
    </StyledFeed>
  );
};

export default Feed;
