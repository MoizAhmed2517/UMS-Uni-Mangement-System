import React, { useEffect, useState } from 'react'
import Confetti from 'react-confetti'


const CongoConfetti = () => {
  const [windowDimension, setWindowDimension] = useState({ width: window.innerWidth, height: window.innerHeight});
  return (
    <Confetti
      width={windowDimension.width}
      height={windowDimension.height}
      tweenDuration={100}
    />
  )
}

export default CongoConfetti