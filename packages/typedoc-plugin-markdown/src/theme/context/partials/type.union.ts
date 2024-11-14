import { MarkdownThemeContext } from '@plugin/theme/index.js';
import { UnionType } from 'typedoc';

export function unionType(
  this: MarkdownThemeContext,
  model: UnionType,
): string {
  const useCodeBlocks = this.options.getValue('useCodeBlocks');
  const shouldFormat = useCodeBlocks && model.types.length > 4;
  const md = model.types
    .map((unionType) => this.partials.someType(unionType))
    .join(shouldFormat ? `\n  \\| ` : ` \\| `);
  return shouldFormat ? `\n  \\| ` + md : md;
}
