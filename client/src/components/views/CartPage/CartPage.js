import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import {getCartItems} from '../../../_actions/user_actions';
import UserCardBlock from './Sections/UserCardBlock';
import { Result, Empty } from 'antd';

function CartPage(props) {

    const dispatch = useDispatch();

    useEffect(() => {

        let cartItems = [];
        if (props.user.userData && props.user.userData.cart) {
            if (props.user.userData.cart.length > 0) {
                props.user.userData.cart.forEach(item => {
                    cartItems.push(item.id)
                });
                dispatch(getCartItems(cartItems, props.user.userData.cart))

            }
        }

    }, [props.user.userData])

    return (
        <div style={{ width: '85%', margin: '3rem auto' }}>
            <h1>My Cart</h1>

            <UserCardBlock />

            <div style={{ marginTop: '3rem' }}>
                <h2>Total amount: $ </h2>
            </div>

            <Result
                status="success"
                title="Successfully Purchased Items"
            /> :
            <div style={{
                width: '100%', display: 'flex', flexDirection: 'column',
                justifyContent: 'center'
            }}>
                <br />
                <Empty description={false} />
                <p>No Items In the Cart</p>
            </div>
        </div>
    )
}

export default CartPage
