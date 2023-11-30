'use client'

import { useState, useEffect } from 'react';
import axios from 'axios'

export default function useFetch<T = unknown>() {
	const [data, setData] = useState<T | null>(null)


	useEffect(() => {
		axios.get(`${process.env.NEXT_PUBLIC_IMOBAPP_URL}/people`, {
			headers: {
			  "Authorization":
				"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsImVtYWlsIjoiZW1haWxUZXN0ZUBnbWFpbC5jb20iLCJuYW1lIjoiSm9uRG9lIiwiaWF0IjoxNzAxMDkyOTY1LCJleHAiOjE3MDM2ODQ5NjV9.fU5wZs9ymnXmAyYLNZCZT3QYlOc71LX6_Kbo-hCt4aE",
			},
		  })
			.then(response => {
				setData(response.data)
			})
			.catch(error => {console.error(error)})
	}, [])

	return { data }
}
