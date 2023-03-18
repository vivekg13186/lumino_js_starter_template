import {Widget} from "@lumino/widgets"
import {Tabulator} from 'tabulator-tables';
export class TabulatorPanel extends Widget{
    table: any;
    constructor(config){
        super({node:document.createElement("div")});
        this.table = new Tabulator(this.node,config);
    }
}