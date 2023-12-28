import SingleProduct from "./SingleProduct";
import { useEffect, useState } from "react";
import axios from 'axios'

export default function ProductsList(){
    // state
    // const data = [
    //     {
    //       "id": 1,
    //       "name": "Product 1",
    //       "imageUrl": "https://cdn.discordapp.com/attachments/1189998601028509778/1190024451631349780/pexels-math-90946.jpg?ex=65a04ba2&is=658dd6a2&hm=7f1502dde68e88908ce7bdbb9e776d58874b8f596c9df21ad279c9891f566840&",
    //       "description": "Description for Product 1",
    //       "price": 19.99
    //     },
    //     {
    //       "id": 2,
    //       "name": "Product 2",
    //       "imageUrl": "https://cdn.discordapp.com/attachments/1189998601028509778/1190024451631349780/pexels-math-90946.jpg?ex=65a04ba2&is=658dd6a2&hm=7f1502dde68e88908ce7bdbb9e776d58874b8f596c9df21ad279c9891f566840&",
    //       "description": "Description for Product 2",
    //       "price": 29.99
    //     },
    //     {
    //       "id": 3,
    //       "name": "Product 3",
    //       "imageUrl": "https://example.com/product3.jpg",
    //       "description": "Description for Product 3",
    //       "price": 39.99
    //     },
    //     {
    //       "id": 4,
    //       "name": "Product 4",
    //       "imageUrl": "https://example.com/product4.jpg",
    //       "description": "Description for Product 4",
    //       "price": 49.99
    //     },
    //     {
    //       "id": 5,
    //       "name": "Product 5",
    //       "imageUrl": "https://example.com/product5.jpg",
    //       "description": "Description for Product 5",
    //       "price": 59.99
    //     }
    // ]
    const [data,setData] = useState([])
      
    useEffect(()=>{
        // fetch data from API
        axios.get("http://localhost:8888/PRODUCT-SERVICE/products")
        .then((response)=>{
            setData(response.data)
        })
    },[])

    return (
        <>
            <h5>Products List:</h5>
            <div className="row">
                {data.map(p=>{
                    return(
                        <SingleProduct product={p} key={p.id}/>
                    )
                })}
            </div>
        </>
    )
}