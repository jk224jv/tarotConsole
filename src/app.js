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
    cardsWidth: 33, // must be odd intiger <== 33. Hardcoded only! Default = 33
    cardsHeight: 37, // must be odd initger <== 37. Hardcoded only! Default = 37
    terminalWidth: 0, // DO NOT MODIFY! applied by program at launch. DO NOT MODIFY!
    terminalHeight: 0, // DO NOT MODIFY! applied by program at launch. DO NOT MODIFY!
    default: {
      backgroundColor: '0', // DO NOT MODIFY!
      textColor: '2', // DO NOT MODIFY!
      textBrightness: '0' // DO NOT MODIFY!
    }
  },

  cardsTemplate: {
    Major: {
      top: '',
      center: '',
      bottom: '',
      special1: '   ▲   ',
      special2: '◄  ☼  ►',
      special3: '   ▼   '
    },

    1: {
      top: '',
      center: 'x',
      bottom: ''
    },
    2: {
      top: 'x',
      center: '',
      bottom: 'x'
    },
    3: {
      top: 'x',
      center: 'x',
      bottom: 'x'
    },
    4: {
      top: 'x x',
      center: '',
      bottom: 'x x'
    },
    5: {
      top: 'x x',
      center: 'x',
      bottom: 'x x'
    },
    6: {
      top: 'x x',
      center: 'x x',
      bottom: 'x x'
    },
    7: {
      top: 'x x x',
      center: 'x',
      bottom: 'x x x'
    },
    8: {
      top: 'x x x',
      center: 'x x',
      bottom: 'x x x'
    },
    9: {
      top: 'x x x',
      center: 'x x x',
      bottom: 'x x x'
    },
    10: {
      top: 'x x x x',
      center: 'x x',
      bottom: 'x x x x'
    },
    11: {
      top: 'x',
      center: 'Page',
      bottom: 'x'
    },
    12: {
      top: 'x',
      center: 'Knight',
      bottom: 'x'
    },
    13: {
      top: 'x',
      center: 'Queen',
      bottom: 'x'
    },
    14: {
      top: 'x',
      center: 'King',
      bottom: 'x'
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

  blades: { // minor arcana = Swords. Cards 43 - 56
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
    1: {
      name: 'The Fool',
      upright: 'Innocence, new beginnings, free spirit',
      reversed: 'Recklessness, taken advantage of, inconsideration'
    },

    2: {
      name: 'The Magician',
      upright: 'Willpower, desire, creation, manifestation',
      reversed: 'Trickery, illusions, out of touch'
    },

    3: {
      name: 'The Hight Priestess',
      upright: 'Intuitive, unconscious, inner voice',
      reversed: 'Lack of center, lost inner voice, repressed feelings'
    },

    4: {
      name: 'The Empress',
      upright: 'Motherhood, fertility, nature',
      reversed: 'Dependence, smothering, emptiness, nosiness'
    },

    5: {
      name: 'The Emperor',
      upright: 'Authority, structure, control, fatherhood',
      reversed: 'Tyranny, rigidity, coldness'
    },

    6: {
      name: 'The High Priest',
      upright: 'Tradition, conformity, morality, ethics',
      reversed: 'Rebellion, subversiveness, new approache'
    },

    7: {
      name: 'The Lovers',
      upright: 'Partnerships, duality, union',
      reversed: 'Loss of balance, one-sidedness, disharmony'
    },

    8: {
      name: 'The Chariot',
      upright: 'Direction, control, willpower',
      reversed: 'Lack of control, lack of direction, aggression'
    },

    9: {
      name: 'Strength',
      upright: 'Inner strength, bravery, compassion, focus',
      reversed: 'Self doubt, weakness, insecurity'
    },

    10: {
      name: 'The Hermit',
      upright: 'Contemplation, search for truth, inner guidance',
      reversed: 'Loneliness, isolation, lost your way'
    },

    11: {
      name: 'The Wheel of fortune',
      upright: 'Change, cycles, inevitable fate',
      reversed: 'No control, clinging to control, bad luck'
    },

    12: {
      name: 'Justice',
      upright: 'Cause and effect, clarity, truth',
      reversed: 'Dishonesty, unaccountability, unfairness'
    },

    13: {
      name: 'The Hanged Man',
      upright: 'Waiting, sacrifice, release, martyrdom',
      reversed: 'Stalling, needless sacrifice, fear of sacrifice'
    },

    14: {
      name: 'Death',
      upright: 'End of cycle, beginnings, change, metamorphosis',
      reversed: 'Fear of change, holding on, stagnation'
    },

    15: {
      name: 'Temperance',
      upright: 'Middle path, patience, finding meaning',
      reversed: 'Extremes, excess, lack of balance'
    },

    16: {
      name: 'The Devil',
      upright: 'The Unacknowledged, addiction, materialism, playfulness',
      reversed: 'Realisation, freedom, release, restoring control'
    },

    17: {
      name: 'The Tower',
      upright: 'Sudden upheaval, broken pride, disaster',
      reversed: 'Disaster avoided, delayed disaster, fear of suffering'
    },

    18: {
      name: 'The Star',
      upright: 'Hope, guidance, faith, rejuvenation',
      reversed: 'Faithlessness, being lost, discouragement, insecurity'
    },

    19: {
      name: 'The Moon',
      uprighth: 'Unconsciousness, illusions, intuition',
      reversed: 'Confusion, fear, misinterpretation'
    },

    20: {
      name: 'The Sun',
      upright: 'Joy, success, celebration, positivity',
      reversed: 'Negativity, depression, sadness'
    },

    21: {
      name: 'The Judgement',
      upright: 'Reflection, reckoning, awakening',
      reversed: 'Lack of self awareness, doubt, self loathing'
    },

    22: {
      name: 'The World',
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
    rods: 'Rods',
    cogs: 'Cogs',
    sharp: 'Sharp',
    blades: 'Blades'
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
   * Writes footer to console.
   */
  displayFooter () {
    stdout.cursorTo(0, this.settings.terminalHeight - 3)
    stdout.write(this.horisontalLine())
    const bottomLine = '01001111 01101101 01101110 01101001 01110011 01110011 01101001 01100001 01101000 00100000 01100010 01100101 00100000 01110000 01110010 01100001 01101001 01110011 01100101 00100001'
    stdout.cursorTo(Math.floor((this.settings.terminalWidth - (bottomLine.length)) / 2), this.settings.terminalHeight - 2)
    stdout.write(bottomLine)
    stdout.cursorTo(0, this.settings.terminalHeight - 1)
    console.log(this.horisontalLine())
  },

  /**
   * Get a commandstring from user.
   *
   * @param {string} question - a messege string.
   * @returns {string} inputLine - returnstring.
   */
  getCommand (question) {
    stdout.cursorTo(Math.floor((this.settings.terminalWidth - question.length) / 2), this.settings.terminalHeight - 6)
    stdout.clearLine()
    const inputLine = readlineSync.question(question)
    console.log(inputLine)
    return inputLine
  },

  /**
   * Eddits the settings according to user input.
   * Sets setting to default if input is incorrect.
   */
  editSettings () {
    let correctInputs = ['1', '2', '3', '4', '5', '6', '7']
    const newBGColor = this.getCommand('Select new Background color : 0 = Black, 1 = Red, 2 = Green, 3 = Yellow, 4 = Blue, 5 = Magenta, 6 = Cyan, 7 = White.\n')
    if (correctInputs.includes(newBGColor)) {
      console.log('test')
      this.settings.backgroundColor = newBGColor
    } else {
      this.settings.backgroundColor = this.settings.default.backgroundColor
    }

    const newTextColor = this.getCommand('Select new Text color : 0 = Black, 1 = Red, 2 = Green, 3 = Yellow, 4 = Blue, 5 = Magenta, 6 = Cyan, 7 = White.\n')
    if (correctInputs.includes(newTextColor)) {
      console.log('test')
      this.settings.textColor = newTextColor
    } else {
      this.settings.textColor = this.settings.default.textColor
    }

    correctInputs = ['0', '1']
    const newTextBrightness = this.getCommand('Select new Text Brightness : 0 = Bright, 1 = Dim.\n')
    if (correctInputs.includes(newTextBrightness)) {
      console.log('test')
      this.settings.textBrightness = newTextBrightness
    } else {
      this.settings.textBrightness = this.settings.default.textBrightness
    }
    this.applySettings()
    console.clear()
    this.displayHeader()
    this.displayFooter()
  },

  /**
   * Displays exit dialog.
   *
   */
  displayExitBlessing () {
    console.clear()
    const exitBlessing = ['++ May the machinespirit correctly preform your computations and your functions be pure. ++', '', '════════════════════════════════════════', 'The Omnissiah´s tarot', 'by', 'Jimmy Karlsson', 'codesmith - junior apprentice grade', 'Schoolarium : Linnéuniversitetet', 'Holy Terra', '════════════════════════════════════════', '', '++ Praise the Omnissiah! ++']
    for (let i = 0; i < exitBlessing.length; i++) {
      stdout.cursorTo(Math.floor((this.settings.terminalWidth / 2) - (exitBlessing[i].length / 2)), Math.floor((this.settings.terminalHeight / 2) - Math.floor(exitBlessing.length / 2) + i))
      stdout.write(exitBlessing[i])
    }

    // at end of program return console settings to normal
    console.log('\x1b[0m')
    stdout.cursorTo(0, this.settings.terminalHeight)
    rl.close()
  },

  /**
   * Write a tarot card outer frame at cordinates.
   *
   * @param {number} x - x TopLeft corner of card.
   * @param {number} y - y TopLeft corner of card.
   */
  writeCardFrame (x, y) {
    let cardTop = '╔'
    cardTop = cardTop.padEnd(this.settings.cardsWidth, '═') + '╗\n'

    let cardBottom = '╚'
    cardBottom = cardBottom.padEnd(this.settings.cardsWidth, '═') + '╝'

    let cardLine = '║'
    cardLine = cardLine.padEnd(this.settings.cardsWidth, ' ') + '║░'

    stdout.write(cardTop)
    stdout.cursorTo(x, (y + 1))
    for (let i = 1; i < this.settings.cardsHeight; i++) {
      stdout.write(cardLine)
      stdout.cursorTo(x, (y + i))
    }
    stdout.write(cardBottom + '░')
    stdout.cursorTo((x + 2), (y + this.settings.cardsHeight))

    const cardShade = '░'.repeat(this.settings.cardsWidth)
    stdout.write(cardShade)
  },
  /**
   * Write a tarot card content at cordinates.
   *
   * @param {number} x - TopLeft corner of card.
   * @param {number} y - TopLeft corner of card.
   * @param {number} pulledCard - selects what card to write out.
   */
  writeCardContent (x, y, pulledCard) {
    let cardSuit = ''
    let cardSuitIcon = ''
    let card = 0
    let turned = ''
    if (pulledCard >= 1 && pulledCard <= 14) { // is the random card from rods?
      cardSuit = 'rods'
      cardSuitIcon = '|'
      card = pulledCard
    }

    if (pulledCard >= 15 && pulledCard <= 28) { // is the random card from cogs?
      cardSuit = 'cogs'
      cardSuitIcon = '☼'
      card = pulledCard % 14
    }

    if (pulledCard >= 29 && pulledCard <= 42) { // is the random card from sharp?
      cardSuit = 'sharp'
      cardSuitIcon = '#'
      card = pulledCard % 14
    }

    if (pulledCard >= 43 && pulledCard <= 56) { // is the random card from blades?
      cardSuit = 'blades'
      cardSuitIcon = '/'
      card = pulledCard % 14
    }
    if (card === 0) {
      card = 14
    }

    // get full cardname, minor or major arcana?
    let cardName = ''
    if (pulledCard <= 56) { // minor
      cardName = this.minorNames[card] + ' of ' + this.minorNames[cardSuit]
    } else { // major
      cardSuit = 'majorArcana'
      card = pulledCard - 56
      cardName = this.majorArcana[card].name
    }
    if (Math.random() <= 0.49999999) {
      turned = 'upright'
    } else {
      turned = 'reversed'
    }
    cardName += ' - ' + turned

    // get to location for cardname and write
    stdout.cursorTo(x + Math.floor((this.settings.cardsWidth - cardName.length) / 2) + 1, y + 1)
    stdout.write(cardName)

    // get to location for Top Icons and write
    stdout.cursorTo(x + 3, y + 3)
    if (pulledCard > 56) { // if from the major arcana, use that template.
      stdout.write(this.cardsTemplate.Major.top)
    } else {
      stdout.write(this.cardsTemplate[card].top.replaceAll('x', cardSuitIcon))
    }

    // get to location for Center Icons and write
    if (pulledCard > 56) { // if from the major arcana, use that template.
      stdout.cursorTo(x + Math.ceil(this.settings.cardsWidth / 2) - 3, y + Math.ceil(this.settings.cardsHeight / 2) - 2)
      stdout.write(this.cardsTemplate.Major.special1)
      stdout.cursorTo(x + Math.ceil(this.settings.cardsWidth / 2) - 3, y + Math.ceil(this.settings.cardsHeight / 2))
      stdout.write(this.cardsTemplate.Major.special2)
      stdout.cursorTo(x + Math.ceil(this.settings.cardsWidth / 2) - 3, y + Math.ceil(this.settings.cardsHeight / 2) + 2)
      stdout.write(this.cardsTemplate.Major.special3)
    } else {
      stdout.cursorTo(x + Math.ceil((this.settings.cardsWidth / 2) - (this.cardsTemplate[card].center.length / 2)), y + Math.ceil(this.settings.cardsHeight / 2))
      stdout.write(this.cardsTemplate[card].center.replaceAll('x', cardSuitIcon))
    }

    // get to location for Bottom Icons and write
    stdout.cursorTo(x, y + this.settings.cardsHeight - 3)
    if (pulledCard > 56) { // if from the major arcana, use that template.
      readline.moveCursor(stdout, (this.settings.cardsWidth - this.cardsTemplate.Major.bottom.length - 2), 0)
      stdout.write(this.cardsTemplate.Major.bottom)
    } else {
      readline.moveCursor(stdout, (this.settings.cardsWidth - this.cardsTemplate[card].bottom.length - 2), 0)
      stdout.write(this.cardsTemplate[card].top.replaceAll('x', cardSuitIcon))
    }

    // get to location of description and write
    stdout.cursorTo(x, y + this.settings.cardsHeight + 3)
    stdout.write('Meaning :')
    stdout.cursorTo(x, y + this.settings.cardsHeight + 4)
    try {
      stdout.write(this[cardSuit][card][turned])
    } catch (error) {
      console.error(`Error : trying to located ${card}, ${cardSuit}, ${turned}`)
    }
  },

  /**
   * Write a tarot card at cordinates.
   *
   * @param {number} x - x TopLeft corner of card
   * @param {number} y - y TopLeft corner of card
   * @param {number} pulledCard - selects what card to write out.
   */
  writeCard (x, y, pulledCard) {
    stdout.cursorTo(x, y)
    this.writeCardFrame(x, y)
    this.writeCardContent(x, y, pulledCard)
  },

  /**
   * Writes one random card centerscreen.
   *
   */
  displayCardOfTheDay () {
    this.pullCards(1)
    this.writeCard(Math.floor((this.settings.terminalWidth - this.settings.cardsWidth) / 2), 10, this.pulledCards[0])
  },

  /**
   * Writes three random card centerscreen.
   *
   */
  displayThreeCardSpread () {
    this.pullCards(3)
    const xOrigin = Math.floor(this.settings.terminalWidth / 3) - Math.floor(this.settings.cardsWidth / 2)
    const xDistance = Math.floor(this.settings.terminalWidth / 3)
    for (let i = 0; i < this.pulledCards.length; i++) {
      this.writeCard((xOrigin + (xDistance * i)), 10, this.pulledCards[i])
    }
  },

  /**
   * Writes all cards for debugging centerscreen.
   *
   */
  debuggTestAll () {
    this.pulledCards = []
    for (let i = 1; i < 79; i++) {
      this.writeCard(Math.floor((this.settings.terminalWidth - this.settings.cardsWidth) / 2), 10, i)
      // this.getCommand()
    }
  }
}

/**
 * The programs main-function.
 */
function main () {
  console.clear()

  let commandLine = ''
  while (commandLine !== 'exit' && commandLine !== '4') {
    console.clear()
    tarotDeck.applySettings()
    tarotDeck.displayHeader()
    tarotDeck.displayFooter()
    if (commandLine === 'card of the day' || commandLine === '1') {
      tarotDeck.displayCardOfTheDay()
    }
    if (commandLine === 'three card standard' || commandLine === '2') {
      tarotDeck.displayThreeCardSpread()
    }

    if (commandLine === 'settings' || commandLine === '3') {
      tarotDeck.editSettings()
    }

    if (commandLine === 'secrettest') {
      tarotDeck.debuggTestAll()
    }
    commandLine = tarotDeck.getCommand('Enter selected command function (1:card of the day, 2:three card spread, 3:settings, 4:exit)?\n')
    commandLine = commandLine.toLowerCase()
  }

  tarotDeck.displayExitBlessing()
}

main()
