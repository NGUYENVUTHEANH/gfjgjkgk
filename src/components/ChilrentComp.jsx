import React, { Component } from 'react';

class ChilrentComp extends Component {
    //state:
    //State dùng để lưu trữ dữ liệu trong component đó => có thể thay đổi được dữ liệu
    // Để sử dụng được State cần kahi báo lớp bằng constructor 
    //Và sử dụng super để gọi lớp
    //Để cập nhập lại state => sử dụng setState
    constructor() {
        super()
        this.state = {
            studentA: "Anh Vũ",
            question: "Có hay nghỉ ko?",
            anwser: "Có hay ko",
            display: true,
        };
        //this.handleChangeState = this.handleChangeState.bind(this);
    }
    //sử dụng arrow function
    handleChangeState = () => {
        this.setState({
            anwser: "Không nha bạn ơi",
        });
    };



    //sử dụng function thường
    // handleChangeState() {
    //     this.setState({
    //         anwser: "Không nha bạn ơi",
    //     });
    // }


    handleToggleDisplay = () => {
        this.setState({
            display: !this.state.display,
        })
    }
    render() {
        console.log("được re-render");
        return (
            <div>
                <h2>
                    {this.props.titleParent}- Khoá học : {this.props.course}
                </h2>
                <p><h3>{this.props.children}</h3></p>

                <h2>State</h2>
                <p><h3>{this.state.studentA}</h3></p>
                <p>{this.state.question}-{this.state.anwser}</p>
                {/* quy tắc dặt tên:
                Với các hàm xử lý 1 việc j đó => sẽ có tiền tố trước là handle
                Với các hàm xử lý 1 sự kiện j đó => sẽ có tiền tố trước là on 
                */}
                <button onClick={this.handleChangeState}>Click !</button>
                {/* Cập nhập state liên tục */}
                {this.state.display ?
                    (<div>
                        <p><h3>Có ai không ?</h3></p>
                        <p>Không</p>
                        <button onClick={this.handleToggleDisplay}>Click?</button>
                    </div>
                    ) : (<div>
                        <p><h3>Có ai không ???</h3></p>
                        <p>Có mà bạn</p>
                        <button onClick={this.handleToggleDisplay}>click??</button>
                    </div>)}
                {/* bài TH 1 */}
            </div>
        );
    }
}

export default ChilrentComp;