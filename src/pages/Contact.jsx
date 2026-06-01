import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import ScrollReveal from '../components/ui/ScrollReveal';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('idle'); // 'idle' | 'submitting' | 'success' | 'error'

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      const response = await fetch('https://formspree.io/f/mdoqpjwd', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-12">
      
      {/* Title */}
      <section className="text-center max-w-2xl mx-auto space-y-4">
        <ScrollReveal direction="down">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-indigo-400">Contact Us</h2>
        </ScrollReveal>
        <ScrollReveal direction="up" delay={0.1}>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gradient">
            Let's start a conversation
          </h1>
        </ScrollReveal>
        <ScrollReveal direction="up" delay={0.2}>
          <p className="text-zinc-400">
            Have a project idea, branding inquiry, or looking to collaborate? Drop us a message below.
          </p>
        </ScrollReveal>
      </section>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Info Column */}
        <div className="lg:col-span-4 space-y-6">
          <ScrollReveal direction="right">
            <Card glow className="border-zinc-800/80 p-8 space-y-8">
              <div>
                <h3 className="text-lg font-bold text-zinc-100 tracking-tight">Contact Information</h3>
                <p className="text-xs text-zinc-400 mt-2 leading-relaxed">
                  Reach out to us directly or fill in the form. We normally respond within 24 hours.
                </p>
              </div>

              <div className="space-y-6 pt-4 border-t border-zinc-800/50">
                <div className="flex items-start space-x-3.5 group">
                  <div className="w-10 h-10 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-indigo-400 shrink-0">
                    <Phone className="w-4.5 h-4.5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-500">Phone</h4>
                    <p className="text-sm text-zinc-300 font-medium mt-1 hover:text-indigo-400 transition-colors">
                      (+94) 76 30 38 075
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3.5 group">
                  <div className="w-10 h-10 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-indigo-400 shrink-0">
                    <Mail className="w-4.5 h-4.5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-500">Email</h4>
                    <p className="text-sm text-zinc-300 font-medium mt-1 hover:text-indigo-400 transition-colors">
                      hello@isharabandara.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3.5">
                  <div className="w-10 h-10 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-indigo-400 shrink-0">
                    <MapPin className="w-4.5 h-4.5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-500">Address</h4>
                    <p className="text-xs text-zinc-400 leading-relaxed mt-1.5">
                      "Purasanda",<br />
                      Bibiligamuwa, Bogahakumbura,<br />
                      (90354) Sri Lanka.
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </ScrollReveal>
        </div>

        {/* Form Column */}
        <div className="lg:col-span-8">
          <ScrollReveal direction="left">
            <Card className="border-zinc-800/80 p-8 md:p-10">
              <h3 className="text-xl font-bold text-zinc-100 mb-6 tracking-tight">How Can We Help You?</h3>
              
              {status === 'success' ? (
                <div className="bg-indigo-500/10 border border-indigo-500/20 rounded-xl p-8 text-center space-y-4">
                  <div className="w-12 h-12 rounded-full bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center mx-auto text-indigo-400">
                    <CheckCircle className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-white">Message Sent Successfully!</h4>
                  <p className="text-zinc-400 text-sm max-w-sm mx-auto leading-relaxed">
                    Thank you for reaching out. We have received your inquiry and will be in touch shortly.
                  </p>
                  <Button onClick={() => setStatus('idle')} variant="outline" size="sm" className="mt-4">
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {status === 'error' && (
                    <div className="bg-rose-500/10 border border-rose-500/20 text-rose-400 rounded-lg p-4 text-xs font-semibold flex items-center space-x-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>Oops! Something went wrong while sending your message. Please try again.</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-xs font-bold uppercase tracking-wider text-zinc-500">
                        Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Saman Kumara"
                        className="w-full bg-zinc-950 border border-zinc-850 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 rounded-lg px-4 py-3 text-sm text-zinc-100 placeholder:text-zinc-700 outline-none transition-all duration-300"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="email" className="text-xs font-bold uppercase tracking-wider text-zinc-500">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="saman@example.com"
                        className="w-full bg-zinc-950 border border-zinc-850 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 rounded-lg px-4 py-3 text-sm text-zinc-100 placeholder:text-zinc-700 outline-none transition-all duration-300"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-xs font-bold uppercase tracking-wider text-zinc-500">
                      Tell us about your project
                    </label>
                    <textarea
                      name="message"
                      id="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      placeholder="Hello, I'd like to schedule a development consultation for our web application..."
                      className="w-full bg-zinc-950 border border-zinc-850 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 rounded-lg px-4 py-3 text-sm text-zinc-100 placeholder:text-zinc-700 outline-none transition-all duration-300 resize-none"
                    />
                  </div>

                  <div className="flex justify-end pt-2">
                    <Button 
                      type="submit" 
                      variant="primary" 
                      className="w-full sm:w-auto"
                      disabled={status === 'submitting'}
                    >
                      {status === 'submitting' ? (
                        <span>Sending Message...</span>
                      ) : (
                        <>
                          <span>Send Message</span>
                          <Send className="w-4 h-4 ml-2" />
                        </>
                      )}
                    </Button>
                  </div>
                </form>
              )}
            </Card>
          </ScrollReveal>
        </div>

      </div>

    </div>
  );
}
