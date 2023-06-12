import React from 'react'
import { useState } from 'react'
import Board from './Board'

function Game({channel}) {
  const [playersJoined, setPlayersJoined] = useState(channel.state.watcher_count === 2)

  channel.on("user.watching.start", (event) => {
    setPlayersJoined(event.watcher_count === 2)
  })


  if (!playersJoined) {
    return (<div>waiting for other player</div>)
  }

  return (
    <div className='gameContainerGame'>
      <Board/>
      {/* CHAT */}
      {/* LEAVE */}
    </div>
  )
}

export default Game