import { AchievementDto } from '../../generated/user-api'

export const ACHIEVEMENTS: AchievementDto[] = [
  {
    id: '1',
    name: 'First achievement',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    amountToObtain: 200,
    progress: 200,
    isObtained: true
  },
  {
    id: '2',
    name: 'Second achievement',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    amountToObtain: 500,
    progress: 45,
    isObtained: false
  },
  {
    id: '3',
    name: 'Third achievement',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    amountToObtain: 1000,
    progress: 30,
    isObtained: false
  },
  {
    id: '4',
    name: 'Fourth achievement',
    description: '4',
    amountToObtain: 2000,
    progress: 20,
    isObtained: false
  },
  {
    id: '5',
    name: 'Fifth achievement',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    amountToObtain: 5000,
    progress: 10,
    isObtained: false
  },
  {
    id: '6',
    name: 'Sixth achievement',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    amountToObtain: 10000,
    progress: 5,
    isObtained: false
  },
  {
    id: '7',
    name: 'Seventh achievement',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    amountToObtain: 20000,
    progress: 0,
    isObtained: false
  },
  {
    id: '8',
    name: 'Eighth achievement',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    amountToObtain: 50,
    progress: 50,
    isObtained: true
  }
]
