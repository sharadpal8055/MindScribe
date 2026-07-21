import React from 'react';
import Navbar from '../component/Navbar';
import Header from '../component/Header';
import Bloglist from '../component/Bloglist';
import Blogcard from '../component/Blogcard';
import Newsletter from '../component/Newsletter';
import Footer from '../component/Footer';
const Home = () => {
  return (
   <>
<Navbar/>
<Header/>
<Bloglist/>
<Newsletter/>
<Footer/>

   </>
  );
}

export default Home;
