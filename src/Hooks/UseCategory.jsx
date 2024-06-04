import { useQuery } from "@tanstack/react-query";

const UseCategory = () => {
    const {data: categories=[]} = useQuery({
        queryKey: ["categories"],
        queryFn:  ()=> fetch('/category.json').then(res=> res.json())
    })
    return [categories]
};

export default UseCategory;