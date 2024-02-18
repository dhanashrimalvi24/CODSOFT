import React, { useState } from 'react';
import './Product.css';
import img from '../img.png';

var Product = () => {

    const [products, updateProduct] = useState([]);

    const loadAllproducts = ()=>{
      let data = [
        {
          id:1,
          name:"WATER HEATER",
          img:"https://havells.com/getattachment/7e9ed038-5fc6-40ca-ae60-8df77beab758/Instant-Water-Heater.aspx",
          price: 2345.89
        },{
          id:2,
          name:"OUTDOOR LED",
          img:"https://havells.com/getattachment/3f4a8872-71fb-4c10-a808-a80a10850ee2/Outdoor-LED-Luminaires.aspx",
          price:87688.90
        },{
          id:3,
          name:"CABELS",
          img:"https://havells.com/getattachment/dd8054a4-4046-42ea-9006-8ce4e6ca5a0b/LT-Control-Cables.aspx",
          price:788.90
        }
      ];

      updateProduct(data);
    }

  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter(item => item.id !== productId));
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price, 0);
  };

  return (

    <div className='container'>
      <div className="product-ui-heading">
         <h2 className='heading-title'>Havells</h2>
      </div>
      <div className="body-details">
        <div className="info">
          <p>
          Havells India Limited is an Indian multinational electrical equipment company, based in Noida. It was founded by Haveli Ram Gandhi, later sold to Qimat Rai Gupta who was his distributor. The company manufactures home appliances, lighting for domestic, commercial and industrial applications, LED lighting, fans, modular switches and wiring accessories, water heaters, industrial and domestic circuit protection switchgear, industrial and domestic cables and wires, induction motors, and capacitors among others. Havells owns brands like Havells, Lloyd, Crabtree, Standard Electric, Reo and Promptec.
          </p><br></br><br></br>
          <button onClick={loadAllproducts}>Load All Products</button>
        </div>
      </div>
      <div className='table-div'>   
          <table class="table">
            <thead class="table-dark">
              <tr>
                <th>Product Image</th>
                <th>Product Id</th>
                <th>Product Name</th>
                <th>Product Price</th>
              </tr>
            </thead>
            <tbody>
              {
                
                products.map((product)=>{
                  return <tr>
                      <td><img src={product.img} width="100" height="100"></img></td>
                      <td>{product.id}</td>
                      <td>{product.name}</td>
                      <td>{product.price}</td>
                      <td> <button onClick={() => addToCart(product)}>Add to Cart</button></td>
                    </tr>
                  
                })
                
              }
            </tbody>
          </table>
          </div>

          <div className="cart">
             <img src={img} width="100px" height="100px" />
              {cart.length === 0 ? (
             <p>Your cart is empty</p>
              ) : (
           <ul>
            {cart.map(item => (
              <li key={item.id}>
                {item.name} - {item.price}/-
                <button onClick={() => removeFromCart(item.id)}>Remove</button>
              </li>
            ))}
          </ul>
        )}
        <h3>Total: {getTotalPrice()}/-</h3>
      </div>
    </div>
  ); 
  
}

export default Product;