import React from 'react'

const Folder = (props) => {
  return (
    <a
    href="#"
    onClick={() => setActiveIcon("#")}
    className={props.className}
  >
    <RiHome3Fill />
    <p>Home</p>
  </a>
  )
}

export default Folder