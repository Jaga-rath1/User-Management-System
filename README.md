# User-Management-System
# User Management System

A full-stack CRUD web application built with Node.js, Express.js, EJS, and MySQL. The project allows users to create, view, update, and manage user records dynamically using RESTful routing and database integration.

---

## 🚀 Features

* Add new users
* View all users
* Edit existing users
* Update user information
* MySQL database integration
* RESTful routing
* Method Override support
* Faker.js for generating random users
* UUID-based unique IDs

---

## 🛠️ Tech Stack

* Node.js
* Express.js
* EJS
* MySQL
* Faker.js
* UUID
* Method-Override

---

## 📂 Project Structure

```bash
project/
│── public/
│── views/
│── node_modules/
│── index.js
│── package.json
```

---

## ⚙️ Installation

```bash
# Clone the repository
git clone <your-repo-link>

# Move into project folder
cd <project-folder>

# Install dependencies
npm install

# Start server
node index.js
```

---

## 🗄️ Database Setup

Create a MySQL database named:

```sql
CREATE DATABASE legend;
```

Create the `Teacher` table:

```sql
CREATE TABLE Teacher(
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR(255),
    email VARCHAR(255),
    password VARCHAR(255)
);
```

---

## 📸 Screenshots

### Home Page

*Add screenshot here*

![Home Screenshot](./screenshots/home.png)

---

### All Users Page

*Add screenshot here*

![Users Screenshot](./screenshots/users.png)

---

### New User Entry Page

*Add screenshot here*

![New User Screenshot](./screenshots/new-user.png)

---

### Edit User Page

*Add screenshot here*

![Edit Screenshot](./screenshots/edit.png)

---

## 🔥 Future Improvements

* Password hashing using bcrypt
* Authentication system
* Better UI design
* MVC architecture
* Deployment support

---

## 👨‍💻 Author

Made with ❤️ by Jagan Kumar Rath
