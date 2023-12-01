import { useEffect } from "react"
import useFetch from "../hooks/useFetch"
import getConfigToken from "../utils/getTokenConfig"
import PurchasesCard from "../components/Purchases/PurchasesCard"
import '../components/style/Purchases.css'


const Purcheses = () => {

    const [ purchases, getPurchases ] = useFetch()

    useEffect(() => {
        const url = 'https://e-commerce-api-v2.academlo.tech/api/v1/purchases'
        getPurchases(url, getConfigToken())
    }, [])

    console.log(purchases);

    return (

        <div>
            <h2>My Purchses</h2>
            <div>
                {
                  purchases?.map(infoPurchases => (
                   < PurchasesCard 
                        key = { infoPurchases.id }
                        purchase = { infoPurchases }
                   /> 
                  ))  
                }
            </div>
        </div>
    )
}

export default Purcheses