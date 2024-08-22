import React from 'react'
import styled from 'styled-components'

const LastCard = () => {
    const orders = [
        { name: 'Neelkamal double bed', quantity: 245, price: '₹ 4,526' },
        { name: 'Neelkamal double bed', quantity: 245, price: '₹ 4,526' },
        { name: 'Neelkamal double bed', quantity: 245, price: '₹ 4,526' },
    ];
  return (
    <Main>
        <div className="app">
            <div className="header">
                <h1>Orders</h1>
            </div>
            <div className="orders">
                {orders.map((order, index) => (
                    <div className="order-card" key={index}>
                        <div className="order-name">{order.name}</div>
                        <div className="order-quantity">{order.quantity}</div>
                        <div className="order-price">{order.price}</div>
                        <button className="details-button">Details</button>
                    </div>
                ))}
            </div>
        </div>
    </Main>
  )
}
const Main = styled.div`

.app {
    padding: 20px;
    background-color: #141414;
    width: 400px;
    border-radius: 10px;
    margin: 10px;
}

.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
}

.header h1 {
    font-size: 14px;
}

.orders {
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.order-card {
    background-color: #303030;
    border-radius: 10px;
    padding: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
}

.order-card .order-name {
    font-size: 14px;
}

.order-card .order-quantity {
    font-size: 14px;
    font-weight: bold;
}

.order-card .order-price {
    font-size: 14px;
    color: #00aaff;
}

.details-button {
    background-color: transparent;
    border: 1px solid #00aaff;
    border-radius: 5px;
    padding: 5px 10px;
    color: #00aaff;
    cursor: pointer;
    font-size: 14px;
}

`;
export default LastCard
