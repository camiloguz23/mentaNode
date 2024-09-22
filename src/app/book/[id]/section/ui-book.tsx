"use client";

import "./book.css";
import { useState } from "react";
import {
  CodeCustom,
  IconPlus,
  UiEmpty,
  UiSelect,
  useBookStore,
  useBoolean,
  useDebounce,
} from "@/shared";
import { useMutation } from "convex/react";
import { api } from "../../../../../convex/_generated/api";

interface Props {
  id: string;
}

export function UiBook({ id }: Props) {
  const { section, email } = useBookStore((store) => store.books);
  const onCreatePage = useMutation(api.query.createPage);
  const onAddContent = useMutation(api.query.saveContent);
  const { onSearch } = useDebounce();
  const openCreatePage = useBoolean();
  const changePage = useBoolean();
  const [openStyle, setOpenStyle] = useState<string>("init");
  const [titlePage, setTitlePage] = useState<string>("");
  const [idPage, setIdPage] = useState<string>("");

  return (
    <>
      <section className="section-book-main">
        <section className={"label"}>
          <UiSelect
            label="Paginas"
            options={section
              .filter((item) => item.idBook === id)
              .map((item) => ({
                label: item.titleSection,
                value: item.id,
              }))}
            onSelect={(value) => {
              changePage.onTrue();

              setTimeout(() => {
                setIdPage(value);
                changePage.onFalse();
              }, 200);
            }}
          />
          <div className="modal">
            <button
              className={"btnCreate"}
              onClick={() => {
                if (openCreatePage.value) {
                  setTimeout(() => {
                    openCreatePage.onFalse();
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
        </section>
        <section className="content_label">
          {!!idPage || <UiEmpty message="Selecciona una pagina" />}
          {idPage && !changePage.value && (
            <div className="mainBook">
              <CodeCustom
                onChange={(value: string) => {
                  onSearch({
                    content: value,
                    email: email,
                    idPage,
                  });
                }}
                initContent={
                  section.find((item) => item.id === idPage)?.content
                }
                editable={true}
              />
            </div>
          )}
        </section>
      </section>
    </>
  );
}
