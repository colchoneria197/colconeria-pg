import React,{useEffect} from "react";
import Card from '../Card/card'
import './home.css'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { getAllProducts } from '../../Redux/Actions/get_products';

export default function Home(props){
    const dispatch = useDispatch();
    const products = useSelector( state => state.products)
    const history = useHistory()
    let path = history.location.pathname

    useEffect(() => { 
        if("/") dispatch(getAllProducts());    
        return
    },[dispatch])

    return(
        products[0] && products[0].price ? <div className="homeContainerss">
                        {path === '/' ? <h2 className="homeTitle">Todos los productos</h2> : <h2 className="homeTitle">Resultados de la Busqueda</h2>}

            <div className="homeTable">
                { products.map(a => a.stock < 0 ? null : 
                <Card 
                key={a.id} 
                id={a.id} 
                name={a.name} 
                stock={a.stock} 
                image={a.image} 
                price={a.price}
                peso={a.peso}
                largo={a.largo}
                alto={a.alto}
                ancho={a.ancho}
                description={a.description}
                />) }
                </div>
            </div>
: null)
}