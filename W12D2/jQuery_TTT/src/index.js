const View = require("./ttt-view.js");
const Game = require("./game.js");
const game = new Game();

$(() => {
  // $("html").find("ttt");
  const $el = $(".ttt");
  const view = new View(game, $el);
  view.bindEvents();
  
});
