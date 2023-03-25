import {EditorView, basicSetup} from "codemirror"
import {EditorState } from '@codemirror/state'
import {javascript} from "@codemirror/lang-javascript"
import { Widget } from "@lumino/widgets";

export class JSCodeEditor extends Widget{

    editor :EditorView;
    constructor(code:string){
        super();
        this.editor = new EditorView({
            extensions: [basicSetup, javascript()],
            parent: this.node,
    
          });
          this.node.style.display="flex";
          this.editor.dom.style.width="100%";
          
    }

    setCode(code:string){
        let transaction = this.editor.state.update({changes: {from: 0, insert: code}});
        this.editor.dispatch(transaction);
    }
    getCode():string{
        return this.editor.state.doc.toString();
    }
}
