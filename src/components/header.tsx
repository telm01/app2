export default function Header() {
  return (
    <><div className="Logo"><strong>DMS</strong></div><div className="dms"><strong>DiaSys MonGolia</strong><p>Medical device disterbuter</p></div><header className="App-header">


      <nav className="navbar">
<input type="checkbox" id="toggler"></input>
<label htmlFor="toggler"><i className="ri-menu-line"></i></label>
<div className="menu">
        <ul className="nav-links">
          <div className="logo">DMS</div>
          <a className="active" href="/">
            Home
          </a>
          <a className="navbar-Items" href="/product">Product</a>
          <a className="navbar-Items" href="/service">Service area</a>
          <a className="navbar-Items" href="/about">About us</a>
          <a className="navbar-Items" href="/contact">Contact us</a>

        </ul>
        </div>
        <div className="burger">
  <div className="line1">-</div>
 < div className="line2">-</div>
 < div className="line3">-</div>
  
  <ul className="mobile-menu">
  <a className="active" href="/">
            Home
          </a>
          <a className="navbar-Items" href="/product">Product</a>
          <a className="navbar-Items" href="/service">Service area</a>
          <a className="navbar-Items" href="/about">About us</a>
          <a className="navbar-Items" href="/contact">Contact us</a>
  </ul> 
  
 </div>
      </nav>








    </header></>
  );
}
