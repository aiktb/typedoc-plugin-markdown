import { MarkdownThemeContext } from '@plugin/theme/index.js';
import { IntersectionType } from 'typedoc';

export function intersectionType(
  this: MarkdownThemeContext,
  model: IntersectionType,
): string {
  return model.types
    .map((intersectionType) => this.partials.someType(intersectionType))
    .join(' & ');
}
