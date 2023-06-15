//rcc
import React, { Component } from 'react';

class DemoJSX extends Component {
    render() {
        const greeting = "hello"
        const people = {
            name: "thế anh",
            course: " ReactJS",
        }
        return (
            <div>
                {/* {lưu ý:
                +class=> className
                +các thuộc tính sẽ được viết theo camelCase ví dụ: background-color=> backgroundColor}
                +các sự kiện cũng sẽ viết theo camelCase ví dụ: onclick=>onClick, onchange=> onChange
                 */}
                {/* {phép nội suy trong jsx} */}
                <h2 style={{ backgroundColor: "pink", color: "white" }}
                    className='container'
                >{greeting}</h2>
                <p>studentName:{people.name}-Khoá học:{people.course}</p>
            </div>
        );
    }
}

export default DemoJSX;