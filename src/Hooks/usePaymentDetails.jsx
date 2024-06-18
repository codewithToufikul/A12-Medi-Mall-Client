import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const usePaymentDetails = () => {
    const axiosSecure = useAxiosSecure()
    const {data: payments=[]} = useQuery({
        queryKey: ["payments"],
        queryFn:  async()=> {
            const res = await axiosSecure.get("/payment-history")
            return res.data
        }
    })
    return [payments]
};

export default usePaymentDetails;