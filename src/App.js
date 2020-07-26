import React from 'react'
import MainArea from './components/MainArea'
import AdvertArea from './components/AdvertArea'
import FooterArea from './components/FooterArea'
import BannerArea from './components/BannerArea'
import ContentArea from './components/ContentArea'

class App extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <BannerArea />
                    <ContentArea />              
                    <MainArea />
                </div>
            <AdvertArea />
            <FooterArea />
            </div>

        )
    }
}

export default App