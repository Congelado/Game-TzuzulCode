let title = 
`
   #####                 #                          ######                                            
  #     #   ####  #          ####  ######  ####     #     #  ####  #    # ###### #    #  ####  #    # 
 #         #    # #      #  #      #      #    #    #     # #    # #   #  #      ##  ## #    # ##   # 
 #         #    # #      #   ####  #####  #    #    ######  #    # ####   #####  # ## # #    # # #  # 
 #         #    # #      #       # #      #    #    #       #    # #  #   #      #    # #    # #  # # 
  #     #  #    # #      #  #    # #      #    #    #       #    # #   #  #      #    # #    # #   ## 
   #####    ####  ###### #   ####  ######  ####     #        ####  #    # ###### #    #  ####  #    # 
`

let menu =`
╔════════════════════════════════════════╗
║     *seleccione un modo de juego*      ║
║                                        ║
║             comenzar juego             ║
║                                        ║
║                opciones                ║ 
║                                        ║
║                 salir                  ║
║                                        ║
╚════════════════════════════════════════╝
`

console.log("%c"+title, "color: peru")

console.log(menu)

let konami = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
let contador = 0;

let keyHandler = event => {
	console.log(event.key)
	if (konami.indexOf(event.key) < 0 || event.key !== konami[contador]) {
		console.clear()

		console.log("%c"+title, "color: peru")

		console.log(menu)

        contador = 0;
		return;
	}

	contador++;

	if (konami.length === contador) {
		contador = 0;
		window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
	}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
};

document.addEventListener('keydown', keyHandler, false);
