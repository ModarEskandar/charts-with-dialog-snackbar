import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgApexchartsModule } from 'ng-apexcharts';
import { MatIconModule } from '@angular/material/icon';

import { AppComponent } from './app.component';
import { ChartsComponent } from './charts/charts.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SidebarSearchComponent } from './sidebar-search/sidebar-search.component';
import { FilterCascadePipe } from './pipes/cascade-filter.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { FilterComponent } from './filter/filter.component';
import { SearchComponent } from './search/search.component';
import { FilterSidbarMenuPipe } from './pipes/filter-sidebar-menu.pipe';
import { HighlightPipe } from './pipes/highlight.pipe';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing.module';
import {
  MAT_SNACK_BAR_DEFAULT_OPTIONS,
  MatSnackBarModule,
} from '@angular/material/snack-bar';
import { HomeComponent } from './home/home.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TreeListComponent } from './tree-list/tree-list.component';
import { AuthService } from './auth/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { AuthGuard } from './auth/auth-guard.service';
import { environment } from 'src/environments/environment.development';
import { LoggerModule, NgxLoggerLevel } from 'ngx-logger';
import { MatButtonModule } from '@angular/material/button';
import { SnackbarComponent } from './components/snackbar/snackbar.component';
import { DialogComponent } from './components/dialog/dialog.component';
import {
  MAT_DIALOG_DEFAULT_OPTIONS,
  MatDialogModule,
} from '@angular/material/dialog';
import { MatTreeModule } from '@angular/material/tree';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';

import { TreeNestedComponent } from './tree-nested/tree-nested.component';
import { AutoCompleteComponent } from './material/components/auto-complete/auto-complete.component';
const environmentConfig: any = environment.logger;

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ChartsComponent,
    FilterCascadePipe,
    FilterPipe,
    SearchComponent,
    SidebarSearchComponent,
    FilterComponent,
    SearchComponent,
    FilterSidbarMenuPipe,
    HighlightPipe,
    HomeComponent,
    SidebarComponent,
    HeaderComponent,
    TreeListComponent,
    SnackbarComponent,
    DialogComponent,
    TreeNestedComponent,
    AutoCompleteComponent,
  ],
  imports: [
    BrowserModule,
    NgApexchartsModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatSnackBarModule,
    MatDialogModule,
    MatTreeModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    LoggerModule.forRoot({
      level: NgxLoggerLevel[environmentConfig.level],
      serverLogLevel: NgxLoggerLevel[environmentConfig.serverLevel],
      serverLoggingUrl: environmentConfig.serverUrl,
    } as any),
  ],
  providers: [
    AuthService,
    AuthGuard,
    {
      provide: MAT_SNACK_BAR_DEFAULT_OPTIONS,
      useValue: {
        horizontalPosition: 'end',
        verticalPosition: 'top',
        duration: 3000,
        data: {
          message: 'تمت العملية بنجاح',
          action: 'حسناً',
        },
      },
    },
    {
      provide: MAT_DIALOG_DEFAULT_OPTIONS,
      useValue: {
        width: '400px',
        enterAnimationDuration: 600,
        exitAnimationDuration: 600,
        panelClass: 'dialog',
        disableClose: true,
      },
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
