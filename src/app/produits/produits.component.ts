import { Component, OnInit } from '@angular/core';
import { Produit } from '../models/produit.model';
import { ProduitService } from '../services/produit.service';

@Component({
	selector: 'app-produits',
	templateUrl: './produits.component.html',
	styleUrls: ['./produits.component.css']
})
export class ProduitsComponent implements OnInit {
	produits: Produit[];
	constructor(private produitService: ProduitService) {
		this.produits = this.produitService.getProduits();
	}
	deleteProduit(produit:Produit) {
    let conf = confirm("Etes-vous sûr ?");
    if (conf)
		  this.produitService.supprimerProduit(produit);
	}
	ngOnInit(): void {
	}

}
