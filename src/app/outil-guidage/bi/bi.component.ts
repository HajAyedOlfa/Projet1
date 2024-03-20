import { Component } from '@angular/core';
import Swal from 'sweetalert2';




@Component({
  selector: 'app-bi',
  templateUrl: './bi.component.html',
  styleUrls: ['./bi.component.css']
})
export class BiComponent {
  carteMethod() {
    Swal.fire({
      showCloseButton: true,
      title: "Carte",
      html: "<p>Ventilation une valeur via une dimension</p><img src='../assets/assets/images/carte.png'/>"
    });
  }
  carteLigneMethod() {
    Swal.fire({
      showCloseButton: true,
      title: "Carte à plusieurs lignes",
      html: "<p>Affiche uniquement une valeur (nombre, taux, ratio)</p><img src='../assets/assets/images/carteLignes.png'/>"
    });
       
  }
  jaugeMethod() {
    Swal.fire({
      showCloseButton: true,
      title: "Jauge",
      html: "<p>Donner du contexte sur latteinte de lobjectif : Nous avons 3133 conférences mais notre obbjectif c'est d'avoir 3500 confrérences en total. Ce visuel présente aussi le minimum et le maximum de nombre de conférence qui egale à 0 et 6266 </p><img src='../assets/assets/images/jauge.png'/>"
    });
       
  }
  KPIMethod() {
    Swal.fire({
      showCloseButton: true,
      title: "KPI",
      html: "<p>Met en avant l’évolution et l’atteinte d’un objectif </p><img src='../assets/assets/images/KPI.png'/>"
    });
       
  }
  DiagMethod() {
    Swal.fire({
      showCloseButton: true,
      title: "Diagramme à barre",
      html: "<p>La hauteur de la barre représente le poids de l’élément. Méthode classique mais très efficace pour comparer plusieurs éléments et en faire un classement.</p><img src='../assets/assets/images/DiagBarre.png'/>"
    });
       
  }
  PieChartMethod(){
    Swal.fire({
      showCloseButton: true,
      title: "Pie Chart",
      html: "<p>Chaque secteur donne la proportion d’un élément et le pie chart complet représente 100% de la valeur. Visualisation très populaire mais à éviter (très difficile de convertir visuellement des angles en valeurs).</p><img src='../assets/assets/images/PieChartBI.png'/>"
    });
  }
  courbeMethod(){
    Swal.fire({
      showCloseButton: true,
      title: "Courbe",
      html: "<p>Les courbes affichent des tendances sur une période. Chaque arrête de la courbe représente un point avec des coordonnées x,y relié au suivant par un trait. Ce courbe est très utilisé avec des données chronologiques, les courbes sont très familiers à la plupart des gens. Attention à ne pas avoir trop de courbes sur un même graphique. </p><img src='../assets/assets/images/courbe.png'/>"
    });
  }
  AireMethod(){
    Swal.fire({
      showCloseButton: true,
      title: "Aire",
      html: "<p>Les aires montrent l’évolution de la répartition entre plusieurs éléments tout en ayant une vue globale. Ils rependent pour base un graphique en courbe mais va venir remplir la zone sous la courbe. Aussi il permet d’accéder à des visualisations difficiles à comprendre avec uniquement des courbes. Attention, dans certains cas il est au contraire plus difficile de comprendre l’évolution des valeurs.</p><img src='../assets/assets/images/aire.png'/>"
    });
  }
  tableauMethod(){
    Swal.fire({
      showCloseButton: true,
      title: "Tableau",
      html: "<p>Les tableaux permettent de visualiser les données en fonction de ligne par rapport à une colonne</p><img src='../assets/assets/images/matrice.png'/>"
    });
  }
  matriceMethod(){
    Swal.fire({
      showCloseButton: true,
      title: "Matrice",
      html: "<p>Le visuel Matrice est un outil de visualisation de données tabulaires puissant et flexible. Il permet d'afficher des données multidimensionnelles de manière compacte et informative, facilitant l'analyse et la compréhension de données complexes.</p><img src='../assets/assets/images/tableau.png'/>"
    });
  }
  histogrammeMethod(){
    Swal.fire({
      showCloseButton: true,
      title: "Histogramme",
      html: "<p>L’histogramme est un outil beaucoup utilisé pour résumer des données discrètes ou continues qui sont présentées par intervalles de valeurs. </p><img src='../assets/assets/images/histogramme.png'/>"
    });
  }
  boxPlotMethod(){
    Swal.fire({
      showCloseButton: true,
      title: "Box Plot",
      html: "<p>Le box plot est composé d'un rectangle et deux droites sortent pour représenter des éléments des données</p><img src='../assets/assets/images/boxPlot.png'/>"
    });
  }
  treeMapMethod(){
    Swal.fire({
      showCloseButton: true,
      title: "Tree Map",
      html: "<p>Ils montrent l’importance d’ensembles et de sous-ensemble. Ils affichent de manière hiérarchisée le poids de chaque ensemble et sous-ensemble par rapport à une métrique. Les ensembles les plus importants sont en haut à gauche, les plus faibles sont en bas à droite. Ils permettent de voir très rapidement les ensembles les plus importants </p><img src='../assets/assets/images/treemap.png'/>"
    });
  }
  geoMethod(){
    Swal.fire({
      showCloseButton: true,
      title: "Géolocalisation",
      html: "<p>La géolocalisation afficher des données géographiques. Elle a accès sur un contient, un pays, une région, … ou toute la terre. Il affiche des données divers (métrique simple, répartition)  </p><img src='../assets/assets/images/geo.png'/>"
    });
  }
  chekboxMethod(){

  }
  onCheked(event: any){
    console.log(event.target.value)
  }
}
