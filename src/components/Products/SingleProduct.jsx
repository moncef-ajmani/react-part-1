export default function SingleProduct(props){
    const {id,name,description,price,images} = props.product
    return (
        <div className="col-4 my-3">
            <div className="card">
                <img src={images[0]?.imageUrl} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{description}</p>
                    <p className="cart-text">Price {price}$</p>
                </div>
            </div>
        </div>
    )
}