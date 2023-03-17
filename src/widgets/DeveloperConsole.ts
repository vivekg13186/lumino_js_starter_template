import { Widget } from "@lumino/widgets";
import 'luna-object-viewer/luna-object-viewer.css'
import 'luna-data-grid/luna-data-grid.css'
import 'luna-dom-viewer/luna-dom-viewer.css'
import 'luna-console/luna-console.css'
import LunaConsole from 'luna-console'


export class DeveloperConsole extends Widget {
    tNode: HTMLDivElement;
    console: LunaConsole;


    constructor() {
        super();
        this.title.label = "Developer Console";
        this.title.closable= true;
        this.console = new LunaConsole(this.node);
    }

    logErrorMessage(...args:any[]) {
       this.console.error(...args);
    }
    logWarnMessage (...args: any[]) {
        this.console.warn(...args);
    }
    logInfoMessage (...args: any[]) {
        this.console.log(...args);
    }
    
}
