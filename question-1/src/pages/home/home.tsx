import { useEffect } from 'react'

const Home = () => {
	// {
	//     "token_type": "Bearer",
	//     "access_token": "",
	//     "expires_in": 1711794742
	// }

	// {
	//     "companyName": "VIT Chennai",
	//     "clientID": "f86e0f44-291b-4d14-9b37-4f7e55b83ba6",
	//     "clientSecret": "ndByYJbiFbLSLqqv",
	//     "ownerName": "Nancy Choudhary",
	//     "ownerEmail": "nancychoudhary604@gmail.com",
	//     "rollNo": "23MCA1115"
	// }

	const fetchRequest = async () => {
		try {
			const res = await fetch(
				'http://20.244.56.144/test/companies/AMZ/categories/Laptop/products?top=10&minPrice=1&maxPrice=10000'
			)
			console.log(res)
			const data = await res.json()
			console.log(data)
		} catch (error) {
			console.error('Error fetching data:', error)
		}
	}

	useEffect(() => {
		fetchRequest()
	}, [])

	return (
		<div>
			<h2>Home</h2>
			<p>Welcome to the Home page!</p>
		</div>
	)
}

export default Home
