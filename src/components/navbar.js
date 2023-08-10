import Link from "next/link";

const NavBar = () => {
  return (
    <nav className="nav">
      <h1 className="header">NEXTAUTH</h1>
      <ul className="nav-item">
        <li className="nav-list">
          <Link href="/" className="nav-links">
            HOME
          </Link>
        </li>
        <li className="nav-list">
          <Link href="/product" className="nav-links">
            PRODUCTS
          </Link>
        </li>
        <li className="nav-list">
          <Link href="/blog" className="nav-links">
            BLOG
          </Link>
        </li>
        <li className="nav-list">
          <Link href="/signIn" className="nav-links">
            SIGN IN
          </Link>
        </li>
        <li className="nav-list">
          <Link href="/blog/comments" className="nav-links">
            SIGN OUT
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
