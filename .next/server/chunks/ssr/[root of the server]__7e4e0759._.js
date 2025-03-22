module.exports = {

"[externals]/next/dist/compiled/next-server/app-page.runtime.dev.js [external] (next/dist/compiled/next-server/app-page.runtime.dev.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page.runtime.dev.js"));

module.exports = mod;
}}),
"[project]/src/app/page.jsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Home)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client"; // Enable client-side interactivity
;
;
function Home() {
    const [theme, setTheme] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('dark'); // Default theme is dark
    const toggleTheme = ()=>{
        setTheme(theme === 'dark' ? 'light' : 'dark');
    };
    // Theme-based styles
    const themeStyles = {
        dark: {
            backgroundColor: '#121212',
            color: '#ffffff',
            buttonBackground: '#bb86fc',
            buttonColor: '#121212'
        },
        light: {
            backgroundColor: '#ffffff',
            color: '#121212',
            buttonBackground: '#007BFF',
            buttonColor: '#ffffff'
        }
    };
    const currentTheme = themeStyles[theme];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            backgroundColor: currentTheme.backgroundColor,
            color: currentTheme.color,
            minHeight: '100vh',
            padding: '20px',
            fontFamily: 'Arial, sans-serif'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: toggleTheme,
                style: {
                    position: 'fixed',
                    top: '20px',
                    right: '20px',
                    padding: '10px 20px',
                    backgroundColor: currentTheme.buttonBackground,
                    color: currentTheme.buttonColor,
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer'
                },
                children: theme === 'dark' ? 'Light Theme' : 'Dark Theme'
            }, void 0, false, {
                fileName: "[project]/src/app/page.jsx",
                lineNumber: 38,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                id: "home",
                style: {
                    height: '100vh',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    textAlign: 'center'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            style: {
                                fontSize: '3rem',
                                marginBottom: '20px'
                            },
                            children: "Hi! I'm Poorna Sai"
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.jsx",
                            lineNumber: 64,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            style: {
                                fontSize: '1.5rem',
                                marginBottom: '30px'
                            },
                            children: "And I'm a Software Developer"
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.jsx",
                            lineNumber: 65,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            style: {
                                fontSize: '1.2rem',
                                marginBottom: '40px'
                            },
                            children: [
                                "I build beautiful, functional Web and App solutions with AI.",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                    fileName: "[project]/src/app/page.jsx",
                                    lineNumber: 67,
                                    columnNumber: 85
                                }, this),
                                "Passionate about coding and solving problems. Let's connect!",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                    fileName: "[project]/src/app/page.jsx",
                                    lineNumber: 68,
                                    columnNumber: 85
                                }, this),
                                "Feel free to reach out via social media links. I'd love to hear from you!"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/page.jsx",
                            lineNumber: 66,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: 'flex',
                                justifyContent: 'center',
                                gap: '20px'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "#about",
                                    style: {
                                        padding: '10px 20px',
                                        backgroundColor: currentTheme.buttonBackground,
                                        color: currentTheme.buttonColor,
                                        textDecoration: 'none',
                                        borderRadius: '5px'
                                    },
                                    children: "About Me"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.jsx",
                                    lineNumber: 72,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "#projects",
                                    style: {
                                        padding: '10px 20px',
                                        backgroundColor: currentTheme.buttonBackground,
                                        color: currentTheme.buttonColor,
                                        textDecoration: 'none',
                                        borderRadius: '5px'
                                    },
                                    children: "View My Work"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.jsx",
                                    lineNumber: 84,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/page.jsx",
                            lineNumber: 71,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/page.jsx",
                    lineNumber: 63,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/page.jsx",
                lineNumber: 56,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/page.jsx",
        lineNumber: 30,
        columnNumber: 9
    }, this);
} // import Link from "next/link";
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
}}),
"[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
if ("TURBOPACK compile-time falsy", 0) {
    "TURBOPACK unreachable";
} else {
    if ("TURBOPACK compile-time falsy", 0) {
        "TURBOPACK unreachable";
    } else {
        if ("TURBOPACK compile-time truthy", 1) {
            module.exports = __turbopack_context__.r("[externals]/next/dist/compiled/next-server/app-page.runtime.dev.js [external] (next/dist/compiled/next-server/app-page.runtime.dev.js, cjs)");
        } else {
            "TURBOPACK unreachable";
        }
    }
} //# sourceMappingURL=module.compiled.js.map
}}),
"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].ReactJsxDevRuntime; //# sourceMappingURL=react-jsx-dev-runtime.js.map
}}),
"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].React; //# sourceMappingURL=react.js.map
}}),

};

//# sourceMappingURL=%5Broot%20of%20the%20server%5D__7e4e0759._.js.map