import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  general = {
    'name': ['Jakub Janik', 'Jakub Janik'],
    'job': ['Programista', 'Programmer'],
    'birth': ['Rok urodzenia: 2005', 'Year of birth: 2005']
  }
  education = {
    'title': ['Edukacja:', 'Education:'],
    'list': [
      [
        {
          'name': 'Szkoła Podstawowa im. UNICEF',
          'years': 'w latach: 2012 - 2020'
        },
        {
          'name': 'Technikum Mechatroniczne',
          'years': 'w latach: 2020 - dziś'
        }
      ],
      [
        {
          'name': 'Primary School UNICEF Goclaw',
          'years': 'years: 2012 - 2020'
        },
        {
          'name': 'Technical School of Mechatronicus',
          'years': 'years: 2020 - today'
        }
      ]
    ]
  }
  experience = {
    'title': ['Doświadczenie:', 'Expeirence:'],
    'list': [
      [
        {
          'name': 'Koderek',
          'role': 'Rola: Wykładowca',
          'year': 'Rok: 2022',
          'description': 'Opis: Nauka Pythona dla dzieci'
        },
        {
          'name': 'LubJam',
          'role': 'Rola: Zawodnik',
          'year': 'Rok: 2024',
          'description': 'Opis: Weekendowe tworzenie gier'
        }
      ],
      [
        {
          'name': 'Koderek',
          'role': 'Role: Lecturer',
          'year': 'Year: 2022',
          'description': 'Description: Teaching kids how to python'
        },
        {
          'name': 'LubJam',
          'role': 'Role; Contestant',
          'year': 'Year: 2024',
          'description': 'Description: Creating games over the weekend'
        }
      ]
    ]
  }
  hobbies = {
    'title': ['Zainteresowania:', 'Hobbies:'],
    'list': [
      [
        'Gry komputerowe',
        'Fantastyka',
        'Światotwórstwo',
        'Gry karciane'
      ],
      [
        'Video games',
        'Fantasy',
        'Worldbuilding',
        'Card games'
      ]
    ]
  }
  contactForm = {
    'title': ['Kontakt:', 'Contact:'],
    'list': [
      [
        'Telefon: 123 456 789',
        'Mail: niemampojeciacorobie@angular.com'
      ],
      [
        'Telephone: 987 654 321',
        'Mail: ihavenocluewhatiamdoing@angular.com'
      ]
    ],
    'subtitle': ['Wyślij mi wiadomość:', 'Send me a message:'],
    'mailLabel': ['Twój mail: ', 'Your mail: '],
    'messageLabel': ['Wiadomość: ', 'Message: '],
    'submitBtn': ['Wyślij', 'Send'],
    'alert': ['Twoja wiadomość została wysłana. Odezwę się do Ciebie w wolnej chwili.', 'Your message has been sent. I will contact you soon.']
  }
}
