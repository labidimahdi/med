import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import pharmacy from "../images/pharmacy.png";
import doc from "../images/doc_appoint.png";
import urg from "../images/urgent.png";
import del from "../images/delivery.png";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <div className="home">
        <div className="container">
          <div className="hero">
            <div className="image"></div>
            <div className="text">
              <h2>Trouver votre solution medicale!</h2>
              <div className="bt"><button ><Link className='form-link' to='/login'> Sign in</Link></button>
               </div>
              
            </div>
          </div>
        </div>
        <div className="services">
          <h1>Nos Services</h1>
          
          <div className="cards">

            <div className="card"> <img alt="prop" src={doc}/>
            <h3>Une Téléconsultation avec un médecin</h3>
            <p>Faire une consultation en ligne avec un médecin généraliste.</p>
            
            </div>
            <div className="card"><img alt="prop" src={pharmacy}/><h3>
              
            Un espace Pharmacie</h3>
            <p>Avoir les médicament dont vous avez besoin  </p></div>
            <div className="card"><img alt="prop" src={urg}/>
            <h3>
            Cas d’urgence</h3>
            <p>L’application permet de sauver les cas urgents en premier.</p></div>
            <div className="card"><img alt="prop" src={del}/>
            <h3>
              
            Livraison à domicile</h3>
            <p>Service de livraison rapide</p></div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default HomePage;
