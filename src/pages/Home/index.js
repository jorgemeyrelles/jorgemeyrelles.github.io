/* eslint-disable import/no-cycle */
import React from 'react';
// import Presentation from '../components/Presentation';
import Profile from '../../PortfolioContent/Home/Profile';
import Footer from '../../PortfolioContent/Home/Footer';
// import './estilo.css';
import './Home.css';
import Header from '../../PortfolioContent/Home/Header';

function Home() {
  return(
    <div className="home-container">
      <Header />
      <Profile />
      <Footer />
    </div>
    // <Presentation />
    // <table border="1px" width="100%" height="100%">
    //     <tr>
    //         <td rowspan="3" width="200px" class="indice">
    //             {/* <!-- Indice lateral --> */}
    //             <nav>
    //                 <img id="estilofoto" src="foto_perfil.jpg" alt="Foto do dono do portfólio." width="150px" />
    //                 <ul style={ { textAlign: 'left' } }>
    //                   <li><a href="#home">Pessoal</a></li>
    //                   <span>&nbsp;&nbsp;Nome:</span> <span>Jorge Meyrelles Jr.</span><br/>
    //                   <span>&nbsp;&nbsp;Idade:</span> <span>35</span><br/>
    //                   <span>&nbsp;&nbsp;Nacionalidade:</span> <span>Brasileiro</span>
    //                   <li><a href="#traj_prof">Trajetória Profissional</a></li>
    //                   <li><a href="#hardskill">Hard Skills</a></li>
    //                   <li><a href="#softskill">Soft Skills</a></li>
    //                 </ul>
          
  //               </nav>

  //         </td>
  //         {/* <td heigh="20px">
  //             <header>
  //               <script language="javascript" type="text/javascript">
  //                   document.write("Brasil, "+now.getDate()+" de "+mesNome[now.getMonth()]+" de "+now.getFullYear()+", "+dayName[now.getDay() ]+" - "+now.getHours()+":"+now.getMinutes())
  //               </script>
              
  //             </header>
                
  //         </td> */}
  //       </tr>
  //       <tr>
  //           <td width="950px">
  //               <main class="conteudo" >
  //               {/* <!--Home--> */}
  //               <div class="card" id="home">
                      
  //                   <div style={ { textAlign: 'center', paddingTop: '50px', paddingBottom: '50px' } }>
  //                       <div id="bem_vindo"><span>Bem<br/>Vindo</span></div>
  //                       <div id="bem_vinda"><span>Bem<br/>Vinda</span></div>
  //                   </div>
  //                   <br/><br/>
  //                   <div style={ { padding: '50px' } }>
  //                       <h2 style={ { textAlign: 'center' } }>Este é o local onde vc poderá conhecer um pouco melhor à mim e minha trajetória profissional!</h2>
  //                   </div>
  //               </div>

  //               {/* <!-- trajetoria profissional 1 --> */}
  //               <div class="card" id="traj_prof">
  //                   <p>Trajetória Profissional</p><br/><br/>
  //                   <div style={ { textAlign: 'center', padding: '10px' } }>
  //                       <div class="conteudocentro">
  //                           <img id="pucrio" src="https://lh3.googleusercontent.com/proxy/C9daftcjrUlv68u5OPh9Eqv4KBNFbWf70ARPlurpj8C_Ca5OLTQmWMdujkPLIhiLg8HNuMlIKsVNW2NwRn-bKG2niKRLzToX2duAINjAkf_v36_0LMcJweCo273_Ow" alt="Brasão PUC-Rio" width="100px" /><br/>
  //                           <span>Mestre em Engenharia</span>
  //                       </div>
  //                       <div class="conteudocentro">
  //                           <img src="https://easyminimercado.com.br/wp-content/uploads/2020/03/linha-preta-png-2.png" alt="seta" width="100px" /><br/>

  //                       </div>
  //                       <div class="conteudocentro">
  //                           <img id="trybe" src="https://pbs.twimg.com/profile_images/1335930580010225667/cFKy_fC3.jpg" alt="Brasão Trybe" width="120px" /><br/>
  //                           <span>Estudante Dev Full Stack</span>
  //                       </div>
  //                   </div>
  //                   {/* <!-- trajetoria profissional 2 --> */}
  //                   <div style={ { textAlign: 'center' } }>
  //                       <p>MAIORES INFORMAÇÕES...</p>
  //                       <a href="https://www.linkedin.com/in/jorgemeyrelles/"><img src="https://image.flaticon.com/icons/png/512/174/174857.png" alt="Icone do linkedin" width="50px" /></a>
  //                       <a href="https://www.xing.com/profile/Jorge_Meyrelles/cv"><img src="http://www.filosofisica.com/figs/logos/xing-icon.svg" alt="Icone do xing" width="50px" /></a>
  //                       <a href="http://lattes.cnpq.br/6399677422204694"><img src="https://etcaeterahome.files.wordpress.com/2020/06/9e287-logo-lattes.png" alt="Icone Lattes" width="50px" /></a>
  //                       <a href="https://github.com/jorgemeyrelles"><img src="https://logosmarcas.net/wp-content/uploads/2020/12/GitHub-Logo.png" alt="Icone gitHub" width="100px" /></a>
  //                   </div>
  //               </div>
                  
  //               {/* <!-- hard skills --> */}
  //               <div class="card" id="hardskill">
  //                   <p>O QUE APRENDI NA TRYBE ATÉ O MOMENTO ...</p>
  //                   <div style={ { textAlign: 'center' } }>
  //                       <img src="https://renangurgel.dev/wp-content/uploads/2020/06/Git-Icon-1788C.png" alt="Icone do git" width="50px" />
  //                       <img src="https://logosmarcas.net/wp-content/uploads/2020/12/GitHub-Logo.png" alt="Icone do gitHub" width="90px" />
  //                       <img src="https://i2.wp.com/raphaelcabral.com/wp-content/uploads/2020/09/vscode-logo.png?fit=1200%2C648&ssl=1" alt="Icone do VS CODE" width="90px" />
  //                       <img src="https://midia.ag/wp-content/uploads/2016/05/talk-sobre-html-javascript-js-css-femug-ramiro.png" alt="Icone do HTML CSS e JS" width="90px" />
                          
  //                   </div>
  //                   <p>
  //                       Resultados recentes:
  //                   </p>
  //                   <a href="http://www.treesdee.com">SITE: Home-page</a><br/>
  //                   {/* <a>Jogo de estourar balões</a> */}
  //               </div>
  //           {/* <!-- soft skills --> */}
  //               <div class="card" id="softskill">
  //                   <p>Comportamental</p>
  //                   <ul>
  //                       <li>Code Academy: Problem Solver</li>
  //                       <li>Eneagrama</li>
  //                       <li>Temperamentos</li>
  //                   </ul>
  //                   <p>Produtividade</p>
  //                   <ul>
  //                       <li>Lean Six Sigma: YELLOW BELT</li>
  //                       <li>PMBoK</li>
  //                   </ul>
  //               </div>
  //           </main>

  //           </td>
              
  //       </tr>
  //       <tr>
  //           <td colspan="2" >
  //               <footer>
  //                   ©2021 - Todos os Direitos reservados.
  //               </footer>

  //           </td>
              
  //       </tr>
  //   </table>
  );
}

export default Home;
