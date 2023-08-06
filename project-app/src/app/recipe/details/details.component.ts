import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/types/recipe';
import { RecipeService } from '../recipe.service';
import { UserService } from 'src/app/user/user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
  recipe: Recipe | undefined;
  isDeleteClicked: boolean = false;
  isDeleted: boolean = false;

  constructor(
    private recipeService: RecipeService,
    private userService: UserService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getRecipe();
  }
  getRecipe(): void {
    const id = this.activatedRoute.snapshot.params['recipeId'];

    this.recipeService.getOneDetailsRecipe(id).subscribe((recipe: any) => {
      this.recipe = recipe;
    });
  }
  delete(): void {
    this.isDeleteClicked = true;
  }
  yes(): void {
    const id = this.activatedRoute.snapshot.params['recipeId'];
    this.recipeService.deleteRecipe(id).subscribe({
      next: () => {
        
      },
      error: (err: string) => alert(err),
    });
    this.isDeleted = true;
  }
  no(): void {
    this.isDeleteClicked = false;
  }
  comment() {
    
  }
}
