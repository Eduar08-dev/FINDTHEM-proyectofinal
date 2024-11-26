'use client'
import Footer from "@/components/home/Footer"
import Header from "@/components/home/Header"
import SubirPublicaciones from "@/components/publicaciones/SubirPublicaciones"
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