"use client";

import React from "react";
import {
  getDefaultReactSlashMenuItems,
  SuggestionMenuController,
  useCreateBlockNote,
} from "@blocknote/react";
import { BlockNoteView } from "@blocknote/mantine";
import "@blocknote/mantine/style.css";
import {
  BlockNoteEditor,
  BlockNoteSchema,
  defaultBlockSpecs,
  filterSuggestionItems,
  insertOrUpdateBlock,
  PartialBlock,
} from "@blocknote/core";
import { CodeEditorBlock } from "./code/code";
import { IconCode } from "@/shared/icons";

interface Props {
  onChange: (value: string) => void;
  initContent?: string;
  editable?: boolean;
}

const schema = BlockNoteSchema.create({
  blockSpecs: {
    // Adds all default blocks.
    ...defaultBlockSpecs,
    // Adds the Alert block.
    code: CodeEditorBlock,
  },
});

const insertAlert = (editor: typeof schema.BlockNoteEditor) => ({
  title: "code",
  onItemClick: () => {
    insertOrUpdateBlock(editor, {
      type: "code-editor",
    });
  },
  aliases: ["code", "editor"],
  group: "Other",
  icon: <IconCode />,
});

export function EditorText({ onChange, editable, initContent }: Props) {
  const editor: BlockNoteEditor = useCreateBlockNote({
    initialContent: initContent
      ? (JSON.parse(initContent) as PartialBlock[])
      : undefined,
  });
  return (
    <div>
      <BlockNoteView
        editor={editor}
        editable={editable}
        onChange={() => {
          onChange(JSON.stringify(editor.document));
        }}
        theme={"light"}
      />
    </div>
  );
}
