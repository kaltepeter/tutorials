import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { dinosaurIconsArtist, dinosaurIconsBirthday, dinosaurIconsChef, DinosaurIconsModule, DinosaurIconsRegistryService } from 'projects/dinosaur-icons/src/public-api';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DinosaurIconsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private dinosaurIconRegistry: DinosaurIconsRegistryService) {
    this.dinosaurIconRegistry.registerIcons([
        dinosaurIconsArtist,
        dinosaurIconsBirthday,
        dinosaurIconsChef
    ]);
}
}
