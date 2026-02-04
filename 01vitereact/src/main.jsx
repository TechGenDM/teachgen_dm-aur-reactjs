import { createRoot } from 'react-dom/client'
import React from 'react'
import App from './App.jsx'
// import {jsx as _jsx} from "react/jsx-runtime.js"
 
function MyApp() {
  return (
    <div>
      <h1>Custom App | TechGen_DM</h1>
    </div>
  )
}

// const ReactElement = {
//     type: 'a',
//     props: {
//         href: 'https://google.com',
//         target: '_blank'
//     },
//     children: 'Click me to visit google'
// }

const anotherElement = (
  <a href="https://google.com" target='_blank' >Visit Google</a>
) 

const anotherUser = "deva aur react"

const reactElement = React.createElement(
  'a',
  {href: 'https://google.com', target: '_blank' },
  'click me to visit google',
  anotherUser
)

createRoot(document.getElementById('root')).render(

    reactElement

)
