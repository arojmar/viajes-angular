import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ViajeDetalleComponent } from './viaje-detalle/viaje-detalle.component';
import { ViajeLineaDetalleComponent } from './viaje-detalle/viaje-linea-detalle/viaje-linea-detalle.component';
import { HighlightDirective } from './highlight.directive';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faLock, faLockOpen, faWindowClose, faClock, fas } from '@fortawesome/free-solid-svg-icons';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { StatusDirective } from './status.directive';
import { SelectableDirective } from './selectable.directive';


@NgModule({
  declarations: [
    AppComponent,
    ViajeDetalleComponent,
    ViajeLineaDetalleComponent,
    HighlightDirective,
    StatusDirective,
    SelectableDirective
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    library.addIconPacks(fas);
    library.addIcons(faLock);
    library.addIcons(faLockOpen);
    library.addIcons(faWindowClose);
    library.addIcons(faClock);
  }
}
