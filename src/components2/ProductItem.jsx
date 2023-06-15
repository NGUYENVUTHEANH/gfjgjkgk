import React, { Component } from 'react';

class ProductItem extends Component {
    render() {
        return (
            <div>
                <div className="product_box">
                    <div className="product_img-box">
                        <img src="images/p8.png" alt="" />
                        <span> Sale </span>
                    </div>
                    <div className="product_detail-box">
                        <span> $150.00 </span>
                        <p>Passage of Lorem Ipsum, you</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProductItem;