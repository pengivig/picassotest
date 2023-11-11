import React from 'react';
import './App.scss';
import {PostsListPage} from "./pages/PostListsPage/PostsListPage";
import {Route, Routes} from "react-router-dom";
import {PostDetail} from "./components/PostDetail/PostDetail";
import {PostDetailPage} from "./pages/PostDetailPage/PostDetailPage";

function App() {
  return (
    <div className="App">
        <Routes>
            <Route path={'/'} element={<PostsListPage />}/>
            <Route path={'/post/:id'} element={<PostDetailPage />} />
        </Routes>
    </div>
  );
}

export default App;
