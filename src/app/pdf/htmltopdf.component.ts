import { Component, AfterViewInit, OnInit, ElementRef ,ViewChild} from '@angular/core';
import * as jspdf from 'jspdf';
import html2canvas from 'html2canvas';
// import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SampleService } from '../sample.service';
import { DataTableDirective } from 'angular-datatables';
// import swal from 'sweetalert2';
import { Subject } from 'rxjs';
import { DataTablesModule } from 'angular-datatables';

@Component({
  selector: 'app-htmltopdf',
  templateUrl: './htmltopdf.component.html',
  styleUrls: ['./htmltopdf.component.css']
})
export class HtmltopdfComponent implements AfterViewInit, OnInit {

  users; result; selectedUser; userPayload; editUserPayload;
  @ViewChild(DataTableDirective)
  dtElement: DataTableDirective;
  dtOptions: any = {};
  dtTrigger: Subject<any> = new Subject();
  loggedInData; money; dateFormat;

  @ViewChild('content') content:ElementRef;
  constructor(private sampleService: SampleService) { }

  public captureScreen()
  {
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

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      dom: 'lBfrtip',
      buttons: [
        {
          extend: 'copy',
          className: 'btn btn-default ml-3',
          init: function (api, node, config) {
            $(node).removeClass('dt-button');
          }
        },
        {
          extend: 'print',
          className: 'btn btn-default',
          init: function (api, node, config) {
            $(node).removeClass('dt-button');
          }
        },
        {
          extend: 'csv',
          className: 'btn btn-default',
          init: function (api, node, config) {
            $(node).removeClass('dt-button');
          }
        }
      ]
    };
    this.getUser();
  }

  ngAfterViewInit(): void {
    this.dtTrigger.next();
  }

  getUser() {
    this.sampleService.myData().subscribe((data) => {
      this.result = data;
      this.users = this.result.result.revenueData;
      this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
        dtInstance.destroy();
        this.dtTrigger.next();
      });
    });
  }

  
}
