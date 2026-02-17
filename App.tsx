import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { MenuSection } from './components/MenuSection';
import { Specialty } from './components/Specialty';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-paper text-coffee-dark">
      <Navbar />

      <main className="flex-grow">
        <section id="home">
          <Hero />
        </section>

        <section id="about" className="py-20 px-4 md:px-8 max-w-6xl mx-auto">
          <About />
        </section>

        <section id="specialty" className="py-20 px-4 md:px-8 bg-white">
          <Specialty />
        </section>

        <section id="menu" className="py-20 px-4 md:px-8 bg-coffee-dark/5">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-accent tracking-widest uppercase text-sm font-bold">Menu</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 text-coffee-dark">お品書き</h2>
              <p className="mt-4 text-coffee-light">一杯一杯、心を込めて淹れております。</p>
            </div>

            <MenuSection />
          </div>
        </section>

        <section id="access" className="py-20 px-4 md:px-8 max-w-6xl mx-auto">
           <div className="bg-coffee-dark text-paper rounded-2xl p-8 md:p-12 shadow-xl overflow-hidden relative">
              <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl font-bold mb-6">店舗情報</h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-accent text-sm font-bold uppercase mb-1">Address</h3>
                      <p>〒700-0066<br/>岡山県岡山市北区下伊福上町3-1</p>
                    </div>
                    <div>
                      <h3 className="text-accent text-sm font-bold uppercase mb-1">Hours</h3>
                      <p>モーニング - ランチタイム営業<br/>※ 詳しい営業時間はSNS等でご確認ください</p>
                    </div>
                    <div>
                      <h3 className="text-accent text-sm font-bold uppercase mb-1">Contact</h3>
                      <p>cafe-rituki@outlook.jp</p>
                    </div>
                  </div>
                </div>
                <div className="h-64 md:h-full min-h-[300px] bg-coffee-light/20 rounded-lg overflow-hidden relative">
                   <img
                    src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=800&q=80"
                    alt="Cafe Atmosphere"
                    className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity duration-500"
                   />
                </div>
              </div>
           </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
