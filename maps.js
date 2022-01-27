var maps = {
  easy: [function(grid){
    colors = ['#2aa149','#b52d46','#3f48ab','#b5a72d'];
    grid[6][1].type = 'cave-down';
    for(i = 1; i < 10; i ++){
      grid[6][1 + i].type = 'rail-down'
    }
    grid[6][6].type = 'alter-down-right'
    for(i = 1; i < 5; i ++){
      grid[6 + i][6].type = 'rail-right'
    }
    grid[11][6].type = 'station-#2aa149';
    grid[9][6].type = 'alter-right-up'
    for(i = 0; i < 3; i ++){
      grid[9][5 - i].type = 'rail-up'
    }
    grid[9][2].type = 'station-#b52d46'
    for(i = 0; i < 5; i ++){
    grid[6 - i][11].type = 'rail-left'
    }
    grid[1][11].type = 'station-#3f48ab'
    grid[4][11].type = 'alter-left-up'
    for(i = 1; i < 8; i ++){
      grid[4][11 - i].type = 'rail-up'
    }
    grid[4][3].type = 'station-#b5a72d'
  }
  
  ,
  
  function(grid){
    colors = ['#2aa149','#b52d46','#3f48ab','#b5a72d'];
    grid[6][8].type = 'cave-down';
    for(i = 0; i < 4; i ++){
      grid[6][9 + i].type = 'rail-down';
    }
    grid[6][13].type = 'alter-left-right';
    for(i = 0; i < 3; i ++){
      grid[7 + i][13].type = 'rail-right'
    }

    for(i = 0; i < 3; i ++){
      grid[5 - i][13].type = 'rail-left'
    }
    for(i = 0; i < 12; i ++){
      grid[3][13 - i].type = 'rail-up';
    }
    for(i = 0; i < 10; i ++){
      grid[10][13 - i].type = 'rail-up';
    }
    grid[10][9].type = 'alter-up-left'
    grid[9][9].type = 'rail-left';
    grid[8][9].type = 'station-#2aa149'

    grid[10][3].type = 'station-#b52d46'

    grid[3][5].type = 'alter-up-left'
    grid[3][1].type = 'station-#3f48ab';
    grid[2][5].type = 'rail-left';
    grid[1][5].type = 'rail-left';
    grid[0][5].type = 'station-#b5a72d'

  },
  function(grid){
    colors = ['#2aa149','#b52d46','#3f48ab','#b5a72d'];
    grid[11][13].type = 'cave-up'
    let x = 0;
    let y = 0;
    for(i = 1; i < 21; i ++){
      if(i % 2 == 0){
        x ++
        grid[11 - x][13 - y].type = 'rail-up'
      }else{
        y ++
        grid[11 - x][13 - y].type = 'rail-left'
      }
    }

    grid[4][5].type = 'alter-left-up';

    for(i =0; i < 2; i ++){
      grid[4][4 - i].type = 'rail-up'     
    }
    grid[4][2].type = 'station-#3f48ab'

    grid[7][8].type = 'alter-left-up';

    for(i =0; i < 5; i ++){
      grid[7][7 - i].type = 'rail-up'     
    }
    grid[7][2].type = 'station-#b52d46'

    grid[10][11].type = 'alter-left-up';

    for(i =0; i < 8; i ++){
      grid[10][10 - i].type = 'rail-up'     
    }
    grid[10][2].type = 'station-#2aa149'

    grid[1][2].type = 'station-#b5a72d';
  }

  ],

  medium: [function(grid){
    colors = ['#2aa149','#b52d46','#3f48ab','#b5a72d','#952db5'];
    grid[6][1].type = 'cave-left';
    for(i = 0; i < 3; i ++){
      grid[5 - i][1].type = 'rail-left';
    }
    for(i = 0; i < 12; i ++){
      grid[2][1 + i].type = 'rail-down'
    }
    grid[2][4].type = 'alter-down-right';
    for(i = 1; i < 10; i ++){
      grid[2 + i][4].type = 'rail-right'
    }
    grid[11][4].type = 'alter-up-down';
    grid[11][3].type = 'rail-up';
    grid[11][2].type = 'rail-up';
    grid[11][1].type = 'station-#2aa149'
    grid[11][5].type = 'rail-down';
    grid[11][6].type = 'rail-down'
    grid[11][7].type = 'station-#b52d46'

    grid[2][7].type = 'alter-down-right';
    for(i = 0; i < 4; i ++){
      grid[3 + i][7].type = 'rail-right'
    }
    grid[7][7].type = 'station-#3f48ab'
    grid[2][11].type = 'alter-down-right';
    for(i = 0; i < 4; i ++){
      grid[3 + i][11].type = 'rail-right';
    }
    grid[7][11].type = 'station-#b5a72d'
    for(i = 0; i < 7; i ++){
      grid[2 + i][13].type = 'rail-right'
    }
    grid[9][13].type = 'station-#952db5'
    
  },
  function(grid){
    colors = ['#2aa149','#b52d46','#3f48ab','#b5a72d','#952db5'];
    grid[6][13].type = 'cave-up';
    for(i = 0; i < 3; i ++){
      grid[6][12 - i].type = 'rail-up';
    }
    grid[6][9].type = 'alter-left-right';
    for(i = 0; i < 4; i ++){
      grid[7 + i][9].type = 'rail-right';
    }
    grid[11][9].type = 'station-#2aa149'
    for(i = 0; i < 3; i ++){
      grid[5 - i][9].type = 'rail-left';
    }
    grid[2][9].type = 'station-#b52d46'

    grid[9][9].type = 'alter-right-up'

    for(i =0; i < 5; i ++){
      grid[9][8 - i].type = 'rail-up';
    }
    grid[9][5].type = 'alter-up-left';
    grid[9][3].type = 'station-#3f48ab';
    for(i = 0; i < 2; i ++){
      grid[8 - i][5].type = 'rail-left'
    }
    grid[6][5].type = 'station-#b5a72d'
    grid[4][9].type = 'alter-left-up';
    for(i = 0; i < 7; i ++){
      grid[4][8 - i].type = 'rail-up';
    }
    grid[4][1].type = 'station-#952db5'
    grid[4][3].type = 'alter-up-right';
    grid[5][3].type = 'rail-right';
    grid[6][3].type = 'rail-down';
    grid[6][4].type = 'rail-down';

  },


  function(grid){
    colors = ['#2aa149','#b52d46','#3f48ab','#b5a72d','#952db5'];
    grid[10][1].type = 'cave-down'

    for(i = 0; i < 12; i ++){
      grid[10][2 + i].type = 'rail-down'
    }
    grid[10][14].type = 'station-#2aa149'
    grid[10][10].type = 'alter-down-left';
    for(i =0; i < 8; i ++){
      grid[9 - i][10].type = 'rail-left'
    }
    grid[4][10].type = 'alter-up-left'
    for(i =0; i < 2; i ++){
      grid[1][10 + i].type = 'rail-down'
    }
    for(i =0; i < 5; i ++){
      grid[1 + i][12].type = 'rail-right'
    }
    grid[6][12].type = 'station-#b52d46'
    
    for(i = 0; i < 7; i ++){
      grid[4][9 - i].type ='rail-up';
    }
    grid[4][2].type = 'station-#3f48ab'

    grid[4][4].type = 'alter-up-right';

    for(i =0; i < 5; i ++){
      grid[5 + i][4].type = 'rail-right'
    }

    grid[6][4].type = 'alter-right-down'
    for(i = 0; i < 3; i ++){
      grid[6][5 + i].type = 'rail-down'
    }
    grid[6][8].type = 'station-#b5a72d'
    grid[1][10].type = 'alter-up-down';
    for(i =0; i < 3; i ++){
      grid[1][9 - i].type = 'rail-up'
    }
    grid[1][6].type = 'station-#952db5'

  }],

  hard: [function(grid){
    colors = ['#2aa149','#b52d46','#3f48ab','#b5a72d','#952db5','#2db59a'];
    grid[6][7].type = 'cave-up';
    grid[6][6].type = 'rail-up';
    grid[6][5].type = 'rail-up';
    for(i = 0; i < 6; i ++){
      grid[9 - i][4].type = 'rail-left'
    }
    for(i = 0; i < 6; i ++){
      grid[3][4 + i].type = 'rail-down'
    }
    for(i = 0; i < 6; i ++){
      grid[3 + i][10].type = 'rail-right'
    }
    for(i = 0; i < 6; i ++){
      grid[9][10 - i].type = 'rail-up'
    }
    grid[3][7].type = 'alter-down-left';
    grid[2][7].type = 'rail-left';
    grid[1][7].type = 'rail-up';
    grid[1][6].type = 'rail-up';
    grid[1][5].type = 'rail-up';
    grid[1][4].type = 'station-#2aa149';
    grid[3][10].type = 'alter-right-down';
    for(i = 0; i < 3; i ++){
      grid[3][11 + i].type = 'rail-down';
    }
    for(i = 0; i < 8; i ++){
      grid[3 + i][14].type = 'rail-right';
    }
    grid[5][14].type = 'alter-right-up';
    grid[5][13].type = 'rail-up';
    grid[5][12].type = 'station-#b52d46'

    grid[8][14].type = 'alter-right-up';
    grid[8][13].type = 'rail-up';
    grid[8][12].type = 'station-#3f48ab'

    grid[11][14].type = 'rail-up';
    grid[11][13].type = 'rail-up';
    grid[11][12].type = 'station-#b5a72d'

    grid[9][4].type = 'alter-left-up';
    grid[9][3].type = 'rail-up';
    grid[9][2].type = 'rail-up';

    grid[9][1].type = 'alter-left-right';
    grid[8][1].type = 'rail-left';
    grid[7][1].type = 'station-#952db5'
    grid[10][1].type = 'rail-right';
    for(i = 0; i < 6; i ++){
      grid[11][1 + i].type = 'rail-down';
    }
    grid[11][7].type = 'alter-left-down';
    grid[10][7].type = 'rail-left';
    grid[11][8].type = 'rail-down';
    grid[11][9].type = 'rail-down'
    grid[11][10].type = 'station-#2db59a'    
  },
  function(grid){
    colors = ['#2aa149','#b52d46','#3f48ab','#b5a72d','#952db5','#2db59a'];
    grid[6][14].type = 'cave-up'
    grid[6][13].type = 'rail-up';
    grid[6][12].type = 'rail-up';
    grid[6][11].type = 'alter-left-right';
    grid[5][11].type = 'rail-left';
    grid[4][11].type = 'rail-left';
    grid[3][11].type = 'rail-left';
    grid[7][11].type = 'rail-right';
    grid[8][11].type = 'rail-right';
    grid[9][11].type = 'rail-right';
    for(i =0; i < 9; i += 2){
      for(j =0; j < 9; j ++){
      grid[2 + i][10 - j].type = 'rail-up';
      }
    }
    grid[2][11].type = 'rail-up';
    grid[10][11].type = 'rail-up';
    
    grid[4][11].type = 'alter-left-up';
    grid[8][11].type = 'alter-right-up';

    grid[2][1].type = 'station-#2aa149';
    grid[4][1].type = 'station-#b52d46';
    grid[6][1].type = 'station-#3f48ab';
    grid[8][1].type = 'station-#b5a72d';
    grid[10][1].type = 'station-#952db5';
    grid[6][9].type = 'station-#2db59a';
    grid[6][10].type = 'none'
    for(i =0; i < 3; i ++){
      grid[6][6 + i].type = 'rail-down';
    }
    grid[6][5].type = 'alter-up-down'
    grid[8][5].type = 'alter-up-left';
    grid[7][5].type = 'rail-left';


    grid[8][3].type = 'alter-up-right';
    grid[9][3].type = 'rail-right';

    grid[6][7].type = 'alter-down-left';
    grid[5][7].type = 'rail-left';

    grid[2][4].type = 'alter-up-right';
    grid[3][4].type = 'rail-right';
    
  },
  function(grid){
    colors = ['#2aa149','#b52d46','#3f48ab','#b5a72d','#952db5','#2db59a'];
    grid[11][1].type = 'cave-left';
    for(i =0; i < 9; i ++){
      grid[10 - i][1].type = 'rail-left';
    }
    for(i =0; i < 12; i ++){
      grid[1][1 + i].type = 'rail-down'
    }
    grid[4][1].type = 'alter-down-left';
    for(i =0; i < 3; i ++){
      grid[4][2 + i].type = 'rail-down'
    }
    grid[4][5].type = 'station-#2aa149'
    for(i = 0; i < 10; i ++){
    grid[1 + i][7].type = 'rail-right'
    }
    grid[1][7].type = 'alter-right-down';
    grid[1][13].type = 'station-#b52d46';
    grid[1][10].type = 'alter-down-right';
    grid[2][10].type = 'rail-right';
    grid[3][10].type = 'rail-right';
    grid[4][10].type = 'station-#3f48ab';

    for(i =0; i < 5; i ++){
      grid[11][7 + i].type = 'rail-down'
    }
    grid[11][11].type = 'station-#b5a72d'

    grid[6][7].type = 'alter-up-right'
    grid[6][6].type = 'rail-up';
    grid[6][5].type = 'rail-up';
    grid[6][4].type = 'alter-up-left';
    grid[5][4].type = 'rail-left';
    grid[6][3].type = 'station-#952db5';

    grid[8][7].type = 'alter-right-down'
    for(i =0; i < 5; i ++){
      grid[8][8 + i].type = 'rail-down'
    }
    grid[8][13].type = 'station-#2db59a'
  }]
}