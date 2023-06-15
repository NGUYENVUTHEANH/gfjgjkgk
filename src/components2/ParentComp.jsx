import React, { Component } from 'react';
import FooterPage from './FooterPage'
import HeaderPage from './HeaderPage'
import InfoSection from './InfoSection'
import SignSection from './SignSection'
import FindSection from './FindSection'
import ClientSection from './ClientSection'
import InfoSection2 from './InfoSection2'
import SignSection2 from './SignSection2'

class ParentComp extends Component {
    render() {
        return (
            <div>
                ParentComp
                <HeaderPage />
                {/* detail section */}
                <SignSection />
                {/* end detail section */}
                {/* products section */}
                <InfoSection />
                {/* end products section */}
                {/* find section */}
                <InfoSection2 />
                {/* end find section */}
                {/* client section */}
                <ClientSection />
                {/* end client section */}
                {/* sign section */}
                <SignSection2 />
                {/* end sign section */}
                {/* info section */}
                <FindSection />
                {/* end info section */}
                {/* footer section */}
                <FooterPage />
                {/* footer section */}
            </div>

        );
    }
}

export default ParentComp;