import React from 'react';
import './AboutContent.css';
import frontendImage from '../src/assets/frontend.png'; // Import your images
import blockchainImage from '../src/assets/blockchain.png';
import chainlinkImage from '../src/assets/chainlink.png';

export default function AboutContent() {
    return (
        <div className='about-content'>
            <h2>About Me</h2>
            <div className='skill' id='frontend'>
                <h3>
                    <img className='about-img' src={frontendImage} alt="Front-end Development" /> 
                    <a href='#frontend-link'>Front-end Development</a>
                </h3>
                <p>
                    I specialize in crafting dynamic and responsive designs using <span>HTML</span>, <span>CSS</span>, and <span>JavaScript</span>, aiming for visually appealing and user-friendly interfaces. With a strong foundation in front-end development, I create engaging web experiences by leveraging the power of modern frameworks, especially <span>React</span>. My focus on clean code and best practices allows me to develop efficient and maintainable codebases, ensuring a seamless user experience across various platforms.
                </p>
            </div>
            <div className='skill' id='blockchain'>
                <h3>
                    <img className='about-img'  src={blockchainImage} alt="Blockchain Technology" /> 
                    <a href='https://www.soliditylang.org' target='_blank' rel='noreferrer'>Blockchain Technology</a>
                </h3>
                    <p>
                        Additionally, my expertise extends to blockchain technology, particularly in <span><a href='https://www.soliditylang.org' target='_blank' rel='noreferrer'>Solidity</a></span> for building robust and secure decentralized applications (DApps) on Ethereum Virtual Machine (EVM) blockchains. I am adept at implementing smart contracts that handle complex operations efficiently while ensuring security and reliability. I utilize my knowledge to architect and develop scalable solutions that meet the demands of decentralized finance (DeFi), NFT marketplaces, and other innovative blockchain-based applications.
                    </p>

            </div>
            <div className='skill' id='chainlink'>
                <h3>
                    <img className='about-img' src={chainlinkImage} alt="Data Integration with Chainlink" /> 
                    <a href='https://www.chain.link' target='_blank' rel='noreferrer'>Data Integration with Chainlink</a>
                </h3>
                <p>
                    Furthermore, I possess proficiency in integrating real-time data into smart contracts using cutting-edge technologies such as <span>Chainlink</span>. By leveraging external data securely and reliably through decentralized oracles, I enable smart contracts to access and process real-world information, paving the way for the development of innovative applications with enhanced functionality and adaptability.
                </p>
            </div>
        </div>
    )
}
