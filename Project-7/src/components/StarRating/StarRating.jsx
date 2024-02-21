import React from 'react';

const StarRating = ({ rating }) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
        if (i < rating) {
            stars.push(
                <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 14.765l-6.513 3.684a.51.51 0 0 1-.766-.536l1.248-7.29L.225 7.437a.51.51 0 0 1 .282-.878l7.31-.956L9.36.88A.51.51 0 0 1 10 0c.182 0 .349.097.44.255l3.635 6.723 7.31.956a.51.51 0 0 1 .282.878l-5.248 5.306 1.248 7.29a.51.51 0 0 1-.766.536L10 14.765z" clipRule="evenodd" />
                </svg>
            );
        } else {
            stars.push(
                <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 14.765l-6.513 3.684a.51.51 0 0 1-.766-.536l1.248-7.29L.225 7.437a.51.51 0 0 1 .282-.878l7.31-.956L9.36.88A.51.51 0 0 1 10 0c.182 0 .349.097.44.255l3.635 6.723 7.31.956a.51.51 0 0 1 .282.878l-5.248 5.306 1.248 7.29a.51.51 0 0 1-.766.536L10 14.765z" clipRule="evenodd" />
                </svg>
            );
        }
    }
    return (
        <div className="flex items-center space-x-1">
            {stars}
        </div>
    );
};

export default StarRating;
