import React from 'react';
import { Routes,Route } from 'react-router-dom';
import Home from './pages/Home';
import Blog from './pages/Blog';
import Layout from './pages/Admin/Layout';
import Login from './pages/Admin/Login';
import AddBlog from './component/admin/AddBlog';
import Comments from './component/admin/Comments';
import BlogList from './component/admin/BlogList';
import Dashborad from './component/admin/Dashborad';
const App = () => {
  return (
    <Routes>
<Route path='/' element={<Home/>}/>
<Route path='/blog/:id' element={<Blog/>}/>
<Route path='/admin'>

<Route index element={true?<Layout/>:<Login/>} />
 <Route path="dashboard" element={<Dashborad/>} />
<Route path="add-blog" element={<AddBlog />} />
  <Route path="blog-list" element={<BlogList />} />
  <Route path="comments" element={<Comments />} />
</Route>

    </Routes>
  );
}

export default App;
