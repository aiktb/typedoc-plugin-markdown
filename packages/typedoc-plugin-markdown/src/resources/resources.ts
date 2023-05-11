// THIS FILE IS AUTOGENERATED - DO NOT EDIT DIRECTLY
import { 
 ArrayType,
 ConditionalType,
 ContainerReflection,
 Comment,
 CommentDisplayPart,
 DeclarationHierarchy,
 DeclarationReflection,
 InferredType,
 IntersectionType,
 IntrinsicType,
 IndexedAccessType,
 LiteralType,
 PageEvent,
 ParameterReflection,
 ProjectReflection,
 QueryType,
 ReferenceReflection,
 ReferenceType,
 ReflectionType,
 SignatureReflection,
 SomeType,
 TupleType,
 TypeOperatorType,
 TypeParameterReflection,
 UnionType,
 UnknownType } from 'typedoc';
import { MarkdownThemeRenderContext } from '../theme-render-context';
import { Collapse } from '../models';
import { memberTemplate } from './templates/member';
import { projectTemplate } from './templates/project';
import { readmeTemplate } from './templates/readme';
import { reflectionTemplate } from './templates/reflection';
import { breadcrumbs } from './partials/breadcrumbs';
import { commentParts } from './partials/comment.parts';
import { comment } from './partials/comment';
import { hierarchy } from './partials/hierarchy';
import { declarationMemberIdentifier } from './partials/member.declaration.identifier';
import { declarationMemberName } from './partials/member.declaration.name';
import { declarationMember } from './partials/member.declaration';
import { indexSignatureTitle } from './partials/member.indexsignature.title';
import { inheritance } from './partials/member.inheritance';
import { memberKindTag } from './partials/member.kind-tag';
import { referenceMember } from './partials/member.reference';
import { reflectionMember } from './partials/member.reflection';
import { signatureMemberIdentifier } from './partials/member.signature.identifier';
import { signatureMember } from './partials/member.signature';
import { sources } from './partials/member.sources';
import { memberTitle } from './partials/member.title';
import { member } from './partials/member';
import { members } from './partials/members';
import { navigation } from './partials/navigation';
import { pageHeader } from './partials/page.header';
import { pageTitle } from './partials/page.title';
import { enumMembersTable } from './partials/table.enum-members';
import { parametersTable } from './partials/table.parameters';
import { propertiesTable } from './partials/table.properties';
import { typeParametersTable } from './partials/table.typeparameters';
import { toc } from './partials/toc';
import { arrayType } from './partials/type.array';
import { conditionalType } from './partials/type.conditional';
import { declarationType } from './partials/type.declaration';
import { functionType } from './partials/type.function';
import { indexAccessType } from './partials/type.index-access';
import { inferredType } from './partials/type.inferred';
import { intersectionType } from './partials/type.intersection';
import { intrinsicType } from './partials/type.intrinsic';
import { literalType } from './partials/type.literal';
import { queryType } from './partials/type.query';
import { referenceType } from './partials/type.reference';
import { reflectionType } from './partials/type.reflection';
import { someType } from './partials/type.some';
import { tupleType } from './partials/type.tuple';
import { typeOperatorType } from './partials/type.type-operator';
import { unionType } from './partials/type.union';
import { unknownType } from './partials/type.unknown';

function bind<F, L extends any[], R>(fn: (f: F, ...a: L) => R, first: F) {
  return (...r: L) => fn(first, ...r);
}
export type Templates = {
  memberTemplate: (page: PageEvent<DeclarationReflection>) => string;
  projectTemplate: (page: PageEvent<ProjectReflection>) => string;
  readmeTemplate: (page: PageEvent<DeclarationReflection | ProjectReflection>) => string;
  reflectionTemplate: (page: PageEvent<DeclarationReflection>) => string;
};

export type Partials = {
  breadcrumbs: (page: PageEvent<DeclarationReflection | ProjectReflection>) => string;
  commentParts: (parts: CommentDisplayPart[]) => string;
  comment: (comment: Comment, headingLevel?: number |  undefined) => string;
  hierarchy: (declarationHierarchy: DeclarationHierarchy) => string;
  declarationMemberIdentifier: (reflection: DeclarationReflection) => string;
  declarationMemberName: (declaration: DeclarationReflection, emphasis?: boolean) => string;
  declarationMember: (declaration: DeclarationReflection, headingLevel: number) => string;
  indexSignatureTitle: (signature: SignatureReflection) => string;
  inheritance: (reflection: DeclarationReflection | SignatureReflection, headingLevel: number) => string;
  memberKindTag: (reflection: DeclarationReflection) => string;
  referenceMember: (props: ReferenceReflection) => string;
  reflectionMember: (reflection: DeclarationReflection, headingLevel: number) => string;
  signatureMemberIdentifier: (signature: SignatureReflection) => string;
  signatureMember: (signature: SignatureReflection, headingLevel: number) => string;
  sources: (reflection: DeclarationReflection | SignatureReflection) => string;
  memberTitle: (reflection: DeclarationReflection, typeParams?: boolean) => string;
  member: (reflection: DeclarationReflection, headingLevel: number) => string;
  members: (container: ContainerReflection, headingLevel: number) => string;
  navigation: (project: ProjectReflection) => string;
  pageHeader: (page: PageEvent<DeclarationReflection | ProjectReflection>) => string;
  pageTitle: (page: PageEvent<DeclarationReflection | ProjectReflection>) => string;
  enumMembersTable: (props: DeclarationReflection[]) => string;
  parametersTable: (parameters: ParameterReflection[]) => string;
  propertiesTable: (props: DeclarationReflection[]) => string;
  typeParametersTable: (typeParameters: TypeParameterReflection[]) => string;
  toc: (reflection: DeclarationReflection | ProjectReflection) => string;
  arrayType: (arrayType: ArrayType) => string;
  conditionalType: (conditionalType: ConditionalType) => string;
  declarationType: (declarationReflection: DeclarationReflection, collapse?: Collapse) => string;
  functionType: (modelSignatures: SignatureReflection[]) => string;
  indexAccessType: (model: IndexedAccessType) => string;
  inferredType: (model: InferredType) => string;
  intersectionType: (model: IntersectionType) => string;
  intrinsicType: (model: IntrinsicType) => string;
  literalType: (literalType: LiteralType) => string;
  queryType: (queryType: QueryType) => string;
  referenceType: (referenceType: ReferenceType) => string;
  reflectionType: (reflectionType: ReflectionType, collapse: Collapse) => string;
  someType: (someType: SomeType, collapse?: Collapse) => string;
  tupleType: (tupleType: TupleType) => string;
  typeOperatorType: (model: TypeOperatorType) => string;
  unionType: (unionType: UnionType) => string;
  unknownType: (model: UnknownType) => string;
};

export const templates = (context: MarkdownThemeRenderContext): Templates => ({
  memberTemplate: bind(memberTemplate, context),
  projectTemplate: bind(projectTemplate, context),
  readmeTemplate: bind(readmeTemplate, context),
  reflectionTemplate: bind(reflectionTemplate, context),
});

export const partials = (context: MarkdownThemeRenderContext): Partials => ({
  breadcrumbs: bind(breadcrumbs, context),
  commentParts: bind(commentParts, context),
  comment: bind(comment, context),
  hierarchy: bind(hierarchy, context),
  declarationMemberIdentifier: bind(declarationMemberIdentifier, context),
  declarationMemberName: bind(declarationMemberName, context),
  declarationMember: bind(declarationMember, context),
  indexSignatureTitle: bind(indexSignatureTitle, context),
  inheritance: bind(inheritance, context),
  memberKindTag: bind(memberKindTag, context),
  referenceMember: bind(referenceMember, context),
  reflectionMember: bind(reflectionMember, context),
  signatureMemberIdentifier: bind(signatureMemberIdentifier, context),
  signatureMember: bind(signatureMember, context),
  sources: bind(sources, context),
  memberTitle: bind(memberTitle, context),
  member: bind(member, context),
  members: bind(members, context),
  navigation: bind(navigation, context),
  pageHeader: bind(pageHeader, context),
  pageTitle: bind(pageTitle, context),
  enumMembersTable: bind(enumMembersTable, context),
  parametersTable: bind(parametersTable, context),
  propertiesTable: bind(propertiesTable, context),
  typeParametersTable: bind(typeParametersTable, context),
  toc: bind(toc, context),
  arrayType: bind(arrayType, context),
  conditionalType: bind(conditionalType, context),
  declarationType: bind(declarationType, context),
  functionType: bind(functionType, context),
  indexAccessType: bind(indexAccessType, context),
  inferredType: bind(inferredType, context),
  intersectionType: bind(intersectionType, context),
  intrinsicType: bind(intrinsicType, context),
  literalType: bind(literalType, context),
  queryType: bind(queryType, context),
  referenceType: bind(referenceType, context),
  reflectionType: bind(reflectionType, context),
  someType: bind(someType, context),
  tupleType: bind(tupleType, context),
  typeOperatorType: bind(typeOperatorType, context),
  unionType: bind(unionType, context),
  unknownType: bind(unknownType, context),
});
