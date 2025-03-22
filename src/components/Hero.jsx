export default function Hero() {
    return (
        <section id="home" style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#1e1e1e', color: '#ffffff', textAlign: 'center' }}>
            <div>
                <h1 style={{ fontSize: '3rem', marginBottom: '20px' }}>Welcome to My Portfolio</h1>
                <p style={{ fontSize: '1.2rem', marginBottom: '30px' }}>I build functional Web and App solutions with AI & ML<br />
                Passionate about coding and solving problems</p>
                <a href="#about" style={{ padding: '10px 20px', backgroundColor: '#bb86fc', color: '#121212', textDecoration: 'none', borderRadius: '5px' }}>
                    Learn More
                </a>
            </div>
        </section>
    );
}