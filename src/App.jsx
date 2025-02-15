import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Change Router to BrowserRouter
import bookLogo from "./assets/books.png";
import Navigations from "./components/Navigations";
import Login from "./components/Login";
import Books from "./components/Books";
import Register from "./components/Register";
import SingleBook from "./components/SingleBook";
import Account from "./components/Account";


// function HomePage () {
//   return (
//     <div>
//       <Books/>
//     </div>
//   )
// }

function App( {}) {
const [filteredBooks, setFilteredBooks] = useState([]);
console.log("filtered books", filteredBooks);

  const [token, setToken] =useState(null);
  // const [loggedInUsername, setLoggedInUsername] = useState("");

  return (
      <div>
        <h1>Books</h1>
        <h1>
          <img id="logo-image" src={bookLogo} alt="Book Logo" />
          Library App
        </h1>

        <p>
          Complete the React components needed to allow users to browse a
          library catalog, check out books, review their account, and return
          books that they've finished reading.
        </p>

        <p>
          You may need to use the `token` in this top-level component in other
          components that need to know if a user has logged in or not.
        </p>

        <p>
          Don't forget to set up React Router to navigate between the different
          views of your single page application!
        </p>

        <Navigations token={token} setToken={setToken} setFilteredBooks={setFilteredBooks}/>
        <Routes>
          <Route path="/" element={<Books filteredBooks={filteredBooks}/>} />
          <Route path="/login" element={<Login token={token} setToken={setToken}/>} />
          <Route path="/register" element={<Register token={token} setToken={setToken}/>} />
          <Route path="/:id" element={<SingleBook />} />
          <Route path="/account" element={<Account />} />
        </Routes>
      </div>
  );
}

export default App;

// was previously 
{/* <Route path="/login" element={<Login token={token} setToken={setToken}/>} />
<Route path="/register" element={<Register token={token} setToken={setToken}/>} /> */}