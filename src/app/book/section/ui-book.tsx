"use client";

import { useEditor, EditorContent, FloatingMenu } from "@tiptap/react";
import Document from "@tiptap/extension-document";
import "./book.css";
import Heading from "@tiptap/extension-heading";
import CodeBlock from "@tiptap/extension-code-block";
import Paragraph from "@tiptap/extension-paragraph";
import Text from "@tiptap/extension-text";
import HorizontalRule from "@tiptap/extension-horizontal-rule";
import Bold from "@tiptap/extension-bold";
import { Color } from "@tiptap/extension-color";
import Placeholder from "@tiptap/extension-placeholder";
import TextStyle from "@tiptap/extension-text-style";
import { MenuFloat, UiBtnBook } from "../components";
import { useState } from "react";
import { COLOR_TEXT } from "@/shared";
import StarterKit from "@tiptap/starter-kit";
import CharacterCount from "@tiptap/extension-character-count";

export function UiBook() {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Document,
      Heading,
      Paragraph,
      Text,
      CodeBlock,
      HorizontalRule,
      Bold,
      Color,
      TextStyle,
      Placeholder.configure({
        placeholder: "¡Dale vida a tus pensamientos! 💭 Comienza ahora",
      }),
    ],
    autofocus: true,
    editable: true,
    injectCSS: false,
  });
  const [color, setColor] = useState(COLOR_TEXT.BLACK);

  if (!editor) {
    return null;
  }
  //console.log(editor.getHTML()); // para contener el contenido del editor

  return (
    <section className="section-book-main">
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
      />
      <div className="mainBook">
        {/* {(editor.storage.characterCount.words() ?? 0) > 0 && (
          <FloatingMenu editor={editor} tippyOptions={{ duration: 100 }}>
            <MenuFloat
              isActiveH1={editor.isActive("heading", { level: 1 })}
              isActiveH2={editor.isActive("heading", { level: 2 })}
              isActiveH3={editor.isActive("heading", { level: 3 })}
              onSelectHeading={(level) => {
                editor.chain().focus().toggleHeading({ level }).run();
              }}
              selectColor={color}
              onSelectColor={() => {
                const valueColor =
                  color === COLOR_TEXT.BLACK
                    ? COLOR_TEXT.RED
                    : COLOR_TEXT.BLACK;
                setColor(valueColor);
                editor.chain().focus().setColor(valueColor).run();
              }}
            />
          </FloatingMenu>
        )} */}

        <EditorContent
          editor={editor}
          onChange={(e) => {
            console.log(e);
          }}
        />
      </div>
    </section>
  );
}
