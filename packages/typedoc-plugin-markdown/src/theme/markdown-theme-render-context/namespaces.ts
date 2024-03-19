// THIS FILE IS AUTO GENERATED. DO NOT EDIT DIRECTLY.
import { MarkdownThemeRenderContext } from '@plugin/theme';
import { TextContentMappings } from '@plugin/app/options';
import { PackagesMeta } from 'app/renderer';
import {
  DeclarationReflection,
  ProjectReflection,
  CommentDisplayPart,
  Comment,
  SignatureReflection,
  ReferenceReflection,
  ParameterReflection,
  Reflection,
  SomeType,
  ArrayType,
  ConditionalType,
  IndexedAccessType,
  InferredType,
  IntersectionType,
  IntrinsicType,
  LiteralType,
  NamedTupleMember,
  QueryType,
  ReferenceType,
  TypeOperatorType,
  UnionType,
  UnknownType,
  TypeParameterReflection,
  DeclarationHierarchy,
  ContainerReflection,
  ReflectionType,
  TupleType,
  ReflectionKind,
  ReflectionCategory,
  ReflectionGroup,
} from 'typedoc';

import { project } from './templates/project';
import { readme } from './templates/read-me';
import { reflection } from './templates/reflection';

import { comment } from './partials/comments.comment';
import { commentParts } from './partials/comments.commentParts';
import { body } from './partials/container.body';
import { categories } from './partials/container.categories';
import { groups } from './partials/container.groups';
import { members } from './partials/container.members';
import { accessor } from './partials/member.accessor';
import { constructor } from './partials/member.constructors';
import { declaration } from './partials/member.declaration';
import { declarationTitle } from './partials/member.declarationTitle';
import { enumMembersTable } from './partials/member.enumMembersTable';
import { hierarchy } from './partials/member.hierarchy';
import { indexSignature } from './partials/member.indexSignature';
import { inheritance } from './partials/member.inheritance';
import { memberTitle } from './partials/member.memberTitle';
import { memberWithGroups } from './partials/member.memberWithGroups';
import { parametersList } from './partials/member.parametersList';
import { parametersTable } from './partials/member.parametersTable';
import { declarationsTable } from './partials/member.propertiesTable';
import { referenceMember } from './partials/member.reference';
import { reflectionFlags } from './partials/member.reflection.flags';
import { reflectionIndex } from './partials/member.reflection.index';
import { signature } from './partials/member.signature';
import { signatureParameters } from './partials/member.signatureParameters';
import { signatureReturns } from './partials/member.signatureReturns';
import { signatureTitle } from './partials/member.signatureTitle';
import { sources } from './partials/member.sources';
import { member } from './partials/member';
import { typeArguments } from './partials/member.typeArguments';
import { typeDeclaration } from './partials/member.typeDeclaration';
import { typeDeclarationList } from './partials/member.typeDeclarationList';
import { typeDeclarationTable } from './partials/member.typeDeclarationTable';
import { typeParametersList } from './partials/member.typeParametersList';
import { typeParametersTable } from './partials/member.typeParametersTable';
import { breadcrumbs } from './partials/page.breadcrumbs';
import { header } from './partials/page.header';
import { packagesIndex } from './partials/page.packagesIndex';
import { pageTitle } from './partials/page.pageTtitle';
import { arrayType } from './partials/type.array';
import { conditionalType } from './partials/type.conditional';
import { indexAccessType } from './partials/type.index-access';
import { inferredType } from './partials/type.inferred';
import { intersectionType } from './partials/type.intersection';
import { intrinsicType } from './partials/type.intrinsic';
import { literalType } from './partials/type.literal';
import { namedTupleType } from './partials/type.named-tuple';
import { queryType } from './partials/type.query';
import { referenceType } from './partials/type.reference';
import { declarationType } from './partials/type.reflection.declaration';
import { functionType } from './partials/type.reflection.function';
import { reflectionType } from './partials/type.reflection';
import { someType } from './partials/type.some';
import { tupleType } from './partials/type.tuple';
import { typeOperatorType } from './partials/type.type-operator';
import { unionType } from './partials/type.union';
import { unknownType } from './partials/type.unknown';

import { flattenDeclarations } from './helpers/flatten-declarations';
import { getDeclarationComment } from './helpers/get-declaration-comment';
import { getDeclarationType } from './helpers/get-declaration-type';
import { getKeyword } from './helpers/get-keyword';
import { getModifier } from './helpers/get-modifier';
import { getPackagesMeta } from './helpers/get-packages-meta';
import { getParameterDefaultValue } from './helpers/get-parameter-default-value';
import { getProjectName } from './helpers/get-project-name';
import { getRelativeUrl } from './helpers/get-relative-url';
import { getTextFromKindString } from './helpers/get-text-from-kind-string';
import { getText } from './helpers/get-text';
import { isGroupKind } from './helpers/is-group-kind';

export const templates = (context: MarkdownThemeRenderContext) => {
  return {
    project: (model: ProjectReflection) =>
      project.apply(context, [model]) as string,
    readme: (model: ProjectReflection) =>
      readme.apply(context, [model]) as string,
    reflection: (model: DeclarationReflection) =>
      reflection.apply(context, [model]) as string,
  };
};

export const partials = (context: MarkdownThemeRenderContext) => {
  return {
    /**
     * Renders a comment model, determining how to parse summary and tags.
     *
     * @category Comment Partials
     */
    comment: (
      model: Comment,
      options: {
        headingLevel?: number | undefined;
        showSummary?: boolean | undefined;
        showTags?: boolean | undefined;
      } = {
        headingLevel: undefined,
        showSummary: true,
        showTags: true,
      },
    ) => comment(context, model, options),
    /**
     * Parses and renders individual comment strings.
     *
     * @category Comment Partials
     */
    commentParts: (model: CommentDisplayPart[]) => commentParts(context, model),
    /**
     * Renders the body of a containing reflection.
     *
     * @category Container Partials
     */
    body: (container: ContainerReflection, headingLevel: number) =>
      body(context, container, headingLevel),
    /**
     * Renders a collection of reflection categories.
     *
     * @category Container Partials
     */
    categories: (model: ReflectionCategory[], headingLevel: number) =>
      categories(context, model, headingLevel),
    /**
     * Renders a collection of reflection groups.
     *
     * @category Container Partials
     */
    groups: (model: ReflectionGroup[], headingLevel: number) =>
      groups(context, model, headingLevel),
    /**
     * Renders a collection of members.
     *
     * @category Container Partials
     */
    members: (model: DeclarationReflection[], headingLevel: number) =>
      members(context, model, headingLevel),
    /**
     * Renders an accessor member.
     *
     * @category Member Partials
     */
    accessor: (declaration: DeclarationReflection, headingLevel: number) =>
      accessor(context, declaration, headingLevel),
    /**
     * Renders an constructor member.
     *
     * @category Member Partials
     */
    constructor: (reflection: DeclarationReflection, headingLevel: number) =>
      constructor(context, reflection, headingLevel),
    /**
     * Renders a standard declaration member.
     *
     * @category Member Partials
     */
    declaration: (
      model: DeclarationReflection,
      options: { headingLevel: number; nested?: boolean | undefined } = {
        headingLevel: 2,
        nested: false,
      },
    ) => declaration(context, model, options),
    /**
     * Remders a declaration title.
     *
     * @category Member Partials
     */
    declarationTitle: (reflection: DeclarationReflection) =>
      declarationTitle(context, reflection),
    /**
     * Renders enum members as a table.
     *
     * @category Member Partials
     */
    enumMembersTable: (props: DeclarationReflection[]) =>
      enumMembersTable(context, props),
    /**
     * Renders an declaration hierachy section.
     *
     * @category Member Partials
     */
    hierarchy: (model: DeclarationHierarchy, headingLevel: number) =>
      hierarchy(context, model, headingLevel),
    /**
     * Renders an index signature block
     *
     * @category Member Partials
     */
    indexSignature: (signature: SignatureReflection) =>
      indexSignature(context, signature),
    /**
     * Renders an inheritance section.
     *
     * @category Member Partials
     */
    inheritance: (
      reflection: DeclarationReflection | SignatureReflection,
      headingLevel: number,
    ) => inheritance(context, reflection, headingLevel),
    /**
     * Renders the main member title.
     *
     * @category Member Partials
     */
    memberTitle: (reflection: DeclarationReflection) =>
      memberTitle(context, reflection),
    /**
     * Renders a top-level member that contains group and child members such as Classes, Interfaces and Enums.
     *
     * @category Member Partials
     */
    memberWithGroups: (model: DeclarationReflection, headingLevel: number) =>
      memberWithGroups(context, model, headingLevel),
    /**
     * Renders parameters section as a list.
     *
     * @category Member Partials
     */
    parametersList: (parameters: ParameterReflection[]) =>
      parametersList(context, parameters),
    /**
     * Renders parameters section as a table.
     *
     * @category Member Partials
     */
    parametersTable: (parameters: ParameterReflection[]) =>
      parametersTable(context, parameters),
    /**
 * Renders a collection of properties in a table.

There is no association list partial for properties as these are handled as a standard list of members.
 *
 * @category Member Partials
 *
 */
    declarationsTable: (
      props: DeclarationReflection[],
      isEventProps: boolean = false,
    ) => declarationsTable(context, props, isEventProps),
    /**
     * Renders an reference member.
     *
     * @category Member Partials
     */
    referenceMember: (props: ReferenceReflection) =>
      referenceMember(context, props),
    /**
     * Renders the flags of a reflection.
     *
     * @category Member Partials
     */
    reflectionFlags: (reflection: Reflection) =>
      reflectionFlags(context, reflection),
    /**
     * Renders the index section of a reflection.
     *
     * @category Member Partials
     */
    reflectionIndex: (
      reflection: ProjectReflection | DeclarationReflection,
      headingLevel: number,
    ) => reflectionIndex(context, reflection, headingLevel),
    /**
     * Renders a signature member.
     *
     * @category Member Partials
     */
    signature: (
      model: SignatureReflection,
      headingLevel: number,
      nested: boolean = false,
      accessor?: string | undefined,
    ) => signature(context, model, headingLevel, nested, accessor),
    /**
     * Renders tha parameters of a signature in parenthisis.
     *
     * @category Member Partials
     */
    signatureParameters: (parameters: ParameterReflection[]) =>
      signatureParameters(context, parameters),
    /**
     * Renders the return section of a signature.
     *
     * @category Member Partials
     */
    signatureReturns: (signature: SignatureReflection, headingLevel: number) =>
      signatureReturns(context, signature, headingLevel),
    /**
     * Renders a signature title.
     *
     * @category Member Partials
     */
    signatureTitle: (
      signature: SignatureReflection,
      opts?:
        | { accessor?: string | undefined; includeType?: boolean | undefined }
        | undefined,
    ) => signatureTitle(context, signature, opts),
    /**
     * Renders the sources section of a member.
     *
     * @category Member Partials
     */
    sources: (
      reflection: DeclarationReflection | SignatureReflection,
      headingLevel: number,
    ) => sources(context, reflection, headingLevel),
    /**
     * Renders a container member.
     *
     * @category Member Partials
     */
    member: (
      model: DeclarationReflection,
      headingLevel: number,
      nested: boolean = false,
    ) => member(context, model, headingLevel, nested),
    /**
     * Renders type arguments in angle brackets.
     *
     * @category Member Partials
     */
    typeArguments: (model: SomeType[], foreCollpase: boolean = false) =>
      typeArguments(context, model, foreCollpase),
    /**
     * Renders type declarations of a parent member.
     *
     * @category Member Partials
     */
    typeDeclaration: (model: DeclarationReflection[], headingLevel: number) =>
      typeDeclaration(context, model, headingLevel),
    /**
     * Renders type declarations as a list.
     *
     * @category Member Partials
     */
    typeDeclarationList: (
      model: DeclarationReflection[],
      headingLevel: number,
    ) => typeDeclarationList(context, model, headingLevel),
    /**
     * Renders type declarations as a table.
     *
     * @category Member Partials
     */
    typeDeclarationTable: (props: DeclarationReflection[]) =>
      typeDeclarationTable(context, props),
    /**
     * Renders type parameters section as a list.
     *
     * @category Member Partials
     */
    typeParametersList: (typeParameters: TypeParameterReflection[]) =>
      typeParametersList(context, typeParameters),
    /**
     * Renders type parameters section as a table.
     *
     * @category Member Partials
     */
    typeParametersTable: (typeParameters: TypeParameterReflection[]) =>
      typeParametersTable(context, typeParameters),
    /**
     * Renders breadcrumbs for a page from the context's `page` property.
     *
     * @category Page Partials
     */
    breadcrumbs: () => breadcrumbs(context),
    /**
     * Returns the page header.
     *
     * @category Page Partials
     */
    header: () => header(context),
    /**
     * Renders the page title.
     *
     * @category Page Partials
     */
    packagesIndex: (model: ProjectReflection) => packagesIndex(context, model),
    /**
     * Renders the page title.
     *
     * @category Page Partials
     */
    pageTitle: () => pageTitle(context),
    /**
     * Transforms an ArrayType model to a string.
     *
     * @category Type Partials
     */
    arrayType: (model: ArrayType) => arrayType(context, model),
    /**
     * Transforms an ConditionalType model to a string.
     *
     * @category Type Partials
     */
    conditionalType: (model: ConditionalType) =>
      conditionalType(context, model),
    /**
     * Transforms an IndexedAccessType model to a string.
     *
     * @category Type Partials
     */
    indexAccessType: (model: IndexedAccessType) =>
      indexAccessType(context, model),
    /**
     * Transforms an InferredType model to a string.
     *
     * @category Type Partials
     */
    inferredType: (model: InferredType) => inferredType(context, model),
    /**
     * Transforms an IntersectionType model to a string.
     *
     * @category Type Partials
     */
    intersectionType: (model: IntersectionType) =>
      intersectionType(context, model),
    /**
     * Transforms an IntrinsicType model to a string.
     *
     * @category Type Partials
     */
    intrinsicType: (model: IntrinsicType) => intrinsicType(context, model),
    /**
     * Transforms an LiteralType model to a string.
     *
     * @category Type Partials
     */
    literalType: (model: LiteralType) => literalType(context, model),
    /**
     * Transforms an NamedTupleMember model to a string.
     *
     * @category Type Partials
     */
    namedTupleType: (model: NamedTupleMember) => namedTupleType(context, model),
    /**
     * Transforms an QueryType model to a string.
     *
     * @category Type Partials
     */
    queryType: (model: QueryType) => queryType(context, model),
    /**
     * Transforms an ReferenceType model to a string.
     *
     * @category Type Partials
     */
    referenceType: (model: ReferenceType) => referenceType(context, model),
    /**
     * Transforms an ReferenceType declaration model to a string.
     *
     * @category Type Partials
     */
    declarationType: (model: DeclarationReflection) =>
      declarationType(context, model),
    /**
     * Transforms an ReferenceType functions model to a string.
     *
     * @category Type Partials
     */
    functionType: (
      signatures: SignatureReflection[],
      forceParameterType: boolean = false,
    ) => functionType(context, signatures, forceParameterType),
    /**
     * Transforms an ReflectionType model to a string.
     *
     * @category Type Partials
     */
    reflectionType: (model: ReflectionType, foreCollpase: boolean = false) =>
      reflectionType(context, model, foreCollpase),
    /**
     * Takes a generic Type and returns the appropriate partial for it.
     *
     * @category Type Partials
     */
    someType: (model: SomeType) => someType(context, model),
    /**
     * Transforms an TupleType functions model to a string.
     *
     * @category Type Partials
     */
    tupleType: (model: TupleType) => tupleType(context, model),
    /**
     * Transforms an TypeOperatorType functions model to a string.
     *
     * @category Type Partials
     */
    typeOperatorType: (model: TypeOperatorType) =>
      typeOperatorType(context, model),
    /**
     * Transforms an UnionType model to a string.
     *
     * @category Type Partials
     */
    unionType: (model: UnionType) => unionType(context, model),
    /**
     * Transforms an UnknownType model to a string.
     *
     * @category Type Partials
     */
    unknownType: (model: UnknownType) => unknownType(context, model),
  };
};

export const helpers = (context: MarkdownThemeRenderContext) => {
  return {
    flattenDeclarations: (
      props: DeclarationReflection[],
      includeSignatures: boolean = false,
    ) =>
      flattenDeclarations.apply(context, [
        props,
        includeSignatures,
      ]) as DeclarationReflection[],
    getDeclarationComment: (declaration: DeclarationReflection) =>
      getDeclarationComment.apply(context, [declaration]) as any,
    getDeclarationType: (declaration: DeclarationReflection) =>
      getDeclarationType.apply(context, [declaration]) as SomeType | undefined,
    getKeyword: (kind: ReflectionKind) =>
      getKeyword.apply(context, [kind]) as any,
    getModifier: (reflection: DeclarationReflection) =>
      getModifier.apply(context, [reflection]) as
        | 'abstract'
        | 'private'
        | 'readonly'
        | 'static'
        | 'protected'
        | 'public'
        | 'get'
        | 'set'
        | null,
    getPackagesMeta: (key: string) =>
      getPackagesMeta.apply(context, [key]) as PackagesMeta,
    getParameterDefaultValue: (parameter: ParameterReflection) =>
      getParameterDefaultValue.apply(context, [parameter]) as string,
    getProjectName: (textContent: string) =>
      getProjectName.apply(context, [textContent]) as string,
    getRelativeUrl: (url: string, ignorePublicPath: boolean = false) =>
      getRelativeUrl.apply(context, [url, ignorePublicPath]) as string,
    getTextFromKindString: (kindString: string, isPlural: boolean = false) =>
      getTextFromKindString.apply(context, [kindString, isPlural]) as string,
    getText: (key: keyof TextContentMappings) =>
      getText.apply(context, [key]) as string,
    isGroupKind: (reflection: DeclarationReflection | SignatureReflection) =>
      isGroupKind.apply(context, [reflection]) as boolean,
  };
};
