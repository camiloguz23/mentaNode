"use client";

import { useEditor, EditorContent, FloatingMenu } from "@tiptap/react";
import Document from "@tiptap/extension-document";
import "./book.css";
import Heading from "@tiptap/extension-heading";
import Paragraph from "@tiptap/extension-paragraph";
import Text from "@tiptap/extension-text";
import HorizontalRule from "@tiptap/extension-horizontal-rule";
import Bold from "@tiptap/extension-bold";
import { Color } from "@tiptap/extension-color";
import Placeholder from "@tiptap/extension-placeholder";
import CharacterCount from "@tiptap/extension-character-count";
import TextStyle from "@tiptap/extension-text-style";
import { MenuFloat, UiBtnBook, UiTitleSection } from "../components";
import { useState } from "react";
import {
  COLOR_TEXT,
  UiPopUp,
  useBookStore,
  useBoolean,
  useSectionBookStore,
} from "@/shared";
import StarterKit from "@tiptap/starter-kit";
import CodeBlockLowlight from "@tiptap/extension-code-block-lowlight";
import { all, createLowlight } from "lowlight";

const lowlight = createLowlight(all);

interface Props {
  id: string;
}

export function UiBook({ id }: Props) {
  const { books } = useBookStore((store) => store.books);
  const { onCreateSection, sections } = useSectionBookStore((store) => store);
  const openFormCreateSection = useBoolean();
  const editor = useEditor({
    extensions: [
      StarterKit,
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
      CodeBlockLowlight.configure({
        lowlight,
      }),
      CharacterCount,
    ],
    autofocus: false,
    editable: true,
    injectCSS: false,
  });
  const [color, setColor] = useState(COLOR_TEXT.BLACK);

  if (!editor) {
    return null;
  }
  //console.log(editor.getHTML()); // para contener el contenido del editor

  return (
    <>
      <section className="section-book-main">
        <section className={"label"}>
          <p>{books.find((item) => item.id === id)?.title ?? "no hay"}</p>
          <button
            onClick={() => {
              onCreateSection({
                idBook: id,
                section: {
                  content: "",
                  id: crypto.randomUUID(),
                  titleSection: "Sin Titulo",
                },
              });
            }}
          >
            Crear titulo
          </button>
          {sections
            .find((item) => item.idBook === id)
            ?.section.map((item) => (
              <UiTitleSection
                key={item.id}
                idBooK={id}
                idSection={item.id}
                title={item.titleSection}
              />
            ))}
        </section>
        <section className="content_label">
          <UiBtnBook
            isActiveH1={editor.isActive("heading", { level: 1 })}
            isActiveH2={editor.isActive("heading", { level: 2 })}
            isActiveH3={editor.isActive("heading", { level: 3 })}
            onSelectHeading={(level) => {
              editor.chain().focus().toggleHeading({ level }).run();
            }}
            isActiveCode={editor.isActive("codeBlock")}
            onSelectCode={() => editor.commands.toggleCodeBlock()}
            onSelectDivider={() =>
              editor.chain().focus().setHorizontalRule().run()
            }
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

            <EditorContent
              editor={editor}
              onChange={(e) => {
                console.log(e);
              }}
            />
            {editor.storage.characterCount?.words()}
          </div>
        </section>
      </section>
    </>
  );
}
