import React from 'react'
import styled from 'styled-components';

const MiddleCard = () => {
    const categories = [
        { name: 'Bed', count: 65 },
        { name: 'Iron', count: 65 },
        { name: 'Drapes', count: 65 },
        { name: 'Bed', count: 65 },
        { name: 'Iron', count: 65 },
        { name: 'Drapes', count: 65 },
        { name: 'Bed', count: 65 },
        { name: 'Iron', count: 65 },
        { name: 'Drapes', count: 65 },
    ];
  return (
    <Main>
         <div className="app">
            <div className="header">
                <h1>Categories <span className="category-count">56</span></h1>
                <button className="add-category-button">+Add Category</button>
            </div>
            <div className="categories">
                {categories.map((category, index) => (
                    <div className="category-card" key={index}>
                        <div className="category-name">{category.name}</div>
                        <div className="category-count">{category.count}</div>
                        <div className="category-arrow">→</div>
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
    margin: 10px;
    border-radius: 10px;
    width: 80%;
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

.header .category-count {
    color: #ffec24;
}

.add-category-button {
    background-color: #00aaff;
    border: none;
    border-radius: 5px;
    padding: 10px 10px; 
    color: white;
    cursor: pointer;
    font-size: 14px;
}

.categories {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
}

.category-card {
    background-color: #303030;
    border-radius: 10px;
    padding: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
}

.category-card .category-name {
    font-size: 14px;
}

.category-card .category-count {
    font-size: 14px;
    font-weight: bold;
}

.category-card .category-arrow {
    font-size: 20px;
}

`;
export default MiddleCard
