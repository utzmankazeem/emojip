import React from 'react'
import Avatar from './Avatar'
import Name from './Name'
import Defini from './Defini'

const View = ({emoji, name, definition}) => {
  return (
            <div className='term'>
                <dt>
                    <span className='emoji' role='img' aria-label='Zany face'>
                        <Avatar emoji={emoji}/>
                    </span>
                    <span><Name name={name} /></span>
                </dt>
                <dd>
                <Defini definition={definition} />  
                </dd>
            </div>
  );
}
export default View;