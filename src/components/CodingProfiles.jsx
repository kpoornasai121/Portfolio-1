export default function CodingProfiles() {
    const profiles = [
        {
            name: 'LeetCode',
            link: 'https://leetcode.com/u/k_poorna_sai_11/',
            icon: 'https://leetcode.com/static/images/LeetCode_logo_rvs.png', // Replace with actual icon URL
        },
        {
            name: 'GeeksforGeeks',
            link: 'https://www.geeksforgeeks.org/user/kpoornasai11/',
            icon: 'https://cdn.careerhub.students.duke.edu/wp-content/uploads/sites/128/2024/11/geeksforgeeks.png', // Replace with actual icon URL
        },
        {
            name: 'HackerRank',
            link: 'https://www.hackerrank.com/profile/kpoornasai11',
            icon: 'https://upload.wikimedia.org/wikipedia/commons/4/40/HackerRank_Icon-1000px.png', // Replace with actual icon URL
        },
        {
            name: 'CodeChef',
            link: 'https://www.codechef.com/users/kpoornasai_11',
            icon: 'https://cdn.codechef.com/images/cc-logo.svg', // Replace with actual icon URL
        },
    ];

    return (
        <section id="coding-profiles" style={{ padding: '60px 20px', backgroundColor: '#121212', color: '#ffffff' }}>
            <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
                <h2 style={{ fontSize: '2rem', marginBottom: '20px', color: '#bb86fc' }}>Coding Profiles</h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
                    {profiles.map((profile, index) => (
                        <a 
                            key={index} 
                            href={profile.link} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            style={{ 
                                backgroundColor: '#1e1e1e', 
                                padding: '20px', 
                                borderRadius: '10px', 
                                textAlign: 'center', 
                                textDecoration: 'none', 
                                color: '#ffffff',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                gap: '10px',
                                boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
                            }}
                        >
                            <img 
                                src={profile.icon} 
                                alt={profile.name} 
                                style={{ width: '50px', height: '50px' }} 
                            />
                            <h3 style={{ fontSize: '1.2rem', margin: 0 }}>{profile.name}</h3>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}