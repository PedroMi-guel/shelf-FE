import { Component, CUSTOM_ELEMENTS_SCHEMA, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { RecordService } from 'src/app/services/record.service';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
  standalone: true,
  imports: [IonicModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DetailsComponent implements OnInit {

  @Input() id: number = 0;
  detailData: any;
  
  constructor(
    private router:Router,
    private rs: RecordService
  ) { }

  ngOnInit() {
    this.rs.getRecord(this.id).subscribe(data => {
      this.detailData = data;
    });
  }

}
