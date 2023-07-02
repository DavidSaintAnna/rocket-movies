import { Routes, Route } from "react-router-dom";

import { Profile } from "../pages/Profile";
import { New } from "../pages/New";
import { Home } from "../pages/Home";
import { MoviePreview } from "../pages/MoviePreview";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/profile" element={<Profile />} />
      <Route path="/new" element={<New />} />
      <Route path="/" element={<Home />} />
      <Route path="/preview" element={<MoviePreview />} />
    </Routes>
  );
}
