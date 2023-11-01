import "./Navbar.css"; // Assuming you have a CSS file named Navbar.css in the same directory

function Header() {
  return (
    <div className="research-project">
      <header className="navbar-custom">
        <div className="navbar-container">
          <a href="#" className="navbar-brand">
            REDS LAB
          </a>
          <nav className="navbar-links">
            {/* <a href="./index.html#a_quick_glance">A Quick Glance</a> */}
            <a href="./index.html#paper_overview">Paper Overview</a>
            <a href="./index.html#examples">Examples</a>
            <a href="./index.html#ethics">Ethics and Disclosure</a>
          </nav>
        </div>
      </header>
    </div>
  );
}

export default Header;
