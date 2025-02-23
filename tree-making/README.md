# React Tree Browser 🌳

This project is a **React-based Tree Browser** inspired by the file structure in Visual Studio Code. It allows users to navigate through a hierarchical file system, expanding and collapsing folders dynamically. The project demonstrates key front-end concepts, including recursion, state management, and component design.

## 🚀 Features
- 📂 **Tree Structure Rendering** - Displays nested files and folders similar to a VS Code file explorer.
- 🔄 **Recursive Component Rendering** - Uses recursion to dynamically generate nested components.
- ⚛️ **State Management with Hooks** - Utilizes `useState` to manage folder expansion and collapse states.
- 🖼️ **Styled with Indentation** - Applies depth-based indentation for visual clarity.
- 🔍 **Expandable and Collapsible Folders** - Enhances user experience with interactive elements.
- 🛡️ **TypeScript for Type Safety** - Ensures robustness with well-defined data structures.

## 🛠 Technologies Used
- **React** (Functional Components & Hooks)
- **TypeScript** (for type safety)
- **CSS/Tailwind** (for styling)

## 📂 Project Structure
```
tree-shaking/
│── src/
│   ├── components/
│   │   └── Tree.tsx (Recursive tree component)
│   │   └── TreeNode.tsx (Handles individual nodes)
│   └── App.tsx (Main entry point)
│
│── public/
│── package.json
└── README.md
```

## 🚀 Getting Started
1. **Clone the Repository:**
   ```jsx
   git clone https://github.com/danielkhakbaz/front-end-challenges/tree-making.git
   cd tree-making
   ```
2. **Install Dependencies:**
   ```jsx
   yarn
   ```
3. **Start the Development Server:**
   ```jsx
   yarn dev
   ```
4. Open your browser and navigate to `http://localhost:5173`

## 🔧 How It Works
- The **Tree Structure** is defined as a nested JSON object.
- The **Tree Component** renders recursively based on this data.
- Clicking on a folder toggles its expansion state.
- Styling is applied to maintain **proper indentation and structure**.

## 🎯 Learning Outcomes
- Understanding **tree structures** in web development.
- Implementing **recursion** in React components.
- Managing **state with hooks** for UI interactivity.
- Applying **TypeScript** for better maintainability.

## 📢 Contributing
Feel free to **fork** this repository and improve upon it! PRs are welcome. If you have suggestions or find issues, open an **issue** in the repo.

## 📄 License
This project is licensed under the [MIT License](LICENSE).

---

🚀 **Happy Coding!**
