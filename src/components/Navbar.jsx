import { Link } from 'react-router-dom';

export default function Navbar() {


    return (
    <div className='Navbar'>
      <h1>Employee satisfaction survey!</h1>
      <nav>
          <div className='NavbarItem'>
            <Link to="/">Home</Link>
          </div>
          <div className='NavbarItem'>
            <Link to="/submitSurvey">Submit survey</Link>
          </div>
      </nav>
    </div>
    )
}