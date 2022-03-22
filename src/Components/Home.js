import React, { useEffect, useState } from "react";
import { Col } from "react-bootstrap";
import { Card } from "react-bootstrap";
import AddtocartForm from "./Products/AddtocartForm";
import Productrow from "./Products/Productrow";
import axios from "axios";
import Rate from "./UI/Rate";

const Home = (props) => {
	const [ProductData, setProductData] = useState([]);
	useEffect(() => {
		axios.get("https://fakestoreapi.com/products").then(function (response) {
			// handle success
			setProductData(response.data);
			// console.log(response.data);
		});

		return () => {};
	}, []);

	return (
		<Productrow>
			{
				// Using array.map to iterate through product data.
				ProductData.map((product, index) => {
					const productData = {
						id: product.id,
						image: product.image,
						price: product.price,
						name: product.title
					}
					return (
						<Col key={index}>
							<Card>
								<Card.Img
									variant='top'
									src={product.image}
									alt=''
									className='p-5'
								/>
								<Card.Body>
									<h1 className='display-6 fs-3 text'>${product.price}</h1>
									<Card.Title>{product.title.slice(0, 20) + "..."}</Card.Title>
									<Card.Text>
										{product.description.slice(0, 100) + "..."}
									</Card.Text>
									Rate: {product.rating.rate}
									<Rate value={product.rating.rate} />
									<AddtocartForm data={productData}/>
								</Card.Body>
							</Card>
						</Col>
					);
				})
			}
		</Productrow>
	);
};

export default Home;
