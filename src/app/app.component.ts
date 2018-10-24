import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { SampleService } from './sample.service';
import * as jspdf from 'jspdf';
import html2canvas from 'html2canvas';
import { PagerService } from './_services/index'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app'; items;

  @ViewChild('content') content: ElementRef;
  constructor(private pagerService: PagerService, private sampleService: SampleService) { }

  public captureScreen() {
    var data = document.getElementById('convert');
    html2canvas(data).then(canvas => {
      var imgWidth = 208;
      var pageHeight = 295;
      var imgHeight = canvas.height * imgWidth / canvas.width;
      var heightLeft = imgHeight;
      const contentDataURL = canvas.toDataURL('image/png')
      let pdf = new jspdf('p', 'mm', 'a4');
      var position = 0;
      pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight)
      pdf.save('Invoice.pdf')
    });
  }
  // array of all items to be paged
  private allItems: any = [];

  // pager object
  pager: any = {};

  // paged items
  pagedItems: any = [];

  ngOnInit() {
    // get dummy data
    this.sampleService.myData().subscribe((data) => {
      // set items to json response
      this.items = data;
      this.allItems = this.items.result.revenueData
      // initialize to page 1
      this.setPage(1);
    });
  }

  setPage(page: number) {
    // get pager object from service
    this.pager = this.pagerService.getPager(this.allItems.length, page);

    // get current page of items
    this.pagedItems = this.allItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
  }
}
