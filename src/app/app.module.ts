import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { provideStorage,getStorage } from '@angular/fire/storage';
import { ToolbarComponent } from './Components/toolbar/toolbar.component';
import { SidebarComponent } from './Components/sidebar/sidebar.component';
import { EditBlogComponent } from './Components/Blog/edit-blog/edit-blog.component';
import { BlogHomeComponent } from './Components/Blog/blog-home/blog-home.component';
import { EditEntryComponent } from './Components/Blog/edit-entry/edit-entry.component';
import { ViewEntryComponent } from './Components/Blog/view-entry/view-entry.component';
import { LandingComponent } from './Components/landing/landing.component';
import { FABComponent } from './Components/Controls/fab/fab.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    SidebarComponent,
    EditBlogComponent,
    BlogHomeComponent,
    EditEntryComponent,
    ViewEntryComponent,
    LandingComponent,
    FABComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage()),
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
