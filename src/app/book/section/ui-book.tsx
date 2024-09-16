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
import { MenuFloat, UiBtnBook } from "../components";
import { useState } from "react";
import {
  COLOR_TEXT,
  IconPlus,
  UiSelect,
  useBookStore,
  useBoolean,
} from "@/shared";
import StarterKit from "@tiptap/starter-kit";
import CodeBlockLowlight from "@tiptap/extension-code-block-lowlight";
import { all, createLowlight } from "lowlight";
import { useMutation } from "convex/react";
import { api } from "../../../../convex/_generated/api";

const lowlight = createLowlight(all);

interface Props {
  id: string;
}

export function UiBook({ id }: Props) {
  const { section, email } = useBookStore((store) => store.books);
  const onCreatePage = useMutation(api.query.createPage);
  const openCreatePage = useBoolean();
  const [openStyle, setOpenStyle] = useState<string>("init");
  const [titlePage, setTitlePage] = useState<string>("");
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
          <UiSelect
            label="Paginas"
            options={section.map((item) => ({
              label: item.titleSection,
              value: item.id,
            }))}
          />
          <div className="modal">
            <button
              className={"btnCreate"}
              onClick={() => {
                console.log(openCreatePage.value);

                if (openCreatePage.value) {
                  setTimeout(() => {
                    openCreatePage.onFalse();
                    console.log("close");
                  }, 1100);

                  setOpenStyle("close");
                } else {
                  openCreatePage.onTrue();
                  setOpenStyle("open");
                }
              }}
            >
              <IconPlus className="icon" /> crear Pagina
            </button>
            {openCreatePage.value && (
              <div className={`createPage ${openStyle}`}>
                <input
                  type="text"
                  placeholder="Nombre de la pagina"
                  className="input"
                  value={titlePage}
                  onChange={(e) => setTitlePage(e.target.value)}
                />
                <button
                  className="btn_save"
                  onClick={() => {
                    onCreatePage({
                      body: {
                        content: "",
                        idBook: id,
                        titleSection: titlePage,
                        id: crypto.randomUUID(),
                      },
                      email: email,
                    }).then(() => {
                      setTimeout(() => {
                        openCreatePage.onFalse();
                        console.log("close");
                      }, 1100);

                      setOpenStyle("close");
                    });
                  }}
                >
                  Guardar
                </button>
              </div>
            )}
          </div>
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
        </section>
        <section className="content_label">
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
          </div>
        </section>
      </section>
    </>
  );
}
