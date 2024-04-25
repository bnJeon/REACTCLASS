import React from 'react';
import CustomButton from '../CustomButton.jsx';
import Footer from '../layout/Footer';

function Collection() {
    return (
        <div>
            <div className="container text-center my-3">
                <h1>Limited Edition</h1>
                <div>
                    <img src="/img/limited.jpg" alt="limited." style={{ width: '100%', height: '400px' }} />
                    <h2>Collection</h2>
                    <p>한정판 에디션</p>
                    <CustomButton text="Buy" />
                </div>
            </div>
            <div className="container text-center my-3">
                <h1>Premium Edition</h1>
                <div>
                    <img src="/img/premium.jpg" alt="limited." style={{ width: '100%', height: '400px' }} />
                    <h2>Collection</h2>
                    <p>프리미엄 에디션</p>
                    <CustomButton text="Buy" />
                </div>
            </div>
            <div style={{ marginTop: '50px' }} />
        <Footer />
        </div>
    );
}

export default Collection;
