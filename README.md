# 🌌 Aurora’25 Web Portal

A full-stack event management portal built for Aurora'25, handling dynamic registration, authentication, and team collaboration across Hackathons, CTFs, and Workshops.

## 🚀 Features

- 🔐 **Authentication & Security**
  - JWT-based login and registration
  - Password recovery with secure tokens
  - Team creation and management

- 🧾 **Registration System**
  - Real-time form validation
  - Event-wise participant tracking
  - 300+ participants handled

- 🧩 **Modular Frontend**
  - Reusable components with Tailwind CSS
  - Mobile-first responsive design
  - Role-based content rendering

- 📊 **Admin Dashboard**
  - View user stats and event registration
  - Manual overrides and approvals

- 🧑‍🤝‍🧑 **Team Collaboration**
  - Invite team members
  - Leader designation & member removal
  - Automatic team-size validation per event

## 🛠 Tech Stack

| Tech              | Description                           |
|-------------------|----------------------------------------|
| **MongoDB**       | NoSQL database for storing users, teams, and event data |
| **Express.js**    | Backend REST APIs                     |
| **React.js**      | Interactive user interface             |
| **Node.js**       | Runtime environment for backend logic |
| **Tailwind CSS**  | Utility-first CSS framework            |
| **JWT & bcrypt**  | Authentication & password hashing      |

## 📁 Folder Structure

```
Aurora-25/
├── backend/              # Express routes and models
├── frontend/             # React components and pages
├── public/               # Static assets
├── .env                  # Environment variables
└── README.md
```

## 🧠 Learnings

- Handling real-time validation and team constraints for large-scale events.
- Designed reusable UI architecture that scaled across 10+ pages.
- Worked with authentication workflows securely using JWT and bcrypt.

## 🤝 Contributors

- [@Pranav-Kumar14](https://github.com/Pranav-Kumar14) – Full Stack Developer

## 📄 License

This project is licensed under the MIT License – see the [LICENSE](./LICENSE) file for details.
