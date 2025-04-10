
import { Routes, Route } from 'react-router-dom'
import RecipeFeed from './pages/RecipeFeed'
import RecipeDetails from './pages/RecipeDetails'
import Login from './pages/Login'
import Signup from './pages/Signup'
import CreateRecipe from './pages/CreateRecipe'
import EditRecipe from './pages/EditRecipe'
import Favorites from './pages/Favorites'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import PassionSection from './components/PassionSection'
import RecipeList from './components/RecipeList'
import PrivateRoute from './components/PrivateRoute'
import CulinaryShowcase from "./components/CulinaryShowcase";
import Footer from "./components/Footer";


const App = () => {
  return (
    <>
      <Navbar />

      <Routes>
        {/* Home page */}
        <Route
          path="/"
          element={
            <>
              <HeroSection />
              <PassionSection />
              <CulinaryShowcase />
              <Footer />
            </>
          }
        />

        
        <Route path="/recipes" element={<RecipeFeed />} />
        <Route path="/recipe/:id" element={<RecipeDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Protected Routes */}
        <Route
          path="/create"
          element={
            <PrivateRoute>
              <CreateRecipe />
            </PrivateRoute>
          }
        />
        <Route
          path="/edit/"
          element={
            <PrivateRoute>
              <EditRecipe />
            </PrivateRoute>
          }
        />
        <Route
          path="/favorites"
          element={
            <PrivateRoute>
              <Favorites />
            </PrivateRoute>
          }
        />
        <Route
          path="/my-recipes"
          element={
            <PrivateRoute>
              <RecipeList />
            </PrivateRoute>
          }
        />
      </Routes>
    </>
  )
}

export default App
