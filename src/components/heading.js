import React from 'react';

function Heading(props) {

  return(
    <div>
      <h1 className='title'>{props.title}</h1>
      <h3 className='subTitle'>{props.subtitle}</h3>
    </div>
  );
}

export default Heading;