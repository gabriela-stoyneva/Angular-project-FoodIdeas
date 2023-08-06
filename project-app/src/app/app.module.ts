import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { HomeComponent } from './home/home.component';
import { UserModule } from './user/user.module';
import { UserRoutingModule } from './user/user-routing.module';
import { RecipeModule } from './recipe/recipe.module';
import { RecipeRoutingModule } from './recipe/recipe-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture } from '@angular/core/testing';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule, 
    UserModule,
    UserRoutingModule,
    RecipeModule,
    RecipeRoutingModule,
    HttpClientModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
