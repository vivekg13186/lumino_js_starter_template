import { BoxPanel, StackedPanel, Widget, DockPanel,MenuBar,Menu } from "@lumino/widgets";
import { CommandRegistry } from '@lumino/commands';
import { DeveloperConsole } from "./widgets/DeveloperConsole";
import { TabulatorPanel } from "./widgets/Tabulator";


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


 
function createTabulatorPanel(){
    var tabledata = [
        {id:1, name:"Oli Bob", progress:12, gender:"male", rating:1, col:"red", dob:"19/02/1984", car:1},
        {id:2, name:"Mary May", progress:1, gender:"female", rating:2, col:"blue", dob:"14/05/1982", car:true},
        {id:3, name:"Christine Lobowski", progress:42, gender:"female", rating:0, col:"green", dob:"22/05/1982", car:"true"},
        {id:4, name:"Brendon Philips", progress:100, gender:"male", rating:1, col:"orange", dob:"01/08/1980"},
        {id:5, name:"Margret Marmajuke", progress:16, gender:"female", rating:5, col:"yellow", dob:"31/01/1999"},
        {id:6, name:"Frank Harbours", progress:38, gender:"male", rating:4, col:"red", dob:"12/05/1966", car:1},
    ];
    
    var tabulator = new TabulatorPanel({
        data:tabledata, //assign data to table
        autoColumns:true, //create columns from data field names
    });
    tabulator.title.label="Tabulator Example";
    tabulator.title.closable=true;
    return tabulator;
}

function createDeveloperConsole(){
    var developerConsole = new DeveloperConsole();
    developerConsole.title.label="Developer Console";
    developerConsole.title.closable=true;
   
    developerConsole.logErrorMessage("some test message",{"name" : "hello"});
    developerConsole.logInfoMessage("some info message");
    developerConsole.logWarnMessage("some warning message");
    return developerConsole;
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
    dock.addWidget(createDeveloperConsole(), { mode: 'split-bottom', ref: widget1 });
    //tabulator example
    dock.addWidget(createTabulatorPanel(), { mode: 'split-right', ref: widget1 });
    

}

main();
