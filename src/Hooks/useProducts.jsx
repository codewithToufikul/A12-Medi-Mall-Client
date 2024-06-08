import { useQuery } from "@tanstack/react-query";
import usePublicAxios from "./usePublicAxios";



const useProducts = () => {
    const axiosPublic = usePublicAxios()
    const {data: products=[]} = useQuery({
        queryKey: ["products"],
        queryFn:  async() =>{
            const res = await axiosPublic.get('/medicine');
            return res.data;
        }
    })
    return [products]
};

export default useProducts;