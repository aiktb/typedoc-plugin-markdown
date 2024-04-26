import { KIND_DEFAULTS } from './kind-defaults';

export const TEXT_MAPPING_DEFAULTS = {
  'header.title': '{projectName} {version}',
  'header.readme': 'Readme',
  'header.docs': 'Docs',
  'breadcrumbs.home': '{projectName} {version}',
  'title.indexPage': '{projectName} {version}',
  'title.modulePage': '{name}',
  'title.memberPage': '{kind}: {name}',
  'label.apiIndex': 'API Index',
  'label.defaultValue': 'Default value',
  'label.description': 'Description',
  'label.extendedBy': 'Extended by',
  'label.extends': 'Extends',
  'label.flags': 'Flags',
  'label.globals': 'Globals',
  'label.implements': 'Implements',
  'label.implementationOf': 'Implementation of',
  'label.inheritedFrom': 'Inherited from',
  'label.index': 'Index',
  'label.indexable': 'Indexable',
  'label.indexSignature': 'Index signature',
  'label.member': 'Member',
  'label.modifier': 'Modifier',
  'label.name': 'Name',
  'label.overrides': 'Overrides',
  'label.packages': 'Packages',
  'label.reExports': 'Re-exports',
  'label.renamesAndReExports': 'Renames and re-exports',
  'label.returns': 'Returns',
  'label.source': 'Source',
  'label.type': 'Type',
  'label.typeDeclaration': 'Type declaration',
  'label.value': 'Value',
  ...KIND_DEFAULTS,
};
