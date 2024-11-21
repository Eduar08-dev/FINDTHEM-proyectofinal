'use client'
import Footer from "@/componentes/home/Footer"
import Header from "@/componentes/home/Header"
import SubirPublicaciones from "@/componentes/publicaciones/SubirPublicaciones"
import Link from "next/link"

export default function publicaciones () {
    return (
        <>
        <Header/>
        <SubirPublicaciones/>
        <Footer/>
        </>
    )
}