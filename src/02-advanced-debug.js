console.log('Advanced debugging example running.')
debugger

function goodPractices() {
  let game = gameObject();
  for (let gameKey in game) {
    debugger
    let teamObj = game[gameKey]
    for (let teamKey in teamObj) {
      debugger
      let data = teamObj.players
      if (data) {
        for (let key in data) {
          debugger
        }
      }
    }
  }
}

goodPractices()
