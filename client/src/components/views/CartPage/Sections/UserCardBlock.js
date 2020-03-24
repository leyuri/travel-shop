import React from 'react'

const UserCardBlock = (props) => {




    const renderCartImage = (images) => {
        if(images.length > 0) {
            let image = images[0]
            let src= process.env.NODE_ENV === 'development' ? 
            `http://localhost:5000/${image}`
            : `https://salty-badlands-71011.herokuapp.com/${image}`
        
        
            return src
        }
    }

    const renderItems = () => (
        props.products && props.products.map(product => (
            <tr key={product._id}>
                <td>
                    <img style={{ width: '70px' }} alt="product" 
                    src={renderCartImage(product.images)} />
                </td> 
                <td>{product.quantity} EA</td>
                <td>$ {product.price} </td>
                <td><button 
                
                onClick={()=> props.removeItem(product._id)}
                
                
                >Remove </button> </td>
            </tr>
        ))
    )

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Product Image</th>
                        <th>Product Quantity</th>
                        <th>Product Price</th>
                        <th>Remove from Cart</th>
                    </tr>
                </thead>
                <tbody>
                    {renderItems()}
                </tbody>
            </table>
        </div>
    )
}

export default UserCardBlock
