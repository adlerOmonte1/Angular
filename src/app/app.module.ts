import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { providePrimeNG } from 'primeng/config';
import Aura from '@primeng/themes/aura';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { SliderModule } from 'primeng/slider';
import { MenubarModule } from 'primeng/menubar';
import { BadgeModule } from 'primeng/badge';
import { AvatarModule } from 'primeng/avatar';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { FloatLabelModule } from 'primeng/floatlabel';
import { TooltipModule } from 'primeng/tooltip';
import { LoginComponent } from './login/login.component';
import { GalleriaModule } from 'primeng/galleria';
import { HomeComponent } from './home/home.component';
import { FocusTrapModule } from 'primeng/focustrap';
import { AutoFocusModule } from 'primeng/autofocus';
import { CheckboxModule } from 'primeng/checkbox';
import { MessageModule } from 'primeng/message';
import { DatePickerModule } from 'primeng/datepicker';
import { DatePicker } from 'primeng/datepicker';
import { Fluid } from 'primeng/fluid';
import { CalendarModule } from 'primeng/calendar';
import { CarouselModule } from 'primeng/carousel';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from '../service/token.interceptor';
import { MiCuentaComponent } from './mi-cuenta/mi-cuenta.component';
import { CardModule } from 'primeng/card';
import { CategoriasComponent } from './categorias/categorias.component';
import { SelectModule } from 'primeng/select';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DialogModule } from 'primeng/dialog';
import { NoticiasComponent } from './noticias/noticias.component';
import { TallasComponent } from './tallas/tallas.component';
import { ProveedoresComponent } from './proveedores/proveedores.component';
import { AlmacenesComponent } from './almacenes/almacenes.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    MiCuentaComponent,
    CategoriasComponent,
    NoticiasComponent,
    TallasComponent,
    ProveedoresComponent,
    AlmacenesComponent,
    //ListaproductosComponent,
  ],
  imports: [
    CarouselModule,
    CalendarModule,
    DatePicker,
    Fluid,
    DatePickerModule,
    FocusTrapModule,
    GalleriaModule,
    TooltipModule,
    FloatLabelModule,
    InputIconModule,
    IconFieldModule,
    AvatarModule,
    BadgeModule,
    MenubarModule,
    SliderModule,
    FormsModule,
    ButtonModule,
    InputTextModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    TableModule,
    AutoFocusModule,
    CheckboxModule,
    MessageModule,
    CardModule,
    SelectModule,
    DialogModule,
    ConfirmDialogModule
  ],
  providers: [
  { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
    providePrimeNG({
      theme: {
          preset: Aura
      }
    })
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
