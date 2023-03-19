import { Widget } from "@lumino/widgets";
import BpmnModeler from 'bpmn-js/lib/Modeler';
export class BPMNEditor extends Widget{
    modeler: any;
    constructor(){
        super({
            node : document.createElement("div")
        });
        this.modeler = new BpmnModeler({
            container: this.node,
          });
    }

    setXML(bpmn:string){
        this.modeler.importXML(bpmn).then(function(){
            console.log("BPMN loaded");
        })
    }

}