import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-pm',
  templateUrl: './pm.component.html',
  styleUrls: ['./pm.component.css']
})
export class PmComponent {
  ProcessMapMethod(){
    Swal.fire({
      showCloseButton: true,
      title: "Process Map",
      html: "<p>Il s'agit d'une représentation graphique détaillée du déroulement d'un processus métier, basée sur l'analyse des données des journaux d'événements.</p><img src='../assets/assets/images/a.png'/>"
    });
  }
  SocialNetworkMethod(){
    Swal.fire({
      showCloseButton: true,
      title: "Social Network",
      html: "<p>Un graphe de réseau social est une représentation abstraite des relations entre les utilisateurs d'un réseau social. Il s'agit d'un graphe mathématique composé des nœuds qui représentent les utilisateurs du réseau social et des arêtes qui relient les nœuds et représentent les relations entre les utilisateurs</p><img src='../assets/assets/images/socialNetwork.png'/>"
    });
  }
  ChordDiagMethod(){
    Swal.fire({
      showCloseButton: true,
      title: "Chord Diagram",
      html: "<p>Chord Diagram présente une sorte de représentation visuelle qui a été récemment introduite pour augmenter le niveau d'abstraction. Ce type de diagramme est utilisé pour découvrir les réseaux sociaux à partie des fichiers logs réel </p><img src='../assets/assets/images/chordDiagram.png'/>"
    });
  }
  ProcessLogoMethod(){
    Swal.fire({
      showCloseButton: true,
      title: "Process Logo",
      html: "<p>Ce type de visualisation s’influence de Biological Sequence Alignment, et qui sert à déterminer la relation structurelle, fonctionnelle ou évolutive entre les séquences d'activités du processus métier. Il permet de décrire l'homogénéité des séquences d'alignement en calculant le score informationnel pour extraire l'indice de similarité  </p><img src='../assets/assets/images/processLogo.png'/>"
    });
  }
  TraceVMethod(){
    Swal.fire({
      showCloseButton: true,
      title: "Trace Variant",
      html: "<p>Trace Variant représente les différentes manières dont un processus peut être exécuté. Il s'agit d'une vue détaillée des différentes séquences d'activités possibles dans un processus, basée sur l'analyse des données des journaux d'événements. </p><img src='../assets/assets/images/traceVariants.png'/>"
    });
  }
  TraceAMethod(){
    Swal.fire({
      showCloseButton: true,
      title: "Trace Aligned",
      html: "<p>Cette visualisation alignée sur Trace, fournit plusieurs informations sur l'exécution des processus comme les séquences consensuelles qui donnent les modèles d'exécution d'événements courants</p><img src='../assets/assets/images/traceAligned.png'/>"
    });
  }
  SpiderDMethod(){
    Swal.fire({
      showCloseButton: true,
      title: "Spider Diagram",
      html: "<p>Ce type de visualisation est une interface de tableau de board qui sert à décrire les caractéristiques prioritaires montrées à chaque personnel (personnel clinique, technique et médical)</p><img src='../assets/assets/images/spiderwebDiagram.png'/>"
    });
  }
  TracePatern(){
    Swal.fire({
      showCloseButton: true,
      title: "Trace Pattern",
      html: "<p>L'objectif était de détecter les écarts et les problèmes qui surviennent dans le système. En utilisant des modèles de traces, l'étude a pu identifier les événements rares ou inhabituels qui se produisent tout au long des processus. Les résultats ont montré que des améliorations doivent être apportées aux processus hospitaliers</p><img src='../assets/assets/images/tracePatern.png'/>"
    });
  }
  onCheked(event: any){
    console.log(event.target.value)
  }
}
