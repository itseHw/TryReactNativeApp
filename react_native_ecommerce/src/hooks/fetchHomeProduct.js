import { useEffect, useState } from "react";

const localProductList = [
    {
        id: "1A",
        title: "Chair",
        price: "$50",
        path: require("../../assets/images/chair01.png"),
    },
    {
        id: "1B",
        title: "Strong light",
        price: "$120",
        path: require("../../assets/images/light01.png"),
    },
    {
        id: "1C",
        price: "$3000",
        title: "4K Monitor",
        path: require("../../assets/images/monitor01.png"),
    },
    {
      id: "1D",
      title: "Table",
      price: "$70",
      path: require("../../assets/images/table01.png"),
    },
];

const fetchHomeProduct = () =>{
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);

    const fetchData = async () => {
        try{
            setIsLoading(true);
            
            const timer = new Promise((resolve) => {
                setTimeout( () => {
                    resolve("Product 1", "Product 2", "Product 3", "Product 4")
                },3000);
                return () => clearTimeout(timer);
            });

            const result = await timer;
            setData(localProductList);
            setIsLoading(false);

        }catch(error){
            setError(error);
        }finally{
            setIsLoading(false);
        }
    }

    useEffect(() =>{
        fetchData();
    },[]);

    return { data, isLoading, error }
}

export default fetchHomeProduct;

