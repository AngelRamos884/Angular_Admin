import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import * as AdminLte from "../../assets/dist/js/adminlte.js";

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: [
  ]
})
export class PagesComponent implements OnInit {

  constructor() {  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    $('[data-widget="treeview"]').each(function() {
        AdminLte.Treeview._jQueryInterface.call($(this), 'init');
    });
  }
}
