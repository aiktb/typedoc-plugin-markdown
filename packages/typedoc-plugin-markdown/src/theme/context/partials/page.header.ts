import { bold, link } from '@plugin/libs/markdown/index.js';
import { removeFirstScopedDirectory } from '@plugin/libs/utils/index.js';
import { MarkdownThemeContext } from '@plugin/theme/index.js';
import * as path from 'path';
import {
  DeclarationReflection,
  EntryPointStrategy,
  ProjectReflection,
  ReflectionKind,
} from 'typedoc';

export function header(this: MarkdownThemeContext): string {
  const textContentMappings = this.options.getValue('textContentMappings');
  const headerTitle = textContentMappings['header.title'] as any;

  const getHeader = () => {
    const isPackages =
      this.options.getValue('entryPointStrategy') ===
      EntryPointStrategy.Packages;

    if (isPackages) {
      const packageItem = findPackage(this.page.model as ProjectReflection);
      if (packageItem) {
        return getPackageHeader();
      }
    }
    return getProjectHeader();
  };

  const getProjectHeader = () => {
    const fileExtension = this.options.getValue('fileExtension');
    const entryFileName = `${path.parse(this.options.getValue('entryFileName')).name}${fileExtension}`;

    const md: string[] = [];

    let title = '';

    if (typeof headerTitle === 'string') {
      title = this.helpers.getProjectName(
        textContentMappings['header.title'],
        this.page,
      );
    } else {
      title = headerTitle({
        name: this.page?.project?.name,
        version: this.page?.project?.packageVersion,
      });
    }

    const indexLabel =
      textContentMappings['header.docs'] || this.i18n.theme_documentation();

    if (this.page.url === entryFileName) {
      md.push(bold(title));
    } else {
      md.push(link(bold(title), this.getRelativeUrl(entryFileName)));
    }

    const preserveReadme =
      Boolean(this.page.project.readme) &&
      !this.options.getValue('mergeReadme');

    const useEntryModule =
      (this.page.project?.groups &&
        Boolean(
          this.page.project?.groups[0]?.children.find(
            (child) => child.name === this.options.getValue('entryModule'),
          ),
        )) ||
      false;

    if (preserveReadme) {
      const readMeUrl = useEntryModule
        ? `readme_${fileExtension}`
        : entryFileName;

      const indexUrl = useEntryModule ? entryFileName : this.page.project.url;

      if (indexLabel.length) {
        if (this.page.url === readMeUrl) {
          md.push(link(bold(indexLabel), this.getRelativeUrl(indexUrl || '')));
        } else {
          md.push(bold(indexLabel));
        }
      }
    } else {
      if (indexLabel.length) {
        md.push(bold(indexLabel));
      }
    }

    return `${md.join(' • ')}\n\n***\n`;
  };

  const getPackageHeader = () => {
    const packageItem = findPackage(
      this.page.model as ProjectReflection,
    ) as ProjectReflection;

    if (!packageItem) {
      return '';
    }

    const md: string[] = [];

    const indexLabel =
      textContentMappings['header.docs'] || this.i18n.theme_documentation();

    const ignoreScopes = this.options.getValue('excludeScopesInPaths');
    const fileExtension = this.options.getValue('fileExtension');
    const entryFileName = `${path.parse(this.options.getValue('entryFileName')).name}${fileExtension}`;

    const packageItemName = packageItem.packageVersion
      ? `${packageItem.name} v${packageItem.packageVersion}`
      : packageItem.name;

    const packagesMeta = this.getPackageMetaData(packageItem.name);
    const entryModule = packagesMeta?.options?.getValue('entryModule');
    const packageEntryFile = ignoreScopes
      ? removeFirstScopedDirectory(
          `${packageItem.name}${path.sep}${entryFileName}`,
        )
      : `${packageItem.name}${path.sep}${entryFileName}`;

    if (this.page.url === packageEntryFile || Boolean(entryModule)) {
      md.push(bold(packageItemName));
    } else {
      md.push(
        link(bold(packageItemName), this.getRelativeUrl(packageEntryFile)),
      );
    }

    const preservePackageReadme =
      Boolean(packageItem.readme) && !this.options.getValue('mergeReadme');

    if (preservePackageReadme) {
      if (indexLabel.length) {
        if (this.page.url === packageEntryFile) {
          md.push(
            link(bold(indexLabel), this.getRelativeUrl(packageItem.url || '')),
          );
        } else {
          md.push(bold(indexLabel));
        }
      }
    } else {
      if (indexLabel.length) {
        md.push(bold(indexLabel));
      }
    }

    return `${md.join(' • ')}\n\n***\n`;
  };

  function findPackage(model: DeclarationReflection | ProjectReflection) {
    if (
      model.kind === ReflectionKind.Module &&
      model.parent?.kind === ReflectionKind.Project
    ) {
      return model;
    }
    if (model.parent) {
      return findPackage(model.parent as DeclarationReflection);
    }
    return null;
  }

  return getHeader();
}
