class View {
  constructor(game, $el) {
    this.game = game;
    this.setupBoard();
  }

  bindEvents() {
    $("ul").on("click", "li", (e) => {
      const $li = $(e.currentTarget);
      this.makeMove($li);
    });
  }

  makeMove($square) {
    try {
      this.game.playMove($square.data("pos"));
    } catch (e) {
      alert(e.msg);
    }
    $square.addClass('selected');
    $square.text(this.game.currentPlayer);
    if (this.game.isOver() && this.game.winner()) {
      
      const h2 = $("<h2>").text(this.game.winner().toUpperCase() + " Win!");
      $("ul").after(h2);
    } else if (this.game.isOver()) {
      const h2 = $("<h2>").text("It's a draw!");
      $("ul").after(h2);
      
    }
  }

  setupBoard() {
    $("<ul>").appendTo($(".ttt"));
    for (let i = 0; i < 3; i++) {
      for(let j = 0; j < 3; j++) {

        $("<li>").data('pos', [i, j]).appendTo($("ul"));
        
      }
    }
  }
}

module.exports = View;


$('element').attr('id', 'i');