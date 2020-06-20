import React, { Component } from 'react'
import Header from './Header'
import Banner from './Banner'
import ListItem from './ListItem'
import Footer from './Footer'

export default class BaiTapThucHanhLayout extends Component {
    render() {
        return (
            <div>
                <Header></Header>
                <Banner></Banner>
                <ListItem></ListItem>
                <Footer></Footer>
            </div>
        )
    }
}
