import { useRecoilValue } from "recoil";
import { bgColorAtom } from "./atoms/bgColorAtom";
import { Routes, Route } from 'react-router-dom';
import { Profile } from "./pages/Profile";
import { BackGroundColorComponent } from "./pages/BackGroundColorComponent";
import { ParaGenerator } from "./pages/ParaGenerator";
import { GithubProfile } from "./pages/GitHubProfile";
import { BirthdayWish } from "./pages/BirthdayWish";
import { OtpGenerator } from "./pages/OtpGenerator";

function App() {
  const bgColor = useRecoilValue(bgColorAtom);

  return (
    <div className={`w-full h-screen ${bgColor}`}>
      <Routes>
        <Route path="/profile" element={<Profile />} />
        <Route path="/bgcolor" element={<BackGroundColorComponent />} />
        <Route path="/para" element={<ParaGenerator />} />
        <Route path="/gp" element={<GithubProfile />} />
        <Route path="/birthdaywish" element={<BirthdayWish />} />
        <Route path="/otp" element={<OtpGenerator />} />
      </Routes>
    </div>
  );
}

export default App;
