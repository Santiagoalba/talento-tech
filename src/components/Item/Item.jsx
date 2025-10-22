import "./Item.css";

export const Item = ({name, price, description, imageUrl, children}) => {
  return (
    <article className="product-item">
        <div className="image-container">
          <img className="product-image" src={imageUrl} alt={description}/>
        </div>
        <div className="info-container">
          <h2 className="product-title">{name}</h2>
          <p className="product-price">${price}</p>
          <p className="product-description">{description}</p>
          {children}
        </div>
    </article>
  )
}
