import { useQuery } from "@tanstack/react-query";
import usePublicAxios from "./usePublicAxios";



const useProducts = () => {
    const axiosPublic = usePublicAxios()
    const {data: products=[], isLoading} = useQuery({
        queryKey: ["products"],
        queryFn:  async() =>{
            const res = await axiosPublic.get('/medicine');
            return res.data;
        }
    })
    return [products, isLoading]
};

export default useProducts;