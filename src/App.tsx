import { Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import PrivateRoute from './components/auth/PrivateRoute'
import Navbar from './components/shared/Navbar'
import { ScrollToTop } from './components/shared/ScrollToTop'
import ApplyPage from './pages/Apply'
import ApplyDone from './pages/ApplyDone'
import CardPage from './pages/Card'
import HomePage from './pages/Home'
import MyPage from './pages/My'
import SigninPage from './pages/Signin'
import SignupPage from './pages/Signup'
import TestPage from './pages/Test'

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" Component={HomePage} />
        <Route path="/test" Component={TestPage} />
        <Route path="/signin" Component={SigninPage} />
        <Route path="/signup" Component={SignupPage} />
        <Route path="/card/:id" Component={CardPage} />
        <Route
          path="/apply/:id"
          element={
            <PrivateRoute>
              <Suspense fallback={<></>}>
                <ApplyPage />
              </Suspense>
            </PrivateRoute>
          }
        />
        <Route
          path="/apply/done"
          element={
            <PrivateRoute>
              <ApplyDone />
            </PrivateRoute>
          }
        />
        <Route
          path="/my"
          element={
            <PrivateRoute>
              <MyPage />
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
