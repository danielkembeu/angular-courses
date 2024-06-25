import { Component, OnInit, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { PostsService } from '../posts.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profil',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './profil.component.html',
  styleUrl: './profil.component.scss'
})
export class ProfilComponent implements OnInit {

  postService = inject(PostsService);
  posts: any;

  ngOnInit() {
    this.postService.getAllPosts().subscribe(donnees => this.posts = donnees);
  }

}
