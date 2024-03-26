import React, { Suspense, lazy, useState } from 'react';
import Background from './components/Background/Background';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Book from './pages/Book/Book';
import Contact from './pages/Contact/Contact';
import Hero from './components/Hero/Hero';
import FAQPage from './pages/FAQ/faq';
import TermsAndConditions from './pages/Terms/Terms';
import PrivacyPolicyPage from './pages/Policy/Policy';
import Testimony from './pages/Testimony/Testimony';
import FeedbackForm from './components/Feedback/FeedbackForm';
import Login from './pages/user/Login';
import AdminUsers from './pages/admin/AdminUsers';
import AdminRequests from './pages/admin/AdminRequests';
import AdminFeedback from './pages/admin/AdminFeedback';
import AdminTheme from './pages/admin/AdminTheme';
import AdminMenu from './pages/admin/AdminMenu';
import UserProfile from './components/Lander/Lander';
import Gallery from './pages/Gallery/Gallery';
import Loader from './components/public/Loader';

const App = () => {
   
  const AdminDashboard = lazy(() => import('./pages/admin/AdminDashboard'));
  return (

    <>
  
     <BrowserRouter>
    <Suspense fallback =  {<Loader/>}>
    <Routes>
      <Route path="/" element = {<Background/>}/>
      <Route path = "/book" element ={<Book/>}/>
      <Route path = "/contact" element ={<Contact/>}/>
      <Route path ="/hero" element = {<Hero/>}/>
      <Route path= "/faq" element={<FAQPage/>}/>
      <Route path = "terms" element={<TermsAndConditions/>}/>
      <Route path= "/privacy" element={<PrivacyPolicyPage/>}/>
      <Route path = "/testimony" element = {<Testimony/>}/>
      <Route path = "/feedback" element = {<FeedbackForm/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/dashboard' element={<AdminDashboard/>}/>
      <Route path='/users' element={<AdminUsers/>} />
      <Route path='/birthdayrequests' element={<AdminRequests/>} />
      <Route path='/feedbacks' element={<AdminFeedback/>} />
      <Route path='/themes' element={<AdminTheme/>} />
      <Route path='/foodmenu' element={<AdminMenu/>} />
      <Route path = "/lander" element ={<UserProfile/>}/>
      <Route path = "/gallery" element = {<Gallery/>}/>
    </Routes>
    </Suspense>
    </BrowserRouter> 
    </>
    // <div>
    //   <Background />
    // </div>
  );
};

export default App;
