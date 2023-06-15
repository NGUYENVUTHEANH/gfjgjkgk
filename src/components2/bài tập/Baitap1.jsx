import React, { Component } from 'react';
import "./Baitap1.css"
import Nhanh1 from './nhanh1'
import Nhanh2 from './nhanh2'

class Baitap1 extends Component {
    render() {
        let a = 3
        let b = 4
        let c = a + b
        return (
            <div>
                <h2>Bài tập 1</h2>
                <div className="head" >
                    <h1>Danh sách khoá học</h1>
                    <ul>
                        <li><b>HTML</b></li>
                        <li><b>Javascrip</b></li>
                        <li><b>Python</b></li>
                        <li><b>C#</b></li>
                    </ul>
                </div>
                <h2>Bài tập 2</h2>
                <div className="">
                    <h3>Tổng của {a} và {b} là: {c}</h3>
                </div>
                <h2>Bài tập 3</h2>
                <div>
                    <h2>Xin chào các bạn !
                    </h2>
                    <h3 className="">Bây giờ là:</h3>
                </div>
                <h2>Bài tập 4</h2>
                <div className="">
                    <section className="h-100 h-custom" style={{ backgroundColor: "#eee" }}>
                        <div className="container py-5 h-100">
                            <div className="row d-flex justify-content-center align-items-center h-100">
                                <div className="col">
                                    <div className="card">
                                        <div className="card-body p-4">
                                            <div className="row">
                                                <Nhanh1 />
                                                <Nhanh2 />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                </div>
                <h2>Bài tập 5</h2>
                <div className="">

                </div>
            </div>
        );
    }
}

export default Baitap1;