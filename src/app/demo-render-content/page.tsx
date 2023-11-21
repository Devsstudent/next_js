'use client'
import Image from 'next/image'
import { useEffect, useState, useContext } from 'react'


	const Component = () => {

		const [fromApi, setFromApi] = useState<string>('');
		const api_url = "http://localhost:8000/v1/api/test-content";

		const fetch_symfony_api = () => {
			fetch(api_url, {
			method: "GET",
			headers: {
				'Content-Type': 'application/json'
			},
		})
		.then((response) => response.json())
		.then((data) => {
			console.log(data);
			setFromApi("\"" + data.fact + "\"");
		})
		.catch((error) => console.log(error));
		}

		useEffect(() => {
			fetch_symfony_api();
		},[])

  		return (
		<div className="bg-gradient-to-t from-indigo-500 via-to-blue via-25%">
				<div className="flex flex-col items-center justify-center h-screen">
				<h1 className="mb-4 ml-10 mr-10 mt-10 text-center font-serif text-3xl" >{fromApi}</h1>
				<button className="bg-teal-500 hover:bg-teal-700 px-4 py-2 rounded-full hover:text-gray-200 text-lg" onClick={fetch_symfony_api} type="button">
					Get another fact
				</button>
				</div>
		</div>)
	};

export default function renderFromSymfony(){
	return (
    <main>
		<Component />
    </main>
	)

}
