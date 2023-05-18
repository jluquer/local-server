import { Injectable } from '@angular/core';
import Link from 'src/app/models/link.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class LinksService {
  getLinks(): Link[] {
    const ip = environment.serverIp;
    const basePath = `http://${ip}`;
    const links = [
      new Link('Yacht', `${basePath}:8000`),
      new Link('Plex', `${basePath}:32400`),
      new Link('Calibre', `${basePath}:8083`),
    ];
    return links;
  }
}
