export default function Contact() {
    return (
        <section id="contact" style={{ padding: '60px 20px', backgroundColor: '#1e1e1e', color: '#ffffff' }}>
            <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
                <h2 style={{ fontSize: '2rem', marginBottom: '20px', color: '#bb86fc' }}>Let's talk about your project</h2>
                <form style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', textAlign: 'left' }}>
                    {/* Name Field */}
                    <div style={{ gridColumn: '1 / -1' }}>
                        <label style={{ display: 'block', marginBottom: '5px', color: '#bb86fc' }}>Name</label>
                        <input 
                            type="text" 
                            placeholder="Your Name" 
                            style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #333', backgroundColor: '#333', color: '#ffffff' }} 
                        />
                    </div>

                    {/* Email Field */}
                    <div>
                        <label style={{ display: 'block', marginBottom: '5px', color: '#bb86fc' }}>Email</label>
                        <input 
                            type="email" 
                            placeholder="Your Email" 
                            style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #333', backgroundColor: '#333', color: '#ffffff' }} 
                        />
                    </div>

                    {/* Phone Number Field */}
                    <div>
                        <label style={{ display: 'block', marginBottom: '5px', color: '#bb86fc' }}>Phone Number</label>
                        <input 
                            type="tel" 
                            placeholder="Your Phone Number" 
                            style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #333', backgroundColor: '#333', color: '#ffffff' }} 
                        />
                    </div>

                    {/* Message Field */}
                    <div style={{ gridColumn: '1 / -1' }}>
                        <label style={{ display: 'block', marginBottom: '5px', color: '#bb86fc' }}>Message</label>
                        <textarea 
                            placeholder="Your Message" 
                            style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #333', backgroundColor: '#333', color: '#ffffff', height: '150px' }} 
                        />
                    </div>

                    {/* Send Message Button */}
                    <div style={{ gridColumn: '1 / -1', textAlign: 'center' }}>
                        <button 
                            type="submit" 
                            style={{ padding: '10px 20px', backgroundColor: '#bb86fc', color: '#121212', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
                        >
                            Send Message
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
}