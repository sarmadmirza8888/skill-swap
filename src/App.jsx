import Main from "./Pages/BrowseSkillPage/Main"
import Mainchat from "./Pages/Chat/Mainchat"
import Home from "./Pages/HomePage/Home"
import Skill from "./Pages/SkillDetail/Skill"

function App() {

  return (

    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/browse" element={<Main />} />

        <Route path="/register" element={<Register />} />

        <Route path="/Login" element={<Login />} />

        <Route path="/Dashboard" element={<Dashboard />} />

        <Route path="/MyProfile" element={<MyProfile />} />

        <Route path="/skill" element={<Skill />} />

        <Route path="/chat" element={<Mainchat />} />

      </Routes>

    </BrowserRouter>

  )

}

export default App