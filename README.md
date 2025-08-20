# 🔗 GitMatched – Connect. Collaborate. Code.

GitMatched is a full-stack web application built for developers to connect, collaborate, and build together — like "Tinder for devs." Whether you're looking for a hackathon partner, an open-source contributor, or someone who vibes with your stack, GitMatched helps you find the perfect match based on skills, interests, and goals.

---

## 🚀 Tech Stack

**Frontend**: React.js  
**Backend**: Node.js, Express.js  
**Database**: MongoDB with Mongoose  
**Architecture**: Microservices  
**Other**: REST APIs, JWT Auth, Matchmaking Logic, Cookie-based Sessions

---

## 🧠 Features

- 🎯 Skill-based matchmaking using custom logic
- 👤 Developer profiles with GitHub integration
- 💌 Swipe-to-connect UI (inspired by Tinder)
- 🔐 Authentication with JWT and cookie sessions
- ⚙️ Scalable microservices architecture
- 🔄 Reusable routing modules & clean controller structure
- (📬 Coming soon) Real-time chat & notifications

---

## 🛠 Backend Highlights

- Modular folder structure using Express routers
- Middleware-driven request validation and authentication
- Mongoose models with schema validation and compound indexing
- Encrypted passwords using bcrypt
- JWT-based login system with cookie support
- Clean separation of auth, user, profile, and request routes
- Logical DB queries using `$or`, `$in`, etc.
- Connection request APIs with status handling
- Pagination-ready feed APIs

---

## 📁 Project Structure

src/
│
├── 🔧 config/ → Database configuration & connection logic
│
├── 🛡️ middleware/ → Authentication, validation, and request guards
│
├── 📁 models/ → Mongoose models (User, ConnectionRequest, etc.)
│
├── 🚏 routes/ → Express route handlers
│ ├── auth.js
│ ├── profile.js
│ ├── request.js
│ └── user.js
│
├── 🛠️ utils/ → Reusable utility functions & sanitizers
│
└── 🚀 app.js → Main Express application setup


> ✅ Ready for horizontal scaling and microservice expansion.

---

## 📌 Coming Soon

- 💬 Real-time chat (WebSocket-based)
- 🔄 CI/CD pipeline
- ☁️ Backend containerization and deployment on **AWS**
- Frontend

---

## 💡 Inspiration

GitMatched was built as a developer-first platform to solve a common problem:  
**Finding the right collaborators for projects, hackathons, and open-source work.**  
It’s designed to help developers discover like-minded builders based on skills, goals, and interests.

---

Feel free to clone, explore, and contribute! 🚀

