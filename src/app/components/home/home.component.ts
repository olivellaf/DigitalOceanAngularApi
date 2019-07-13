import { Component, OnInit } from '@angular/core';
import { DigitalOceanService } from 'src/app/services/digitalocean.service';
import { ICollection, IDroplet } from 'dots-wrapper/dist/common/interfaces';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  //droplets: ICollection<IDroplet>;
  droplets:any;
  domains:any;

  constructor(private DO:DigitalOceanService) {

    // Getting Droplets
    DO.getDroplets().subscribe( droplets => {
      this.droplets = droplets.items
    },
      // err => console.log(err.message)
    );


    // Getting Domains
    DO.getDomains().then(
      data => { this.domains = data.data.domains }
    );
  }



  ngOnInit() {
  }

}
