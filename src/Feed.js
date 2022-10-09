import React from 'react';
import styled from 'styled-components';

const Feed = ({ priority, title, content, dueDate }) => {
  const Feed = styled.div`
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

  return (
    <Feed>
      <h4 className="feed--title">
        <span style={{color: priorityColor[priority]}}>● </span>
        {title}
      </h4>
      <p className="feed--content">{content}</p>
      <p className="feed--date" style={{textAlign: 'end'}}>~ {dueDate}</p>
    </Feed>
  );
};

export default Feed;
