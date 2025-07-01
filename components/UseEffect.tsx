"use client"
import { useEffect, useState } from "react"


type Product = {
    id: number;
    title: string;
    description: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    brand: string;
    category: string;
}

const UseEffect = () => {

    const [data, setData] = useState< Product | null >(null);

    useEffect(()=>{
        const fetchData = async () => {
            try {
                const response = await fetch("https://dymmyjson.com/product/1/")
                const result = await response.json()
                setData(result);
            } catch (error) {
               console.error(`Error fetching data: ${ error }`)

            }
        };

        fetchData()
    },[]);

  return (
    <div>
      {data? (
        <div>
            <p>ID: { data.id } </p>
            <p>ID: { data.title } </p>
            <p>ID: { data.description } </p>
            <p>ID: { data.price } </p>
            <p>ID: { data.discountPercentage } </p>
            <p>ID: { data.rating } </p>
            <p>ID: { data.stock } </p>
            <p>ID: { data.brand } </p>
            <p>ID: { data.category } </p>

        </div>
      ):( 
        <p>Loading ...</p>
       ) }
    </div>
  )
}

export default UseEffect
