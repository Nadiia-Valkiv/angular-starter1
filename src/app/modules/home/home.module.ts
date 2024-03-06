import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'

import { CoreModule } from 'src/app/core/core.module'

import { LayoutModule } from 'src/app/shared/modules/layout/layout.module'

import { HomeRoutingModule } from 'src/app/modules/home/home-routing.module'
import { HomeHeroComponent } from 'src/app/modules/home/pages/home/home-hero/home-hero.component'
import { HomeComponent } from 'src/app/modules/home/pages/home/home.component'
import { HomeProjectsComponent } from './pages/home/home-projects/home-projects.component';
import { LiveVideoStreamComponent } from './pages/home/live-video-stream/live-video-stream.component';
import { AntiCorruptionContactsComponent } from './pages/home/anti-corruption-contacts/anti-corruption-contacts.component'

@NgModule({
  declarations: [HomeComponent, HomeHeroComponent, HomeProjectsComponent, LiveVideoStreamComponent, AntiCorruptionContactsComponent],
  imports: [CommonModule, HomeRoutingModule, CoreModule, LayoutModule],
})
export class HomeModule {}