---
title: Tiptap React + 인라인 Node View 설정
created: 2026-04-23
updated: 2026-04-23
tags: [setup, tiptap, react, node-view, inline]
category: important
---

# Tiptap React + 인라인 Node View 설정

## 설치

```bash
npm install @tiptap/react @tiptap/starter-kit @tiptap/pm @tiptap/core
```

## 기본 에디터

```tsx
import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'

const editor = useEditor({
  extensions: [StarterKit],
  content: '<p>Hello World!</p>',
  onUpdate: ({ editor }) => { console.log(editor.getHTML()) },
})

return <EditorContent editor={editor} />
```

## 커스텀 인라인 Node + React View

```tsx
// 1. 확장 정의
import { Node, mergeAttributes } from '@tiptap/core'
import { ReactNodeViewRenderer, NodeViewWrapper } from '@tiptap/react'

const MyInlineNode = Node.create({
  name: 'myInline',
  group: 'inline',
  inline: true,
  atom: true,

  addAttributes() {
    return {
      id: { default: '' },
      label: { default: '' },
    }
  },

  parseHTML() { return [{ tag: 'span[data-my-inline]' }] },

  renderHTML({ HTMLAttributes }) {
    return ['span', mergeAttributes({ 'data-my-inline': '' }, HTMLAttributes)]
  },

  addNodeView() { return ReactNodeViewRenderer(MyInlineComponent) },

  addCommands() {
    return {
      insertMyInline: (attrs) => ({ commands }) =>
        commands.insertContent({ type: this.name, attrs }),
    }
  },
})

// 2. React 컴포넌트
function MyInlineComponent({ node, updateAttributes, deleteNode }) {
  return (
    <NodeViewWrapper as="span" className="inline">
      <span
        role="button"
        onClick={() => console.log('clicked', node.attrs.id)}
        className="inline-flex items-center cursor-pointer mx-0.5"
        style={{ width: '18px', height: '18px' }}
      >
        ✨
      </span>
    </NodeViewWrapper>
  )
}

// 3. 에디터에 확장 추가
const editor = useEditor({
  extensions: [
    StarterKit.configure({ heading: false }),
    MyInlineNode,
  ],
  content: '<p>텍스트 <span data-my-inline data-id="1"></span> 계속</p>',
})
```

## 주의사항

- `NodeViewWrapper as="span"` 필수 (기본 div → 블록 레벨)
- `atom: true`로 편집 불가능한 요소 지정
- `onUpdate`에서 HTML 파싱으로 세그먼트 분리
- `npm install` 시 `--include=dev` 필요 (devDependencies 포함)
