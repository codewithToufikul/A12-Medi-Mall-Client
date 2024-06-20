import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";


const UseAdvice = () => {
    const axiosSecure = useAxiosSecure()
    const {data: advices=[], refetch} = useQuery({
        queryKey: ["advices"],
        queryFn:  async()=> {
            const res = await axiosSecure.get("/advice")
            return res.data
        }
    })
    return [advices, refetch]
};

export default UseAdvice;