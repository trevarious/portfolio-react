import React from "react";
import './BlackJack.css'; // You can define your CSS for card animation here

export default function Blackjack() {
    return (
        <div className="card-container">
            <svg
                width="150"
                height="200"
                viewBox="0 0 150 200"
                className="card-svg"
            >
                {/* Add your SVG elements for the card design */}
                {/* Example: */}
                <rect x="0" y="0" width="150" height="200"/>
                <text x="20" y="40" fontSize="24" fill="black">A</text>
                <text x="20" y="80" fontSize="24" fill="black">♠</text>
            </svg>
        </div>
    );
}