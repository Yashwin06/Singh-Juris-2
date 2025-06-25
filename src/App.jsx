import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Home() {
  const [formData, setFormData] = useState({ name: "", phone: "", email: "", date: "", time: "", message: "" });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Booking received! You'll get a WhatsApp & Email confirmation shortly.");
  };

  return (
    <div className="min-h-screen font-sans bg-gray-50 text-gray-800">
      <header className="bg-white shadow py-4 px-6 flex justify-between items-center">
        <h1 className="text-xl font-bold text-blue-900">Singh & Juris Partners</h1>
        <p className="text-sm text-gray-600">High Court, Lucknow | AOR & Senior Panel Counsel</p>
      </header>

      <motion.section className="text-center py-10 px-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <h2 className="text-3xl md:text-5xl font-bold text-blue-900">Your Justice, Our Commitment</h2>
        <p className="mt-4 text-lg text-gray-600">Expertise in Service Law, Civil Disputes, Criminal Defense & Constitutional Matters</p>
        <button
          className="mt-6 px-6 py-2 bg-blue-700 text-white rounded-2xl hover:bg-blue-800"
          onClick={() => document.getElementById("booking").scrollIntoView({ behavior: "smooth" })}
        >
          Book a Consultation
        </button>
      </motion.section>

      <section className="py-8 px-4">
        <h3 className="text-2xl font-semibold text-blue-800 mb-4">Practice Areas</h3>
        <div className="grid md:grid-cols-3 gap-4">
          {["Service Matters", "Civil Disputes", "Criminal Law", "Constitutional Law", "Arbitration"].map((area) => (
            <div key={area} className="p-4 bg-white rounded-2xl shadow">
              <h4 className="font-semibold text-blue-700 text-lg">{area}</h4>
              <p className="text-sm text-gray-600 mt-2">
                {area === "Service Matters" && "Writs, CAT, Promotions, Suspensions"}
                {area === "Civil Disputes" && "Property, Recovery, Injunctions"}
                {area === "Criminal Law" && "Bail, Appeals, NDPS, POCSO"}
                {area === "Constitutional Law" && "PILs, Art. 226/227, FRs"}
                {area === "Arbitration" && "Contractual & Institutional Arbitration"}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-8 px-4">
        <h3 className="text-2xl font-semibold text-blue-800 mb-4">Our Team</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-4 rounded-2xl shadow">
            <h4 className="text-blue-700 font-bold">Shri Raj Kumar Singh</h4>
            <p className="text-sm text-gray-700">Senior Panel Counsel, Union of India | 30+ yrs experience | Service & Civil Law Expert</p>
          </div>
          <div className="bg-white p-4 rounded-2xl shadow">
            <h4 className="text-blue-700 font-bold">Yashwin Singh</h4>
            <p className="text-sm text-gray-700">AOR, High Court Lucknow | LL.B. (Hons.), GGSIPU | Criminal & Constitutional Law Specialist</p>
          </div>
        </div>
      </section>

      <section id="booking" className="py-10 px-4">
        <h3 className="text-2xl font-semibold text-blue-800 mb-4">Book a Consultation</h3>
        <form onSubmit={handleSubmit} className="space-y-4 max-w-xl">
          <input name="name" type="text" placeholder="Your Name" onChange={handleChange} required className="w-full p-2 border rounded" />
          <input name="phone" type="tel" placeholder="Phone Number" onChange={handleChange} required className="w-full p-2 border rounded" />
          <input name="email" type="email" placeholder="Email Address" onChange={handleChange} required className="w-full p-2 border rounded" />
          <input name="date" type="date" onChange={handleChange} required className="w-full p-2 border rounded" />
          <input name="time" type="time" onChange={handleChange} required className="w-full p-2 border rounded" />
          <textarea name="message" placeholder="Your query..." onChange={handleChange} className="w-full p-2 border rounded"></textarea>
          <button type="submit" className="px-4 py-2 bg-blue-700 text-white rounded hover:bg-blue-800">Submit</button>
        </form>
      </section>

      <section className="py-10 px-4">
        <h3 className="text-2xl font-semibold text-blue-800 mb-4">Contact & Office Hours</h3>
        <ul className="text-gray-700 space-y-2">
          <li><strong>Phone:</strong> 7905317004, 0522-3139696</li>
          <li><strong>Email:</strong> advyashwin.in@gmail.com, contact@singhjuris.com</li>
          <li><strong>Morning:</strong> A-306, Advocate Chambers, High Court Lucknow</li>
          <li><strong>Govt Office:</strong> A.S.G.I Office, Ground Floor (10:30–4:30)</li>
          <li><strong>Evening:</strong> 3/140 Vikalp Khand-3, Gomti Nagar (6:00–10:00 PM)</li>
        </ul>
      </section>

      <footer className="text-center text-sm text-gray-500 py-6 border-t">
        © 2025 Singh & Juris Partners | This website does not constitute legal advice.
      </footer>
    </div>
  );
}
