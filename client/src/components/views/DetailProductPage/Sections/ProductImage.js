import React, { useEffect, useState } from 'react'
import ImageGallery from 'react-image-gallery';

function ProductImage(props) {

    const [Images, setImages] = useState([])

    useEffect(() => {

        if(props.detail.images && props.detail.images.length > 0) {
            let images = [];
            //여러개의 이미지를 넣어야 하기 때문에 배열

            let src= process.env.NODE_ENV === 'development' ? 
            `http://localhost:5000/${item}`
            : `https://salty-badlands-71011.herokuapp.com/${item}`
        
        
            props.detail.images && props.detail.images.map(item => {
                images.push({
                    original: src,
                    thumbnail: src
                })
            })


            setImages(images)
        }



   
    }, [props.detail])


    return (
        <div>

            {/* 3개의 이미지를 map해야 한다! */}
            <ImageGallery items={Images} />
        </div>
    )
}

export default ProductImage
