import "./styles.css";
import { createReactBlockSpec } from "@blocknote/react";
import { Editor } from "@monaco-editor/react";

// Definimos un bloque personalizado para el editor de código
export const CodeEditorBlock = createReactBlockSpec(
  {
    type: "code-editor",
    propSchema: {
      language: {
        default: "javascript",
        values: ["javascript", "typescript", "python", "html", "css"],
      },
      theme: {
        default: "vs-dark",
        values: ["vs-dark", "light"],
      },
    },
    content: "inline",
  },
  {
    render: (props: any) => {
      const { language, theme } = props.block.props;

      return (
        <div className="code-editor-block" contentEditable={false}>
          <Editor
            height="400px"
            language={language}
            theme={theme}
            value={props.block.content}
            onChange={(value) => {
              // Actualiza el contenido del bloque cuando el código cambia
              props.editor.updateBlock(props.block, { content: value });
            }}
          />
          {/* Menú para cambiar el lenguaje y el tema del editor */}
          <div className="code-editor-menu">
            <label>Lenguaje: </label>
            <select
              value={language}
              onChange={(e) =>
                props.editor.updateBlock(props.block, {
                  props: { language: e.target.value },
                })
              }
            >
              <option value="javascript">JavaScript</option>
              <option value="typescript">TypeScript</option>
              <option value="python">Python</option>
              <option value="html">HTML</option>
              <option value="css">CSS</option>
            </select>
            <label>Tema: </label>
            <select
              value={theme}
              onChange={(e) =>
                props.editor.updateBlock(props.block, {
                  props: { theme: e.target.value },
                })
              }
            >
              <option value="vs-dark">Oscuro</option>
              <option value="light">Claro</option>
            </select>
          </div>
        </div>
      );
    },
  }
);
