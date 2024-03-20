import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-dm',
  templateUrl: './dm.component.html',
  styleUrls: ['./dm.component.css']
})
export class DmComponent {
  graphLMethod(){
    Swal.fire({
      showCloseButton: true,
      title: "Graphique Linéaire",
      html: "<p>Les graphiques linéaires sont fréquemment utilisés pour comparer plusieurs éléments en même temps. Ce type de graphe sont demandé lorsqu'un changement de variable doit être affiché. Les points de données sont principalement reliés par une ligne droite et le graphique linéaire est en fait une extension du nuage de points.</p><img src='../assets/assets/images/lineaire.png'/>"
    });
  }
  barCharteMethod(){
    Swal.fire({
      showCloseButton: true,
      title: "Bar Chart",
      html: "<p>Le graphique à barres est également appelé graphique à colonnes et est utilisé pour comparer les éléments de différents groupes. Les barres sont utilisées pour représenter les différentes valeurs d'un groupe et le graphique à barres utilise à la fois des barres horizontales et des barres verticales </p><img src='../assets/assets/images/barChart.png'/>"
    });

  }
  PieChartDMMethod(){
    Swal.fire({
      showCloseButton: true,
      title: "Pie Chart",
      html: "<p>Le graphique à barres est également appelé graphique à colonnes et est utilisé pour comparer les éléments de différents groupes. Les barres sont utilisées pour représenter les différentes valeurs d'un groupe et le graphique à barres utilise à la fois des barres horizontales et des barres verticales </p><img src='../assets/assets/images/PieChart.png'/>"
    });
  }
  tableauMethod(){
    Swal.fire({
      showCloseButton: true,
      title: "Tableau",
      html: "<p>Le tableau est simplement la disposition des données en lignes et en colonnes. Une ligne est une représentation de variables et une colonne est également une représentation d'enregistrements qui ont un ensemble de valeurs ou inversement. Les tableaux sont simples à comprendre et à analyser et il est simple d'interpréter la méthode de représentation des données  </p><img src='../assets/assets/images/table.png'/>"
    });
  }
  scatterPlotMethod(){
    Swal.fire({
      showCloseButton: true,
      title: "Scatter Plot",
      html: "<p> Un nuage de points est décrit comme un graphique bidimensionnel qui affiche la variation conjointe de deux éléments de données. Un nuage de points affiche les données en coordonnées cartésiennes dans un affichage graphique qui affiche la relation qui existe entre deux variables dans lesquelles l'une est représentée par une distance verticale et l'autre par une distance horizontale </p><img src='../assets/assets/images/scatterPlot.png'/>"
    });
  }
  bubbleChart(){
    Swal.fire({
      showCloseButton: true,
      title: "Bubble Chart",
      html: "<p> Le bubble chart se diffère de Scatter plot par les marqueurs et les nuages sont remplacé par des bulles. Ce type de graphe montre la relation qui existe entre le minimum de trois variables. Deux d'entre eux sont représentés par les axes du tracé, c'est-à-dire l'axe des x et l'axe des y, tandis que le troisième par la taille de la bulle et chaque bulle est une représentation d'une observation.  </p><img src='../assets/assets/images/bubbleChart.png'/>"
    });
  }
  treeMapMethod(){
    Swal.fire({
      showCloseButton: true,
      title: "Tree Map",
      html: "<p>Tree Map est une technique de visualisation d’information, est utilisée pour afficher des données hiérarchiques sous la forme de rectangles imbriqués ou en couches. Ce type de visualisation permet de comparer les nœuds et les sous-nœuds à différentes profondeurs.  </p><img src='../assets/assets/images/treemapPM.png'/>"
    });
  }
  TimeLineMethod(){
    Swal.fire({
      showCloseButton: true,
      title: "Time Line",
      html: "<p> Time Line est une représentation graphique de la séquence chronologique des événements tracée le long d'une ligne droite pour permettre aux utilisateurs de comprendre facilement la relation entre différents événements </p><img src='../assets/assets/images/timeLine.png'/>"
    });
  }
  SemanticNetworkMethod(){
    Swal.fire({
      showCloseButton: true,
      title: "Semantic Network",
      html: "<p> Un réseau sémantique est une représentation graphique des relations logiques entre différents concepts. Il génère un graphe orienté, la combinaison de nœuds ou de sommets, d'arêtes ou d'arcs, et une étiquette sur chaque arête  </p><img src='../assets/assets/images/semanticNetwork.png'/>"
    });
  }
  DecisionTreeMethod(){
    Swal.fire({
      showCloseButton: true,
      title: "Decision Tree",
      html: "<p>Un arbre de décision est un outil d'aide à la décision représentant un ensemble de choix sous la forme graphique d'un arbre. Les différentes décisions possibles sont situées aux extrémités des branches (les « feuilles » de l'arbre), et sont atteintes en fonction de décisions prises à chaque étape. </p><img src='../assets/assets/images/decisiontree.png'/>"
    });
  }
  onCheked(event: any){
    console.log(event.target.value)
  }
}
