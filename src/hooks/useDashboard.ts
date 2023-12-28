import { apiClient } from '@/lib/axios'
import {useQuery} from '@tanstack/react-query'

export function useTopCards(){
    const {data, isLoading, error} = useQuery(
        { queryKey: ['topcards-data'], queryFn: apiClient.getTopCards }
    )
    return {data, isLoading, error}
}

export function useCharts(){
    const {data, isLoading, error} = useQuery(
        { queryKey: ['charts-data'], queryFn: apiClient.getCharts }
    )
    return {data, isLoading, error}
}

export function useTables(){
    const {data, isLoading, error} = useQuery(
        { queryKey: ['tables-data'], queryFn: apiClient.getTables }
    )
    return {data, isLoading, error}
}

