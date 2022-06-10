const gameObject = () => {
    return {
        home: {
            teamName: "Brooklyn Nets",
            colors: ["Black", "White"],
            players:{
                "Alan Anderson": {
                    "number": 0,
                    "shoe": 16,
                    "points": 22,
                    "rebounds": 12,
                    "assists": 12,
                    "steals": 3,
                    "blocks": 1,
                    "slamDunks": 1
                },
                "Reggie Evans": {
                    "number": 30,
                    "shoe": 14,
                    "points": 12,
                    "rebounds": 12,
                    "assists": 12,
                    "steals": 12,
                    "blocks": 12,
                    "slamDunks": 7
                },
                "Brook Lopez": {
                    "number": 11,
                    "shoe": 17,
                    "points": 17,
                    "rebounds": 19,
                    "assists": 10,
                    "steals": 3,
                    "blocks": 1,
                    "slamDunks": 15
                },
                "Mason Plumlee": {
                    "number": 1,
                    "shoe": 19,
                    "points": 26,
                    "rebounds": 12,
                    "assists": 6,
                    "steals": 3,
                    "blocks": 8,
                    "slamDunks": 5
                },
                "Jason Terry": {
                    "number": 31,
                    "shoe": 15,
                    "points": 19,
                    "rebounds": 2,
                    "assists": 2,
                    "steals": 4,
                    "blocks": 11,
                    "slamDunks": 1
                },
            }
        },
        away: {
            teamName: "Charlotte Hornets",
            colors: ["Turquoise", "Purple"],
            players:{
                "Jeff Adrien": {
                    "number": 4,
                    "shoe": 18,
                    "points": 10,
                    "rebounds": 1,
                    "assists": 1,
                    "steals": 2,
                    "blocks": 7,
                    "slamDunks": 2
                },
                "Bismak Biyombo": {
                    "number": 0,
                    "shoe": 16,
                    "points": 12,
                    "rebounds": 4,
                    "assists": 7,
                    "steals": 7,
                    "blocks": 15,
                    "slamDunks": 10
                },
                "DeSagna Diop": {
                    "number": 2,
                    "shoe": 14,
                    "points": 24,
                    "rebounds": 12,
                    "assists": 12,
                    "steals": 4,
                    "blocks": 5,
                    "slamDunks": 5
                },
                "Ben Gordon": {
                    "number": 8,
                    "shoe": 15,
                    "points": 33,
                    "rebounds": 3,
                    "assists": 2,
                    "steals": 1,
                    "blocks": 1,
                    "slamDunks": 0
                },
                "Brendan Haywood": {
                    "number": 33,
                    "shoe": 15,
                    "points": 6,
                    "rebounds": 12,
                    "assists": 12,
                    "steals": 22,
                    "blocks": 5,
                    "slamDunks": 12
                },
            }
        }
    }
}


// function to get player's score

const numPointsScored = (names) => {
    const game = gameObject();
    for(const gameKey in game ){
        const teamObj = game[gameKey];
        const data = teamObj.players;
        
          for(const key in data){
              const player = key;
              if( player === names){
                const points = data[key].points
                return `${names} has scored ${points} points.`
              }
          }
    }
};
numPointsScored();

// function to return players shoe size

const shoeSize = (names) => {
    const game = gameObject();
    for(const gameKey in game ){
        const teamObj = game[gameKey];
        const data = teamObj.players;
        
          for(const key in data){
              const player = key;
              if( player === names){
                const shoeSize = data[key].shoe
                return `${names} shoe size is ${shoeSize}.`
              }
          }
    }
};
shoeSize();

// function to return the teams colors

const teamColors = (name) => {
    const game = gameObject();
    for(const gameKey in game ){
        const teamObj = game[gameKey];
        const teamName = teamObj.teamName;
        const teamColors = teamObj.colors;
        if(teamName === name){
            return `${name} team colors are = [${teamColors}]`
        }
    }
}
teamColors();

// function to return all teams name

const teamNames = () => {
    const game = gameObject();
    const colors = [];
    for(const gameKey in game ){
        const teamObj = game[gameKey];
        const teamName = teamObj.teamName;
        colors.push(`The team name is ${teamName}`)
    }
    return colors
}
teamNames();

// function to return jersey numbers of the team

const playerNumbers = (name) => {
    const game = gameObject();
    const teamPlayerNumbers = [];
    for(const gameKey in game ){
        const teamObj = game[gameKey];
        const teamName = teamObj.teamName;
        const data = teamObj.players;
        if(teamName === name){
          for(const key in data){
              const number = data[key].number;
            teamPlayerNumbers.push(`${number}`)
          }
        }
    }
    return `Jersey numbers for ${name} are [${teamPlayerNumbers}]`;
}
playerNumbers();

// function to display players stats
const playerStats = (names) => {
    const game = gameObject();
    for(const gameKey in game ){
        const teamObj = game[gameKey];
        const data = teamObj.players;
        for(const key in data){
            const player = key;
            if( player === names){
              return data[key]
            }
        }
    }
}
playerStats();

const bigShoeRebounds = () => {
    const game = gameObject();
    for(const gameKey in game){
        const teamObj = game[gameKey];
        const data = teamObj.players;
        
        for(const key in data){
            console.log(data[key])
            const player = key;
            const shoeSize = data[key].shoe;
        //    const maxShoes = shoeSize.reduce((accumulator, element) => Math.max(accumulator, element))
           
        }
    }
}

bigShoeRebounds()