export interface DocsData {
  api: DocsInterface | null;
  interfaces: DocsInterface[];
  typeAliases: DocsTypeAlias[];
  enums: DocsEnum[];
  pluginConfigs: DocsConfigInterface[];
}

export interface DocsConfigInterface {
  name: string;
  slug: string;
  properties: DocsInterfaceProperty[];
  docs: string;
}

export interface DocsInterface {
  name: string;
  slug: string;
  docs: string;
  tags: DocsTagInfo[];
  methods: DocsInterfaceMethod[];
  properties: DocsInterfaceProperty[];
  importObject: string[];
}

export interface DocsEnum {
  name: string;
  slug: string;
  members: DocsEnumMember[];
}

export interface DocsTypeAlias {
  name: string;
  slug: string;
  docs: string;
  types: DocsTypeAliasReference[];
}

export interface DocsTypeAliasReference {
  text: string;
  complexTypes: string[];
}

export interface DocsEnumMember {
  name: string;
  value: string | undefined;
  docs: string;
  tags: DocsTagInfo[];
}

export interface DocsInterfaceMethod {
  name: string;
  docs: string;
  tags: DocsTagInfo[];
  signature: string;
  returns: string;
  parameters: DocsMethodParam[];
  complexTypes: string[];
  slug: string;
}

export interface DocsInterfaceProperty {
  name: string;
  docs: string;
  tags: DocsTagInfo[];
  type: string;
  complexTypes: string[];
}

export interface DocsInterfaceEnum {
  name: string;
  docs: string;
  tags: DocsTagInfo[];
  complexTypes: string[];
  slug: string;
}

export interface DocsMethodParam {
  name: string;
  docs: string;
  type: string;
}

export interface DocsJsDoc {
  docs: string;
  tags: DocsTagInfo[];
}

export interface DocsTagInfo {
  name: string;
  text?: string;
}

export interface DocsParseOptions {
  tsconfigPath?: string;
  inputFiles?: string[];
}

export interface DocsGenerateOptions extends DocsParseOptions {
  api: string;
  outputJsonPath?: string;
  outputReadmePath?: string;
}

export interface DocsGenerateResults extends DocsGenerateOptions {
  data: DocsData;
}
