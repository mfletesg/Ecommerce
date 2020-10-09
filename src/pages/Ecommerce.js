import React, { Component, Fragment } from 'react'
import EcommerceContainer from './EcommerceContainer'
//import '../styles/page.css'
//import bestSellingProducts from '../bestSellingProducts.json'
class Ecommerce extends Component {

    constructor(props){
        super(props)
        const customData = require('../bestSellingProducts.json')
        this.state =
    		{
                json : customData,
                reseñasAgrupadas : []

            }
        this.groupReviews()
    }

    async groupReviews(){
        var json = this.state.json
        for (var i = 0; i < json.products.length; i++) {
            this.state.reseñasAgrupadas.push({'id': json.products[i].id, 'stars' : 0 })
        }
        for (var k = 0; k < this.state.reseñasAgrupadas.length; k++) {
            var contador = 0
            for (var j = 0; j < json.reseñas.length; j++) {
                if (json.reseñas[j].id === this.state.reseñasAgrupadas[k].id) {
                    contador++
                    this.state.reseñasAgrupadas[k].stars += json.reseñas[j].stars
                }
            }
            if (contador > 0) {
                this.state.reseñasAgrupadas[k].stars = this.state.reseñasAgrupadas[k].stars / contador
            }
        }
        console.log(this.state.reseñasAgrupadas)
    }

    render(){
        return (
            <Fragment>
                <EcommerceContainer state={this.state}/>
            </Fragment>
        )
    }
}

export default Ecommerce
