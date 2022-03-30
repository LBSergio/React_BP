import React from 'react';
import ProductInfo from '@components/ProductInfo';
import '@styles/productDetail.scss';

const ProductInfo = () => {
    return (
        <aside className='ProductDetail'>
            <div className='ProductDetail-close'>
                <img src='@icons/icon_close.png' alt='Close'/>
            </div>
            <ProductInfo/>
        </aside>
    );
};

export { ProductInfo };