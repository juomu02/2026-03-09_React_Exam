import { Route, Routes } from "react-router";
import "./App.css";
import HomePage from "./pages/home/HomePage";
import RegistrationPage from "./pages/registration/RegistrationPage";
import NavBar from "./components/NabBar";
import MemberInfoPage from "./pages/memberinfo/MemberInfoPage";
import MembersListPage from "./pages/memberslist/MembersListPage";
import Details from "./pages/memberslist/Details";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/registration" element={<RegistrationPage />} />
        <Route path="/memberinfo" element={<MemberInfoPage />} />
        <Route path="/memberslist" element={<MembersListPage />} />
          <Route path="memberslist/:userid" element={<Details />} />
      </Routes>
    </>
  );
}

export default App;
