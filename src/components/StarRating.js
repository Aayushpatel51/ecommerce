import React from 'react';

function StarRating({ rating }) {
	if (typeof rating !== 'number') {
	  return null;
	}

	// Calculate the number of full and empty stars
	const fullStars = Math.floor(rating);
	const emptyStars = 5 - fullStars;

	// Generate an array of stars to render
	const stars = [];
	for (let i = 0; i < fullStars; i++) {
	  stars.push(
		<svg key={i} className="w-6 h-6 fill-current text-yellow-500" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
		  <path d="M10 1l2.602 6.594H18l-5 3.875 1.84 6.031L10 14.594 5.158 17.5l1.84-6.031-5-3.875h5.398L10 1z"/>
		</svg>
	  );
	}
	for (let i = 0; i < emptyStars; i++) {
	  stars.push(
		<svg key={fullStars + i} className="w-6 h-6 fill-current text-gray-400" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
		  <path d="M10 1l2.602 6.594H18l-5 3.875 1.84 6.031L10 14.594 5.158 17.5l1.84-6.031-5-3.875h5.398L10 1z"/>
		</svg>
	  );
	}

	return (
	  <div className="flex items-center">
		{stars.map((star, index) => (
		  <span key={index}>{star}</span>
		))}
		<span className="ml-1 text-sub-title text-sm">{rating.toFixed(2)}</span>
	  </div>
	);
  }


export default StarRating;
