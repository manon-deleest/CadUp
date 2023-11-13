import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomesComponent } from './pages/homes/homes.component';
import { NavComponent } from './core/nav/nav.component';
import { LoadingComponent } from './pages/loading/loading.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AvantageComponent } from './shareds/avantage/avantage.component';
import { GainComponent } from './shareds/gain/gain.component';
import { FonctionnalitesComponent } from './shareds/fonctionnalites/fonctionnalites.component';
import { MaquetteComponent } from './shareds/maquette/maquette.component';
import { ContactComponent } from './shareds/contact/contact.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { FooterComponent } from './shareds/footer/footer.component';
import { InProgressComponent } from './pages/in-progress/in-progress.component';
import { MentionLegaleComponent } from './pages/mention-legale/mention-legale.component';
import { NewsletterComponent } from './shareds/newsletter/newsletter.component';
import { FirestoreModule } from '@angular/fire/firestore';
import { ValidateComponent } from './shareds/validate/validate.component';
import { PolitiqueConfidentialiteComponent } from './pages/politique-confidentialite/politique-confidentialite.component';
import { CGUComponent } from './pages/cgu/cgu.component';
import { CGVComponent } from './pages/cgv/cgv.component';
import { PageAvantageComponent } from './pages/page-avantage/page-avantage.component';
import { PageFonctionnaliteComponent } from './pages/page-fonctionnalite/page-fonctionnalite.component';
import { PagesFonctionnaliteComponent } from './pages/pages-fonctionnalite/pages-fonctionnalite.component';
import { AboutComponent } from './pages/about/about.component';
import { BenefitsComponent } from './pages/benefits/benefits.component';
import { BlogComponent } from './pages/blog/blog.component';
import { FunctionalityComponent } from './pages/functionality/functionality.component';
import { MockUpsComponent } from './pages/mock-ups/mock-ups.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { BlogSingleComponent } from './pages/blog-single/blog-single.component';
import { BlogTuileComponent } from './shareds/blog-tuile/blog-tuile.component';
import { CommunHeaderComponent } from './shareds/commun-header/commun-header.component';
import { BlogTuileLoadingComponent } from './shareds/blog-tuile-loading/blog-tuile-loading.component';

@NgModule({
  declarations: [
    AppComponent,
    HomesComponent,
    NavComponent,
    LoadingComponent,
    AvantageComponent,
    GainComponent,
    FonctionnalitesComponent,
    MaquetteComponent,
    ContactComponent,
    FooterComponent,
    InProgressComponent,
    MentionLegaleComponent,
    NewsletterComponent,
    ValidateComponent,
    PolitiqueConfidentialiteComponent,
    CGUComponent,
    CGVComponent,
    PageAvantageComponent,
    PageFonctionnaliteComponent,
    PagesFonctionnaliteComponent,
    AboutComponent,
    BenefitsComponent,
    BlogComponent,
    FunctionalityComponent,
    MockUpsComponent,
    ContactPageComponent,
    BlogSingleComponent,
    BlogTuileComponent,
    CommunHeaderComponent,
    BlogTuileLoadingComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FontAwesomeModule,
    NoopAnimationsModule,
    MatSnackBarModule,
    FormsModule,
    ReactiveFormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideDatabase(() => getDatabase()),
    provideFirestore(() => getFirestore()),
    FirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
