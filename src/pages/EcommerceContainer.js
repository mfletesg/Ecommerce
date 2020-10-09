import React, {  Fragment } from 'react'
import NavBar from '../components/NavBar'
import NavTitle from '../components/NavTitle'
import CategoryBar from '../components/CategoryBar'
import Carousel from '../components/Carousel'
import ThreeCards from '../components/ThreeCards'
import TwoCards from '../components/TwoCards'
import SubTitle from '../components/SubTitle'
import GiftsCards from '../components/GiftsCards'
import CardCarousel from '../components/CardCarousel'
import PartnersBar from '../components/PartnersBar'
import Footer from '../components/Footer'

import '../styles/page.css'

function EcommerceContainer({state}){

    return(
        <Fragment>
            <NavBar />
            <NavTitle />
            <CategoryBar />
            <Carousel />
            <ThreeCards />
            <TwoCards />
            <SubTitle title="BEST SELLING FLOWERS & GIFTS"/>
            <GiftsCards products={state.json.products} reseñas={state.reseñasAgrupadas}/>
            <SubTitle title="EXCLUSIVE OFFERS"/>
            <CardCarousel />
            <PartnersBar />
            <Footer />
        </Fragment>
    )
}

export default EcommerceContainer
