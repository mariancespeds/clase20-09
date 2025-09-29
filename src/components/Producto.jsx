import React from 'react'
import '../statics/css/MisComponentes.css'

function Producto(props) {
  const { name, price, discount, category } = props

  const discountedPrice = discount ? price - (price * discount / 100) : null

  return (
    <div className="product">
      <h3>{name}</h3>
      <span className="category">{category}</span>
      
      <div>
        {discount ? (
          <>
            <span className="original-price">${price.toFixed(2)}</span>
            <span className="discounted-price">${discountedPrice.toFixed(2)}</span>
            <span className="discount-badge">-{discount}%</span>
          </>
        ) : (
          <span className="discounted-price">${price.toFixed(2)}</span>
        )}
      </div>
    </div>
  )
}

export default Producto