import { fetchCharts, fetchTables, fetchTopCards } from '@/lib/axios'
import {useQuery} from '@tanstack/react-query'


export function useTopCards(){
    const {data, isLoading, error} = useQuery(
        { queryKey: ['topcards-data'], queryFn: fetchTopCards }
    )
    return {data, isLoading, error}
}

export function useCharts(){
    const {data, isLoading, error} = useQuery(
        { queryKey: ['charts-data'], queryFn: fetchCharts }
    )
    return {data, isLoading, error}
}

export function useTables(){
    const {data, isLoading, error} = useQuery(
        { queryKey: ['tables-data'], queryFn: fetchTables }
    )
    return {data, isLoading, error}
}

