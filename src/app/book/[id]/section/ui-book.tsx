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
  UserBooksInterfaces,
} from "@/shared";
import { useMutation, useQuery } from "convex/react";
import { api } from "../../../../../convex/_generated/api";
import { UiModal } from "../components";

interface Props {
  id: string;
}

export function UiBook({ id }: Props) {
  const { section, email, category } = useBookStore((store) => store.books);
  const bookUser: UserBooksInterfaces | undefined | null = useQuery(
    api.query.getBooksUser,
    {
      email,
    }
  );
  const onCreatePage = useMutation(api.query.createPage);
  const onCreateCategory = useMutation(api.query.onCreateCategrory);
  const onAddContent = useMutation(api.query.saveContent);
  const { onSearch } = useDebounce();
  const openCreatePage = useBoolean();
  const openCreateCateogory = useBoolean();
  const changePage = useBoolean();
  const [openStyle, setOpenStyle] = useState<string>("init");
  const [openStyleCategory, setOpenStyleCategory] = useState<string>("init");
  const [titlePage, setTitlePage] = useState<string>("");
  const [titleCategory, setTitleCategory] = useState<string>("");
  const [idPage, setIdPage] = useState<string>("");
  const [categoryID, setCategoryID] = useState<string>("");

  return (
    <>
      <section className="section-book-main">
        <section className={"label"}>
          <UiSelect
            label="Categoria"
            options={[
              { label: "Sin Categoria", value: " " },
              ...(category.map((item) => ({
                label: item.title,
                value: item.id,
              })) ?? []),
            ]}
            onSelect={(value) => {
              setCategoryID(value === " " ? "" : value);
            }}
          />
          <UiModal
            titleBtn="Crear categoria"
            onChange={setTitleCategory}
            onOpenModal={() => {
              if (openCreateCateogory.value) {
                setTimeout(() => {
                  openCreateCateogory.onFalse();
                  setTitleCategory("");
                }, 1100);

                setOpenStyleCategory("close");
              } else {
                openCreateCateogory.onTrue();
                setOpenStyleCategory("open");
              }
            }}
            onSave={() => {
              onCreateCategory({
                body: {
                  id: crypto.randomUUID(),
                  title: titleCategory,
                  idBook: id,
                },
                email: email,
              }).then(() => {
                setTimeout(() => {
                  openCreateCateogory.onFalse();
                }, 1100);
                setOpenStyleCategory("close");
              });
            }}
            stateModal={openStyleCategory}
            value={titleCategory}
          />
          <UiSelect
            label="Paginas"
            options={
              categoryID
                ? category
                    .find(
                      (item) => item.idBook === id && item.id === categoryID
                    )
                    ?.pages.map((page) => ({
                      label: page.title,
                      value: page.id,
                    })) ?? []
                : section
                    .filter((item) => item.idBook === id)
                    .map((item) => ({
                      label: item.titleSection,
                      value: item.id,
                    }))
            }
            onSelect={(value) => {
              changePage.onTrue();

              setTimeout(() => {
                setIdPage(value);
                changePage.onFalse();
              }, 200);
            }}
          />
          <UiModal
            titleBtn="crear Pagina"
            onSave={() => {
              onCreatePage({
                body: {
                  content: "",
                  idBook: id,
                  titleSection: titlePage,
                  id: crypto.randomUUID(),
                },
                email: email,
                categorieId: categoryID,
              }).then(() => {
                setTimeout(() => {
                  openCreatePage.onFalse();
                }, 1100);

                setOpenStyle("close");
              });
            }}
            onChange={(value) => setTitlePage(value)}
            stateModal={openStyle}
            value={titlePage}
            onOpenModal={() => {
              if (openCreatePage.value) {
                setTimeout(() => {
                  openCreatePage.onFalse();
                  setTitlePage("");
                }, 1100);

                setOpenStyle("close");
              } else {
                openCreatePage.onTrue();
                setOpenStyle("open");
              }
            }}
          />
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
                    categorieId: categoryID,
                  });
                }}
                initContent={
                  categoryID
                    ? category
                        .find(
                          (item) => item.id === categoryID && item.idBook === id
                        )
                        ?.pages.find((item) => item.id === idPage)?.content
                    : section.find((item) => item.id === idPage)?.content
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
