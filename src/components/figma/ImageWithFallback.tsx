import { useState } from "react";
import LoginPage from "./components/LoginPage";
import RegisterPage from "./components/RegisterPage";

export default function App() {
  const [currentPage, setCurrentPage] = useState<"login" | "register">("login");

  return (
    <div className="w-full h-screen overflow-hidden">
      {currentPage === "login" ? (
        <LoginPage onNavigateToRegister={() => setCurrentPage("register")} />
      ) : (
        <RegisterPage onNavigateToLogin={() => setCurrentPage("login")} />
      )}
    </div>
  );
}
