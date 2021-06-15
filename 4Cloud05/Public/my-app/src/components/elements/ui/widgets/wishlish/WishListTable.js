export default function WishListTable(){
    // 밑에 부분을 한번더 모듈화해서 위젯으로 만들어서 여기저기 사용해보자
    return(
        <div className="row">
            <div className="col-12">
                <div className="table-content table-responsive cart-table-content">
                    <table>
                        <thead>
                            <tr>
                                <th>Image</th>
                                <th>Product Name</th>
                                <th>Unit Price</th>
                                <th>Add To Cart</th>
                                <th>action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="product-thumbnail"><a href="/product/2"><img className="img-fluid" src="../fashion/2.jpg" alt=""/></a></td>
                                <td className="product-name text-center"><a href="/product/2">Lorem ipsum coat</a></td>
                                <td className="product-price-cart"><span className="amount old">$18.50</span><span className="amount">$15.72</span></td>
                                <td className="product-wishlist-cart"><a href="/product/2">Select option</a></td>
                                <td className="product-remove"><button><i className="fa fa-times"></i></button></td>
                            </tr>
                            {/* 반복 */}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}