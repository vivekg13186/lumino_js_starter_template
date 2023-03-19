import {Widget} from "@lumino/widgets"
import {Signal} from "@lumino/signaling"

function createToolbarContainer(){
    var element  = document.createElement("div");
    element.style.height="35px";
    element.style.minHeight="35px"
    element.style.display="flex"
    
    return element;
}

function createToolItem(tool:ToolItem,signal){
    var element  = document.createElement("div");
    element.style.width="20px";
    element.style.minWidth="20px";
    element.style.height="20px";
    element.style.minHeight="20px";
    element.style.marginLeft="2px";
    element.style.padding="2px";
    element.style.display="flex";
    element.style.alignItems="center";
    element.style.justifyContent="center";
    element.style.cursor="pointer"
    element.addEventListener("mouseover",function(){
        element.style.background="#ccc";
    })
    element.addEventListener("mouseout",function(){
        element.style.background="#fff";
    })
    var icon = document.createElement("div");

    icon.classList.add("fa-solid");
    icon.classList.add(tool.icon);
    element.appendChild(icon);
    element.addEventListener("click",function(){
        signal.emit(tool.command);
    })
    return element;
}

interface ToolItem{
    command : string;
    icon :string;
}
export class Toolbar extends Widget{
    click:Signal<this,string>;
    constructor(tools:ToolItem[]){
        super({
            node : createToolbarContainer()
        });
        this.click = new Signal<this,string>(this);
        var self = this;
        tools.map(r=>{
            this.node.appendChild(createToolItem(r,self.click));
        })
    }
}