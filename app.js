let app = new Vue({
    el: '#app',
    data: {
        message: 'Welcome to what will be our game jam website. ',
        topics: {
            happy: [
                {title: 'rescue', isSelected: false},
                {title:'lost loved ones recovered',isSelected:false},
                {title:'a miracle of god',isSelected:false}
            ],
            inspiring: [
                {title:'loveing an enemy',isSelected:false},
                {title:'sacrifice of ones self for an ideal.',isSelected:false},
                {title:'sacrifice of ones self for kindred (or friend)',isSelected:false}
            ],
            disastrous_without_intent: [
                {title:'possessed of an ambition',isSelected:false},
                {title:'fatal indiscretion',isSelected:false},
                {title:'pursuit',isSelected:false},
                {title:'rebelion',isSelected:false},
                {title:'enmity between kinsmen',isSelected:false},
                {title:'effort to obtain',isSelected:false},
                {title:'daring effort',isSelected:false},
                {title:'vengance',isSelected:false},
                {title:'kindred avenged against kindred',isSelected:false},
                {title:'mistaken jealousy',isSelected:false},
                {title:'involuntary criminal love',isSelected:false}
            ],
            pathetic: [
                {title:'entreaty',isSelected:false},
                {title:'loves obstacles',isSelected:false},
                {title:'rivalry between unequals',isSelected:false},
                {
                    title: 'rivalry between kinsmen', isSelected: false, poem: `In shadows deep, where kin lines blur,
Two hearts, entwined, in silent war.
Blood shared, yet paths diverge wide,
In silent woods, their secrets hide.

Brother to brother, root to vine,
Their rivalry, like aged wine.
In the labyrinth of blood ties,
Truth whispers, where the echo lies.

In the dance of time, unseen,
Kin's love and hate, in spaces between.`},
                {title:'a mistery',isSelected:true}
            ],
            disastrous_with_intent: [
                {title:'struggle against god',isSelected:false},
                {title:'abduction',isSelected:false},
                {title:'to sacrifice all for a passion',isSelected:false},
                {title:'adultry',isSelected:false},
                {title:'adultry with murder',isSelected:false},
                {title:'criminal love',isSelected:false}
            ], 
            tragic_without_control: [
                {title:'loved ones lost',isSelected:false},
                {title:'falling a prey',isSelected:false},
                {title:'disaster',isSelected:false},
                {title:'an innocent suspected',isSelected:false},
                {title:'obligation to sacrifice loved ones',isSelected:false},
                {title:'to learn of the dishonor of a loved one',isSelected:false},
                {title:'mental derangement',isSelected:false},
                {title:'to kill a kinsman or friend before recognition',isSelected:false},
                {title:'remorese',isSelected:false}
            ]
        }
    },
    methods: {
        chooseTopic(topic){
            Object.entries(this.topics).forEach(function(topicGroup){
                topicGroup[1].map(function(tpc){
                    //console.log(tpc)
                    if(tpc.isSelected) {tpc.isSelected = false }
                })
            })
            topic.isSelected = true;
            console.log("You have chosen: " + topic.title)
        }
    }
})
