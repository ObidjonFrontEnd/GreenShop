import { useQuery } from '@tanstack/react-query'
import apiAxios from '../Api/Api'

const useGetApi = (url = {}) => {
	const axiosData = async () => {
		const response = await apiAxios.get(
			`${url}?access_token=6506e8bd6ec24be5de357927`
		)
		return response.data
	}

	const { data, isLoading, error } = useQuery({
		queryKey: ['getData', url],
		queryFn: axiosData,
	})

	return { data, isLoading, error }
}

export default useGetApi
