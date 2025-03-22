export default function Projects() {
    const projects = [
        { 
            name: 'Movie Recommender System', 
            description: 'A system that recommends movies based on user preferences.',
            link: 'https://github.com/kpoornasai121/Movie-Recommender-System'
        },
        { 
            name: 'Laptop Price Estimator', 
            description: 'A tool to estimate laptop prices based on specifications.',
            link: 'https://github.com/kpoornasai121/Movie-Recommender-System'
        },
    ];

    return (
        <section id="projects" style={{ padding: '60px 20px', backgroundColor: '#121212', color: '#ffffff' }}>
            <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
                <h2 style={{ fontSize: '2rem', marginBottom: '20px', color: '#bb86fc' }}>Projects</h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
                    {projects.map((project, index) => (
                        <div key={index} style={{ backgroundColor: '#1e1e1e', padding: '20px', borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)' }}>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '10px', color: '#bb86fc' }}>{project.name}</h3>
                            <p>{project.description}</p>
                            <a href={project.link} target="_blank" rel="noopener noreferrer" style={{ padding: '10px 20px', backgroundColor: '#bb86fc', color: '#121212', textDecoration: 'none', borderRadius: '5px', display: 'inline-block', marginTop: '10px' }}>
                                View Project
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}