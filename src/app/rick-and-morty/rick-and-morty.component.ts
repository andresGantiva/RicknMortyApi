import { Component, OnInit } from '@angular/core';
import { RickAndMortyServiceService } from '../rick-and-morty-service.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-rick-and-morty',
  templateUrl: './rick-and-morty.component.html',
  styleUrls: ['./rick-and-morty.component.css']
})
export class RickAndMortyComponent implements OnInit {

  characters: any[] = [];

  constructor(private rickAndMortyServiceService: RickAndMortyServiceService,
    private http: HttpClient
  ){}

  ngOnInit(): void {
    this.rickAndMortyServiceService.getCharacters().subscribe((response)=> {
      this.characters = response.results;

      this.characters.forEach(character => {
        character.episodesDetails = [];
        character.showEpisodes = false; 
        character.episode.forEach((episodeUrl: string) => {
          this.http.get(episodeUrl).subscribe((episodeDetail) => {
            character.episodesDetails.push(episodeDetail);
          });
        });
      });
    });
  }
  toggleEpisodes(character: any): void {
    character.showEpisodes = !character.showEpisodes;
}

}
