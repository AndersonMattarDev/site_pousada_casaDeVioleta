import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import GallerySection from './components/GallerySection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'
import FloatingButtons from './components/FloatingButtons'

export default function App() {
  return (
    <div className="min-h-screen flex flex-col scroll-smooth relative">
      <Navbar />
      <main className="flex-1">
        <section id="home"><Hero /></section>
        <section id="galeria" className="pt-24"><GallerySection /></section>
        <section id="contato" className="pt-24"><ContactSection /></section>
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  )
}
