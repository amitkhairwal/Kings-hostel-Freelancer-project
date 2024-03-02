import {Suspense, lazy } from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Home from "./components/home/Home";
import Footer from "./components/layout/Footer";
import Services from "./components/home/page/Services";

import Nutritious from "./components/home/Services/Nutritious";
import Cultural from "./components/home/Services/Cultural";
import Blogs from './components/home/page/blog/Blogs'
import About from "./components/home/about/About";
import Contact from "./components/contact/Contact";
import AddListing from "./components/home/Gallery/AddListing";
import { Testing } from "./test";
import Dashboard from "./components/home/page/blog/Dashboard";
import DashbordProfile from "./components/DashbordProfile";
import CreatePost from "./components/CreatePost";
import Accommodation from "./components/home/Services/Accommodation";
import PostPage from "./components/PostPage";
// import Nav from "./components/layout/Nav";
const Gallery = lazy(() => import('./components/home/Gallery/Gallery'));


export default function App() {
  return (
    <Router>
      {/* <Nav/> */}
       <Navbar />
        <Suspense fallback={<div className="mt-10">Loading...</div>}>
     
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/admin/dd" element={<Dashboard />} />
        <Route path='/post/:postSlug' element={<PostPage />} />
        <Route path="/Blog" element={<Blogs />} />
        <Route path="/add" element={<DashbordProfile />} />
        <Route path="/create-post" element={<CreatePost/>}/>

<Route path='/accommodation' element={<Accommodation/>}/>

        
        <Route path="/cultural" element={<Cultural />} />
        <Route path="/nutritious" element={<Nutritious />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery/add/img" element={<AddListing />} />
      

        <Route path="/gallery" element={<Gallery />} />
        
        <Route path="/test" element={<Testing />} />
      </Routes>
      <Footer />
      </Suspense>
    </Router>
  );
}
