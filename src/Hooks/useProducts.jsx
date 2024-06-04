import { useQuery } from "@tanstack/react-query";

const useProducts = () => {
    const {data: products=[]} = useQuery({
        queryKey: ["products"],
        queryFn:  ()=> fetch('/products.json').then(res=> res.json())
    })
    return [products]
};

export default useProducts;