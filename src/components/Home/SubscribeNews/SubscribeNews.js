import React from 'react';
import { Link } from 'react-router-dom';

const SubscribeNews = () => {
    return (
        <div className='mt-4'>
            <div className="border text-center p-4">
                <h5>SUBSCRIBE NEWSLETTER</h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, fugit.</p>
                <input className='' type="email" placeholder="Email address" /> <br />
                <Link to='' className='btn btn-dark mt-2'>SUBSCRIBE</Link>
            </div>
        </div>
    );
};

export default SubscribeNews;