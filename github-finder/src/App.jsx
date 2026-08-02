import { useState } from "react";
import SearchBar from "./components/SearchBar";
import ProfileCard from "./components/ProfileCard";
import RepoList from "./components/RepoList";
import "./App.css";

function App() {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async (query) => {
    if (!query.trim()) return;
    setLoading(true);
    setError("");
    setUser(null);
    setRepos([]);

    try {
      const [userRes, repoRes] = await Promise.all([
        fetch(`https://api.github.com/users/${query}`),
        fetch(`https://api.github.com/users/${query}/repos?sort=stars&per_page=6`),
      ]);

      if (!userRes.ok) {
        setError(userRes.status === 404 ? `No user found for "${query}"` : "GitHub API error. Try again.");
        setLoading(false);
        return;
      }

      const userData = await userRes.json();
      const repoData = repoRes.ok ? await repoRes.json() : [];

      setUser(userData);
      setRepos(repoData);
    } catch (err) {
      setError("Network error. Please try again.");
    }

    setLoading(false);
  };

  return (
    <div className="app">
      <div className="container">
        <h1 className="title">GitHub Profile Finder</h1>
        <p className="subtitle">Search any GitHub username to view profile & repositories</p>

        <SearchBar onSearch={handleSearch} />

        {error && <div className="error-msg">{error}</div>}
        {loading && <div className="loading">Fetching profile...</div>}
        {user && !loading && (
          <>
            <ProfileCard user={user} />
            <RepoList repos={repos} />
          </>
        )}
        {!user && !loading && !error && (
          <div className="empty">Enter a GitHub username above to get started</div>
        )}
      </div>
    </div>
  );
}

export default App;
