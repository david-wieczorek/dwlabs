import React, { Component } from 'react';
import Resumeinfos from '../../components/resumeinfos/resumeinfos';
import Linechart from '../../components/chartline/chartline';

class Resume extends Component {
  render() {
    return (
      <div>
        <h1 className="page-title">
          <i className="fa fa-id-badge" aria-hidden="true" /> My resume
        </h1>
        <div className="content clearfix">
          <div className="left resume-infos">
            <Resumeinfos />
          </div>
          <div className="left resume-content">
            <div className="bloc bloc-nobckcolor">
              <p>
                Lead Front End Developer, autant passioné par la technique
                (code, technologie, architecture, déploiement) que le design
                (prototypage et design d’interface, UI-UX, theming).
              </p>
            </div>
            <div className="bloc">
              <h2>Experiences</h2>
              <div className="xperience">
                <span className="xperience-date-from">02/2016</span>
                <span className="xperience-date-to">05/2017</span>
                <div className="xperience-content">
                  <h3>
                    Lead Front End Developer @ <span>Ercom/Suneris</span>
                  </h3>
                  <p>
                    A l’occasion d’une promotion et en collaboration avec le
                    Lead Back End Développeur, mes responsabilités ont été
                    d'architecturer une application modulaire performante et
                    maintenable tout en gérant une équipe de 4 développeurs
                    Front afin de garantir la livraison et le bon fonctionnement
                    des différentes releases. J’ai mis en place les différents
                    process de build développement/production et développé un
                    framework spécifique gérant le style et l’UI. L’application
                    est en production et déployée chez différents clients en
                    France et à l’international (cartographies dynamiques,
                    charts, graphs relationnels, représentation massive de
                    données, dashboard, monitoring system).
                  </p>
                  <ul className="xperience-tag">
                    <li>JS/ES6/ESLINT/BABEL/BROWSERIFY</li>
                    <li>HTML5/CSS3/SASS</li>
                    <li>POSTCSS</li>
                    <li>ANGULAR(1.5.9)/UI-ROUTER/API</li>
                    <li>NODEJS/NPM/BOWER</li>
                    <li>GRUNT/GULP</li>
                    <li>GIT/GITLAB</li>
                    <li>CHARTJS</li>
                    <li>LEAFLET</li>
                    <li>D3JS</li>
                    <li>SKETCH</li>
                    <li>UI-UX DESIGN</li>
                    <li>PHOTOSHOP/PROTOTYPAGE</li>
                  </ul>
                </div>
              </div>
              <div className="xperience">
                <span className="xperience-date-from">02/2015</span>
                <div className="xperience-content">
                  <h3>
                    Front End Developer @ <span>Ercom</span>
                  </h3>
                  <p>
                    Profitant d’une création de poste, j’ai eu pour mission de
                    prototyper et d’architecturer la base d’une application web
                    iso fonctionnelle par rapport à un client lourd développé en
                    C#. Ma mission s’est étendue au recrutement de nouveaux
                    collaborateurs Front/Back ainsi qu’au développement et
                    planification de nouvelles features. Définition de toute la
                    stack technique Front et prototypage avancé de tous les
                    modules. Application en production 6 mois après mon arrivé.
                  </p>
                  <ul className="xperience-tag">
                    <li>JS/ES6/BABEL/BROWSERIFY</li>
                    <li>HTML5/CSS3/SASS</li>
                    <li>ANGULAR/UI-ROUTER/API</li>
                    <li>NODEJS/NPM/BOWER</li>
                    <li>GRUNT/GULP</li>
                    <li>SVN</li>
                    <li>LEAFLET</li>
                    <li>D3JS</li>
                    <li>UI-UX DESIGN</li>
                    <li>PHOTOSHOP/PROTOTYPAGE</li>
                  </ul>
                </div>
              </div>
              <div className="xperience">
                <span className="xperience-date-from">02/2015</span>
                <div className="xperience-content">
                  <h3>
                    Lead pôle intégration/graphisme @{' '}
                    <span>Ubiqus/Exhibis</span>
                  </h3>
                  <p>
                    L’opportunité de prendre le lead de la partie
                    intégration/graphisme s’est présentée à moi, j’ai eu pour
                    mission, en plus de celle déjà définie, de gérer l’équipe
                    Front et de définir, en collaboration avec l’architecte
                    applicatif une nouvelle interface Back Office et Front
                    Office en .NET (initialement en PHP). Le projet a été
                    déployé en interne et chez un premier client au bout de 6
                    mois. Clients: Batimat, salon du bourget, salon du nautisme,
                    Pollutec, salon du livre
                  </p>
                  <ul className="xperience-tag">
                    <li>MANAGEMENT</li>
                    <li>HTML/HTML5/CSS</li>
                    <li>SMARTY/PHP/.NET</li>
                    <li>SVN</li>
                    <li>RESPONSIVE DESIGN</li>
                    <li>IE7/CHROME/FIREFOX</li>
                    <li>EMAILING</li>
                    <li>MAQUETTAGE</li>
                    <li>PHOTOSHOP/ILLUSTRATOR</li>
                  </ul>
                </div>
              </div>
              <div className="xperience">
                <span className="xperience-date-from">02/2015</span>
                <div className="xperience-content">
                  <h3>
                    Webdesigner/Intégrateur @ <span>Ubiqus Event Software</span>
                  </h3>
                  <p>
                    Profitant d’une belle opportunité, j’ai intégré le groupe
                    Ubiqus (événementiel) en tant que web designer intégrateur.
                    Mon rôle consistait à intégrer les sites des différents
                    clients (Batimat, salon du nautisme, salon du livre, etc )
                    en s’aidant d’un backOffice PHP maison et du système de
                    templating Smarty. J’ai eu l’occasion de travailler sur une
                    trentaine de site pendant cette période très dynamique.
                  </p>
                  <ul className="xperience-tag">
                    <li>HTML/HTML5/CSS</li>
                    <li>SMARTY/PHP</li>
                    <li>SVN</li>
                    <li>RESPONSIVE DESIGN</li>
                    <li>IE7/CHROME/FIREFOX</li>
                    <li>EMAILING</li>
                    <li>MAQUETTAGE</li>
                    <li>PHOTOSHOP/ILLUSTRATOR</li>
                  </ul>
                </div>
              </div>
              <div className="xperience">
                <span className="xperience-date-from">02/2015</span>
                <div className="xperience-content">
                  <h3>
                    Freelance Graphic & Web Designer @{' '}
                    <span>Ubiqus Event Software</span>
                  </h3>
                  <p>
                    Divers prestations en tant que graphic et web designer.
                    Maquettes photoshop/wordpress, plaquettes, design de site
                    web et intégration.
                  </p>
                  <ul className="xperience-tag">
                    <li>Photoshop</li>
                    <li>Illustrator</li>
                    <li>In Design</li>
                    <li>HTML/CSS</li>
                    <li>Wordpress</li>
                    <li>Print</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="content">
          <div className="bloc">
            <Linechart />
          </div>
        </div>
      </div>
    );
  }
}

export default Resume;
