/*
 * File: app.component.ts
 * Project: wsearch
 * File Created: Thursday, 30th March 2023 5:44:04 pm
 * Last Modified: Monday, 3rd April 2023 5:21:46 pm
 * Copyright 2023 Vitor Leal
 */

import { Component } from '@angular/core';
import { WikipediaService } from './wikipedia.service';

/**
 * App component
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  pages: any;

  constructor(private wikipedia: WikipediaService) {
    this.pages = [{}];
  }

  /**
   * Get's the searchs found
   *
   * @param {any} term
   * @returns
   * @memberof AppComponent
   */
  public onTerm(term: any): void {
    this.wikipedia.search(term).subscribe((pages) => {
      this.pages = pages;
    });
  }
}
