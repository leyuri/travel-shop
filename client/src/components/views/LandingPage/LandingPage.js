import React, { useEffect, useState } from 'react'
import Axios from 'axios';
import { Icon, Col, Card, Row } from 'antd';


const { Meta } = Card;

function LandingPage() {


    const [Products, setProducts] = useState([])


    useEffect(() => {

        Axios.post('/api/product/getProducts')
        .then(response => {
            if(response.data.success) {

                setProducts(response.data.products)
                console.log(response.data.products)

            } else {
                alert('Failed to fectch product datas')
            }
        })



    }, [])

    const renderCards = Products.map((product, index) => {

        //하나의 행은 24사이즈, 라지사이즈일 때는 6, 미디움은 8
        return <Col lg={6} md={8} xs={24}>
            <Card
                hoverable={true}
                cover
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


                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <button onClick >Load More</button>
                </div>
    
        </div>
    )
}

export default LandingPage
