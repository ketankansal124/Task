import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import SubmitForm from './components/SubmitForm';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Submission from "./components/Submission";

const App = () => {
    return (
        <Router>
            <div className="flex flex-col min-h-screen">
                <Navbar />
                <div className="flex-grow flex items-center justify-center">
                    <Routes>
                        <Route path="/" element={<SubmitForm />} />
                        <Route path="/submission" element={<Submission />} />
                    </Routes>
                </div>
                <Footer />
            </div>
        </Router>
    );
};

export default App;
