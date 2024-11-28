import React from 'react';
import Card from '../../componentes/Modulos/Cards/page';
import Navbar from '../../componentes/Navbar/page';
import Footer from '../../componentes/Footer';

export default function Nosotros() {
    return (
        <>
        <Navbar/>
        <div className="container w-full flex flex-center justify-evenly">
            <Card/>
            <Card/>
            <Card/>
        </div>
        <Footer/>
        </>
    )
}
