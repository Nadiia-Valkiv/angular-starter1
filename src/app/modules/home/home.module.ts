import { AntiCorruptionContactsComponent } from './pages/home/anti-corruption-contacts/anti-corruption-contacts.component'
import { HomeProjectsComponent } from './pages/home/home-projects/home-projects.component'
import { LiveVideoStreamComponent } from './pages/home/live-video-stream/live-video-stream.component'
import { WeekNewsComponent } from './pages/home/week-news/week-news.component'

import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'

import { CoreModule } from 'src/app/core/core.module'

import { LayoutModule } from 'src/app/shared/modules/layout/layout.module'

import { HomeRoutingModule } from 'src/app/modules/home/home-routing.module'
import { HomeHeroComponent } from 'src/app/modules/home/pages/home/home-hero/home-hero.component'
import { HomeComponent } from 'src/app/modules/home/pages/home/home.component'

@NgModule({
  declarations: [
    HomeComponent,
    HomeHeroComponent,
    HomeProjectsComponent,
    LiveVideoStreamComponent,
    AntiCorruptionContactsComponent,
    WeekNewsComponent,
  ],
  imports: [CommonModule, HomeRoutingModule, CoreModule, LayoutModule],
})
export class HomeModule {}
