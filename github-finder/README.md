# GitHub Profile Finder 🔍

A React.js app that searches GitHub users and displays their profile, stats, and top repositories using the GitHub REST API.

## Features
- 🔎 Search any GitHub username in real time
- 👤 View profile: avatar, bio, location, company, followers
- 📦 See top 6 repositories with stars, forks, and language
- ⚡ Quick-search buttons for popular developers
- 📱 Fully responsive (mobile + desktop)

## Tech Stack
- **React.js** (useState, functional components)
- **GitHub REST API** (free, no API key needed)
- **CSS3** (custom dark theme, responsive layout)

## Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Start the app
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── App.jsx                  # Main component, API logic
├── App.css                  # Global styles
├── index.js                 # Entry point
└── components/
    ├── SearchBar.jsx        # Input + search button
    ├── ProfileCard.jsx      # User profile display
    └── RepoList.jsx         # Repository cards
```

## API Used

```
GET https://api.github.com/users/{username}
GET https://api.github.com/users/{username}/repos?sort=stars
```

## Deploy on Vercel (Free)

```bash
npm install -g vercel
npm run build
vercel
```

## Resume Description

> Built a GitHub Profile Finder using React.js that integrates the GitHub REST API to fetch and display user profiles, repositories, and stats with live search functionality. Deployed on Vercel.
