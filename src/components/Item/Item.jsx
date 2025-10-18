import "./Item.css";

export const Item = ({name, price, description, imageUrl, children}) => {
  return (
    <article className="product-item">
        <div className="image-container">
          <img className="product-image" src={imageUrl} alt={description}/>
        </div>
        <h2 className="product-title">{name}</h2>
        <p>Precio: ${price}</p>
        <p>Descripcion {description}</p>
        {children}
    </article>
  )
}
