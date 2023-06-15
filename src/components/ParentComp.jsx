import React, { Component } from 'react';
import ChilrentComp from './ChilrentComp';

class ParentComp extends Component {

    render() {
        const title = "Rikkei";
        return (
            <div>
                <ChilrentComp titleParent={title} course={"ReactJS"}>
                    Time: 15 buổi
                </ChilrentComp>
            </div>
        );
    }
}

export default ParentComp;