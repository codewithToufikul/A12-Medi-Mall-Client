import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const UseCategory = () => {
    const axiosSecure = useAxiosSecure()
    const {data: categories=[]} = useQuery({
        queryKey: ["categories"],
        queryFn:  async()=> {
            const res = await axiosSecure.get("/category")
            return res.data
        }
    })
    return [categories]
};

export default UseCategory;