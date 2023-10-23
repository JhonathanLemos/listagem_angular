import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule  } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ProdutosService } from './services/produtos.service';
import { ProdutoComponent } from './components/produto/produto.component';
import { HeaderComponent } from './components/header/header.component';
import {MatTableModule} from '@angular/material/table';
import { FormularioComponent } from './modais/formulario/formulario.component';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { ConfirmationAlertComponent } from './components/confirmation-alert/confirmation-alert.component';
import { ClienteComponent } from './components/cliente/cliente.component';
import { ClienteFormComponent } from './components/cliente/cliente-form/cliente-form.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatPaginatorModule } from '@angular/material/paginator';
@NgModule({
  declarations: [
    AppComponent,
    ProdutoComponent,
    HeaderComponent,
    FormularioComponent,
    ConfirmationAlertComponent,
    ClienteComponent,
    ClienteFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatButtonModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatDialogModule,
    MatInputModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatTableModule,
    FormsModule,
    FlexLayoutModule,
    MatPaginatorModule,
  ],
  providers: [ProdutosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
