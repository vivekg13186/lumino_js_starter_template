import {Widget} from "@lumino/widgets"
import {TabulatorFull as Tabulator} from 'tabulator-tables'
export class TabulatorPanel extends Widget{
    table: any;
    constructor(config){
        super({node:document.createElement("div")});
        this.table = new Tabulator(this.node,config);
    }
}