'use client'

import { useState, useEffect } from 'react';
import axios from 'axios'

export default function useFetch<T = unknown>() {
	const [data, setData] = useState<T | null>(null)
	useEffect(() => {
		axios.get(`${process.env.NEXT_PUBLIC_IMOBAPP_URL}/leases`, {
			headers: {
			  "Authorization":
				`Bearer ${process.env.NEXT_PUBLIC_IMOBAPP_SECRET}`
			},
		  })
			.then(response => {
				setData(response.data)
			})
			.catch(error => {console.error(error)})
	}, [])

	return { data }
}
