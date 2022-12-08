import React from 'react';
import { Link } from 'react-router-dom';
// import clock from '../images/clock.png'
// import avatar from '../images/avatar.png'
const Navbarp = () => {
  return (
    <div className='navbarrp'>
        <div className='rg'>
          <Link to='/'><img src="/logo.png" alt="logo" /></Link>
        </div>
        <div ><h5 className='current'>Home</h5></div>
        <div><h5>Pharmacie</h5></div>
        <div><h5>Docteurs</h5></div>
        {/* <div><Link to='/'><img className='notif' src={avatar} alt="" /></Link></div>
        <div><Link to='/'><img className='notif' src={clock} alt="" /></Link></div> */}
        <div className='so'><Link to='/'><button className='bn'>Sign out</button></Link></div>
    </div>
  )
}

export default Navbarp