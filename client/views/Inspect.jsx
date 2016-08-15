import React from 'react'


export default function Inspect({ object }) {
  return <pre>
    { JSON.stringify(object, null, 2) }
  </pre>
}
