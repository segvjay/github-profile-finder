function ProfileCard({ user }) {
  const formatNum = (n) => (n >= 1000 ? (n / 1000).toFixed(1) + "k" : n);

  return (
    <div className="profile-card">
      <div className="profile-top">
        <img
          src={user.avatar_url}
          alt={`${user.login} avatar`}
          className="avatar"
        />
        <div className="profile-info">
          <div className="profile-name-row">
            <h2 className="profile-name">{user.name || user.login}</h2>
            {user.site_admin && <span className="badge">Staff</span>}
          </div>
          <p className="profile-login">@{user.login}</p>
          {user.bio && <p className="profile-bio">{user.bio}</p>}

          <div className="stats-row">
            <div className="stat">
              <span className="stat-num">{formatNum(user.public_repos)}</span>
              <span className="stat-label">Repos</span>
            </div>
            <div className="stat">
              <span className="stat-num">{formatNum(user.followers)}</span>
              <span className="stat-label">Followers</span>
            </div>
            <div className="stat">
              <span className="stat-num">{formatNum(user.following)}</span>
              <span className="stat-label">Following</span>
            </div>
            {user.public_gists > 0 && (
              <div className="stat">
                <span className="stat-num">{formatNum(user.public_gists)}</span>
                <span className="stat-label">Gists</span>
              </div>
            )}
          </div>

          <div className="meta-row">
            {user.company && <span className="meta-item">🏢 {user.company}</span>}
            {user.location && <span className="meta-item">📍 {user.location}</span>}
            {user.blog && (
              <a href={user.blog} target="_blank" rel="noreferrer" className="meta-link">
                🔗 Website
              </a>
            )}
            {user.twitter_username && (
              <span className="meta-item">🐦 @{user.twitter_username}</span>
            )}
            <span className="meta-item">
              📅 Joined {new Date(user.created_at).getFullYear()}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;
