/* eslint-disable react/no-array-index-key */
/* eslint-disable import/no-cycle */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import ScreenHeading from '../../utils/ScreenHeading';
import './About.css';
import Animations from '../../utils/Animations';
import ScrollService from '../../utils/ScrollService';

function About(props) {
  const [summary, setSummary] = useState('');
  const [highlight, setHighlight] = useState([]);

  const { id } = props;

  useEffect(() => {
    fetch('https://gitconnected.com/v1/portfolio/jorgemeyrelles')
      .then((response) => response.json())
      .then((res) => {
        setSummary(res.basics.summary);
        setHighlight([{ name: res.basics.label }, ...res.skills]);
      });
  }, []);

  const fadeInScreenHandler = (screen) => {
    if (screen.fadeScreen !== id) {
      return false;
    }
    return Animations.animations().fadeInScreen(id);
  };
  
  const fadeInSubscription = ScrollService.currentScreenFadeIn().subscribe(fadeInScreenHandler);
  console.log(fadeInSubscription);

  const SCREEN_CONSTS = {
    description: summary,
    highlights: {
      heading: 'Algumas ferramentas trabalhadas por mim:',
      bullets: highlight.map((e) => e.name),
    },
  };

  const renderHighlights = () => (
    SCREEN_CONSTS.highlights.bullets.map((value, i) => (
      <div className='highlight' key={i}>
        <div className='highlight-blob' />
        <span>{value}</span>
      </div>
    ))
  );

  return (
    <div className='about-me-container screen-container' id={id || ''}>
      <div className='about-me-parent'>
        <ScreenHeading title="About Me" subHeading="Why choose me?" />
        <div className='about-me-card'>
          <div className='about-me-profile' />
          <div className='about-me-details'>
            <span className='about-me-description'>
              {SCREEN_CONSTS.description}
            </span>
            <div className='about-me-highlighs'>
              <div className='highlight-heading'>
                <span>{SCREEN_CONSTS.highlights.heading}</span>
                {renderHighlights()}
              </div>
              <div className='about-me-options'>
                <a href="https://wa.me/5521994844035?&text=Oi!" target="blank">
                  <button type='button' className="btn primary-btn">
                    Hire Me
                  </button>
                </a>
                <a
                  href="JorgeMeyrellesJr.pdf"
                  download="Resume JorgeMeyrellesJr.pdf"
                >
                  <button type='button' className="btn highlighted-btn">
                    Get Resume
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

About.propTypes = {
  id: PropTypes.node,
}.isRequired;

export default About;

// return (
//   <div className='profile-container'>
//     <div className='profile-parent'>
//       <div className='profile-details'>
//         <div className="profile-details-name">
//           <span className="primary-text">
//             {' '}
//             My name is <span className="highlighted-text">Jorge</span> and ...
//           </span>
//         </div>
//         <div className="profile-details-name">
//           <div className="primary-text">
//             {' '}
//             I am graduating as a fullstack developer at Trybe (https://jorgemeyrelles.github.io/). In all my professional experiences I needed to generate and organize data by Excel, until the opportunity arose to deepen and specialize as a professional in the area of development and data science.
//             I am always looking to learn something new within the technology area and what stimulates me the most is to overcome the challenges that arise.
//           </div>
//           <div className="primary-text">
//             {' '}
//             I have a previous engineering degree, from PUC-Rio (with 100% scholarship), and professional experience in companies such as Petrobrás, CBPF, and Vale.
//           </div>
//           <div className="primary-text">
//             {' '}
//             In college, I was Monitor in the subject of TECHNICAL DESIGN (AutoCAD), student-researcher of CNPq, and internship in the companies OILEQUIP, CONVERGENCIA and CPTI with welding, maintenance planning (KPI&apos;s) and projects respectively. 
//           </div>
//           <div className="primary-text">
//             {' '}
//             I seek to expand and exchange knowledge, promoting social improvements. Through this intention, I taught classes in a brazillian GTA preparatory for free, I am engaged with the NGO TETO and other third sector institutions.
//           </div>
//         </div>
//         <div>****************************************************************************</div>
//         <div className="profile-details-name">
//           <span className="primary-text">
//             {' '}
//             <div
//               className="badge-base LI-profile-badge"
//               data-locale="pt_BR"
//               data-size="large"
//               data-theme="light"
//               data-type="HORIZONTAL"
//               data-vanity="jorgemeyrelles"
//               data-version="v1"
//               style={ { textAlign: '-webkit-center' } }
//             >
//               <a
//                 className="badge-base__link LI-simple-link"
//                 href="https://br.linkedin.com/in/jorgemeyrelles?trk=profile-badge"
//               >
//                 {/* Jorge Meyrelles Jr. */}
//               </a>
//             </div>
//           </span>
//         </div>
//         <div>****************************************************************************</div>
//         <div className="profile-details-name">
//           <span style={ { fontStyle: 'italic' } } className="primary-text">
//             {' '}
//             Me formando como desenvolvedor fullstack na Trybe (https://jorgemeyrelles.github.io/). Em todas as minhas experiencias profissionais precisei gerar e organizar dados por Excel, até que surgiu a oportunidade de me aprofundar e especializar como um profissional na área de desenvolvimento e ciência de dados.
//             Estou sempre buscando aprender algo novo dentro da área de tecnologia e o que mais me estimula é superar os desafios que surgem.
//             Tenho formação prévia em engenharia, cursada na PUC-Rio (com bolsa 100%), e passagem profissional em empresas como Petrobrás, CBPF, Vale.
//             Na faculdade, fui Monitor na matéria de DESENHO TÉCNICO (AutoCAD), aluno - pesquisador do CNPq, além de estagiar nas empresas OILEQUIP, CONVERGENCIA e CPTI com soldagens, planejamento de manutenção (KPI&apos;s) e projetos respectivamente. 
//             Procuro expandir e trocar conhecimentos, promovendo melhorias sociais. Através dessa intenção, ministrei aulas num Pré Vestibular Comunitário, estou engajado junto a ONG TETO e outras instituições do terceiro setor.
//           </span>
//         </div>
//       </div>
//     </div>
//   </div>
// );
