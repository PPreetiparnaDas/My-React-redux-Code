Redux React App with Bootstrap Styling
This project is a React application that uses Redux Toolkit for state management and Bootstrap for styling. It demonstrates how to:

Manage state globally using Redux Toolkit.
Update Redux state from different components.
Display Redux-managed data dynamically.
Improve UI with Bootstrap for a professional look.
🛠 Technologies Used
React.js
Redux Toolkit
Bootstrap 5
JavaScript (ES6+)
📌 Features
✔ Global State Management using Redux.
✔ Components:

A.js: Takes user input (name) and updates Redux state.
B.js: Takes user input (location) and updates Redux state.
C.js: Parent component that renders D.js.
D.js: Displays name & location stored in Redux state.
✔ Bootstrap Integration for a modern UI.
✔ Modular Code Structure for maintainability.
📂 Project Structure
bash
Copy
Edit
/src
│── components/
│   ├── A.js  # Input name, dispatch to Redux
│   ├── B.js  # Input location, dispatch to Redux
│   ├── C.js  # Renders D.js
│   ├── D.js  # Displays Redux state
│── store/
│   ├── init.js      # Initial Redux state
│   ├── reducer.js   # Redux reducer & actions
│   ├── store.js     # Configures Redux store
│── App.js
│── index.js
│── styles.css
🚀 Installation & Usage
1️⃣ Clone the Repository
sh
Copy
Edit
git clone https://github.com/your-username/redux-react-bootstrap.git
cd redux-react-bootstrap
2️⃣ Install Dependencies
sh
Copy
Edit
npm install
3️⃣ Start the Development Server
sh
Copy
Edit
npm start
4️⃣ Test the Application
Enter a name in A.js and submit → Updates Redux state.
Enter a location in B.js and submit → Updates Redux state.
Check D.js → Displays the name & location from Redux.

🎨 Screenshots
