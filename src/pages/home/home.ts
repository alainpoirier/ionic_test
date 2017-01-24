import { Component } from '@angular/core';

import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { NavController } from 'ionic-angular';
import 'rxjs/add/operator/map';

import {Injectable, Inject} from '@angular/core';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
@Injectable()
export class HomePage {

  results: any;
  headers = new Headers({"Authorization": "Token 79147cb61102fbaafc30d4fc9a8b81dc30a50f97"});
  options = new RequestOptions({ headers: this.headers});


  constructor(public navCtrl: NavController, public http: Http,) {

	this.http.get('http://0.0.0.0:8000/fr/api/activites/', this.options ).map((response: Response) => response.json()).subscribe(data => { 
        this.results = data.results;

    });




  }

}
