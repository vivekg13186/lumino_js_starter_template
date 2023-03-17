import { BoxPanel, StackedPanel, Widget, DockPanel,MenuBar,Menu } from "@lumino/widgets";
import { CommandRegistry } from '@lumino/commands';


function createContent(msg:string){
    var e  = document.createElement("div");
    e.innerHTML = msg;
    return e;
}



function setupMenuBar() {
    var registry =new CommandRegistry();
    var menuBar = new MenuBar();
    const fileMenu = new Menu({ commands: registry });
    fileMenu.title.label = 'File';
    fileMenu.addItem({
        command: "new.file"
    })
    menuBar.addMenu(fileMenu);

    const viewMenu = new Menu({commands :registry});
    viewMenu.title.label = 'View';
    viewMenu.addItem({
        command: "view.firl"
    })
    menuBar.addMenu(viewMenu);

    return menuBar;
}


 

 

function main() {
 
    let dock = new DockPanel();
   
   
   
    dock.id = 'dock';
    BoxPanel.setStretch(dock, 1);
    let main = new BoxPanel({ direction: 'left-to-right', spacing: 0 });
    main.id = 'main';
    main.addWidget(dock);
    Widget.attach(setupMenuBar(),document.body);
    Widget.attach(main,document.body);

    window.onresize = () => {
        main.update();
      };
  
    var widget1 = new Widget({
        node: createContent("<h1>Widget 1</h1>")
    })
    widget1.title.label="Widget1 Panel";
    widget1.title.closable=false;
    dock.addWidget(widget1);
    var widget2 = new Widget({
        node: createContent("<h1>Widget 2</h1>")
    })
    widget2.title.label="Widget2 Panel";
    widget2.title.closable=true;
    dock.addWidget(widget2, { mode: 'split-right', ref: widget1 });

}

main();
