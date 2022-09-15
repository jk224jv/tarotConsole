/**
 * This is the start of the app.
 * The Omnissiah's Tarot.
 *
 * @author Jimmy Karlsson <jk224jv@strudent.lnu.se>
 */

import { stdout } from 'process'
import * as readline from 'readline'
import readlineSync from 'readline-sync'

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

// create deck as an object
const tarotDeck = {
  settings: {
    backgroundColor: '0', // 0 = Black, 1 = Red, 2 = Green, 3 = Yellow, 4 = Blue, 5 = Magenta, 6 = Cyan, 7 = White.
    textColor: '2', // 0 = Black, 1 = Red, 2 = Green, 3 = Yellow, 4 = Blue, 5 = Magenta, 6 = Cyan, 7 = White.
    textBrightness: '0', // 0 = Bright, 1 = Dim.
    cardsWidth: 11, // must be odd intiger <== 33. Default = 33
    cardsHeight: 17, // must be odd initger <== 37. Default = 17
    terminalWidth: 0,
    terminalHeight: 0,
    default: {
      backgroundColor: '0',
      textColor: '2',
      textBrightness: '0',
      cardsWidth: 11,
      cardsHeight: 17

    }
  },

  rods: { // minor arcana = Staffs. Cards 1 - 14
    1: {
      upright: 'Creation, willpower, inspiration, desire',
      reversed: 'Lack of energy, lack of passion, boredom'
    },

    2: {
      upright: 'Planning, making decisions, leaving home',
      reversed: 'Fear of change, playing safe, bad planning'
    },

    3: {
      upright: 'Looking ahead, expansion, rapid growth',
      reversed: 'Obstacles, delays, frustration'
    },

    4: {
      upright: 'Community, home, celebration',
      reversed: 'Lack of support, transience, home conflicts'
    },

    5: {
      upright: 'Competition, rivalry, conflict',
      reversed: 'Avoiding conflict, respecting differences'
    },

    6: {
      upright: 'Victory, success, public reward',
      reversed: 'Excess pride, lack of recognition, punishment'
    },

    7: {
      upright: 'Perseverance, defensive, maintaining control',
      reversed: 'Give up, destroyed confidence, overwhelmed'
    },

    8: {
      upright: 'Rapid action, movement, quick decisions',
      reversed: 'Panic, waiting, slowdown'
    },

    9: {
      upright: 'Resilience, grit, last stand',
      reversed: 'Exhaustion, fatigue, questioning motivations'
    },

    10: {
      upright: 'Accomplishment, responsibility, burden',
      reversed: 'Inability to delegate, overstressed, burnt out'
    },

    11: {
      upright: 'Exploration, excitement, freedom',
      reversed: 'Lack of direction, procrastination, creating conflict'
    },

    12: {
      upright: 'Courage, determination, joy',
      reversed: 'Selfishness, jealousy, insecurities'
    },

    13: {
      upright: 'Action, adventure, fearlessness',
      reversed: 'Anger, impulsiveness, recklessness'
    },

    14: {
      upright: 'Big picture, leader, overcoming challenges',
      reversed: 'Impulsive, overbearing, unachievable'
    }
  },

  cogs: { // minor arcana = Conins. Cards 15 - 28
    1: {
      upright: 'Opportunity, prosperity, new venture',
      reversed: 'Lost opportunity, missed chance, bad investment '
    },

    2: {
      upright: 'Balancing decisions, priorities, adapting to change',
      reversed: 'Loss of balance, disorganized, overwhelmed'
    },

    3: {
      upright: 'Teamwork, collaboration, building',
      reversed: 'Lack of teamwork, disorganized, group conflict'
    },

    4: {
      upright: 'Conservation, frugality, security',
      reversed: 'Greediness, stinginess, possessiveness'
    },

    5: {
      upright: 'Need, poverty, insecurity',
      reversed: 'Recovery, charity, improvement'
    },

    6: {
      upright: 'Charity, generosity, sharing',
      reversed: 'Strings attached, stinginess, power and domination'
    },

    7: {
      upright: 'Hard work, perseverance, diligence',
      reversed: 'Work without results, distractions, lack of rewards'
    },

    8: {
      upright: 'Apprenticeship, passion, high standards',
      reversed: 'Lack of passion, uninspired, no motivation'
    },

    9: {
      upright: 'Fruits of labor, rewards, luxury',
      reversed: 'Reckless spending, living beyond means, false success'
    },

    10: {
      upright: 'Legacy, culmination, inheritance',
      reversed: 'Fleeting success, lack of stability, lack of resources'
    },

    11: {
      upright: 'Ambition, desire, diligence',
      reversed: 'Lack of commitment, greediness, laziness'
    },

    12: {
      upright: 'Efficiency, hard work, responsibility',
      reversed: 'Laziness, obsessiveness, work without reward'
    },

    13: {
      upright: 'Practicality, creature comforts, financial security',
      reversed: 'Self-centeredness, jealousy, smothering'
    },

    14: {
      upright: 'Abundance, prosperity, security',
      reversed: 'Greed, indulgence, sensuality'
    }

  },

  sharp: { // minor arcana = Cups or Containers. Cards 29 - 42
    1: {
      upright: 'New feelings, spirituality, intuition',
      reversed: 'Emotional loss, blocked creativity, emptiness'
    },

    2: {
      upright: 'Unity, partnership, connection',
      reversed: 'Imbalance, broken communication, tension'
    },

    3: {
      upright: 'Friendship, community, happiness',
      reversed: 'Overindulgence, gossip, isolation'
    },

    4: {
      upright: 'Apathy, contemplation, disconnectedness',
      reversed: 'Sudden awareness, choosing happiness, acceptance'
    },

    5: {
      upright: 'Loss, grief, self-pity',
      reversed: 'Acceptance, moving on, finding peace'
    },

    6: {
      upright: 'Familiarity, happy memories, healing',
      reversed: 'Moving forward, leaving home, independence'
    },

    7: {
      upright: 'Searching for purpose, choices, daydreaming',
      reversed: 'Lack of purpose, diversion, confusion'
    },

    8: {
      upright: 'Walking away, disillusionment, leaving behind',
      reversed: 'Avoidance, fear of change, fear of loss'
    },

    9: {
      upright: 'Satisfaction, emotional stability, luxury',
      reversed: 'Lack of inner joy, smugness, dissatisfaction'
    },

    10: {
      upright: 'Inner happiness, fulfillment, dreams coming true',
      reversed: 'Shattered dreams, broken family, domestic'
    },

    11: {
      upright: 'Happy surprise, dreamer, sensitivity',
      reversed: 'Emotional immaturity, insecurity, disappointment'
    },

    12: {
      upright: 'Following the heart, idealist, romantic',
      reversed: 'Moodiness, disappointment'
    },

    13: {
      upright: 'Compassion, calm, comfort',
      reversed: 'Martyrdom, insecurity, dependence'
    },

    14: {
      upright: 'Compassion, control, balance',
      reversed: 'Coldness, moodiness, bad advice'
    }

  },

  blades: { // minor arcana = Swords. Cards 33 - 56
    1: {
      upright: 'Breakthrough, clarity, sharp mind',
      reversed: 'Confusion, brutality, chaos'
    },

    2: {
      upright: 'Difficult choices, indecision, stalemate',
      reversed: 'Lesser of two evils, no right choice, confusion'
    },

    3: {
      upright: 'Heartbreak, suffering, grief',
      reversed: 'Recovery, forgiveness, moving on'
    },

    4: {
      upright: 'Rest, restoration, contemplation',
      reversed: 'Restlessness, burnout, stress'
    },

    5: {
      upright: 'Unbridled ambition, win at all costs, sneakiness',
      reversed: 'Lingering resentment, desire to reconcile, forgiveness'
    },

    6: {
      upright: 'Transition, leaving behind, moving on',
      reversed: 'Emotional baggage, unresolved issues, resisting transition'
    },

    7: {
      upright: 'Deception, trickery, tactics and strategy',
      reversed: 'Coming clean, rethinking approach, deception'
    },

    8: {
      upright: 'Imprisonment, entrapment, self-victimization',
      reversed: 'Self acceptance, new perspective, freedom'
    },

    9: {
      upright: 'Anxiety, hopelessness, trauma',
      reversed: 'Hope, reaching out, despair'
    },

    10: {
      upright: 'Failure, collapse, defeat',
      reversed: 'Can\'t get worse, only upwards, inevitable end'
    },

    11: {
      upright: 'Curiosity, restlessness, mental energy',
      reversed: 'Deception, manipulation, all tall'
    },

    12: {
      upright: 'Complexity, perceptiveness, clear',
      reversed: 'Cold hearted, cruel, bitterness'
    },

    13: {
      upright: 'Action, impulsiveness, defending beliefs',
      reversed: 'No direction, disregard for consequences, unpredictability'
    },

    14: {
      upright: 'Head over heart, discipline, truth',
      reversed: 'Manipulative, cruel, weakness'
    }

  },

  majorArcana: { // major arcana. Cards 57 - 78
    1: { // The Fool
      upright: 'Innocence, new beginnings, free spirit',
      reversed: 'Recklessness, taken advantage of, inconsideration'
    },

    2: { // The Magician
      upright: 'Willpower, desire, creation, manifestation',
      reversed: 'Trickery, illusions, out of touch'
    },

    3: { // The Hight Priestess
      upright: 'Intuitive, unconscious, inner voice',
      reversed: 'Lack of center, lost inner voice, repressed feelings'
    },

    4: { // The Empress
      upright: 'Motherhood, fertility, nature',
      reversed: 'Dependence, smothering, emptiness, nosiness'
    },

    5: { // The Emperor
      upright: 'Authority, structure, control, fatherhood',
      reversed: 'Tyranny, rigidity, coldness'
    },

    6: { // The High Priest
      upright: 'Tradition, conformity, morality, ethics',
      reversed: 'Rebellion, subversiveness, new approache'
    },

    7: { // The Lovers
      upright: 'Partnerships, duality, union',
      reversed: 'Loss of balance, one-sidedness, disharmony'
    },

    8: { // The Chariot
      upright: 'Direction, control, willpower',
      reversed: 'Lack of control, lack of direction, aggression'
    },

    9: { // Strength
      upright: 'Inner strength, bravery, compassion, focus',
      reversed: 'Self doubt, weakness, insecurity'
    },

    10: { // The Hermit
      upright: 'Contemplation, search for truth, inner guidance',
      reversed: 'Loneliness, isolation, lost your way'
    },

    11: { // The Wheel of fortune
      upright: 'Change, cycles, inevitable fate',
      reversed: 'No control, clinging to control, bad luck'
    },

    12: { // Justice
      upright: 'Cause and effect, clarity, truth',
      reversed: 'Dishonesty, unaccountability, unfairness'
    },

    13: { // The Hanged Man
      upright: 'Waiting, sacrifice, release, martyrdom',
      reversed: 'Stalling, needless sacrifice, fear of sacrifice'
    },

    14: { // Death
      upright: 'End of cycle, beginnings, change, metamorphosis',
      reversed: 'Fear of change, holding on, stagnation'
    },

    15: { // Temperance
      upright: 'Middle path, patience, finding meaning',
      reversed: 'Extremes, excess, lack of balance'
    },

    16: { // The Devil
      upright: 'The Unacknowledged, addiction, materialism, playfulness',
      reversed: 'Realisation, freedom, release, restoring control'
    },

    17: { // The Tower
      upright: 'Sudden upheaval, broken pride, disaster',
      reversed: 'Disaster avoided, delayed disaster, fear of suffering'
    },

    18: { // The Star
      upright: 'Hope, guidance, faith, rejuvenation',
      reversed: 'Faithlessness, being lost, discouragement, insecurity'
    },

    19: { // The Moon
      uprighth: 'Unconsciousness, illusions, intuition',
      reversed: 'Confusion, fear, misinterpretation'
    },

    20: { // The Sun
      upright: 'Joy, success, celebration, positivity',
      reversed: 'Negativity, depression, sadness'
    },

    21: { // The Judgement
      upright: 'Reflection, reckoning, awakening',
      reversed: 'Lack of self awareness, doubt, self loathing'
    },

    22: { // The World
      upright: 'Fulfillment, creation, harmony, completion',
      reversed: 'Incompletion, stagnation, disharmony, no closure'
    }

  },

  minorNames: { //
    1: 'Ace',
    2: 'Two',
    3: 'Three',
    4: 'Four',
    5: 'Five',
    6: 'Six',
    7: 'Seven',
    8: 'Eight',
    9: 'Nine',
    10: 'Ten',
    11: 'Page',
    12: 'Knight',
    13: 'Queen',
    14: 'King',
    r: 'Rods',
    c: 'Cogs',
    s: 'Sharp',
    b: 'Blades'
  },

  majorNames: {
    1: 'The Fool',
    2: 'The Magician',
    3: 'The High Priestess',
    4: 'The Empress',
    5: 'The Emperor',
    6: 'The High Priest',
    7: 'The Lovers',
    8: 'The Chariot',
    9: 'Strength',
    10: 'The Hermit',
    11: 'The Wheel of Fortune',
    12: 'Justice',
    13: 'The Hanged Man',
    14: 'Death',
    15: 'Temperance',
    16: 'The Devil',
    17: 'The Tower',
    18: 'The Star',
    19: 'The Moon',
    20: 'The Sun',
    21: 'Judgement',
    22: 'The Great Work'
  },
  pulledCards: [],

  /**
   * Creates an array with X number of unique elements.
   *
   * @param {number} cardsToPull - how many cards should be returned?
   * @returns {Array} pulledCards - cardsToPull ammount of unique identifiers 1 to 78
   */
  pullCards (cardsToPull) {
    this.pulledCards = []
    let randomCard = 0
    while (this.pulledCards.length < cardsToPull) {
      randomCard = Math.floor(Math.random() * 78) + 1
      if (this.pulledCards.includes(randomCard) === false) {
        this.pulledCards.push(randomCard)
      }
    }
    return this.pulledCards
  },
  /**
   * Set the console output to the stored settings: backgroundColor, textColor, textBrightness.
   */
  applySettings () {
    console.log(`\x1b[4${tarotDeck.settings.backgroundColor}m \x1b[3${tarotDeck.settings.textColor}m \x1b[${tarotDeck.settings.textBrightness + 1}m`)
    tarotDeck.settings.terminalWidth = process.stdout.columns
    tarotDeck.settings.terminalHeight = process.stdout.rows
  },

  /**
   * Creates a string as wide as the terminal.
   *
   * @returns {string} horisontalLine - a string the width of the terminal filled with #
   */
  horisontalLine () {
    let horisontalLine = ''
    horisontalLine = horisontalLine.padStart(process.stdout.columns, '#')
    return horisontalLine
  },

  /**
   * Writes header to console.
   */
  displayHeader () {
    console.log(this.horisontalLine())
    const topLine = ['Dataloom : XIVI', 'Planet : Holy Terra', 'Schoolar : Linnéuniversitetet', '++ Cogitator 01 ++\n']
    for (let i = 0; i < topLine.length; i++) {
      readline.moveCursor(stdout, Math.ceil(this.settings.terminalWidth / 7), 0)
      stdout.write(topLine[i])
    }
    const lineOmnissiah = '++ The Omnissiah directs out footsteps along the path of knowledge ++'
    stdout.cursorTo(Math.floor((this.settings.terminalWidth / 2) - (lineOmnissiah.length / 2)), 3)
    const underLine = ''
    stdout.write(underLine.padStart(lineOmnissiah.length, '_'))
    stdout.cursorTo(Math.floor((this.settings.terminalWidth / 2) - (lineOmnissiah.length / 2)), 4)
    stdout.write(lineOmnissiah + '\n')
    console.log(this.horisontalLine())
  },

  /**
   * Get a commandstring from user.
   *
   * @returns {string} - inputLine
   */
  getCommand () {
    const inputLine = readlineSync.question('Enter selected command function (card of the day, three card spread, settings, exit)? ')
    return inputLine
  }
}


/**
 * The programs main-function.
 */
function main () {
  console.clear()
  tarotDeck.applySettings()
  tarotDeck.displayHeader()

  let commandLine = tarotDeck.getCommand()
  while (commandLine !== 'exit') {
    console.clear()
    tarotDeck.applySettings()
    tarotDeck.displayHeader()
    if (commandLine.toLowerCase === 'card of the day') {
      tarotDeck.displayCardOfTheDay()
    }
    if (commandLine.toLowerCase === 'three card standard') {
      tarotDeck.displayThreeCardSpread()
    }

    if (commandLine.toLowerCase === 'settings') {
      tarotDeck.editSettings()
    }
    commandLine = tarotDeck.getCommand()
  }

  const exitBlessing = '++ May the machinespirit process your code true and your functions be pure. ++'
  console.log()
  readline.moveCursor(stdout, Math.ceil((tarotDeck.settings.terminalWidth / 2) - (exitBlessing.length / 2)), 2)
  console.info(exitBlessing)

  // at end of program return console settings to normal
  console.log('\x1b[0m')
  rl.close()
}

main()
