import { useQuery } from "@tanstack/react-query";


const UseAdvice = () => {
    const {data: advices=[]} = useQuery({
        queryKey: ["advices"],
        queryFn:  ()=> fetch('/advice.json').then(res=> res.json())
    })
    return [advices]
};

export default UseAdvice;