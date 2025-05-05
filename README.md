# React API Integration with Vite

This project is a React application built with Vite. It demonstrates how to:

- Fetch data from a public API (Rick and Morty API)
- Handle loading and error states using React hooks
- Create and use a reusable list component
- Structure a modular, clean React app

## ✅ Features

- 🔄 **API Integration**: Fetches data from [https://rickandmortyapi.com/api/character](https://rickandmortyapi.com/api/character) using the Fetch API.
- ⚛️ **React Hooks**: Uses `useState` and `useEffect` for managing async data and component lifecycle.
- ♻️ **Reusable List Component**: A generic `ListComponent` accepts data and a custom render function as props.
- ⚠️ **Error & Loading States**: Gracefully handles network errors and displays a loading indicator during data fetch.
- 📦 **Vite Setup**: Fast dev server, modern build setup, and optimized performance.

## 🗂 Folder Structure (Relevant Files)


src/
├── components/
│ ├── CharacterListContainer.jsx # Fetches API data and passes it to the ListComponent
│ └── ListComponent.jsx # Reusable component to display list items
├── App.jsx # Main app file rendering the CharacterListContainer
├── main.jsx # Vite React entry point

markdown
Copy
Edit

## 🚀 How to Run

1. Install dependencies:
npm install

markdown
Copy
Edit

2. Start the development server:
npm run dev

yaml
Copy
Edit

3. Open [http://localhost:5173](http://localhost:5173) to view the app.

## 📸 Screenshot (Optional)

> Add a screenshot showing the app displaying characters

---

## 📚 Assignment Requirements Met

- ✅ Used Fetch API for data fetching
- ✅ Displayed dynamic content in a reusable list
- ✅ Implemented error and loading states
- ✅ Organized code in separate components
