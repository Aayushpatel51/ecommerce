import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import StarRating  from "./StarRating"

function Details() {
	const { id } =useParams();
    const [detailData, setDetailData] = useState({});

	useEffect(() => {
		fetchData()
    },[])

	const fetchData = () => {

		fetch(`https://dummyjson.com/products/${id}`)
		  .then(res => res.json())
		  .then(response => {
			setDetailData(response)
		  })
		.catch(error => console.error('Error fetching data:', error));
	};

  return (
	<div className="flex flex-col items-center p-5">
		<h1 className="text-4xl text-purple my-3">Product Details <small className="text-base">({detailData.category})</small></h1>
		<div className="w-full flex justify-end">
			<Link className="bg-transparent hover:bg-purple hover:text-white text-purple text-center font-bold py-2 px-4 border border-purple rounded cursor-pointer" to="/" >
				Back to List
			</Link>
		</div>

		<div className="w-full flex justify-evenly">
			<div className='w-5/12 h-detail-card'>
				<img alt={detailData.title} className="w-full h-full rounded" src={detailData.thumbnail}  />
			</div>
			<div className='w-5/12 h-detail-card space-y-5'>
				<p className="text-2xl text-title" >{detailData.title}</p>

				<p className="text-2xl text-title" >{detailData.brand}</p>

				<StarRating rating={detailData.rating} />

				<p className="text-xl text-sub-title">${detailData.description}</p>

				<p className="text-2xl text-black">${detailData.price}</p>
			</div>
		</div>
	</div>
  )
}

export default Details
