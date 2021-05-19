import { gql } from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
};

export type Entries = {
  __typename?: 'Entries';
  navigationItem?: Maybe<NavigationItem>;
  modularPage?: Maybe<ModularPage>;
  homeHero?: Maybe<HomeHero>;
  metadata?: Maybe<Metadata>;
  settings?: Maybe<Settings>;
  allNavigationItem?: Maybe<NavigationItemCollection>;
  allModularPage?: Maybe<ModularPageCollection>;
  allHomeHero?: Maybe<HomeHeroCollection>;
  allMetadata?: Maybe<MetadataCollection>;
  allSettings?: Maybe<SettingsCollection>;
};


export type EntriesNavigationItemArgs = {
  id: Scalars['String'];
};


export type EntriesModularPageArgs = {
  id: Scalars['String'];
};


export type EntriesHomeHeroArgs = {
  id: Scalars['String'];
};


export type EntriesMetadataArgs = {
  id: Scalars['String'];
};


export type EntriesSettingsArgs = {
  id: Scalars['String'];
};


export type EntriesAllNavigationItemArgs = {
  filter?: Maybe<NavigationItemFilter>;
  orderBy?: Maybe<Array<Maybe<NavigationItemOrderBy>>>;
  skip?: Scalars['Int'];
  take?: Scalars['Int'];
};


export type EntriesAllModularPageArgs = {
  filter?: Maybe<ModularPageFilter>;
  orderBy?: Maybe<Array<Maybe<ModularPageOrderBy>>>;
  skip?: Scalars['Int'];
  take?: Scalars['Int'];
};


export type EntriesAllHomeHeroArgs = {
  filter?: Maybe<HomeHeroFilter>;
  orderBy?: Maybe<Array<Maybe<HomeHeroOrderBy>>>;
  skip?: Scalars['Int'];
  take?: Scalars['Int'];
};


export type EntriesAllMetadataArgs = {
  filter?: Maybe<MetadataFilter>;
  orderBy?: Maybe<Array<Maybe<MetadataOrderBy>>>;
  skip?: Scalars['Int'];
  take?: Scalars['Int'];
};


export type EntriesAllSettingsArgs = {
  skip?: Scalars['Int'];
  take?: Scalars['Int'];
};

export type HomeHero = PokEntry & PokValue & IHomeHero & {
  __typename?: 'HomeHero';
  id: Scalars['String'];
  pokko: Pokko;
  title?: Maybe<Scalars['String']>;
  image?: Maybe<PokMedia>;
  backgroundImage?: Maybe<PokMedia>;
  subtitle?: Maybe<Scalars['String']>;
  videoUrl?: Maybe<Scalars['String']>;
};

export type HomeHeroCollection = {
  __typename?: 'HomeHeroCollection';
  nodes: Array<Maybe<HomeHero>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type HomeHeroCondition = {
  title?: Maybe<Scalars['String']>;
  subtitle?: Maybe<Scalars['String']>;
  videoUrl?: Maybe<Scalars['String']>;
};

export type HomeHeroFilter = {
  title?: Maybe<ScalarStringFilter>;
  subtitle?: Maybe<ScalarStringFilter>;
  videoUrl?: Maybe<ScalarStringFilter>;
  id?: Maybe<ScalarIdFilter>;
  and?: Maybe<Array<HomeHeroFilter>>;
  or?: Maybe<Array<HomeHeroFilter>>;
};

export enum HomeHeroOrderBy {
  CreatedAsc = 'CREATED_ASC',
  CreatedDesc = 'CREATED_DESC',
  ModifiedAsc = 'MODIFIED_ASC',
  ModifiedDesc = 'MODIFIED_DESC',
  SubtitleAsc = 'SUBTITLE_ASC',
  SubtitleDesc = 'SUBTITLE_DESC',
  TitleAsc = 'TITLE_ASC',
  TitleDesc = 'TITLE_DESC',
  VideoUrlAsc = 'VIDEO_URL_ASC',
  VideoUrlDesc = 'VIDEO_URL_DESC'
}

export type IHomeHero = {
  id: Scalars['String'];
  pokko: Pokko;
  title?: Maybe<Scalars['String']>;
  image?: Maybe<PokMedia>;
  backgroundImage?: Maybe<PokMedia>;
  subtitle?: Maybe<Scalars['String']>;
  videoUrl?: Maybe<Scalars['String']>;
};

export type IMetadata = {
  id: Scalars['String'];
  pokko: Pokko;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};

export type IModularPage = {
  id: Scalars['String'];
  pokko: Pokko;
  components?: Maybe<HomeHero>;
};

export type INavigationItem = {
  id: Scalars['String'];
  pokko: Pokko;
  url?: Maybe<Scalars['String']>;
  children?: Maybe<Array<Maybe<NavigationItem>>>;
  target?: Maybe<PokEntry>;
  label?: Maybe<Scalars['String']>;
};

export type ISettings = {
  id: Scalars['String'];
  pokko: Pokko;
  primaryNavigation?: Maybe<Array<Maybe<NavigationItem>>>;
  logo?: Maybe<PokMedia>;
};


export type Metadata = PokEntry & PokValue & IMetadata & {
  __typename?: 'Metadata';
  id: Scalars['String'];
  pokko: Pokko;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};

export type MetadataCollection = {
  __typename?: 'MetadataCollection';
  nodes: Array<Maybe<Metadata>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type MetadataCondition = {
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};

export type MetadataFilter = {
  title?: Maybe<ScalarStringFilter>;
  description?: Maybe<ScalarStringFilter>;
  id?: Maybe<ScalarIdFilter>;
  and?: Maybe<Array<MetadataFilter>>;
  or?: Maybe<Array<MetadataFilter>>;
};

export enum MetadataOrderBy {
  CreatedAsc = 'CREATED_ASC',
  CreatedDesc = 'CREATED_DESC',
  DescriptionAsc = 'DESCRIPTION_ASC',
  DescriptionDesc = 'DESCRIPTION_DESC',
  ModifiedAsc = 'MODIFIED_ASC',
  ModifiedDesc = 'MODIFIED_DESC',
  TitleAsc = 'TITLE_ASC',
  TitleDesc = 'TITLE_DESC'
}

export type ModularPage = PokEntry & PokValue & IModularPage & IMetadata & {
  __typename?: 'ModularPage';
  id: Scalars['String'];
  pokko: Pokko;
  title?: Maybe<Scalars['String']>;
  components?: Maybe<HomeHero>;
  description?: Maybe<Scalars['String']>;
};

export type ModularPageCollection = {
  __typename?: 'ModularPageCollection';
  nodes: Array<Maybe<ModularPage>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type ModularPageCondition = {
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};

export type ModularPageFilter = {
  title?: Maybe<ScalarStringFilter>;
  description?: Maybe<ScalarStringFilter>;
  id?: Maybe<ScalarIdFilter>;
  and?: Maybe<Array<ModularPageFilter>>;
  or?: Maybe<Array<ModularPageFilter>>;
};

export enum ModularPageOrderBy {
  CreatedAsc = 'CREATED_ASC',
  CreatedDesc = 'CREATED_DESC',
  DescriptionAsc = 'DESCRIPTION_ASC',
  DescriptionDesc = 'DESCRIPTION_DESC',
  ModifiedAsc = 'MODIFIED_ASC',
  ModifiedDesc = 'MODIFIED_DESC',
  TitleAsc = 'TITLE_ASC',
  TitleDesc = 'TITLE_DESC'
}

export type NavigationItem = PokEntry & PokValue & INavigationItem & {
  __typename?: 'NavigationItem';
  id: Scalars['String'];
  pokko: Pokko;
  url?: Maybe<Scalars['String']>;
  children?: Maybe<Array<Maybe<NavigationItem>>>;
  target?: Maybe<PokEntry>;
  label?: Maybe<Scalars['String']>;
};

export type NavigationItemCollection = {
  __typename?: 'NavigationItemCollection';
  nodes: Array<Maybe<NavigationItem>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type NavigationItemCondition = {
  url?: Maybe<Scalars['String']>;
  target?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
};

export type NavigationItemFilter = {
  url?: Maybe<ScalarStringFilter>;
  target?: Maybe<ScalarIdFilter>;
  label?: Maybe<ScalarStringFilter>;
  id?: Maybe<ScalarIdFilter>;
  and?: Maybe<Array<NavigationItemFilter>>;
  or?: Maybe<Array<NavigationItemFilter>>;
};

export enum NavigationItemOrderBy {
  CreatedAsc = 'CREATED_ASC',
  CreatedDesc = 'CREATED_DESC',
  LabelAsc = 'LABEL_ASC',
  LabelDesc = 'LABEL_DESC',
  ModifiedAsc = 'MODIFIED_ASC',
  ModifiedDesc = 'MODIFIED_DESC',
  UrlAsc = 'URL_ASC',
  UrlDesc = 'URL_DESC'
}

export type Page = {
  __typename?: 'Page';
  fullPath?: Maybe<Array<Maybe<Scalars['String']>>>;
  path?: Maybe<Array<Maybe<Scalars['String']>>>;
  entry?: Maybe<PokEntry>;
  type?: Maybe<Scalars['String']>;
  entryId?: Maybe<Scalars['String']>;
};

export type PageCollection = {
  __typename?: 'PageCollection';
  nodes: Array<Maybe<Page>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type PageInfo = {
  __typename?: 'PageInfo';
  hasNextPage: Scalars['Boolean'];
  hasPrevPage: Scalars['Boolean'];
};

export type PagesCondition = {
  path?: Maybe<Array<Maybe<Scalars['String']>>>;
  pathExact?: Maybe<Scalars['Boolean']>;
};

export type PokEntry = {
  id: Scalars['String'];
  pokko: Pokko;
};

export type PokMedia = {
  __typename?: 'PokMedia';
  id: Scalars['String'];
  contentType: Scalars['String'];
  height?: Maybe<Scalars['Int']>;
  width?: Maybe<Scalars['Int']>;
  size: Scalars['Int'];
  url: Scalars['String'];
};


export type PokMediaUrlArgs = {
  process?: Maybe<PokMediaProcess>;
};

export enum PokMediaFit {
  Contain = 'CONTAIN',
  Cover = 'COVER',
  Fill = 'FILL',
  Inside = 'INSIDE',
  Outside = 'OUTSIDE'
}

export enum PokMediaPosition {
  Centre = 'CENTRE',
  Top = 'TOP',
  RightTop = 'RIGHT_TOP',
  Right = 'RIGHT',
  RightBottom = 'RIGHT_BOTTOM',
  Bottom = 'BOTTOM',
  LeftBottom = 'LEFT_BOTTOM',
  Left = 'LEFT',
  LeftTop = 'LEFT_TOP'
}

export type PokMediaProcess = {
  height?: Maybe<Scalars['Int']>;
  width?: Maybe<Scalars['Int']>;
  fit?: Maybe<PokMediaFit>;
  position?: Maybe<PokMediaPosition>;
};

export type PokValue = {
  id?: Maybe<Scalars['String']>;
};

export type Pokko = {
  __typename?: 'Pokko';
  id: Scalars['String'];
  model: Scalars['String'];
  name: Scalars['String'];
  created: Scalars['String'];
  modified: Scalars['String'];
  path?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type Query = {
  __typename?: 'Query';
  entries?: Maybe<Entries>;
  entry?: Maybe<PokEntry>;
  sync?: Maybe<SyncCollection>;
  taxonomy?: Maybe<PageCollection>;
};


export type QueryEntryArgs = {
  path?: Maybe<Array<Maybe<Scalars['String']>>>;
  id?: Maybe<Scalars['String']>;
};


export type QuerySyncArgs = {
  skip?: Scalars['Int'];
  take?: Scalars['Int'];
  filter?: Maybe<SyncCondition>;
};


export type QueryTaxonomyArgs = {
  skip?: Scalars['Int'];
  take?: Scalars['Int'];
  filter?: Maybe<PagesCondition>;
};

export type ScalarIdFilter = {
  isNull?: Maybe<Scalars['Boolean']>;
  equalTo?: Maybe<Scalars['String']>;
  notEqualTo?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  notIn?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type ScalarStringFilter = {
  isNull?: Maybe<Scalars['Boolean']>;
  equalTo?: Maybe<Scalars['String']>;
  notEqualTo?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  notIn?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type Settings = PokEntry & PokValue & ISettings & {
  __typename?: 'Settings';
  id: Scalars['String'];
  pokko: Pokko;
  primaryNavigation?: Maybe<Array<Maybe<NavigationItem>>>;
  logo?: Maybe<PokMedia>;
};

export type SettingsCollection = {
  __typename?: 'SettingsCollection';
  nodes: Array<Maybe<Settings>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type Sync = {
  __typename?: 'Sync';
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['String']>;
  modifiedAt?: Maybe<Scalars['String']>;
  deletedAt?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  action?: Maybe<Scalars['String']>;
  payload?: Maybe<Scalars['JSON']>;
};

export type SyncCollection = {
  __typename?: 'SyncCollection';
  nodes: Array<Maybe<Sync>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type SyncCondition = {
  after?: Maybe<Scalars['String']>;
};

export type ModularPageContentFragment = (
  { __typename?: 'ModularPage' }
  & MetadataContent_ModularPage_Fragment
);

type MetadataContent_Metadata_Fragment = (
  { __typename?: 'Metadata' }
  & Pick<Metadata, 'description' | 'title'>
);

type MetadataContent_ModularPage_Fragment = (
  { __typename?: 'ModularPage' }
  & Pick<ModularPage, 'description' | 'title'>
);

export type MetadataContentFragment = MetadataContent_Metadata_Fragment | MetadataContent_ModularPage_Fragment;

export const MetadataContentFragmentDoc = gql`
    fragment MetadataContent on IMetadata {
  description
  title
}
    `;
export const ModularPageContentFragmentDoc = gql`
    fragment ModularPageContent on IModularPage {
  ...MetadataContent
}
    ${MetadataContentFragmentDoc}`;

      export interface PossibleTypesResultData {
        possibleTypes: {
          [key: string]: string[]
        }
      }
      const result: PossibleTypesResultData = {
  "possibleTypes": {
    "IHomeHero": [
      "HomeHero"
    ],
    "IMetadata": [
      "Metadata",
      "ModularPage"
    ],
    "IModularPage": [
      "ModularPage"
    ],
    "INavigationItem": [
      "NavigationItem"
    ],
    "ISettings": [
      "Settings"
    ],
    "PokEntry": [
      "HomeHero",
      "Metadata",
      "ModularPage",
      "NavigationItem",
      "Settings"
    ],
    "PokValue": [
      "HomeHero",
      "Metadata",
      "ModularPage",
      "NavigationItem",
      "Settings"
    ]
  }
};
      export default result;
    