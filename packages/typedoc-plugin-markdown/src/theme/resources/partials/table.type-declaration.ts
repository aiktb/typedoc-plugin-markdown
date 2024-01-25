import { DeclarationReflection, SomeType } from 'typedoc';
import { MarkdownThemeRenderContext } from '../..';
import { table } from '../markdown';
import {
  formatTableDescriptionCol,
  formatTableNameCol,
  stripLineBreaks,
} from '../utils';

export function typeDeclarationTable(
  context: MarkdownThemeRenderContext,
  props: DeclarationReflection[],
): string {
  const headers: string[] = [];

  headers.push(context.getText('label.member'));

  headers.push(context.getText('label.type'));

  headers.push(context.getText('label.description'));

  const declarations = context.helpers.flattenDeclarations(props, true);

  const rows: string[][] = [];

  declarations.forEach((declaration: DeclarationReflection, index: number) => {
    const row: string[] = [];

    row.push(formatTableNameCol(declaration.name));

    row.push(
      context.partials
        .someType(declaration.type as SomeType)
        .replace(/\n/g, ' '),
    );

    const comments = declaration.comment;

    if (comments) {
      row.push(
        stripLineBreaks(
          formatTableDescriptionCol(context.partials.comment(comments)),
        ),
      );
    } else {
      row.push('-');
    }

    rows.push(row);
  });

  return table(headers, rows);
}
