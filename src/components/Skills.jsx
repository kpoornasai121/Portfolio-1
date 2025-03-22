export default function Skills() {
    const skills = [
      {
        category: 'Programming Languages',
        items: ['Python', 'Java', 'SQL'],
      },
      {
        category: 'Web Development',
        items: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'React.js'],
      },
      {
        category: 'Machine Learning',
        items: ['NumPy', 'Pandas', 'Matplotlib', 'Scikit-learn', 'TensorFlow'],
      },
      {
        category: 'Tools',
        items: ['Git', 'Jupyter Notebook', 'VS Code'],
      },
    ];
  
    return (
      <section id="skills" style={{ padding: '60px 20px', backgroundColor: '#1e1e1e', color: '#ffffff' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '20px', color: '#bb86fc' }}>Skills</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {skills.map((skillCategory, index) => (
              <div key={index} style={{ backgroundColor: '#121212', padding: '20px', borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)' }}>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '10px', color: '#bb86fc' }}>{skillCategory.category}</h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                  {skillCategory.items.map((skill, idx) => (
                    <div 
                      key={idx} 
                      style={{ 
                        padding: '10px 15px', 
                        backgroundColor: '#333', 
                        borderRadius: '5px', 
                        color: '#ffffff',
                        fontSize: '0.9rem',
                      }}
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }