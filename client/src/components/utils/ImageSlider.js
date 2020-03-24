import React from 'react'
import { Carousel } from 'antd';

function ImageSilder(props) {


    let src= process.env.NODE_ENV === 'development' ? 
    `http://localhost:5000/${image}`
    : `https://salty-badlands-71011.herokuapp.com/${image}`


    return (
        <div>
            <Carousel autoplay>
                {props.images.map((image, index) => (
                    <div key={index}>
                        <img style={{ width: '100%', maxHeight: '150px' }}
                            src={src} alt="productImage" />
                    </div>
                ))}
            </Carousel>
        </div>
    )
}

export default ImageSilder
