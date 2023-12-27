import { fetchTopCards } from '@/lib/axios'
import {useQuery} from '@tanstack/react-query'



export function useTopCards(){
    const {data, isLoading, error} = useQuery(
        { queryKey: ['topcards-data'], queryFn: fetchTopCards }
    )
    return {data, isLoading, error}
}