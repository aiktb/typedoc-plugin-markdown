import { MarkdownThemeContext } from '@plugin/theme/index.js';
import {
  ContainerReflection,
  DocumentReflection,
  ReflectionKind,
} from 'typedoc';

export function body(
  this: MarkdownThemeContext,
  model: ContainerReflection,
  options: { headingLevel: number },
): string {
  const md: string[] = [];

  if (model.categories?.length) {
    md.push(
      this.partials.categories(model.categories, {
        headingLevel: options.headingLevel,
      }),
    );
  } else {
    const containerKinds = [
      ReflectionKind.Project,
      ReflectionKind.Module,
      ReflectionKind.Namespace,
    ];
    if (
      (this.options.getValue('excludeGroups') ||
        this.options.getValue('hideGroupHeadings')) &&
      containerKinds.includes(model.kind)
    ) {
      if (model.categories?.length) {
        md.push(
          this.partials.categories(model.categories, {
            headingLevel: options.headingLevel,
          }),
        );
      } else {
        if (model.children) {
          md.push(
            this.partials.members(model.children, {
              headingLevel: options.headingLevel,
            }),
          );
        }
      }
    } else {
      const groups = model.groups?.filter(
        (group) => !(group.owningReflection instanceof DocumentReflection),
      );

      if (groups?.length) {
        md.push(
          this.partials.groups(groups, {
            headingLevel: options.headingLevel,
            kind: model.kind,
          }),
        );
      }
    }
  }

  return md.join('\n\n');
}
