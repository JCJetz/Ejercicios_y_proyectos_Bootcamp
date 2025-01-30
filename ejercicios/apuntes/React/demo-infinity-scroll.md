
```js

import { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';


function InfinityScrollDemo() {
    const [items, updateItems] = useState([]);
    const [nextUrl, updateNextUrl] = useState('');
    console.log(items);
    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon/')
        .then(r => r.json())
        .then(p => {
            updateNextUrl(p.next);
            p.results.forEach(e => {
                fetch(e.url)
                .then(r => r.json())
                .then(pokemon => updateItems(prevItems => [...prevItems,pokemon]))
            })
            
        });
    },[])

    const fetchMoreData = () => { 
        console.log('Cargando datos')
        fetch(nextUrl)
        .then(r => r.json())
        .then(p => {
            updateNextUrl(p.next);
            p.results.forEach(e => {
                fetch(e.url)
                .then(r => r.json())
                .then(pokemon => updateItems(prevItems => [...prevItems,pokemon]))
            })
            
        });
    }
    return <div>
        <h1>demo: react-infinite-scroll-component</h1>
        <hr />
        { 
            items.length === 0 
            ? <p>Cargando previo</p>
            : <InfiniteScroll
                style={{ display: 'flex', flexWrap: 'wrap' }}
                dataLength={items.length}
                next={fetchMoreData}
                hasMore={true}
                loader={<h4>Loading...</h4>}
            >
                {items.map((p, index) => (
                    <div key={index}>
                       <img alt='' src={p.sprites.front_default}></img>
                       <p>{p.name}</p>
                    </div>
                ))}
            </InfiniteScroll>
        }
        
    </div>
}


export default InfinityScrollDemo;



///// OTRA COSA ////

import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import Pagination from 'react-bootstrap/Pagination';
import PageItem from 'react-bootstrap/PageItem';
import { useEffect, useState } from "react";

import "./App.css";
const apiKey =
  "live_dFA8LNkyvU1ZO9wx3pI7dkJedCJaQRoL5cyCkBSicIV1tiBxoh3RnIp19bItQVQN";
const url = `https://api.thecatapi.com/v1/images/search?limit=30&size=thumb&api_key=${apiKey}`;


const PaginationComponent = () => {

    let selected = 2;
    let items = [];
    for (let number = 1; number <= 5; number++) {
        items.push(
            <Pagination.Item key={number} active={number === selected}>
                {number}
            </Pagination.Item>,
        );
    }
    
    return (
        <div>
         <Pagination>{items}</Pagination>

        </div>
    )
}

export default PaginationComponent;

{ /*
 return (
        <div>
            <Pagination>{items}</Pagination>
        </div>
    )
*/}