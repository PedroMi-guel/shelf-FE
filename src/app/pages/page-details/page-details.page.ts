import { Component, Input, OnInit } from '@angular/core';
import { RecordService } from './../../services/record.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page-details',
  templateUrl: './page-details.page.html',
  styleUrls: ['./page-details.page.scss'],
})
export class PageDetailsPage implements OnInit {

  id:any;
  detailData: any;
  
  constructor(
    private rs: RecordService,  // assuming RecordService is a service that fetches data from a remote API
    private route: ActivatedRoute  // assuming ActivatedRoute is a service provided by Angular Router module
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.rs.getRecord(this.id).subscribe(data => {
      this.detailData = data;
      console.log(this.detailData);
      console.log("Detalles")
    });
  }

}
