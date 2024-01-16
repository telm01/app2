export default function () {
 
  
  return (
    <><div>
      </div>
     
    <div>  </div><header className="App-header">


      <nav className="navbar">

      <div><div className="dia"><strong>DiaSys MonGolia</strong><p className="me">Medical device disterbuter</p></div></div>
<div className="menu">
        <ul className="nav-links">
        
          <a className="active" href="/">
            Home
          </a>
          <a className="navbar-Items" href="/product">Product</a>
          <a className="navbar-Items" href="/service">Service area</a>
          <a className="navbar-Items" href="/about">About us</a>
          <a className="navbar-Items" href="/contact">Contact us</a>
         <a></a><svg xmlns="http://www.w3.org/2000/svg" height="26" viewBox="0 -960 960 960" width="26"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg> 
        </ul>
        </div>
        <ul className="sidebar">
        
        <a className="active" href="/">
          Home
        </a>
        <a className="navbar-Items" href="/product">Product</a>
        <a className="navbar-Items" href="/service">Service area</a>
        <a className="navbar-Items" href="/about">About us</a>
        <a className="navbar-Items" href="/contact">Contact us</a>
        
      </ul>
    
  
 
  
 
      </nav>








    </header></>
  );
  function changeDisplayToFlex(selector: string | HTMLElement): void {
    let element: HTMLElement;
   
    if (typeof selector === 'string') {
       element = document.querySelector(selector) as HTMLElement;
    } else {
       element = selector;
    }
   
    if (element) {
       element.style.display = 'flex';
    } else {
       console.error('The element could not be found.');
    }
   }
  
}
