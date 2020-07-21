import React from 'react';
import { useParams } from 'react-router-dom';
import fakeData from '../../fakeData';
import ShowProduct from '../ShowProduct/ShowProduct';

const ProductDtls = () => {
    // read the dynamic path (key) by using useParams
    const { productKey } = useParams();

    // find product by productKey form fakeData
    let product = fakeData.find(pd => pd.key === productKey)

    return (
        <div>
            <ShowProduct
                product={product}

            ></ShowProduct>

        </div>
    );
};

export default ProductDtls;