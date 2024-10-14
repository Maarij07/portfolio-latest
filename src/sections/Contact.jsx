import React, { useRef, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import emailjs from '@emailjs/browser'

const Contact = () => {
    const formRef = useRef();
    const [loading, setLoading] = useState(false);
    const [form, setForm] = useState({
        name: '',
        email: '',
        message: ""
    });

    // Media Query to detect mobile screen size (max-width 768px)
    const isMobile = useMediaQuery({ maxWidth: 768 });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try{
            await emailjs.send('service_yfquyur','template_iqjhjct',{
                from_name: form.name,
                to_name:'Maarij',
                from_email:form.email,
                to_email:'syedmuhammadmaarij@gmail.com',
                message:form.message
            },'mcTvARRlxJjvly4oe')
            setLoading(false);
            alert('Your message has been sent');
            setForm({name:'',email:'',message:''});
        }catch(error){
            setLoading(false);
            alert('An error has occurred');
            console.log(error);
        }
    }

    return (
        <section className='c-space my-20' id='contact'>
            <div className="relative min-h-screen flex flex-col items-center justify-center">
                {/* Conditional Background for Desktop Only */}
                {!isMobile && (
                    <img
                        src="/assets/terminal.png"
                        alt="terminal background"
                        className='absolute inset-0 w-full h-full object-cover z-0'
                    />
                )}

                {/* Contact Form Container */}
                <div
                    className={`contact-container relative z-10 ${
                        isMobile ? 'bg-black' : 'bg-transparent'
                    } bg-opacity-70 p-8 rounded-xl max-w-lg w-full sm:w-3/4`}
                >
                    <h3 className='head-text text-center text-white'>Let's Talk</h3>
                    <p className='text-lg text-white-600 mt-3 text-center'>
                        Whether you're looking to build a new website, improve your existing platform, or bring a unique project to life, I'm here to help you.
                    </p>
                    <form ref={formRef} onSubmit={handleSubmit} className='mt-12 flex flex-col space-y-5'>
                        <label className='space-y-3'>
                            <span className='field-label text-white'>Full Name</span>
                            <input
                                type="text"
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                required
                                className='field-input w-full p-3 rounded-lg bg-gray-800 text-white outline-none border-none'
                                placeholder='John Doe'
                            />
                        </label>
                        <label className='space-y-3'>
                            <span className='field-label text-white'>Email</span>
                            <input
                                type="email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                required
                                className='field-input w-full p-3 rounded-lg bg-gray-800 text-white outline-none border-none'
                                placeholder='johndoe@gmail.com'
                            />
                        </label>
                        <label className='space-y-3'>
                            <span className='field-label text-white'>Your Message</span>
                            <textarea
                                name="message"
                                value={form.message}
                                onChange={handleChange}
                                required
                                className='field-input w-full p-3 rounded-lg bg-gray-800 text-white outline-none border-none'
                                rows={5}
                                placeholder="Hi, I'm interested in ..."
                            />
                        </label>
                        <button
                            className='field-btn w-full py-3 rounded-lg bg-green-500 hover:bg-green-600 text-white text-lg flex justify-center items-center'
                            type="submit"
                            disabled={loading}
                        >
                            {loading ? 'Sending...' : 'Send Message'}
                            <img src="/assets/arrow-up.png" className='ml-2 w-4 h-4' alt="arrow-up" />
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact;
