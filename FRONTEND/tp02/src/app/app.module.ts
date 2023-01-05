import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TetiereComponent } from './tetiere/tetiere.component';
import { FooterComponent } from './footer/footer.component';
import { FormulaireSaisieClientComponent } from './formulaire-saisie-client/formulaire-saisie-client.component';
import { RecapSaisieClientComponent } from './recap-saisie-client/recap-saisie-client.component';
import { ErrorDirective } from './error.directive';
import { PhoneNumberPipe } from './phone-number.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TetiereComponent,
    FooterComponent,
    FormulaireSaisieClientComponent,
    RecapSaisieClientComponent,
    ErrorDirective,
    PhoneNumberPipe,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
