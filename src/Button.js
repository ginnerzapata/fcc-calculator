import React from 'react'

export default function Button({ value, classes, fn }) {
  return (
    <div id={value} className={classes} onClick={() => fn(value)}>
      {value}
    </div>
  )
}
