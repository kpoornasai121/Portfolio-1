import Link from 'next/link';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>K Poorna Sai</div>
      <ul className={styles.navList}>
        <li className={styles.navItem}><Link href="#home">Home</Link></li>
        <li className={styles.navItem}><Link href="#about">About</Link></li>
        <li className={styles.navItem}><Link href="#skills">Skills</Link></li>
        <li className={styles.navItem}><Link href="#projects">Projects</Link></li>
        <li className={styles.navItem}><Link href="#contact">Contact</Link></li>
        <li className={styles.navItem}>
          <Link href="https://drive.google.com/file/d/1zxGEAj2zyUHVCZEgLfv5EMOMNt3St85I/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
            View Resume
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;






// import Link from 'next/link';

// export default function Navbar() {
//     return (
//         <nav style={{ position: 'fixed', top: 0, width: '100%', backgroundColor: '#121212', padding: '10px 20px', zIndex: 1000 }}>
//             <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', maxWidth: '1200px', margin: '0 auto' }}>
//                 <Link href="#home" style={{ color: '#bb86fc', textDecoration: 'none', fontSize: '1.5rem', fontWeight: 'bold' }}>
//                     K Poorna Sai
//                 </Link>
//                 <div style={{ display: 'flex', gap: '20px' }}>
//                     <Link href="#about" style={{ color: '#ffffff', textDecoration: 'none' }}>About</Link>
//                     <Link href="#skills" style={{ color: '#ffffff', textDecoration: 'none' }}>Skills</Link>
//                     <Link href="#projects" style={{ color: '#ffffff', textDecoration: 'none' }}>Projects</Link>
//                     <Link href="#coding-profiles" style={{ color: '#ffffff', textDecoration: 'none' }}>Coding Profiles</Link>
//                     <Link href="#contact" style={{ color: '#ffffff', textDecoration: 'none' }}>Contact</Link>
//                 </div>
//             </div>
//         </nav>
//     );
// }