import { ParameterType } from 'typedoc';
import { DEFAULT_SIDEBAR_OPTIONS } from '../options';

/**
 * Please see the [sidebar guide](/plugins/docusaurus/guide#sidebar) for sidebar setup.
 *
 * In addition to the options below you can configure the structure of the sidebar by utilizing the [`navigation`](https://typedoc.org/options/output/#navigation) core TypeDoc option.
 *
 * **sidebar.autoConfiguration**
 *
 * Set to `false` to disable sidebar generation. Defaults to `true`.
 *
 * **sidebar.filteredIds**
 *
 * Ids of pages to be filtered from the sidebar. This would typically be used to filter README or index pages from the sidebar.
 *
 * **sidebar.pretty**
 *
 * Pretty format the sidebar JSON.
 *
 */
export const sidebar = {
  help: 'Configures the autogenerated Docusaurus sidebar.',
  type: ParameterType.Mixed,
  defaultValue: DEFAULT_SIDEBAR_OPTIONS,
};