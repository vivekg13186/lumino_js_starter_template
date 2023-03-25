import { Widget } from "@lumino/widgets";



export class StatusBar extends Widget {
    messageElement: HTMLDivElement;
    iconElement: HTMLDivElement;
    progressElement: HTMLProgressElement;
    constructor() {
        super();
        this.node.style.display = "flex";
        var s = this.node.style;
        s.display="flex";
        s.alignItems="center";
        s.justifyContent="flex-start";
        s.minHeight="25px";
        s.maxHeight="25px";
        s.padding="3px";
        s.paddingLeft="10px";
        s.background ="#f8f6f6";
        s.borderTop ="1px solid #c2c2c2";
        s.fontSize="12px"
        s.color="#383838"
        this.iconElement = document.createElement("div");
       
        this.progressElement = document.createElement("progress");
    
        this.messageElement = document.createElement("div");
        this.progressElement.setAttribute("max", "100");
        this.node.appendChild(this.iconElement);

        this.node.appendChild(this.progressElement);
        this.node.appendChild(this.messageElement);
        this.iconElement.style.marginRight="10px";
        this.messageElement.style.marginRight="10px";
        this.progressElement.style.marginRight="10px";
        this.setStatus("Welcome to demo","info",0);
    }

    _getIcon(tag: string) {
        switch (tag) {
            case "info":
                return `<i class="fa-solid fa-circle-info"></i>`;
            case "warn":
                return `<i class="fa-solid fa-triangle-exclamation"></i>`;
            case "error":
                return `<i class="fa-solid fa-bug"></i>`
            default:
                return "<i></i>"
        }
    }
    setStatus(message: string, tag: string, progress: number): void {
        this.messageElement.innerText = message;
        this.progressElement.value = progress;
        this.iconElement.innerHTML = this._getIcon(tag);
    }
}