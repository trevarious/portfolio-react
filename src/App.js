import React, { useState, useEffect } from 'react';
import Portfolio from './Portfolio';
import LeftNav from './LeftNav';
import './App.css';

export default function App() {
    const [currentContent, setCurrentContent] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        // Simulate a delay to demonstrate loading screen
        const delay = setTimeout(() => {
            setLoading(false);
        }, 1500); // Adjust this time to match your loading time

        // Clear the timeout if component unmounts before the delay completes
        return () => clearTimeout(delay);
    }, [currentContent]);

    const handleContentChange = (content) => {
        setLoading(true);
        setCurrentContent(content);
    };

    return (
        <div className="app-container">
            <LeftNav setCurrentContent={handleContentChange} setLoading={setLoading} />
            <Portfolio currentContent={currentContent} loading={loading} />
        </div>
    );
}
