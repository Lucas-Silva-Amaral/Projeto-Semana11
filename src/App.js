import "./App.css"
import { Routes, Route } from "react-router-dom"
import PublicPage from "./routes/PublicPage/PublicPage"
import Layout from "./components/Layout"
import ProtectedPage from "./routes/ProtectedPage/ProtectedPage"
import PetRegistration from "./routes/PetRegistration/PetRegistration"
import ListPetsUser from "./routes/ListPetsUser/ListPetsUser"
import Login from "./routes/Login/Login"
import { AuthProvider, RequireAuth } from "./context/auth-context"

const userId = process.env.REACT_APP_ID_USER

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<PublicPage />} />
          <Route path="login" element={<Login />} />

          <Route
            path="private-page"
            element={
              <RequireAuth>
                <ProtectedPage />
              </RequireAuth>
            }
          />

          <Route
            path="pets"
            element={
              <RequireAuth>
                <PetRegistration />
              </RequireAuth>
            }
          />
          <Route
            path={`pets/${userId}`}
            element={
              <RequireAuth>
                <ListPetsUser />
              </RequireAuth>
            }
          />
        </Route>
      </Routes>
    </AuthProvider>
  )
}

export default App
