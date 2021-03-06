import React, {useEffect, useState} from 'react';
import Header from '../components/Header';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import Footer from '../components/Footer';
import '../assets/styles/App.scss';
import useInitialState from '../hooks/useInitialState';

const API = 'http://localhost:3000/initialState';

const App = () => {
  const initialState = useInitialState (API);
  console.log (initialState);
  return initialState.length == 0
    ? <h1>Loading...</h1>
    : <div className="App">
        <Header />
        <Search />
        <Categories title="Mi lista">
          {initialState.mylist.length > 0 &&
            <Carousel>
              <CarouselItem />
            </Carousel>}
        </Categories>

        <Categories title="Tendencias">
          <Carousel>
            {initialState.trends.map (item => {
              <CarouselItem key={item.id} {...item} />;
            })}
          </Carousel>
        </Categories>

        <Categories title="Originales de Platzi">
          <Carousel>
            {initialState.originals.map (item => {
              <CarouselItem key={item.id} {...item} />;
            })}
          </Carousel>
        </Categories>
        <Footer />
      </div>;
};

export default App;
