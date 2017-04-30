extends index

block scripts
  script(type="text/javascript").
    App.Boards = new Boards(!{JSON.stringify(boards)})