import React, { JSX } from 'react'
import './Square.css'

interface Props {
    value: string
    onSquareClick: () => void
}

const Square : React.FC<Props> = ({value, onSquareClick}) : JSX.Element => {
  return (
    <div>
        <button className="square" onClick={onSquareClick}>{value}</button>
    </div>
  )
}

export default Square