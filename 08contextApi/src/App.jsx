import UserContextProvider from './context/UserContextProvider'
import './App.css'

function App() {
  return (
      <UserContextProvider>
        <h1>React withh chai and share is important</h1>
      </UserContextProvider>
  )
}

export default App
