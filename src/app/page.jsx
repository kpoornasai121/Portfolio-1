import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import CodingProfiles from '../components/CodingProfiles';
import Contact from '../components/Contact';

export default function Home() {
    return (
        <div>
            <Navbar />
            <Hero />
            <About />
            <Skills />
            <Projects />
            <CodingProfiles />
            <Contact />
        </div>
    );
}




// import Link from "next/link";


// export default function Home() {
//     return (
//         <div style={{ padding: "20px", fontFamily: "Arial, sans-serif", backgroundColor: "#121212", minHeight: "100vh", color: "#ffffff" }}>
//             <h1 style={{ textAlign: "center", marginBottom: "20px" }}>My Portfolio</h1>
//             <nav style={{ textAlign: "center", marginBottom: "20px" }}>
//                 <Link href="/" style={{ margin: "0 10px", color: "#bb86fc", textDecoration: "none" }}>Home</Link>
//                 <Link href="/contact" style={{ margin: "0 10px", color: "#bb86fc", textDecoration: "none" }}>Contact Me</Link>
//                 <Link href="/projects" style={{ margin: "0 10px", color: "#bb86fc", textDecoration: "none" }}>Projects</Link>
//                 <Link href="/articles" style={{ margin: "0 10px", color: "#bb86fc", textDecoration: "none" }}>Articles</Link>
//             </nav>

//             <div style={{ maxWidth: "800px", margin: "0 auto", backgroundColor: "#1e1e1e", padding: "20px", borderRadius: "10px", boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)" }}>
//                 <h2 style={{ marginBottom: "20px", color: "#bb86fc" }}>John Doe</h2>
//                 <p>Bachelor of Science in Computer Science</p>

//                 <h3 style={{ marginTop: "20px", color: "#bb86fc" }}>Skills</h3>
//                 <ul>
//                     <li>HTML, CSS, JavaScript</li>
//                     <li>React, Next.js</li>
//                     <li>Node.js, Express</li>
//                     <li>Python, Django</li>
//                 </ul>

//                 <h3 style={{ marginTop: "20px", color: "#bb86fc" }}>Projects</h3>
//                 <ul>
//                     <li>Project 1: E-commerce Website</li>
//                     <li>Project 2: Blog Platform</li>
//                     <li>Project 3: Portfolio Website</li>
//                 </ul>

//                 <h3 style={{ marginTop: "20px", color: "#bb86fc" }}>Certifications</h3>
//                 <ul>
//                     <li>Certification 1: Full Stack Web Development</li>
//                     <li>Certification 2: React Advanced Concepts</li>
//                 </ul>

//                 <div style={{ marginTop: "20px" }}>
//                     <a href="/resume.pdf" download style={{ padding: "10px 20px", backgroundColor: "#bb86fc", color: "#121212", textDecoration: "none", borderRadius: "5px" }}>
//                         Download Resume
//                     </a>
//                 </div>
//             </div>
//         </div>
//     );
// }




// import Image from "next/image";
// import styles from "./page.module.css";

// export default function Home() {
//   return (
//     <div className={styles.page}>
//       <main className={styles.main}>
//         <Image
//           className={styles.logo}
//           src="/next.svg"
//           alt="Next.js logo"
//           width={180}
//           height={38}
//           priority
//         />
//         <ol>
//           <li>
//             Get started by editing <code>src/app/page.js</code>.
//           </li>
//           <li>Save and see your changes instantly.</li>
//         </ol>

//         <div className={styles.ctas}>
//           <a
//             className={styles.primary}
//             href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <Image
//               className={styles.logo}
//               src="/vercel.svg"
//               alt="Vercel logomark"
//               width={20}
//               height={20}
//             />
//             Deploy now
//           </a>
//           <a
//             href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//             className={styles.secondary}
//           >
//             Read our docs
//           </a>
//         </div>
//       </main>
//       <footer className={styles.footer}>
//         <a
//           href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/file.svg"
//             alt="File icon"
//             width={16}
//             height={16}
//           />
//           Learn
//         </a>
//         <a
//           href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/window.svg"
//             alt="Window icon"
//             width={16}
//             height={16}
//           />
//           Examples
//         </a>
//         <a
//           href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/globe.svg"
//             alt="Globe icon"
//             width={16}
//             height={16}
//           />
//           Go to nextjs.org →
//         </a>
//       </footer>
//     </div>
//   );
// }
