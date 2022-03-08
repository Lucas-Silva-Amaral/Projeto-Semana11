import "./App.css"
import { Routes, Route } from "react-router-dom"
// import PublicPage from "./components/public/PublicPage"
import Layout from "./components/Layout"
import { AuthProvider, RequireAuth } from "./context/auth-context"
import { RegisterPets } from "./components/RegisterPets"
import { Header } from "./components/Header"
import { UserPets } from "./components/Auth/UserPets"
import { userId } from "./services/pets"

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/login" element={<Header />} />
        <Route element={<Layout />}>
          <Route
            path="/"
            element={
              <RequireAuth>
                <UserPets />
              </RequireAuth>
            }
          />
          <Route
            path="pets"
            element={
              <RequireAuth>
                <RegisterPets />
              </RequireAuth>
            }
          />
          <Route
            path={`/${userId}`}
            element={
              <RequireAuth>
                <UserPets />
              </RequireAuth>
            }
          />
        </Route>
      </Routes>
    </AuthProvider>
  )
}

export default App
