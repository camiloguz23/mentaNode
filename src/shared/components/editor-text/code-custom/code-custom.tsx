"use client";

import React, { useState } from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import Document from "@tiptap/extension-document";
import "./book-custom.css";
import Heading from "@tiptap/extension-heading";
import Paragraph from "@tiptap/extension-paragraph";
import Text from "@tiptap/extension-text";
import HorizontalRule from "@tiptap/extension-horizontal-rule";
import Bold from "@tiptap/extension-bold";
import { Color } from "@tiptap/extension-color";
import Placeholder from "@tiptap/extension-placeholder";
import CharacterCount from "@tiptap/extension-character-count";
import TextStyle from "@tiptap/extension-text-style";
import { UiBtnBook } from "@/app/book/[id]/components";
import { COLOR_TEXT } from "@/shared/constants";
import CodeBlock from "@tiptap/extension-code-block";
import Table from "@tiptap/extension-table";
import TableCell from "@tiptap/extension-table-cell";
import TableHeader from "@tiptap/extension-table-header";
import TableRow from "@tiptap/extension-table-row";

interface Props {
  onChange: (value: string) => void;
  initContent?: string;
  editable?: boolean;
}

export function CodeCustom({ onChange, editable, initContent }: Props) {
  const [color, setColor] = useState(COLOR_TEXT.BLACK);
  const editor = useEditor({
    extensions: [
      Document,
      Heading,
      Paragraph,
      Text,
      HorizontalRule,
      Bold,
      Color,
      TextStyle,
      Placeholder.configure({
        placeholder: "¡Dale vida a tus pensamientos! 💭 Comienza ahora",
      }),
      CodeBlock,
      CharacterCount,
      Table.configure({
        resizable: true,
      }),
      TableRow,
      TableHeader,
      TableCell,
    ],
    autofocus: false,
    editable: true,
    injectCSS: false,
    content: initContent || undefined,
  });

  if (!editor) {
    return null;
  }
  return (
    <div>
      <UiBtnBook
        isActiveH1={editor.isActive("heading", { level: 1 })}
        isActiveH2={editor.isActive("heading", { level: 2 })}
        isActiveH3={editor.isActive("heading", { level: 3 })}
        onSelectHeading={(level) => {
          editor.chain().focus().toggleHeading({ level }).run();
        }}
        isActiveCode={editor.isActive("codeBlock")}
        onSelectCode={() => editor.chain().focus().toggleCodeBlock().run()}
        onSelectDivider={() => editor.chain().focus().setHorizontalRule().run()}
        isActiveDivider={false}
        isBold={editor.isActive("bold")}
        onSelectBold={(value) =>
          value
            ? editor.chain().focus().unsetBold().run()
            : editor.chain().focus().toggleBold().run()
        }
        selectColor={color}
        onSelectColor={() => {
          const valueColor =
            color === COLOR_TEXT.BLACK ? COLOR_TEXT.RED : COLOR_TEXT.BLACK;
          setColor(valueColor);
          editor.chain().focus().setColor(valueColor).run();
        }}
        onActionTable={(action) => {
          console.log(action);
          if (action === "create") {
            console.log("create");
            editor
              .chain()
              .focus()
              .insertTable({ rows: 3, cols: 3, withHeaderRow: true })
              .run();
          }
          if (action === "row") {
            console.log("row");
            editor.chain().focus().addRowAfter().run();
          }
          if (action === "column") {
            editor.chain().focus().addColumnAfter().run();
          }
        }}
      />
      <EditorContent
        editor={editor}
        onKeyDown={() => {
          const value = editor.getHTML();
          onChange(value);
        }}
      />
    </div>
  );
}
