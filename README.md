# The Movies :smile::popcorn:

## On-Screen

### Film Series

### Letterboxd

### Links

- Film Series
  - [Dossier](https://docs.google.com/document/d/1dl00sQH2cXBExBTZp5KaAWoJ_r9gFSnaCfZxn-lVTEM/edit?usp=sharing)

- Letterboxd
  - [Profile](https://letterboxd.com/michaelbeebe)
  - [Main Menu](https://letterboxd.com/michaelbeebe/list/main-menu/detail)
  - [Diary](https://letterboxd.com/michaelbeebe/films/diary)

---

## Behind the Scenes

### MERN Stack

- MongoDB - NoSQL database
- Express.js - backend web app framework for Node.js
- React.js v19 - JavaScript library for building UIs
- Node.js: v22.14.0 - JavaScript runtime environment
- Additional tech:
  - Vite - fast frontend build tool
  - pnpM - fast, disk space efficient package manager
  - Python

### Structure

```shell
├── client/                # React frontend
│   ├── public/            # Static assets
│   ├── src/               # React source code
│   │   ├── components/    # Reusable components
│   │   ├── pages/         # Page-level components
│   │   ├── services/      # API client logic
│   │   ├── App.jsx        # Main app component
│   │   ├── index.jsx      # Entry point
│   │   └── ...
│   ├── package.json       # Client dependencies
│   ├── .env               # Environment variables
│   └── ...
├── server/                # Express backend
│   ├── controllers/       # Route handlers
│   ├── models/            # Data models
│   ├── routes/            # API routes
│   ├── config/            # Configuration files
│   ├── server.js          # Express server setup
│   ├── package.json       # Server dependencies
│   ├── .env               # Environment variables
│   └── ...
├── .gitignore             # Git ignore file
├── package.json           # Root dependencies (optional)
└── README.md
```

### Frontend (cli)

#### React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

### Backend (server)

### Commands

#### Set-up

```shell
mkdir movies && cd movies
```

##### Frontend

```shell
# ~/.../movies
pnpm create vite@latest --template react # name: cli
cd cli
pnpm install
pnpm add tailwindcss @tailwindcss/vite axios
```

##### Backend

```shell
# ~/.../movies
mkdir server && cd server
pnpm init
pnpm add mongodb express cors mongoose
pnpm add nodemon -D
```

#### Run

##### cli

```shell
# ~/.../movies/cli
pnpm dev
```

##### server

```shell
# ~/.../movies/server
pnpm dev
```

---

## Ideas for the Future

### Short-term

- [ ] Make my profile location a reference to some movie location/quote (i.e. Wasteland, Arakis, etc.)
- [ ] Find movie with backdrop that either looks like a blu-ray main menu or some sort of remote for main menu list's backdrop
- [x] Make this the hub for my unfinished reviews / unlogged films bc i can't decide what to say / reviews i know i want to write in my head but too lazy so i just didnt log and dont want to forget about / etc.
- [ ] Create & link youtube playlists for trailers, music moments, etc. in list descriptions instead of having to add video links to each entry
- [ ] Create & link spotify playlists for soundracks, music moments, etc. in list descriptions instead of having to add song links to each entry

### Long-term

- [Letterboxd API](https://api-docs.letterboxd.com)
