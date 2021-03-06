import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing, appRoutingProviders } from './app.routing';
 
import { AppComponent } from './app.component';
import { Navigation } from './components/navigation/navigation.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { SliderComponent } from './components/slider/slider.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HomeComponent } from './components/home/home.component';
import { BlogComponent } from './components/blog/blog.component';
import { PageComponent } from './components/page/page.component';
import { FormComponent } from './components/form/form.component';
import { WorkComponent } from './components/work/work.component';
import { ErrorComponent } from './components/error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    Navigation,
    FooterComponent,
    HeaderComponent,
    SliderComponent,
    SidebarComponent,
    HomeComponent,
    BlogComponent,
    PageComponent,
    FormComponent,
    WorkComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
