import { BoxPanel, StackedPanel, Widget, DockPanel,MenuBar,Menu } from "@lumino/widgets";
import { CommandRegistry } from '@lumino/commands';
import { DeveloperConsole } from "./widgets/DeveloperConsole";


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
   

    //add developer console
    var developerConsole = new DeveloperConsole();
    developerConsole.title.label="Developer Console";
    developerConsole.title.closable=true;
    dock.addWidget(developerConsole, { mode: 'split-right', ref: widget1 });
    developerConsole.logErrorMessage("some test message",{"name" : "hello"});
    developerConsole.logInfoMessage("some info message");
    developerConsole.logWarnMessage("some warning message");

}

main();
