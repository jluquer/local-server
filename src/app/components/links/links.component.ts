import { Component, OnInit } from '@angular/core';
import Link from 'src/app/models/link.model';
import { LinksService } from 'src/app/services/links/links.service';

@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.scss']
})
export class LinksComponent implements OnInit {
  public links: Array<Link> = [];

  constructor(private linksService: LinksService) { }

  ngOnInit(): void {
    this.links = this.linksService.getLinks();
  }

}
