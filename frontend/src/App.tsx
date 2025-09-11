import { useState } from "react";
import "./App.css";

function App() {
  const [currentView, setCurrentView] = useState<
    "login" | "signup" | "dashboard"
  >("login");

  return (
    <div className="app">
      <header className="app-header">
        <h1>CodeCollab</h1>
        <p>Real-time code collaboration</p>
      </header>

      <main className="app-main">
        {currentView === "login" && (
          <div className="auth-container">
            <h2>Login</h2>
            <form className="auth-form">
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" placeholder="Enter your email" />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  placeholder="Enter your password"
                />
              </div>
              <button type="submit">Login</button>
            </form>
            <p>
              Don't have an account?
              <button
                onClick={() => setCurrentView("signup")}
                className="link-button"
              >
                Sign up
              </button>
            </p>
          </div>
        )}

        {currentView === "signup" && (
          <div className="auth-container">
            <h2>Create Account</h2>
            <form className="auth-form">
              <div className="form-group">
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  id="username"
                  placeholder="Choose a username"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" placeholder="Enter your email" />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  placeholder="Create a password"
                />
              </div>
              <div className="form-group">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input
                  type="password"
                  id="confirmPassword"
                  placeholder="Confirm your password"
                />
              </div>
              <button type="submit">Sign Up</button>
            </form>
            <p>
              Already have an account?
              <button
                onClick={() => setCurrentView("login")}
                className="link-button"
              >
                Login
              </button>
            </p>
          </div>
        )}

        {currentView === "dashboard" && (
          <div className="dashboard">
            <h2>My Documents</h2>
            <div className="document-list">
              <p>No documents yet. Create your first document!</p>
              <button className="primary-button">New Document</button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
