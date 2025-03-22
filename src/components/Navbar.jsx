import Link from 'next/link';

export default function Navbar() {
    return (
        <nav style={{ position: 'fixed', top: 0, width: '100%', backgroundColor: '#121212', padding: '10px 20px', zIndex: 1000 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', maxWidth: '1200px', margin: '0 auto' }}>
                <Link href="#home" style={{ color: '#bb86fc', textDecoration: 'none', fontSize: '1.5rem', fontWeight: 'bold' }}>
                    K Poorna Sai
                </Link>
                <div style={{ display: 'flex', gap: '20px' }}>
                    <Link href="#about" style={{ color: '#ffffff', textDecoration: 'none' }}>About</Link>
                    <Link href="#skills" style={{ color: '#ffffff', textDecoration: 'none' }}>Skills</Link>
                    <Link href="#projects" style={{ color: '#ffffff', textDecoration: 'none' }}>Projects</Link>
                    <Link href="#coding-profiles" style={{ color: '#ffffff', textDecoration: 'none' }}>Coding Profiles</Link>
                    <Link href="#contact" style={{ color: '#ffffff', textDecoration: 'none' }}>Contact</Link>
                </div>
            </div>
        </nav>
    );
}