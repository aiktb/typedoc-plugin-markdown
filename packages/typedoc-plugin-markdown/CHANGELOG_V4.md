# Changelog

## 4.0.0-next.xx

> v4 is a major release that includes a number of bug fixes, new features and UI improvements.

### 🏗 Architectural Changes

- Handlebars as a dependency has been removed.
- Updated customization model with the ability to set hooks, events and cutom theming. See [customization guide]().
- Exposed navigation structure. See [navigation guide]().

### 🌟 Features

- Updated output file structure.
- Improved and cleaner UI.
- A set of updated and additional new options with comprehensive documentation.

### 🐛 Bug Fixes

The release features numerous bug fixes including:

- Duplication in callback/callable/function properties. ([#581](https://github.com/tgreyuk/typedoc-plugin-markdown/issues/581)).
- @experimental / @internal annotations ([#556](https://github.com/tgreyuk/typedoc-plugin-markdown/issues/556))
- Fix events output and strikethough deprecqted items ([#534](https://github.com/tgreyuk/typedoc-plugin-markdown/issues/534))
- Class static functions are no longer marked ([#533](https://github.com/tgreyuk/typedoc-plugin-markdown/issues/533))
- @example block not rendered with Headline ([#501](https://github.com/tgreyuk/typedoc-plugin-markdown/issues/501))
- Correctly resolve packge readme urls from member pages ([#483](https://github.com/tgreyuk/typedoc-plugin-markdown/issues/483))
- Mark final default parameters as optional ([#396](https://github.com/tgreyuk/typedoc-plugin-markdown/issues/396))
- Respect monorepo `readmeFile` configuration ([#383](https://github.com/tgreyuk/typedoc-plugin-markdown/issues/383))
- Replace new lines in tables with `<br />` ([#331](https://github.com/tgreyuk/typedoc-plugin-markdown/issues/331))
- Provide a link/excerpt/screenshot to a demo/example rendered outpout ([#102](https://github.com/tgreyuk/typedoc-plugin-markdown/issues/102))

### 🚀 Migrating from v3

Migrating from v3 to v4 should be fairly straightforward. These pointers will help you understand the changes and how to update your project.

#### 🏗️ Structural Changes

- Each member is now output to its own file by default. See [`outputFileStrategy`](/docs/options#outputfilestrategy). To achieve the same output as v3 (whereby only Classes, Enums and Interfaces have their own file), set the [`membersWithOwnFile`](/docs/options#memberswithownfile) option.
- Parameters are output as a list by default. To achieve the same output as v3 (where parameters are output as a table), use [`parametersFormat`](/docs/options#parametersformat).

#### 💥 Breaking Changes

- Because the file structure has changed you may need to update any cross references to files in your documentation.
- Setting `theme` to `"markdown"` is no longer required and should be removed.
- The option `indexTitle` has been removed. Please use the `"title.indexPage"` key with [`textContentMappings`](/docs/options#textcontentmappings).
- The option `allReflectionsHaveOwnDocument` has beeen removed (this behaviour is now the default). Please see See [`outputFileStrategy`](/docs/options#outputfilestrategy).
- The option `entryDocument` has been renamed to `entryFileName` to better reflect its purpose.
- The option `namedAnchors` has been renamed to `useHTMLAnchors` to better reflect its purpose.
- The option `hideInPageTOC` has been removed. In-page TOC are no longer included by default. You can include in-page TOCs by using [typedoc-plugin-remark](/plugins/remark) and the [remark-toc](plugins/remark/suggested-plugins#remark-toc) plugin.
- The option `objectLiteralTypeDeclarationStyle` has been removed. Please use [`typeDeclarationFormat`](/docs/options#typedeclarationformat).

<!--
### Special Thanks

A special thanks to several members of the commununity who provided essential feeback, suggested improvements or direct contributions, including (in no particular order):

- @axel7083
- @balazsorban44
- @CoderIllusionist
- @KillyMXI
- @lorenzolewis
- @Zamiell
 -->