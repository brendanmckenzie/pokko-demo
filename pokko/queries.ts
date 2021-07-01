import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
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
  homeFeature?: Maybe<HomeFeature>;
  homeDownloads?: Maybe<HomeDownloads>;
  homeHero?: Maybe<HomeHero>;
  homeAboutItem?: Maybe<HomeAboutItem>;
  link?: Maybe<Link>;
  metadata?: Maybe<Metadata>;
  homeFeatureItem?: Maybe<HomeFeatureItem>;
  homePromo?: Maybe<HomePromo>;
  homePromoItem?: Maybe<HomePromoItem>;
  settings?: Maybe<Settings>;
  homeAbout?: Maybe<HomeAbout>;
  allNavigationItem?: Maybe<NavigationItemCollection>;
  allModularPage?: Maybe<ModularPageCollection>;
  allHomeFeature?: Maybe<HomeFeatureCollection>;
  allHomeDownloads?: Maybe<HomeDownloadsCollection>;
  allHomeHero?: Maybe<HomeHeroCollection>;
  allHomeAboutItem?: Maybe<HomeAboutItemCollection>;
  allLink?: Maybe<LinkCollection>;
  allMetadata?: Maybe<MetadataCollection>;
  allHomeFeatureItem?: Maybe<HomeFeatureItemCollection>;
  allHomePromo?: Maybe<HomePromoCollection>;
  allHomePromoItem?: Maybe<HomePromoItemCollection>;
  allSettings?: Maybe<SettingsCollection>;
  allHomeAbout?: Maybe<HomeAboutCollection>;
};


export type EntriesNavigationItemArgs = {
  id: Scalars['String'];
};


export type EntriesModularPageArgs = {
  id: Scalars['String'];
};


export type EntriesHomeFeatureArgs = {
  id: Scalars['String'];
};


export type EntriesHomeDownloadsArgs = {
  id: Scalars['String'];
};


export type EntriesHomeHeroArgs = {
  id: Scalars['String'];
};


export type EntriesHomeAboutItemArgs = {
  id: Scalars['String'];
};


export type EntriesLinkArgs = {
  id: Scalars['String'];
};


export type EntriesMetadataArgs = {
  id: Scalars['String'];
};


export type EntriesHomeFeatureItemArgs = {
  id: Scalars['String'];
};


export type EntriesHomePromoArgs = {
  id: Scalars['String'];
};


export type EntriesHomePromoItemArgs = {
  id: Scalars['String'];
};


export type EntriesSettingsArgs = {
  id: Scalars['String'];
};


export type EntriesHomeAboutArgs = {
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


export type EntriesAllHomeFeatureArgs = {
  filter?: Maybe<HomeFeatureFilter>;
  orderBy?: Maybe<Array<Maybe<HomeFeatureOrderBy>>>;
  skip?: Scalars['Int'];
  take?: Scalars['Int'];
};


export type EntriesAllHomeDownloadsArgs = {
  filter?: Maybe<HomeDownloadsFilter>;
  orderBy?: Maybe<Array<Maybe<HomeDownloadsOrderBy>>>;
  skip?: Scalars['Int'];
  take?: Scalars['Int'];
};


export type EntriesAllHomeHeroArgs = {
  filter?: Maybe<HomeHeroFilter>;
  orderBy?: Maybe<Array<Maybe<HomeHeroOrderBy>>>;
  skip?: Scalars['Int'];
  take?: Scalars['Int'];
};


export type EntriesAllHomeAboutItemArgs = {
  filter?: Maybe<HomeAboutItemFilter>;
  orderBy?: Maybe<Array<Maybe<HomeAboutItemOrderBy>>>;
  skip?: Scalars['Int'];
  take?: Scalars['Int'];
};


export type EntriesAllLinkArgs = {
  filter?: Maybe<LinkFilter>;
  orderBy?: Maybe<Array<Maybe<LinkOrderBy>>>;
  skip?: Scalars['Int'];
  take?: Scalars['Int'];
};


export type EntriesAllMetadataArgs = {
  filter?: Maybe<MetadataFilter>;
  orderBy?: Maybe<Array<Maybe<MetadataOrderBy>>>;
  skip?: Scalars['Int'];
  take?: Scalars['Int'];
};


export type EntriesAllHomeFeatureItemArgs = {
  skip?: Scalars['Int'];
  take?: Scalars['Int'];
};


export type EntriesAllHomePromoArgs = {
  filter?: Maybe<HomePromoFilter>;
  orderBy?: Maybe<Array<Maybe<HomePromoOrderBy>>>;
  skip?: Scalars['Int'];
  take?: Scalars['Int'];
};


export type EntriesAllHomePromoItemArgs = {
  filter?: Maybe<HomePromoItemFilter>;
  orderBy?: Maybe<Array<Maybe<HomePromoItemOrderBy>>>;
  skip?: Scalars['Int'];
  take?: Scalars['Int'];
};


export type EntriesAllSettingsArgs = {
  skip?: Scalars['Int'];
  take?: Scalars['Int'];
};


export type EntriesAllHomeAboutArgs = {
  filter?: Maybe<HomeAboutFilter>;
  orderBy?: Maybe<Array<Maybe<HomeAboutOrderBy>>>;
  skip?: Scalars['Int'];
  take?: Scalars['Int'];
};

export type HomeAbout = PokEntry & PokValue & IHomeAbout & {
  __typename?: 'HomeAbout';
  id: Scalars['String'];
  pokko: Pokko;
  subtitle?: Maybe<Scalars['String']>;
  image?: Maybe<PokMedia>;
  items?: Maybe<Array<Maybe<HomeAboutItem>>>;
  title?: Maybe<Scalars['String']>;
};

export type HomeAboutCollection = {
  __typename?: 'HomeAboutCollection';
  nodes: Array<Maybe<HomeAbout>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type HomeAboutCondition = {
  subtitle?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type HomeAboutFilter = {
  subtitle?: Maybe<ScalarStringFilter>;
  title?: Maybe<ScalarStringFilter>;
  id?: Maybe<ScalarIdFilter>;
  and?: Maybe<Array<HomeAboutFilter>>;
  or?: Maybe<Array<HomeAboutFilter>>;
};

export type HomeAboutItem = PokEntry & PokValue & IHomeAboutItem & {
  __typename?: 'HomeAboutItem';
  id: Scalars['String'];
  pokko: Pokko;
  image?: Maybe<PokMedia>;
  description?: Maybe<Scalars['String']>;
};

export type HomeAboutItemCollection = {
  __typename?: 'HomeAboutItemCollection';
  nodes: Array<Maybe<HomeAboutItem>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type HomeAboutItemCondition = {
  description?: Maybe<Scalars['String']>;
};

export type HomeAboutItemFilter = {
  description?: Maybe<ScalarStringFilter>;
  id?: Maybe<ScalarIdFilter>;
  and?: Maybe<Array<HomeAboutItemFilter>>;
  or?: Maybe<Array<HomeAboutItemFilter>>;
};

export enum HomeAboutItemOrderBy {
  CreatedAsc = 'CREATED_ASC',
  CreatedDesc = 'CREATED_DESC',
  DescriptionAsc = 'DESCRIPTION_ASC',
  DescriptionDesc = 'DESCRIPTION_DESC',
  ModifiedAsc = 'MODIFIED_ASC',
  ModifiedDesc = 'MODIFIED_DESC'
}

export enum HomeAboutOrderBy {
  CreatedAsc = 'CREATED_ASC',
  CreatedDesc = 'CREATED_DESC',
  ModifiedAsc = 'MODIFIED_ASC',
  ModifiedDesc = 'MODIFIED_DESC',
  SubtitleAsc = 'SUBTITLE_ASC',
  SubtitleDesc = 'SUBTITLE_DESC',
  TitleAsc = 'TITLE_ASC',
  TitleDesc = 'TITLE_DESC'
}

export type HomeDownloads = PokEntry & PokValue & IHomeDownloads & {
  __typename?: 'HomeDownloads';
  id: Scalars['String'];
  pokko: Pokko;
  android?: Maybe<Link>;
  title?: Maybe<Scalars['String']>;
  image?: Maybe<PokMedia>;
  summary?: Maybe<Scalars['String']>;
  apple?: Maybe<Link>;
};

export type HomeDownloadsCollection = {
  __typename?: 'HomeDownloadsCollection';
  nodes: Array<Maybe<HomeDownloads>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type HomeDownloadsCondition = {
  title?: Maybe<Scalars['String']>;
  summary?: Maybe<Scalars['String']>;
};

export type HomeDownloadsFilter = {
  title?: Maybe<ScalarStringFilter>;
  summary?: Maybe<ScalarStringFilter>;
  id?: Maybe<ScalarIdFilter>;
  and?: Maybe<Array<HomeDownloadsFilter>>;
  or?: Maybe<Array<HomeDownloadsFilter>>;
};

export enum HomeDownloadsOrderBy {
  CreatedAsc = 'CREATED_ASC',
  CreatedDesc = 'CREATED_DESC',
  ModifiedAsc = 'MODIFIED_ASC',
  ModifiedDesc = 'MODIFIED_DESC',
  SummaryAsc = 'SUMMARY_ASC',
  SummaryDesc = 'SUMMARY_DESC',
  TitleAsc = 'TITLE_ASC',
  TitleDesc = 'TITLE_DESC'
}

export type HomeFeature = PokEntry & PokValue & IHomeFeature & {
  __typename?: 'HomeFeature';
  id: Scalars['String'];
  pokko: Pokko;
  image?: Maybe<PokMedia>;
  items?: Maybe<Array<Maybe<HomeFeatureItem>>>;
  title?: Maybe<Scalars['String']>;
  summary?: Maybe<Scalars['String']>;
};

export type HomeFeatureCollection = {
  __typename?: 'HomeFeatureCollection';
  nodes: Array<Maybe<HomeFeature>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type HomeFeatureCondition = {
  title?: Maybe<Scalars['String']>;
  summary?: Maybe<Scalars['String']>;
};

export type HomeFeatureFilter = {
  title?: Maybe<ScalarStringFilter>;
  summary?: Maybe<ScalarStringFilter>;
  id?: Maybe<ScalarIdFilter>;
  and?: Maybe<Array<HomeFeatureFilter>>;
  or?: Maybe<Array<HomeFeatureFilter>>;
};

export type HomeFeatureItem = PokEntry & PokValue & IHomeFeatureItem & {
  __typename?: 'HomeFeatureItem';
  id: Scalars['String'];
  pokko: Pokko;
  image?: Maybe<PokMedia>;
};

export type HomeFeatureItemCollection = {
  __typename?: 'HomeFeatureItemCollection';
  nodes: Array<Maybe<HomeFeatureItem>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export enum HomeFeatureOrderBy {
  CreatedAsc = 'CREATED_ASC',
  CreatedDesc = 'CREATED_DESC',
  ModifiedAsc = 'MODIFIED_ASC',
  ModifiedDesc = 'MODIFIED_DESC',
  SummaryAsc = 'SUMMARY_ASC',
  SummaryDesc = 'SUMMARY_DESC',
  TitleAsc = 'TITLE_ASC',
  TitleDesc = 'TITLE_DESC'
}

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

export type HomePromo = PokEntry & PokValue & IHomePromo & {
  __typename?: 'HomePromo';
  id: Scalars['String'];
  pokko: Pokko;
  items?: Maybe<Array<Maybe<HomePromoItem>>>;
  title?: Maybe<Scalars['String']>;
  subtitle?: Maybe<Scalars['String']>;
};

export type HomePromoCollection = {
  __typename?: 'HomePromoCollection';
  nodes: Array<Maybe<HomePromo>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type HomePromoCondition = {
  title?: Maybe<Scalars['String']>;
  subtitle?: Maybe<Scalars['String']>;
};

export type HomePromoFilter = {
  title?: Maybe<ScalarStringFilter>;
  subtitle?: Maybe<ScalarStringFilter>;
  id?: Maybe<ScalarIdFilter>;
  and?: Maybe<Array<HomePromoFilter>>;
  or?: Maybe<Array<HomePromoFilter>>;
};

export type HomePromoItem = PokEntry & PokValue & IHomePromoItem & {
  __typename?: 'HomePromoItem';
  id: Scalars['String'];
  pokko: Pokko;
  icon?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type HomePromoItemCollection = {
  __typename?: 'HomePromoItemCollection';
  nodes: Array<Maybe<HomePromoItem>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type HomePromoItemCondition = {
  icon?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type HomePromoItemFilter = {
  icon?: Maybe<ScalarStringFilter>;
  description?: Maybe<ScalarStringFilter>;
  title?: Maybe<ScalarStringFilter>;
  id?: Maybe<ScalarIdFilter>;
  and?: Maybe<Array<HomePromoItemFilter>>;
  or?: Maybe<Array<HomePromoItemFilter>>;
};

export enum HomePromoItemOrderBy {
  CreatedAsc = 'CREATED_ASC',
  CreatedDesc = 'CREATED_DESC',
  DescriptionAsc = 'DESCRIPTION_ASC',
  DescriptionDesc = 'DESCRIPTION_DESC',
  IconAsc = 'ICON_ASC',
  IconDesc = 'ICON_DESC',
  ModifiedAsc = 'MODIFIED_ASC',
  ModifiedDesc = 'MODIFIED_DESC',
  TitleAsc = 'TITLE_ASC',
  TitleDesc = 'TITLE_DESC'
}

export enum HomePromoOrderBy {
  CreatedAsc = 'CREATED_ASC',
  CreatedDesc = 'CREATED_DESC',
  ModifiedAsc = 'MODIFIED_ASC',
  ModifiedDesc = 'MODIFIED_DESC',
  SubtitleAsc = 'SUBTITLE_ASC',
  SubtitleDesc = 'SUBTITLE_DESC',
  TitleAsc = 'TITLE_ASC',
  TitleDesc = 'TITLE_DESC'
}

export type IHomeAbout = {
  id: Scalars['String'];
  pokko: Pokko;
  subtitle?: Maybe<Scalars['String']>;
  image?: Maybe<PokMedia>;
  items?: Maybe<Array<Maybe<HomeAboutItem>>>;
  title?: Maybe<Scalars['String']>;
};

export type IHomeAboutItem = {
  id: Scalars['String'];
  pokko: Pokko;
  image?: Maybe<PokMedia>;
  description?: Maybe<Scalars['String']>;
};

export type IHomeDownloads = {
  id: Scalars['String'];
  pokko: Pokko;
  android?: Maybe<Link>;
  title?: Maybe<Scalars['String']>;
  image?: Maybe<PokMedia>;
  summary?: Maybe<Scalars['String']>;
  apple?: Maybe<Link>;
};

export type IHomeFeature = {
  id: Scalars['String'];
  pokko: Pokko;
  image?: Maybe<PokMedia>;
  items?: Maybe<Array<Maybe<HomeFeatureItem>>>;
  title?: Maybe<Scalars['String']>;
  summary?: Maybe<Scalars['String']>;
};

export type IHomeFeatureItem = {
  id: Scalars['String'];
  pokko: Pokko;
  image?: Maybe<PokMedia>;
};

export type IHomeHero = {
  id: Scalars['String'];
  pokko: Pokko;
  title?: Maybe<Scalars['String']>;
  image?: Maybe<PokMedia>;
  backgroundImage?: Maybe<PokMedia>;
  subtitle?: Maybe<Scalars['String']>;
  videoUrl?: Maybe<Scalars['String']>;
};

export type IHomePromo = {
  id: Scalars['String'];
  pokko: Pokko;
  items?: Maybe<Array<Maybe<HomePromoItem>>>;
  title?: Maybe<Scalars['String']>;
  subtitle?: Maybe<Scalars['String']>;
};

export type IHomePromoItem = {
  id: Scalars['String'];
  pokko: Pokko;
  icon?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type ILink = {
  id: Scalars['String'];
  pokko: Pokko;
  url?: Maybe<Scalars['String']>;
  target?: Maybe<PokEntry>;
  label?: Maybe<Scalars['String']>;
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
  components?: Maybe<Array<Maybe<ModularPage_Components>>>;
};

export type INavigationItem = {
  id: Scalars['String'];
  pokko: Pokko;
  children?: Maybe<Array<Maybe<NavigationItem>>>;
};

export type ISettings = {
  id: Scalars['String'];
  pokko: Pokko;
  primaryNavigation?: Maybe<Array<Maybe<NavigationItem>>>;
  logo?: Maybe<PokMedia>;
};


export type Link = PokEntry & PokValue & ILink & {
  __typename?: 'Link';
  id: Scalars['String'];
  pokko: Pokko;
  url?: Maybe<Scalars['String']>;
  target?: Maybe<PokEntry>;
  label?: Maybe<Scalars['String']>;
};

export type LinkCollection = {
  __typename?: 'LinkCollection';
  nodes: Array<Maybe<Link>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type LinkCondition = {
  url?: Maybe<Scalars['String']>;
  target?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
};

export type LinkFilter = {
  url?: Maybe<ScalarStringFilter>;
  target?: Maybe<ScalarIdFilter>;
  label?: Maybe<ScalarStringFilter>;
  id?: Maybe<ScalarIdFilter>;
  and?: Maybe<Array<LinkFilter>>;
  or?: Maybe<Array<LinkFilter>>;
};

export enum LinkOrderBy {
  CreatedAsc = 'CREATED_ASC',
  CreatedDesc = 'CREATED_DESC',
  LabelAsc = 'LABEL_ASC',
  LabelDesc = 'LABEL_DESC',
  ModifiedAsc = 'MODIFIED_ASC',
  ModifiedDesc = 'MODIFIED_DESC',
  UrlAsc = 'URL_ASC',
  UrlDesc = 'URL_DESC'
}

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
  components?: Maybe<Array<Maybe<ModularPage_Components>>>;
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

export type ModularPage_Components = HomeHero | HomePromo | HomeFeature | HomeAbout | HomeDownloads;

export type NavigationItem = PokEntry & PokValue & INavigationItem & ILink & {
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

export type ModularPageFragment = (
  { __typename: 'ModularPage' }
  & Pick<ModularPage, 'title' | 'description'>
  & { components?: Maybe<Array<Maybe<(
    { __typename?: 'HomeHero' }
    & Component_HomeHero_Fragment
  ) | (
    { __typename?: 'HomePromo' }
    & Component_HomePromo_Fragment
  ) | (
    { __typename?: 'HomeFeature' }
    & Component_HomeFeature_Fragment
  ) | (
    { __typename?: 'HomeAbout' }
    & Component_HomeAbout_Fragment
  ) | (
    { __typename?: 'HomeDownloads' }
    & Component_HomeDownloads_Fragment
  )>>> }
  & Metadata_ModularPage_Fragment
);

type Component_HomeHero_Fragment = (
  { __typename: 'HomeHero' }
  & HomeHeroFragment
);

type Component_HomePromo_Fragment = (
  { __typename: 'HomePromo' }
  & HomePromoFragment
);

type Component_HomeFeature_Fragment = (
  { __typename: 'HomeFeature' }
  & HomeFeatureFragment
);

type Component_HomeAbout_Fragment = (
  { __typename: 'HomeAbout' }
  & HomeAboutFragment
);

type Component_HomeDownloads_Fragment = (
  { __typename: 'HomeDownloads' }
  & HomeDownloadsFragment
);

export type ComponentFragment = Component_HomeHero_Fragment | Component_HomePromo_Fragment | Component_HomeFeature_Fragment | Component_HomeAbout_Fragment | Component_HomeDownloads_Fragment;

export type HomeHeroFragment = (
  { __typename?: 'HomeHero' }
  & Pick<HomeHero, 'title' | 'subtitle' | 'videoUrl'>
  & { image?: Maybe<(
    { __typename?: 'PokMedia' }
    & Pick<PokMedia, 'url'>
  )>, backgroundImage?: Maybe<(
    { __typename?: 'PokMedia' }
    & Pick<PokMedia, 'url'>
  )> }
);

export type HomePromoFragment = (
  { __typename?: 'HomePromo' }
  & Pick<HomePromo, 'title' | 'subtitle'>
  & { items?: Maybe<Array<Maybe<(
    { __typename?: 'HomePromoItem' }
    & Pick<HomePromoItem, 'title' | 'description' | 'icon'>
  )>>> }
);

export type HomeAboutFragment = (
  { __typename?: 'HomeAbout' }
  & Pick<HomeAbout, 'title' | 'subtitle'>
  & { items?: Maybe<Array<Maybe<(
    { __typename?: 'HomeAboutItem' }
    & Pick<HomeAboutItem, 'description'>
    & { image?: Maybe<(
      { __typename?: 'PokMedia' }
      & Pick<PokMedia, 'url'>
    )> }
  )>>> }
);

export type HomeFeatureFragment = (
  { __typename?: 'HomeFeature' }
  & Pick<HomeFeature, 'title' | 'summary'>
  & { image?: Maybe<(
    { __typename?: 'PokMedia' }
    & Pick<PokMedia, 'url'>
  )>, items?: Maybe<Array<Maybe<(
    { __typename?: 'HomeFeatureItem' }
    & { image?: Maybe<(
      { __typename?: 'PokMedia' }
      & Pick<PokMedia, 'url'>
    )> }
  )>>> }
);

type Metadata_Metadata_Fragment = (
  { __typename?: 'Metadata' }
  & Pick<Metadata, 'description' | 'title'>
);

type Metadata_ModularPage_Fragment = (
  { __typename?: 'ModularPage' }
  & Pick<ModularPage, 'description' | 'title'>
);

export type MetadataFragment = Metadata_Metadata_Fragment | Metadata_ModularPage_Fragment;

export type HomeDownloadsFragment = (
  { __typename?: 'HomeDownloads' }
  & Pick<HomeDownloads, 'title' | 'summary'>
  & { apple?: Maybe<(
    { __typename?: 'Link' }
    & Pick<Link, 'url'>
  )>, android?: Maybe<(
    { __typename?: 'Link' }
    & Pick<Link, 'url'>
  )>, image?: Maybe<(
    { __typename?: 'PokMedia' }
    & Pick<PokMedia, 'url'>
  )> }
);

export type GetPageByPathQueryVariables = Exact<{
  path?: Maybe<Array<Maybe<Scalars['String']>> | Maybe<Scalars['String']>>;
}>;


export type GetPageByPathQuery = (
  { __typename?: 'Query' }
  & { entry?: Maybe<{ __typename?: 'HomeAbout' } | { __typename?: 'HomeAboutItem' } | { __typename?: 'HomeDownloads' } | { __typename?: 'HomeFeature' } | { __typename?: 'HomeFeatureItem' } | { __typename?: 'HomeHero' } | { __typename?: 'HomePromo' } | { __typename?: 'HomePromoItem' } | { __typename?: 'Link' } | { __typename?: 'Metadata' } | (
    { __typename?: 'ModularPage' }
    & ModularPageFragment
  ) | { __typename?: 'NavigationItem' } | { __typename?: 'Settings' }> }
);

export const MetadataFragmentDoc = gql`
    fragment Metadata on IMetadata {
  description
  title
}
    `;
export const HomeHeroFragmentDoc = gql`
    fragment HomeHero on HomeHero {
  title
  subtitle
  videoUrl
  image {
    url
  }
  backgroundImage {
    url
  }
}
    `;
export const HomePromoFragmentDoc = gql`
    fragment HomePromo on HomePromo {
  title
  subtitle
  items {
    title
    description
    icon
  }
}
    `;
export const HomeAboutFragmentDoc = gql`
    fragment HomeAbout on HomeAbout {
  title
  subtitle
  items {
    image {
      url
    }
    description
  }
}
    `;
export const HomeFeatureFragmentDoc = gql`
    fragment HomeFeature on HomeFeature {
  title
  summary
  image {
    url
  }
  items {
    image {
      url
    }
  }
}
    `;
export const HomeDownloadsFragmentDoc = gql`
    fragment HomeDownloads on HomeDownloads {
  title
  summary
  apple {
    url
  }
  android {
    url
  }
  image {
    url
  }
}
    `;
export const ComponentFragmentDoc = gql`
    fragment Component on ModularPage_Components {
  __typename
  ...HomeHero
  ...HomePromo
  ...HomeAbout
  ...HomeFeature
  ...HomeDownloads
}
    ${HomeHeroFragmentDoc}
${HomePromoFragmentDoc}
${HomeAboutFragmentDoc}
${HomeFeatureFragmentDoc}
${HomeDownloadsFragmentDoc}`;
export const ModularPageFragmentDoc = gql`
    fragment ModularPage on ModularPage {
  __typename
  ...Metadata
  title
  description
  components {
    ...Component
  }
}
    ${MetadataFragmentDoc}
${ComponentFragmentDoc}`;
export const GetPageByPathDocument = gql`
    query GetPageByPath($path: [String]) {
  entry(path: $path) {
    ...ModularPage
  }
}
    ${ModularPageFragmentDoc}`;

/**
 * __useGetPageByPathQuery__
 *
 * To run a query within a React component, call `useGetPageByPathQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPageByPathQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPageByPathQuery({
 *   variables: {
 *      path: // value for 'path'
 *   },
 * });
 */
export function useGetPageByPathQuery(baseOptions?: Apollo.QueryHookOptions<GetPageByPathQuery, GetPageByPathQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPageByPathQuery, GetPageByPathQueryVariables>(GetPageByPathDocument, options);
      }
export function useGetPageByPathLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPageByPathQuery, GetPageByPathQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPageByPathQuery, GetPageByPathQueryVariables>(GetPageByPathDocument, options);
        }
export type GetPageByPathQueryHookResult = ReturnType<typeof useGetPageByPathQuery>;
export type GetPageByPathLazyQueryHookResult = ReturnType<typeof useGetPageByPathLazyQuery>;
export type GetPageByPathQueryResult = Apollo.QueryResult<GetPageByPathQuery, GetPageByPathQueryVariables>;

      export interface PossibleTypesResultData {
        possibleTypes: {
          [key: string]: string[]
        }
      }
      const result: PossibleTypesResultData = {
  "possibleTypes": {
    "IHomeAbout": [
      "HomeAbout"
    ],
    "IHomeAboutItem": [
      "HomeAboutItem"
    ],
    "IHomeDownloads": [
      "HomeDownloads"
    ],
    "IHomeFeature": [
      "HomeFeature"
    ],
    "IHomeFeatureItem": [
      "HomeFeatureItem"
    ],
    "IHomeHero": [
      "HomeHero"
    ],
    "IHomePromo": [
      "HomePromo"
    ],
    "IHomePromoItem": [
      "HomePromoItem"
    ],
    "ILink": [
      "Link",
      "NavigationItem"
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
    "ModularPage_Components": [
      "HomeHero",
      "HomePromo",
      "HomeFeature",
      "HomeAbout",
      "HomeDownloads"
    ],
    "PokEntry": [
      "HomeAbout",
      "HomeAboutItem",
      "HomeDownloads",
      "HomeFeature",
      "HomeFeatureItem",
      "HomeHero",
      "HomePromo",
      "HomePromoItem",
      "Link",
      "Metadata",
      "ModularPage",
      "NavigationItem",
      "Settings"
    ],
    "PokValue": [
      "HomeAbout",
      "HomeAboutItem",
      "HomeDownloads",
      "HomeFeature",
      "HomeFeatureItem",
      "HomeHero",
      "HomePromo",
      "HomePromoItem",
      "Link",
      "Metadata",
      "ModularPage",
      "NavigationItem",
      "Settings"
    ]
  }
};
      export default result;
    