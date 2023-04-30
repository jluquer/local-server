import { Injectable } from '@angular/core';
import Link from 'src/app/models/link.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class LinksService {
  constructor() {}

  getLinks(): Link[] {
    const ip = environment.serverIp;
    const basePath = `http://${ip}`;
    const links = [new Link('Yatch', `${basePath}:8000`)];
    return links;
  }
}
