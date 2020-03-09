import React, { useEffect, useState } from 'react'
import Axios from 'axios';
import { Icon, Col, Card, Row } from 'antd';
import ImageSlider from '../../utils/ImageSlider';


const { Meta } = Card;

function LandingPage() {


    const [Products, setProducts] = useState([])

    const [Skip, setSkip] = useState(0)

    const [Limit, setLimit] = useState(8)

    const [PostSize, setPostSize] = useState(0)

    //PostSize = 8 일 때 we neet to show load more button

    useEffect(() => {

        const variables = {
            skip: Skip,
            limit: Limit,
        }

        getProducts(variables)
    }, [])

    const getProducts = (variables) => {
        Axios.post('/api/product/getProducts', variables)
        .then(response => {
            if (response.data.success) {
                if (variables.loadMore) {
                    setProducts([...Products, ...response.data.products])
                } else {
                    setProducts(response.data.products)
                }
                setPostSize(response.data.postSize)
            } else {
                alert('Failed to fectch product datas')
            }
        })

    }


    const onLoadMore = () => {
        let skip = Skip + Limit;

        const variables = {
            skip: skip,
            limit: Limit
        }

        getProducts(variables)

    }

    const renderCards = Products.map((product, index) => {

        //하나의 행은 24사이즈, 라지사이즈일 때는 6, 미디움은 8
        return <Col lg={6} md={8} xs={24}>
            <Card
                hoverable={true}
                cover={<ImageSlider images={product.images}/>}
            >
                <Meta
                    title={product.title}
                    description={`$${product.price}`}
                />
            </Card>
        </Col>
    })



    return (
        <div style={{ width: '75%', margin: '3rem auto' }}>
            <div style={{ textAlign: 'center' }}>
                <h2>  Let's Travel Anywhere  <Icon type="rocket" />  </h2>
            </div>


            {/* Filter  */}

            <Row gutter={[16, 16]}>
                {Products.map((product, index)=> {})}
            {renderCards}
            </Row>

            {/* Search  */}


            {Products.length === 0 ?
                <div style={{ display: 'flex', height: '300px', justifyContent: 'center', alignItems: 'center' }}>
                    <h2>No post yet...</h2>
                </div> :
                <div>


                </div>
            }
            <br /><br />

            {PostSize >= Limit &&
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <button onClick={onLoadMore}>Load More</button>
                </div>
            }

        </div>
    )
}

export default LandingPage
