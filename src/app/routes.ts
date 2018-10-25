import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HtmltopdfComponent } from './pdf/htmltopdf.component';


const appRoutes: Routes = [
    // { path: '', redirectTo:'pdf',pathMatch:'full' },
    // { path: 'pdf', component: HtmltopdfComponent },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
