import React from 'react';
import Header from './base/header';
import Footer from './base/Footer';
import Movies from "./Movies";
// import MainCarousel from "./MainCarousel";
export default class App extends React.Component{
    render(){
        return(
        <div>
            <Header/>
            {/* <MainCarousel /> */}
            <Movies />
            <Footer/>
        </div>
        )

    }
}