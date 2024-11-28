import React from 'react';
import CardNosotros from '../../componentes/CardNosotros/page';
import Navbar from '../../componentes/Navbar/page';
import Footer from '../../componentes/Footer';

export default function Nosotros() {
    return (
        <>
        <Navbar/>
        <div className='flex justify-evenly w-full mt-4 h-2/4'>
        <div>
        <CardNosotros/>

        </div>
        <div>
        <CardNosotros/>
        </div>
        <div>

        <CardNosotros/>
        </div>

        </div>

        <Footer/>
        </>
    )
}
