import React, { useState, useEffect } from 'react';

const testimonials = [
  "Camila me ajudou a superar muitos desafios.",
  "Uma profissional incrível, sempre atenciosa e dedicada.",
  "Recomendo para quem busca acolhimento e profissionalismo.",
  "A terapia mudou minha vida para melhor. Sou muito grato!"
];

const TestimonialsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 3000); // Troca a cada 5 segundos

    return () => clearInterval(interval); // Limpa o intervalo quando o componente é desmontado
  }, []);

  return (
    <section id="testimonials" className="carousel">
      <h2>O que dizem os pacientes</h2>
      <div className="carousel-container">
        <p className="carousel-item">{testimonials[currentIndex]}</p>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;
