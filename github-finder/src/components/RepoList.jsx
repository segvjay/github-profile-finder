const LANG_COLORS = {
  JavaScript: "#f1e05a",
  TypeScript: "#3178c6",
  Python: "#3572A5",
  Java: "#b07219",
  "C++": "#f34b7d",
  CSS: "#563d7c",
  HTML: "#e34c26",
  Go: "#00ADD8",
  Rust: "#dea584",
  Ruby: "#701516",
  PHP: "#4F5D95",
  Swift: "#F05138",
  Kotlin: "#A97BFF",
  Dart: "#00B4AB",
  Shell: "#89e051",
  Vue: "#41b883",
};

function RepoList({ repos }) {
  if (!repos.length) return null;

  const formatNum = (n) => (n >= 1000 ? (n / 1000).toFixed(1) + "k" : n);

  return (
    <div className="repo-section">
      <h3 className="section-title">Top Repositories</h3>
      <div className="repo-list">
        {repos.map((repo) => (
          <a
            key={repo.id}
            href={repo.html_url}
            target="_blank"
            rel="noreferrer"
            className="repo-card"
          >
            <div className="repo-header">
              <span className="repo-name">{repo.name}</span>
              {repo.fork && <span className="fork-tag">fork</span>}
            </div>

            {repo.description && (
              <p className="repo-desc">
                {repo.description.length > 90
                  ? repo.description.substring(0, 90) + "…"
                  : repo.description}
              </p>
            )}

            <div className="repo-meta">
              {repo.language && (
                <span className="repo-tag">
                  <span
                    className="lang-dot"
                    style={{
                      backgroundColor:
                        LANG_COLORS[repo.language] || "#888",
                    }}
                  />
                  {repo.language}
                </span>
              )}
              <span className="repo-tag">⭐ {formatNum(repo.stargazers_count)}</span>
              <span className="repo-tag">🍴 {formatNum(repo.forks_count)}</span>
              {repo.license && (
                <span className="repo-tag">📄 {repo.license.spdx_id}</span>
              )}
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default RepoList;
