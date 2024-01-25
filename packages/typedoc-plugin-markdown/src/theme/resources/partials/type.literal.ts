import { LiteralType } from 'typedoc';
import { MarkdownThemeRenderContext } from '../..';

export function literalType(
  context: MarkdownThemeRenderContext,
  literalType: LiteralType,
): string {
  if (typeof literalType.value === 'bigint') {
    return `\`${literalType.value}n\``;
  }
  return `\`\`${JSON.stringify(literalType.value)}\`\``;
}
