import { useState } from 'react'
import Dashboard from './sections/generel/Dashboard';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Routes, Route } from 'react-router-dom';
import Login from './components/auth/Login';
import DashboardKitchek from './sections/kitchen/DashboardKitchek';
import DashboardWaiter from './sections/waiter/DashboardWaiter';

// import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/kitchen" element={<DashboardKitchek/>}/>
        <Route path='/waiter' element={<DashboardWaiter/>}/>
      </Routes>
    </QueryClientProvider>

    //<h2>sgvrdegertghrthg</h2>
  );
}

export default App
