import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IndexComponent } from './index';
import { ErrorComponent } from './error';
import { PortfolioComponent } from './portfolio';
import { PortfolioDetailComponent } from './portfolio-detail';
import { ServicesComponent } from './services';
import { ServicesDetailComponent } from './services-detail';
import { TeamComponent } from './team';
import { AboutUsComponent } from './about-us';
import { CareerComponent } from './career';
import { ContactUsComponent } from './contact-us';
import { TermsConditionsComponent } from './terms-conditions';
import { PrivacyPolicyComponent } from './privacy-policy';
import { FaqComponent } from './faq';
import { BlogComponent } from './blog';
import { BlogDetailsComponent } from './blog-details';
import { CryptoComponent } from './crypto';
import { RealEstateComponent } from './real-estate';
import { ModernSaasComponent } from './modern-saas';
import { HealthcareComponent } from './healthcare';
import { HotelResortComponent } from './hotel-resort';
import { MarketingComponent } from './marketing';
import { ApplicationComponent } from './application';
import { NftComponent } from './nft';
import { BlogLandingComponent } from './blog-landing';
import { ConstructionComponent } from './construction';
import { ConsultingComponent } from './consulting';
import { CreativeComponent } from './creative-agency';
import { EventComponent } from './event-concert';
import { GymComponent } from './gym';
import { InsuranceComponent } from './insurance';
import { JobPlacementComponent } from './job-placement';
import { OnlineCoursesComponent } from './online-courses';
import { OnlinePaymentsComponent } from './online-payments';
import { PersonalPortfolioComponent } from './personal-portfolio';
import { RestaurantComponent } from './restaurant';
import { PortfolioLandingComponent } from './portfolio-landing';
import { PhotographyComponent } from './photography';

const routes: Routes = [
    { path: '', component: IndexComponent, title: 'RTI Technology' },
    // { path: 'portfolio', component: PortfolioComponent, title: 'Portfolio | RTI Technology' },
    // { path: 'portfolio-detail', component: PortfolioDetailComponent, title: 'Portfolio Detail | RTI Technology' },
    { path: 'servicos', component: ServicesComponent, title: 'Serviços | RTI Technology' },
    // { path: 'services-detail', component: ServicesDetailComponent, title: 'Services Detail | RTI Technology' },
    // { path: 'team', component: TeamComponent, title: 'Team | RTI Technology' },
    { path: 'sobre', component: AboutUsComponent, title: 'Sobre | RTI Technology' },
    // { path: 'career', component: CareerComponent, title: 'Career | RTI Technology' },
    { path: 'contato', component: ContactUsComponent, title: 'Contato | RTI Technology' },
    //{ path: 'terms-conditions', component: TermsConditionsComponent, title: 'Terms Conditions | RTI Technology' },
    { path: 'privacidade', component: PrivacyPolicyComponent, title: 'Privacidade | RTI Technology' },
    //{ path: 'faq', component: FaqComponent, title: 'FAQs | RTI Technology' },
    //{ path: 'blog', component: BlogComponent, title: 'Blog | RTI Technology' },
    //{ path: 'blog-details', component: BlogDetailsComponent, title: 'Blog Details | RTI Technology' },
    //{ path: 'crypto', component: CryptoComponent, title: 'Crypto | RTI Technology' },
    //{ path: 'real-estate', component: RealEstateComponent, title: 'Real Estate | RTI Technology' },
    //{ path: 'modern-saas', component: ModernSaasComponent, title: 'Modern SAAS | RTI Technology' },
    //{ path: 'healthcare', component: HealthcareComponent, title: 'Health Care | RTI Technology' },
    //{ path: 'hotel-resort', component: HotelResortComponent, title: 'Hotel & Resort | RTI Technology' },
    //{ path: 'marketing', component: MarketingComponent, title: 'Marketing | RTI Technology' },
    //{ path: 'application', component: ApplicationComponent, title: 'Application | RTI Technology' },
    //{ path: 'nft', component: NftComponent, title: 'Nft | RTI Technology' },
    //{ path: 'blog-landing', component: BlogLandingComponent, title: 'Blog | RTI Technology' },
    //{ path: 'construction', component: ConstructionComponent, title: 'Construction | RTI Technology' },
    //{ path: 'consulting', component: ConsultingComponent, title: 'Consulting | RTI Technology' },
    //{ path: 'creative-agency', component: CreativeComponent, title: 'Creative Agency | RTI Technology' },
    //{ path: 'event-concert', component: EventComponent, title: 'Event Concert | RTI Technology' },
    //{ path: 'gym', component: GymComponent, title: 'GYM | RTI Technology' },
    //{ path: 'insurance', component: InsuranceComponent, title: 'Insurance | RTI Technology' },
    //{ path: 'job-placement', component: JobPlacementComponent, title: 'Job Placement | RTI Technology' },
    //{ path: 'online-courses', component: OnlineCoursesComponent, title: 'Online Courses | RTI Technology' },
    //{ path: 'online-payments', component: OnlinePaymentsComponent, title: 'Online Payments | RTI Technology' },
    //{ path: 'personal-portfolio', component: PersonalPortfolioComponent, title: 'Personal Portfolio | RTI Technology' },
    //{ path: 'restaurant', component: RestaurantComponent, title: 'Restaurant | RTI Technology' },
    //{ path: 'portfolio-landing', component: PortfolioLandingComponent, title: 'Portfolio Landing | RTI Technology' },
    //{ path: 'photography', component: PhotographyComponent, title: 'Photography | RTI Technology' },
    { path: '**', component: ErrorComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
    exports: [RouterModule],
})
export class AppRoutingModule {}
