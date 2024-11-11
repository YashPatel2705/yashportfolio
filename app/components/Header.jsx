// "use client";
// import { useState } from 'react';
// import Link from 'next/link';

// export default function Header() {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => setIsOpen(!isOpen);

//   return (
//     <header className="flex justify-between items-center p-4 bg-white shadow-md relative">
//       <div className="text-2xl font-bold text-primary">yash.</div>

//       <button onClick={toggleMenu} className="lg:hidden block focus:outline-none">
//         <div className="space-y-1">
//           <span className="block h-0.5 w-6 bg-black"></span>
//           <span className="block h-0.5 w-6 bg-black"></span>
//           <span className="block h-0.5 w-6 bg-black"></span>
//         </div>
//       </button>

//       <nav className="hidden lg:flex space-x-8">
//         <Link href="/" className="headings">Home</Link>
//         <Link href="/about" className="headings">About</Link>
//         <Link href="/education" className="headings">Education</Link>
//         <Link href="/works" className="headings">Works</Link>
//         <Link href="/contact" className="headings">Contact</Link>
//       </nav>

//       <Link href="/contact" className="hidden lg:block">
//         <button className="border border-dark px-4 py-2">Let’s talk</button>
//       </Link>

//       {isOpen && (
//         <div className="fixed inset-0 bg-black opacity-50 lg:hidden z-10" onClick={toggleMenu}></div>
//       )}

//       {isOpen && (
//         <nav className="absolute top-16 left-0 w-full bg-[#F2F1EF] shadow-md lg:hidden z-20">
//           <ul className="flex flex-col items-center space-y-4 p-4">
//             <Link href="/" onClick={toggleMenu} className="headings">Home</Link>
//             <Link href="/about" onClick={toggleMenu} className="headings">About</Link>
//             <Link href="/education" onClick={toggleMenu} className="headings">Education</Link>
//             <Link href="/works" onClick={toggleMenu} className="headings">Works</Link>
//             <Link href="/contact" onClick={toggleMenu} className="headings">Contact</Link>
//             <Link href="/contact" onClick={toggleMenu}>
//               <button className="border border-dark px-4 py-2">Let’s talk</button>
//             </Link>
//           </ul>
//         </nav>
//       )}
//     </header>
//   );
// }
"use client";

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();  // Replaces useRouter for current path detection

  const toggleMenu = () => setIsOpen(!isOpen);

  // Function to determine if the link should be styled as active
  const isActive = (path) => pathname === path;

  return (
    <header className="flex justify-between items-center p-4 bg-white shadow-md relative">
      <div className="text-2xl font-bold text-primary">yash.</div>

      <button onClick={toggleMenu} className="lg:hidden block focus:outline-none">
        <div className="space-y-1">
          <span className="block h-0.5 w-6 bg-black"></span>
          <span className="block h-0.5 w-6 bg-black"></span>
          <span className="block h-0.5 w-6 bg-black"></span>
        </div>
      </button>

      {/* Desktop Navigation */}
      <nav className="hidden lg:flex space-x-8">
        <Link href="/" className={`headings ${isActive('/') ? 'active' : ''}`}>Home</Link>
        <Link href="/about" className={`headings ${isActive('/about') ? 'active' : ''}`}>About</Link>
        <Link href="/education" className={`headings ${isActive('/education') ? 'active' : ''}`}>Education</Link>
        <Link href="/works" className={`headings ${isActive('/works') ? 'active' : ''}`}>Works</Link>
        <Link href="/contact" className={`headings ${isActive('/contact') ? 'active' : ''}`}>Contact</Link>
      </nav>

      <Link href="/contact" className="hidden lg:block">
        <button className="border border-dark px-4 py-2">Let’s talk</button>
      </Link>

      {isOpen && (
        <div className="fixed inset-0 bg-black opacity-50 lg:hidden z-10" onClick={toggleMenu}></div>
      )}

      {/* Mobile Menu */}
      {isOpen && (
        <nav className="absolute top-16 left-0 w-full bg-[#F2F1EF] shadow-md lg:hidden z-20">
          <ul className="flex flex-col items-center space-y-4 p-4">
            <Link href="/" onClick={toggleMenu} className={`headings ${isActive('/') ? 'active' : ''}`}>Home</Link>
            <Link href="/about" onClick={toggleMenu} className={`headings ${isActive('/about') ? 'active' : ''}`}>About</Link>
            <Link href="/education" onClick={toggleMenu} className={`headings ${isActive('/education') ? 'active' : ''}`}>Education</Link>
            <Link href="/works" onClick={toggleMenu} className={`headings ${isActive('/works') ? 'active' : ''}`}>Works</Link>
            <Link href="/contact" onClick={toggleMenu} className={`headings ${isActive('/contact') ? 'active' : ''}`}>Contact</Link>
            <Link href="/contact" onClick={toggleMenu}>
              <button className="border border-dark px-4 py-2">Let’s talk</button>
            </Link>
          </ul>
        </nav>
      )}
    </header>
  );
}
