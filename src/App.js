import React from 'react'
import Emojidef from './Emojdocs'
import View from './View'
const App = () => {
  return (
    <div>
        <h1><span>emopedia</span></h1>
        <dl className='dico'>
        {Emojidef.map(emoj =>{
           return (
            <View
                // key={emoj.id}
                emoji={emoj.emoji}
                name={emoj.name}
                definition={emoj.meaning}
            />
            )
        })}
        </dl>
    </div>
  )
}

export default App