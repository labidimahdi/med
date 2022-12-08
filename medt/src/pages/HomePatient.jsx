import React from "react";
import Footer from "../components/Footer";
import Navbarp from "../components/Navbarp";
import { Link } from "react-router-dom";
import pharmacy from "../images/pharmacyy.png";
import doc from "../images/doctorr.png";
import urg from "../images/alarm.png";
import del from "../images/deliveryy.png";
import prf from "../images/user.png";

const HomePatient = () => {
  return (
    <>
      <Navbarp />
      <div className="home">
        <div className="container">
          <div className="hero1">
            <div className="text">
              <h1 className="med">Médicament</h1>
              <h4>
                Recevez vos médicaments à domicile par commande en ligne...
              </h4>
              <div className="btt">
                <button className="butt">
                  <Link className="form-link1" to="">
                    {" "}
                    Commander médicaments
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="services">
          <h1>Services</h1>

          <div className="cardsp">
            <div className="card1">
              {" "}
              <img alt="prop" src={doc} />
              <h3>médecins</h3>
            </div>
            <div className="card2">
              <img alt="prop" src={pharmacy} />
              <h3>Pharmacie</h3>
            </div>
            <div className="card3">
              <img alt="prop" src={urg} />
              <h3>Urgent</h3>
            </div>
            <div className="card4">
              <img alt="prop" src={del} />
              <h3>Suivre commande</h3>
            </div>
            <div className="card5">
              <img alt="prop" src={prf} />
              <h3>Profil</h3>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default HomePatient;
