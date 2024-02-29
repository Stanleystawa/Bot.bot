<!DOCTYPE html>
<html lang="en">
 <head>
  <title>
   Documentation de Uptime bot
  </title>
  <meta charset="utf-8"/>
  <meta content="width=device-width, initial-scale=1" name="viewport"/>
  <link href="/style.css" rel="stylesheet"/>
  <link href="https://cdn.glitch.global/4af3a279-f823-4a4e-be20-d1c27f7a9c08/logo-carr%C3%A9.jpg" rel="shortcut icon"/>
  <script src="/script.js">
  </script>
 </head>
 <body>
  <div class="navig-bar">
   <ul class="nav-bar">
    <div class="botgascar">
     <li>
      <a class="accueil" href="">
       UptimeBot
      </a>
     </li>
    </div>
    <div class="menu">
     <li>
      <a class="active" href="#prix-abonnement">
       PRIX
      </a>
     </li>
     <li>
      <a href="https://www.facebook.com/uptime.bot">
       ESSAYER
      </a>
     </li>
     <li>
      <a href="https://www.facebook.com/Tom.holland.smith">
       ADMIN
      </a>
     </li>
    </div>
   </ul>
  </div>
  <div class="menu-mobile" id="myNav">
   <a class="closebtn" href="javascript:void(0)" onclick="closeNav()">
    ×
   </a>
   <div class="overlay-content" onclick="closeNav()">
    <a href="#prix-abonnement">
     Prix
    </a>
    <a href="https://www.facebook.com/uptime.bot">
     Essayer
    </a>
    <a href="https://www.facebook.com/Tom.holland.smith">
     Admin
    </a>
   </div>
  </div>
  <div class="menu-raccourcis">
   <p class="menu-raccourcis" onclick="openNav()">
    ☰
   </p>
  </div>
  <div class="contenu">
   <h2>
    AMÉLIOREZ VOTRE ENTREPRISE
   </h2>
   <p>
             Uptime bot est au milieu de tout pour développer votre entreprise grâce à la technologie de pointe. Nous offrons également toutes les solutions gratuites à votre disposition pour vous aider selon vos besoins.
   </p>
   <div class="bouton-commencer">
    <a class="bouton-hanomboka" href="https://www.facebook.com/uptime.bot">
     Essayer gratuitement
    </a>
   </div>
   <div class="principal">
    <div class="automation">
     <a href="#automation">
      <h3>
       CHAT GPT
      </h3>
      <p>
       ChatGPT est un modèle de langage développé par OpenAI, utilisant un réseau neuronal profond pour comprendre et générer du texte de manière contextuelle. Il répond aux questions, fournit des informations et engage des conversations sur divers sujets.
      </p>
      <p>
       ChatGPT représente une avancée majeure dans l'intelligence artificielle conversationnelle, offrant aux utilisateurs une expérience d'interaction fluide et naturelle. Son développement ouvre la voie à de nombreuses applications potentielles dans divers domaines.
      </p>
     </a>
    </div>
    <div class="publicité">
     <a href="#automation">
      <h3>
       YOUTUBE SEARCH
      </h3>
      <p>
       YouTube Search est l'outil de recherche de vidéos intégré à la plateforme YouTube. Les utilisateurs saisissent des mots-clés pour trouver des vidéos pertinentes, et l'algorithme de YouTube classe les résultats en fonction de la pertinence et de la popularité.
       <p>
        YouTube Search facilite la découverte de vidéos en permettant aux utilisateurs de trouver rapidement du contenu pertinent sur une variété de sujets. Son algorithme avancé assure des résultats personnalisés et améliore l'expérience de recherche des utilisateurs sur la plateforme.
       </p>
      </p>
     </a>
    </div>
    <div class="gestion-abonné">
     <a href="#gestion-abonné">
      <h3>
       GÉNERATION D'IMAGE
      </h3>
      <p>
       Générer une image implique de former une représentation mentale ou visuelle à partir d'informations ou d'analyses, que ce soit dans un contexte concret ou abstrait.
       <p>
        Cette capacité est essentielle pour la résolution de problèmes, la créativité et la communication efficace. Elle nous permet de comprendre, d'interpréter et de partager nos idées de manière significative.
       </p>
      </p>
     </a>
    </div>
   </div>
   <p>
    UptimeBot offre une gamme complète de fonctionnalités pour automatiser et améliorer vos processus métier. De la gestion des réseaux sociaux à la gestion des e-mails, en passant par l'analyse des données et bien plus encore, notre plateforme est conçue pour répondre à tous vos besoins en matière de technologie et vous pouviez
    <a href="https://www.facebook.com/uptime.bot">
     essayer gratuitement
    </a>
    
   </p>
   <br/>
   <div class="tarif" id="prix-abonnement">
    <div class="prix-1">
     <span class="prix">
      5$
     </span>
     <br/>
     <span class="vl">
     </span>
     <br/>
     <span class="abonnés">
      1Mois
     </span>
    </div>
    <div class="prix-2">
     <span class="prix">
      10$
     </span>
     <br/>
     <span class="vl">
     </span>
     <br/>
     <span class="abonnés">
      2Mois
     </span>
    </div>
    <div class="prix-3">
     <span class="prix">
      25$
     </span>
     <br/>
     <span class="vl">
     </span>
     <br/>
     <span class="abonnés">
      4Mois
     </span>
    </div>
    <div class="prix-4">
     <span class="prix">
      35$
     </span>
     <br/>
     <span class="vl">
     </span>
     <br/>
     <span class="abonnés">
      6Mois
     </span>
    </div>
    <div class="prix-5">
     <span class="prix">
      50$
     </span>
     <br/>
     <span class="vl">
     </span>
     <br/>
     <span class="abonnés">
      1ans
     </span>
    </div>
   </div>
   <br/>
   <br/>
  </div>
  <footer>
   <p class="pied-de-page">
    E-mail: winhardybooke@gmail.com
    <br/>
    Tel: 032 42 592 29
    <br/>
    Adresse: MG/Sava/Andapa
    <br/>
    Crée par: Tom holland
    <br/>
   </p>
  </footer>
  <!-- Load Facebook SDK for JavaScript -->
  <div id="fb-root">
  </div>
  <script>
   window.fbAsyncInit = function() {
    FB.init({
      xfbml            : true,
      version          : 'v9.0'
    });
  };

  (function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js';
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));
  </script>
  <!-- Your Chat Plugin code -->
  <div attribution="setup_tool" class="fb-customerchat" page_id="104040618300739">
  </div>
 </body>
</html>

