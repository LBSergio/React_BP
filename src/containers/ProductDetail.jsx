import React from 'react';
import ProductInfo from '@components/ProductInfo';
import '@styles/productDetail.scss';
import close from '@icons/icon_close.png';

const ProductInfo = () => {
    return (
        <aside className='ProductDetail'>
            <div className='ProductDetail-close'>
                <img src={ close } alt='Close'/>
            </div>
            <ProductInfo/>
        </aside>
    );
};

export { ProductInfo };