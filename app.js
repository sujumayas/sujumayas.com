let app = new Vue({
    el: '#app',
    data: {
        modal: {
            isActive: false
        },
        message: 'Welcome to what will be our game jam website. ',
        topics: {
            happy: [
                {
                    title: 'rescue', isSelected: false, poem: 
`
Rescue

Beneath the stars, in night's embrace,
A soul adrift, in time's vast space.
In jungles deep, where whispers call,
A hand extends, to break the fall.

From labyrinth's heart, a path so clear,
Rescue comes, in forms sincere.
In mountains' arms, safety found,
Where silent echoes make no sound.

In Akunis' grip, where rivers flow,
Rescue's touch, a seed to sow.
`
},
                { title: 'lost loved ones recovered', isSelected: false, poem: 
`
Lost loved ones recovered

In Akunis' maze, where spirits roam,
Lost loves whisper, far from home.
Through puzzling jungles, paths untread,
Echoes of the once thought dead.

In riverlands, where memories dwell,
Recovery's tale, they gently tell.
Mountains sigh, in relief so sweet,
As lost kin, in reunion, meet.

In the heart of the labyrinth's core,
Lost loved ones found, forevermore.
`
 },
                { title: 'a miracle of god', isSelected: false, poem: 
`
A miracle of god

In Akunis' wild, where myths are born,
A miracle, in dawn's first yawn.
From labyrinth's depths, a light so rare,
God's whisper in the mountain air.

In jungles dense, where secrets keep,
A divine touch awakens sleep.
Rivers sing a hallowed tune,
Under the watch of a sacred moon.

In the dance of the cosmos wide,
A godly miracle, cannot hide.
`
 }
            ],
            inspiring: [
                { title: 'loveing an enemy', isSelected: false, poem: 
`
Loveing an enemy

In Akunis' shadows, where rivals tread,
A strange love blooms, in hate's stead.
Through labyrinth's twists, and turns so deep,
An enemy's heart, begins to seep.

In mountain's gaze, where eagles soar,
Love whispers, amidst the roar.
River's flow, with a tender sway,
Turns foe to friend, in light of day.

In the jungle's embrace, where secrets lie,
Loving an enemy, under an endless sky.
`
 },
                { title: 'sacrifice of ones self for an ideal.', isSelected: false, poem: 
`
Sacrifice of ones self for an ideal.

In Akunis' heart, where dreams are born,
A sacrifice, in the light of dawn.
Through labyrinth's twists, and turns so deep,
A soul's sacrifice, for a dream to keep.

In mountain's gaze, where eagles soar,
A sacrifice, for a dream to soar.
River's flow, with a tender sway,
A sacrifice, for a dream to stay.

In the jungle's embrace, where secrets lie,
A sacrifice, for a dream to fly.
`
 },
                { title: 'sacrifice of ones self for kindred (or friend)', isSelected: false, poem: 
`
Sacrifice of ones self for kindred (or friend)

In twilight's grasp, a heart pledges true,
To kin, to friend, under the moon's soft hue.
Where shadows dance, and stars keenly gaze,
A silent sacrifice, through life's tangled maze.

Love's deep fire, burning bright and unseen,
In every whisper, every dream serene.
For those held dear, a soul willingly bared,
In the quiet act of all that's shared.

In the hush of night, a mystical thread,
Weaves through the sacrifice, softly tread.
A timeless dance, in the cosmos vast,
A bond unbroken, from first to last.

Here, in the gentle night's embrace,
Echoes the beauty of love's truest grace.
In this selfless gift, a story untold,
A testament of devotion, brave and bold.
`
 }
            ],
            disastrous_without_intent: [
                { title: 'possessed of an ambition', isSelected: false, poem: 
`
Possessed of an ambition

In shadows deep, ambition's seed,
Grows silent, fierce, a whispered need.
Through tangled dreams, it finds its way,
In moon's pale light, as night meets day.

A thirst unquenched, in heart's quiet room,
It blooms in dark, a fated bloom.
Yet in its grasp, the soul may find,
A path untrod, by mere mankind.

Ambition's ghost, in whispers, sings,
Of might and flight, on unseen wings.
`
 },
                { title: 'fatal indiscretion', isSelected: false, poem: 
`
Fatal indiscretion

In hushed tones, a secret spilled,
A moment's lapse, fate unfulfilled.
In shadows cast by reckless moon,
Lies the echo of a tune.

A step awry, in night's embrace,
Leads to a fall from grace.
Whispers lost in wind's caress,
Speak of a fatal indiscretion's press.

In the dance of destiny's discretion,
Lies the weight of a single confession.
`
 },
                { title: 'pursuit', isSelected: false, poem: 
`
Pursuit

Chase the wind, so fleet and wild,
Through the eyes of a wistful child.
In pursuit of dreams, like stars at night,
Glittering distant, an elusive sight.

Footsteps echo in the empty hall,
Chasing shadows, until they fall.
A heart races, in endless quest,
Seeking something, never at rest.

In pursuit, what's lost and found,
Echoes in a world unbound.
`
 },
                { title: 'rebelion', isSelected: false, poem: 
`
Rebelion

Whispers rise, a rebel's song,
In hearts where silent shadows throng.
Against the grain, they dare to tread,
Where fear and caution dare not wed.

In the fire of a rebel's eye,
Truths unveiled, no need to lie.
Breaking chains with silent roar,
Seeking what's worth fighting for.

Rebellion's dance, both fierce and free,
In every step, a world's decree.
`
 },
                { title: 'enmity between kinsmen', isSelected: false, poem: 
`
Enmity between kinsmen

In blood shared, a rift unseen,
Silent battles, cruel and keen.
Kin against kin, hearts entwined,
In enmity's grip, they are confined.

Words unsaid, in glares exchanged,
Family bonds, forever estranged.
In every silence, a war's lament,
On paths diverged, yet parallel bent.

Love and hate, a line so thin,
In the enmity of kinsmen's kin.
`
 },
                { title: 'effort to obtain', isSelected: false, poem: 
`
Effort to obtain

Grasp at shadows, fleeting, sly,
In vain attempts that pass by.
Effort spent on dreams of air,
Chasing what was never there.

In this task, so futile, bold,
Seeking glimmers in the cold.
Hands reach out, yet find no hold,
In tales of effort, long untold.

The pursuit of naught but mist,
A fruitless quest, a clenched fist.
`
 },
                { title: 'daring effort', isSelected: false, poem: 
`
Daring effort

Bold steps taken in the night,
Underneath the moon's pale light.
Daring hearts, with courage rife,
Dance upon the edge of life.

In every breath, a challenge met,
In every glance, a silhouette.
With daring do, they forge ahead,
Where others fear, or tread with dread.

In the spirit's fearless vault,
Lies the essence of daring's assault.
`
 },
                { title: 'vengance', isSelected: false, poem: 
`
Vengance

In the heart's dark, vengeful crease,
Lies a storm, not finding peace.
Brewing, brooding, silent rage,
Scripting war on life's own stage.

Echoes of a wrong not righted,
In the soul, fiercely ignited.
A quest for balance, skewed and blurred,
By the whispers of anger, unheard.

In vengeance's grip, vision narrows,
Leading down the path of sorrows.
`
 },
                { title: 'kindred avenged against kindred', isSelected: false, poem: 
`
Kindred avenged against kindred

In the shadow of kin's betrayal,
Lies a tale, both grim and frail.
Blood calls to blood, a vengeful cry,
Underneath the same family sky.

Kindred heart avenges kindred soul,
In a play where grudges take their toll.
Bound by blood, yet torn apart,
In the dance of vengeance, a bitter art.

Echoes of kinship, lost in rage,
Written in tears on history's page.
`
 },
                { title: 'mistaken jealousy', isSelected: false, poem: 
`
Mistaken jealousy

In the eyes of love misled,
Lies a jealousy, falsely fed.
Mistaken notions, hearts astray,
In shadows, trust begins to fray.

Green-eyed whispers, silent, sly,
Underneath a truth-starved sky.
Love's purity, now marred by doubt,
In the garden of mind, mistrust sprouts.

A tale of love, untold, unkind,
In the maze of mistaken jealousy entwined.
`
 },
                { title: 'involuntary criminal love', isSelected: false, poem: 
`
Involuntary criminal love

In the heart's forbidden chamber,
Burns a love, both fierce and tender.
Unwilling criminal in passion's play,
Bound by laws, yet led astray.

In the silence of the starless night,
Love's crime whispers out of sight.
A feeling, pure, yet deemed a sin,
In society's eyes, a battle no one wins.

Love, unbidden, in shackles dressed,
A prisoner of the heart, involuntarily confessed.
`
 }
            ],
            pathetic: [
                { title: 'entreaty', isSelected: false, poem: 
`
Entreaty

In whispered tones, a plea is made,
A heart's entreaty, softly laid.
Begging, yearning for a sign,
In the language of the soul, so fine.

Eyes that speak more than lips dare,
In silent prayer, through the air.
A request, humble, yet so profound,
In the spaces where hope is found.

An entreaty, in its gentle might,
Holds the power of love's pure light.
`
 },
                { title: 'loves obstacles', isSelected: false, poem: 
`
Love's obstacles

Love, a path with thorns entwined,
Where hearts seek but harder find.
Obstacles rise, like walls so steep,
In the journey, love's promises keep.

Distance, silence, a word unsaid,
In love's labyrinth, we are led.
Fears and doubts, like shadows long,
Challenge the heart, to be brave and strong.

Yet, in overcoming, love's true test,
In these trials, it shows its best.
`
 },
                { title: 'rivalry between unequals', isSelected: false, poem: 
`
Rivalry between unequals

In the realm where rivals meet,
One stands tall, the other, defeat.
Unequal in might, in fortune, in fame,
In this contest, not just a game.

One shadowed by the other's light,
Struggling hard with all their might.
But in this mismatch, stark and clear,
Lies a tale of respect or fear.

Inequality breeds a challenge bold,
In rivalry's story, often untold.
`
 },
                {
                    title: 'rivalry between kinsmen', isSelected: false, poem: `

Rivalry between kinsmen

In shadows deep, where kin lines blur,
Two hearts, entwined, in silent war.
Blood shared, yet paths diverge wide,
In silent woods, their secrets hide.

Brother to brother, root to vine,
Their rivalry, like aged wine.
In the labyrinth of blood ties,
Truth whispers, where the echo lies.

In the dance of time, unseen,
Kin's love and hate, in spaces between.`},
                {
                    title: 'a mistery', isSelected: true, poem:
                        `
Struggle against god

In twilight's veil, a mystery lies,
Whispered secrets, silent cries.
Hidden in the folds of night,
A puzzle veiled from mortal sight.

Shadows hold truths untold,
In the mystery's grip, both firm and cold.
Each clue a step in a dance so strange,
In the realm of the unknown, a wide range.

In the heart of the enigmatic and wise,
Lies the allure of a mystery's disguise.
`
  }
            ],
            disastrous_with_intent: [
                { title: 'struggle against god', isSelected: false, poem: 
`
Struggle against god

In the realm of mortal plight,
Stands a figure, against the light.
Challenging the divine, a daring stand,
In the grasp of fate's unyielding hand.

With eyes aflame, and heart so bold,
Against a power, ancient and old.
In this struggle, both fierce and grand,
Lies the question of man's own command.

A fight against the celestial tide,
In the human spirit, where defiance resides.
`
 },
                { title: 'abduction', isSelected: false, poem: 
`
Abduction

In the quiet of the unsuspecting night,
A tale unfolds, away from light.
Abduction, a silent, swift decree,
In shadows moves, where eyes can't see.

Taken from a world so known,
Into a realm, unseen, unshown.
Fear and uncertainty fill the air,
In this story of despair.

A journey forced, paths untread,
In abduction's wake, dread's thread.
`
 },
                { title: 'to sacrifice all for a passion', isSelected: false, poem: 
`
To sacrifice all for a passion

In the heart's deepest chamber, a fire burns,
For a passion that twists and turns.
Sacrificing all, a single aim,
In this pursuit, nothing remains the same.

Every step, a price so dear,
Yet the call of passion, loud and clear.
In the blaze of this consuming desire,
Lies a will, unquenchable, a never-ending fire.

For the dream, for love, for art's embrace,
In sacrifice, finds its hallowed place.
`
 },
                { title: 'adultry', isSelected: false, poem: 
`
Adultry

In the shadow of a bond betrayed,
Lies the path where trust is frayed.
Adultery, a secret dance,
In the game of chance and circumstance.

Hearts entangled, yet not free,
In the web of what should not be.
A whisper in the dark, a stolen kiss,
In this act, a broken bliss.

In the silence of the night's hush,
Lurks the weight of a guilty crush.
`
 },
                { title: 'adultry with murder', isSelected: false, poem: 
`
Adultry with murder

In the depths of betrayal's night,
Lurks a darker, more grievous plight.
Adultery, entwined with death's cold hand,
A tale of love and murder, unplanned.

In whispers of passion, a plot unkind,
Where hearts and fates are fatally entwined.
A life taken, in love's deceit,
In this union, betrayal and end meet.

A tragedy of desires misled,
Where love's path and death's are wed.
`
 },
                { title: 'criminal love', isSelected: false, poem: 
`
Criminal love

In love's forbidden, shadowed lane,
Lies a romance, both sweet and profane.
Criminal in its hidden guise,
Underneath the watchful skies.

Hearts that beat against the law,
In each other, perfection saw.
In secret meetings, whispers low,
A love that dare not show.

In the thrill of the illicit embrace,
Lies the danger of love's forbidden chase.
`
 }
            ],
            tragic_without_control: [
                { title: 'loved ones lost', isSelected: false, poem: 
`
Loved ones lost

In the quiet of memory's room,
Echoes the silence of a deep gloom.
Loved ones lost, a pain so deep,
In the heart's core, forever to keep.

Their absence, like a shadow vast,
In every corner of the present cast.
Echoes of laughter, now so still,
In the void, no voice can fill.

In this loss, love's cruel cost,
Lingers the ghost of loved ones lost.
`
 },
                { title: 'falling a prey', isSelected: false, poem: 
`
Falling a prey

In the shadows of a predator's gaze,
Lurks a prey in life's cruel maze.
Unsuspecting, innocent, and frail,
In this hunt, no mercy to avail.

Caught in the jaws of fate's design,
A struggle futile, a silent whine.
The prey falls, in nature's play,
In the cycle of life, the destined way.

In this dance of the weak and strong,
Lies the tale of survival, old and long.
`
 },
                { title: 'disaster', isSelected: false, poem: 
`
Disaster

In the wake of nature's wrath,
Lies a path of ruinous path.
Disaster strikes, unbidden, fierce,
In life's fabric, it does pierce.

Towns in rubble, lives undone,
Underneath a darkened sun.
Cries echo in the empty street,
In disaster's grip, defeat meets.

In the chaos of the storm's heart,
Lies the breaking of many a part.
`
 },
                { title: 'an innocent suspected', isSelected: false, poem: 
`
An innocent suspected

In the eye of doubt's cold gaze,
Lies an innocent, in a bewildering maze.
Suspected, though pure as dawn's first light,
In this judgment, no respite.

A shadow cast without a cause,
In the grip of flawed laws.
Trust eroded, a name besmirched,
In the court of suspicion, falsely perched.

In this plight of the wrongfully suspected,
Lies a tale of truth neglected.
`
 },
                { title: 'obligation to sacrifice loved ones', isSelected: false, poem: 
`
Obligation to sacrifice loved ones

In the heart's quiet, a heavy stone,
Remorse, a seed, bitterly sown.
Regrets that whisper in the night,
In the soul's depth, away from light.

Actions past, a haunting ghost,
In their wake, remorse hosts.
A wish to rewind, to undo,
In the maze of time, a path untrue.

In the echo of choices made,
Lies the weight of remorse, unswayed.
`
 },
                { title: 'to learn of the dishonor of a loved one', isSelected: false, poem: 
`
To learn of the dishonor of a loved one

In the heart's trust, a crack appears,
With the weight of untold fears.
Learning of a loved one's fall,
Against the honor's once-tall wall.

Disbelief, a bitter pill,
In the soul, a cold and lonely chill.
The image shattered, truth unkind,
In this revelation, peace hard to find.

In the wake of honor lost,
Lies the heavy, unseen cost.
`
 },
                { title: 'mental derangement', isSelected: false, poem: 
`
Mental derangement

In the mind's twisted, winding halls,
Echoes the dance of deranged calls.
Thoughts unravel, come undone,
In the shadow of a setting sun.

Reality blurred, a fractured sight,
In day's bright glare, and in night.
Voices whisper, unseen, unheard,
In the chaos of a wordless word.

In this realm of confusion's arrangement,
Lies the labyrinth of mental derangement.
`
 },
                { title: 'to kill a kinsman or friend before recognition', isSelected: false, poem: 
`
To kill a kinsman or friend before recognition

In the shroud of fate's cruel game,
A deed done, in ignorance, no name.
To slay a kin, a friend so dear,
Before the veil of truth comes clear.

In the moment of tragic reveal,
A heartbreak no time can heal.
A bond severed by mistaken hand,
In the depths of sorrow, alone to stand.

In this act, so blindly done,
Lies the pain of a battle never won.
`
 },
                { title: 'remorese', isSelected: false, poem: 
`
Remorese

In the heart's quiet, a heavy stone,
Remorse, a seed, bitterly sown.
Regrets that whisper in the night,
In the soul's depth, away from light.

Actions past, a haunting ghost,
In their wake, remorse hosts.
A wish to rewind, to undo,
In the maze of time, a path untrue.

In the echo of choices made,
Lies the weight of remorse, unswayed.
`
 }
            ]
        }
    },
    methods: {
        activateModal() {
            this.modal.isActive = true;
            console.log("modal activated")
        },
        deActivateModal() {
            this.modal.isActive = false;
            console.log("modal deactivated")
        },
        chooseTopic(topic) {
            Object.entries(this.topics).forEach(function (topicGroup) {
                topicGroup[1].map(function (tpc) {
                    //console.log(tpc)
                    if (tpc.isSelected) { tpc.isSelected = false }
                })
            })
            this.activateModal()
            topic.isSelected = true;
            console.log("You have chosen: " + topic.title)
        }
    }
})
