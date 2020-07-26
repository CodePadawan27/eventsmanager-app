import React, { Component } from 'react'

export class BannerArea extends Component {
    render() {
        return (
            <div className="banner">
                <div className="bannercontent">
                    <p className="bannertext">Events</p>
                    <p className="bannersubtext">Sign up here to our monthly events</p>
                </div>
            </div>
        )
    }
}

export default BannerArea
