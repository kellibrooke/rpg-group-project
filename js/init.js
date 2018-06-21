// Game init

function playerFromStorage() {
  if (checkStorage()) {
    var playerData = getPlayer();
    alertSuccess("Game data for [ " + playerData.name + " ] loaded!");
    return playerData;
  } else {
    return alertError("No player data found.");
  }
}

function checkStorage() {
  if (localStorage.getItem("rpg-game")) return true;
}

function getPlayer() {
  var player = JSON.parse(localStorage.getItem("rpg-game"));
  return player;
}

function saveGame(playerObject) {
  var key = "rpg-game";
  var object = JSON.stringify(playerObject);
  localStorage.setItem(key, object);
}

function deleteGame() {
  localStorage.removeItem("rpg-game");
}

// test player
player = new Player("Kelli");

function runTestScript() {
  player.items.push(itemMap.manaPotion1);
  player.mp = 5;
}

$(document).ready(function() {
  console.log("init.js loaded!");

  // run object builds here
  buildItems();
  buildEnemies();
  buildRooms();
  buildStats();
  createRoomEnemyClicks(roomMap.room1);
  createRoomEnemyClicks(roomMap.room2);
  createRoomItemClicks(roomMap.room1);
  createRoomItemClicks(roomMap.room2);

  //run test script
  runTestScript();
});
