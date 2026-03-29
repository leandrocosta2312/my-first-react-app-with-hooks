# React + TypeScript + Vite + Ant Design

Template de projeto Vite com React, TypeScript e Ant Design.

## Uso de componentes

Os componentes de UI vêm da biblioteca [Ant Design](https://ant.design/). Importe diretamente:

```tsx
import { Button, Card, Input } from "antd"
```

## Tema (claro/escuro)

O app usa `ThemeProvider` (tema claro/escuro/sistema) e `ConfigProvider` do Ant Design para aplicar o algoritmo de cores. O tema é sincronizado entre o layout e os componentes Ant Design.
