import React, { Component } from "react";
import { Carousel } from 'antd';
export default class SimpleSlider extends Component {
    render() {
        return (
            <div>
                <Carousel autoplay>
                    {this.props.images && this.props.images.map((image, index) => (
                        <div key={index}>
                            <img style={{ width: '100%', maxHeight: '150px' }}
                                src={process.env.NODE_ENV === 'development' ? `http://localhost:5000/${image}` : `https://salty-badlands-71011.herokuapp.com/${image}`}
                                alt="productImage" />
                        </div>
                    ))}
                </Carousel>
            </div>
        );
    }
}