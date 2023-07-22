import { useState } from 'react'
import Dashboard from './sections/generel/Dashboard';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Routes, Route } from 'react-router-dom';
import Login from './components/auth/Login';

// import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
      </Routes>
    </QueryClientProvider>

    //<h2>sgvrdegertghrthg</h2>
  );
}

export default App
