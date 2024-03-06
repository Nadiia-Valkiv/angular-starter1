import { Card } from '../../../interfaces/newsCard'

import { Component } from '@angular/core'

@Component({
  selector: 'app-home-projects',
  templateUrl: './home-projects.component.html',
  styleUrls: ['./home-projects.component.scss'],
})
export class HomeProjectsComponent {
  newsCards: Card[] = [
    { date: 'Старт', news: ['Ліквідація ДАБІ', 'Створення Сервісної служби'] },
    { date: 'Березень - Травень 2020', news: ['Перехідний період', 'Мораторій на інспекційний держконтроль'] },
    { date: 'Червень 2020', news: ['Створення ДІМ', 'Запуск нового реєстру'] },
    { date: 'Вересень 2020', news: ['Державне агентство з питань технічного регулювання у містобудуванні'] },
    { date: 'Січень 2021', news: ['Запровадження страхування'] },
  ]
}
