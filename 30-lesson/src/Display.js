import React from 'react';

function Display({name, animal}) {
  return <div>{`Эй ${name}, твое любимое животное: ${animal}!`}</div>
}

export default Display;