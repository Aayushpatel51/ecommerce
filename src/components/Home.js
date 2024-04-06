import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

function Home() {
	const [currentPage, setCurrentPage] = useState(1);
	const [totalPages, setTotalPages] = useState(0);
	const [data, setData] = useState([]);

	useEffect(() => {
		fetchData();
	}, [currentPage]);

	const fetchData = () => {
		const limit = 10;
		const skip = (currentPage - 1) * limit;

		fetch(`https://dummyjson.com/products?limit=${limit}&skip=${skip}&select=title,price,thumbnail`)
		  .then(res => res.json())
		  .then(response => {
			setData(response.products);
			setTotalPages(Math.ceil(response.total / limit));
		  })
		.catch(error => console.error('Error fetching data:', error));
	};

	const handlePageChange = (page) => {
		setCurrentPage(page);
	};

  return (
	<div className="flex flex-col items-center">
		<h1 className="text-4xl text-purple my-3">Products</h1>

		<div className="grid grid-cols-4 gap-4 mt-5">
			{data.map(item => (
				<div className="flex flex-col justify-evenly w-96 h-96 p-4 rounded-md shadow-l">
					<img alt={item.name} className="w-full h-44 rounded" key={item.id} src={item.thumbnail}  />

					<div>
						<p className="text-2xl text-title" >{item.title}</p>

						<p className="text-xl text-sub-title" key={item.id}>${item.price}</p>
					</div>

					<Link className="bg-transparent hover:bg-purple hover:text-white text-purple text-center font-bold py-2 px-4 border border-purple rounded cursor-pointer" to={`/products/` + item.id} >
						View Details
					</Link>
				</div>
			))}
		</div>

		<div className="my-3">
			{Array.from({ length: totalPages }, (_, index) => index + 1).map(page => (
				<button
					key={page}
					onClick={() => handlePageChange(page)}
					className={`py-2 px-4 mr-2 border rounded cursor-pointer
					${page === currentPage ? 'bg-purple text-white' : 'bg-transparent hover:bg-purple hover:text-white text-purple'}`}
				>
					{page}
				</button>
			))}
		</div>
	</div>
  )
}

export default Home
