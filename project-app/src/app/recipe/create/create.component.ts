import { Component, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { RecipeService } from 'src/app/recipe/recipe.service';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})
export class CreateComponent {
  id: string | undefined;
  ownerId: string | null = '';
  token: any;

  constructor(
    private recipeService: RecipeService,
    private router: Router,
    private userService: UserService
  ) {}

  createRecipeSubmitHandler(form: NgForm): void {
    if (form.invalid) {
      return;
    }
    this.token = localStorage.getItem('user');
    this.ownerId = JSON.parse(this.token).userId;

    const { name, imageUrl, category, products, preparation, time } =
      form.value;

    this.recipeService
      .createRecipe(
        name,
        imageUrl,
        category,
        products,
        preparation,
        time,
        this.ownerId
      )
      .subscribe({
        next: (res) => {
          this.createId((this.id = res.name));
          this.router.navigate(['/account']);
        },
        error: (error) => {
          alert(error.message);
        },
      });
  }
  createId(id: string): void {
    this.recipeService.patchPropertyId(id).subscribe();
  }
}
