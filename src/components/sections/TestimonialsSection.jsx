import React from 'react';

const testimonials = [
  {
    id: 1,
    quote: "Beauvapps has revolutionized how we create product listings. We've saved countless hours while increasing our conversion rates by 28% thanks to their AI-generated descriptions.",
    name: "Emily Rodriguez",
    title: "E-commerce Manager at StyleHub",
    image: "https://randomuser.me/api/portraits/women/45.jpg"
  },
  {
    id: 2,
    quote: "The SEO optimization in Beauvapps' descriptions has significantly improved our organic search traffic. Our products are now ranking higher and attracting more customers.",
    name: "David Chen",
    title: "Digital Marketing Director at TechGadgets",
    image: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    id: 3,
    quote: "As a small business owner, I don't have time to write unique descriptions for hundreds of products. Beauvapps has been a game-changer for my Shopify store's efficiency and sales.",
    name: "Sarah Johnson",
    title: "Owner of Organic Blends",
    image: "https://randomuser.me/api/portraits/women/68.jpg"
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-white" id="testimonials">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-in-up">
            What Our Customers Say
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg animate-fade-in-up">
            Join thousands of Shopify merchants who are boosting their sales with Beauvapps' AI description generator.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id} 
              className="bg-gray-50 p-8 rounded-lg shadow-sm animate-fade-in-up relative"
            >
              <svg className="w-12 h-12 text-gray-200 absolute top-4 right-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <p className="text-gray-700 mb-6 relative z-10">"{testimonial.quote}"</p>
              <div className="flex items-center">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = `https://ui-avatars.com/api/?name=${testimonial.name.replace(' ', '+')}&background=random`;
                  }}
                />
                <div>
                  <h4 className="font-semibold text-lg">{testimonial.name}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center justify-center space-x-2">
            <span className="text-yellow-400 text-2xl">★★★★★</span>
            <span className="text-gray-700 font-medium">4.8/5 rating on Shopify App Store</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection; 