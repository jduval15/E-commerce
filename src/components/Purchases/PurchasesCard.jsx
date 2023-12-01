import '../style/PurchasesCard.css'

const PurchasesCard = ({ purchase }) => {

  return (
    <article  className='purchase'>
        <header className="purchase__header">
            <img src={purchase.product.images[0].url} alt="" />
        </header>
        <h3 className='purchase__title'>{purchase.product.title}</h3>
        <span className='purchase__quantity'>{purchase.quantity}</span>
        <div className='purchase__price'>{purchase.product.price}</div>
    </article>
  )
}

export default PurchasesCard
