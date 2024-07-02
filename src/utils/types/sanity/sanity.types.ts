/**
 * ---------------------------------------------------------------------------------
 * This file has been generated by Sanity TypeGen.
 * Command: `sanity typegen generate`
 *
 * Any modifications made directly to this file will be overwritten the next time
 * the TypeScript definitions are generated. Please make changes to the Sanity
 * schema definitions and/or GROQ queries if you need to update these types.
 *
 * For more information on how to use Sanity TypeGen, visit the official documentation:
 * https://www.sanity.io/docs/sanity-typegen
 * ---------------------------------------------------------------------------------
 */

// Source: schema.json
export type SanityImagePaletteSwatch = {
  _type: 'sanity.imagePaletteSwatch'
  background?: string
  foreground?: string
  population?: number
  title?: string
}

export type SanityImagePalette = {
  _type: 'sanity.imagePalette'
  darkMuted?: SanityImagePaletteSwatch
  lightVibrant?: SanityImagePaletteSwatch
  darkVibrant?: SanityImagePaletteSwatch
  vibrant?: SanityImagePaletteSwatch
  dominant?: SanityImagePaletteSwatch
  lightMuted?: SanityImagePaletteSwatch
  muted?: SanityImagePaletteSwatch
}

export type SanityImageDimensions = {
  _type: 'sanity.imageDimensions'
  height?: number
  width?: number
  aspectRatio?: number
}

export type Geopoint = {
  _type: 'geopoint'
  lat?: number
  lng?: number
  alt?: number
}

export type PostFooter = {
  _type: 'postFooter'
  postFooterContent?: Array<
    | {
        children?: Array<
          | {
              marks?: Array<string>
              text?: string
              _type: 'span'
              _key: string
            }
          | {
              asset?: {
                _ref: string
                _type: 'reference'
                _weak?: boolean
                [internalGroqTypeReferenceTo]?: 'sanity.imageAsset'
              }
              hotspot?: SanityImageHotspot
              crop?: SanityImageCrop
              _type: 'inlineicon'
              _key: string
            }
        >
        style?: 'normal' | 'h1' | 'h2' | 'h3' | 'h4'
        listItem?: 'bullet'
        markDefs?: Array<{
          href?: string
          _type: 'link'
          _key: string
        }>
        level?: number
        _type: 'block'
        _key: string
      }
    | {
        _ref: string
        _type: 'reference'
        _weak?: boolean
        _key: string
        [internalGroqTypeReferenceTo]?: 'templates'
      }
  >
}

export type Spotify = {
  _type: 'spotify'
  url?: string
}

export type Youtube = {
  _type: 'youtube'
  url?: string
}

export type AudioInline = {
  _type: 'audioInline'
  audioLabel?: string
  audioFile?: MuxVideo
}

export type PdfEmbed = {
  _type: 'pdfEmbed'
  pdfFile?: {
    asset?: {
      _ref: string
      _type: 'reference'
      _weak?: boolean
      [internalGroqTypeReferenceTo]?: 'sanity.fileAsset'
    }
    _type: 'file'
  }
}

export type PostContent = {
  _type: 'postContent'
  body?: Array<
    | {
        children?: Array<{
          marks?: Array<string>
          text?: string
          _type: 'span'
          _key: string
        }>
        style?: 'normal' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'blockquote'
        listItem?: 'bullet' | 'number'
        markDefs?: Array<{
          href?: string
          _type: 'link'
          _key: string
        }>
        level?: number
        _type: 'block'
        _key: string
      }
    | {
        asset?: {
          _ref: string
          _type: 'reference'
          _weak?: boolean
          [internalGroqTypeReferenceTo]?: 'sanity.imageAsset'
        }
        hotspot?: SanityImageHotspot
        crop?: SanityImageCrop
        alt?: string
        caption?: string
        size?: 'small' | 'default' | 'medium' | 'wide'
        _type: 'imageInline'
        _key: string
      }
    | ({
        _key: string
      } & AudioInline)
    | ({
        _key: string
      } & Video)
    | ({
        _key: string
      } & Youtube)
    | ({
        _key: string
      } & Spotify)
  >
}

export type BlockContentAdvanced = Array<
  | {
      children?: Array<{
        marks?: Array<string>
        text?: string
        _type: 'span'
        _key: string
      }>
      style?: 'normal' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'blockquote'
      listItem?: 'bullet' | 'number'
      markDefs?: Array<{
        href?: string
        _type: 'link'
        _key: string
      }>
      level?: number
      _type: 'block'
      _key: string
    }
  | {
      asset?: {
        _ref: string
        _type: 'reference'
        _weak?: boolean
        [internalGroqTypeReferenceTo]?: 'sanity.imageAsset'
      }
      hotspot?: SanityImageHotspot
      crop?: SanityImageCrop
      alt?: string
      caption?: string
      size?: 'small' | 'default' | 'medium' | 'wide'
      _type: 'imageInline'
      _key: string
    }
  | ({
      _key: string
    } & AudioInline)
  | ({
      _key: string
    } & Video)
  | ({
      _key: string
    } & Youtube)
  | ({
      _key: string
    } & Spotify)
>

export type TemplateText = {
  _type: 'reference'
  _ref: string
  _weak?: boolean
}

export type MentorsGallery = {
  _type: 'mentorsGallery'
  galleryItems?: Array<{
    name?: string
    image?: {
      asset?: {
        _ref: string
        _type: 'reference'
        _weak?: boolean
        [internalGroqTypeReferenceTo]?: 'sanity.imageAsset'
      }
      hotspot?: SanityImageHotspot
      crop?: SanityImageCrop
      alt?: string
      _type: 'image'
    }
    description?: Array<
      | {
          children?: Array<
            | {
                marks?: Array<string>
                text?: string
                _type: 'span'
                _key: string
              }
            | {
                asset?: {
                  _ref: string
                  _type: 'reference'
                  _weak?: boolean
                  [internalGroqTypeReferenceTo]?: 'sanity.imageAsset'
                }
                hotspot?: SanityImageHotspot
                crop?: SanityImageCrop
                _type: 'inlineicon'
                _key: string
              }
          >
          style?: 'normal' | 'h1' | 'h2' | 'h3' | 'h4'
          listItem?: 'bullet'
          markDefs?: Array<{
            href?: string
            _type: 'link'
            _key: string
          }>
          level?: number
          _type: 'block'
          _key: string
        }
      | ({
          _key: string
        } & TemplateText)
    >
    _type: 'galleryItem'
    _key: string
  }>
}

export type AsyncList = never

export type Faq = {
  _type: 'faq'
  faqItems?: Array<{
    question?: string
    answer?: Array<
      | {
          children?: Array<
            | {
                marks?: Array<string>
                text?: string
                _type: 'span'
                _key: string
              }
            | {
                asset?: {
                  _ref: string
                  _type: 'reference'
                  _weak?: boolean
                  [internalGroqTypeReferenceTo]?: 'sanity.imageAsset'
                }
                hotspot?: SanityImageHotspot
                crop?: SanityImageCrop
                _type: 'inlineicon'
                _key: string
              }
          >
          style?: 'normal' | 'h1' | 'h2' | 'h3' | 'h4'
          listItem?: 'bullet'
          markDefs?: Array<{
            href?: string
            _type: 'link'
            _key: string
          }>
          level?: number
          _type: 'block'
          _key: string
        }
      | ({
          _key: string
        } & TemplateText)
    >
    _type: 'faqItem'
    _key: string
  }>
}

export type MainBody = {
  _type: 'mainBody'
  body?: Array<
    | {
        children?: Array<
          | {
              marks?: Array<string>
              text?: string
              _type: 'span'
              _key: string
            }
          | {
              asset?: {
                _ref: string
                _type: 'reference'
                _weak?: boolean
                [internalGroqTypeReferenceTo]?: 'sanity.imageAsset'
              }
              hotspot?: SanityImageHotspot
              crop?: SanityImageCrop
              _type: 'inlineicon'
              _key: string
            }
        >
        style?: 'normal' | 'h1' | 'h2' | 'h3' | 'h4'
        listItem?: 'bullet'
        markDefs?: Array<{
          href?: string
          _type: 'link'
          _key: string
        }>
        level?: number
        _type: 'block'
        _key: string
      }
    | ({
        _key: string
      } & TemplateText)
  >
}

export type BlockContentSimple = Array<
  | {
      children?: Array<
        | {
            marks?: Array<string>
            text?: string
            _type: 'span'
            _key: string
          }
        | {
            asset?: {
              _ref: string
              _type: 'reference'
              _weak?: boolean
              [internalGroqTypeReferenceTo]?: 'sanity.imageAsset'
            }
            hotspot?: SanityImageHotspot
            crop?: SanityImageCrop
            _type: 'inlineicon'
            _key: string
          }
      >
      style?: 'normal' | 'h1' | 'h2' | 'h3' | 'h4'
      listItem?: 'bullet'
      markDefs?: Array<{
        href?: string
        _type: 'link'
        _key: string
      }>
      level?: number
      _type: 'block'
      _key: string
    }
  | ({
      _key: string
    } & TemplateText)
>

export type IntroText = {
  _type: 'introText'
  body?: BlockContentSimple
}

export type BlockContent = Array<
  | {
      children?: Array<{
        marks?: Array<string>
        text?: string
        _type: 'span'
        _key: string
      }>
      style?: 'normal' | 'h1' | 'h2' | 'h3' | 'h4' | 'blockquote'
      listItem?: 'bullet'
      markDefs?: Array<{
        href?: string
        _type: 'link'
        _key: string
      }>
      level?: number
      _type: 'block'
      _key: string
    }
  | {
      asset?: {
        _ref: string
        _type: 'reference'
        _weak?: boolean
        [internalGroqTypeReferenceTo]?: 'sanity.imageAsset'
      }
      hotspot?: SanityImageHotspot
      crop?: SanityImageCrop
      alt?: string
      _type: 'image'
      _key: string
    }
>

export type Series = {
  _id: string
  _type: 'series'
  _createdAt: string
  _updatedAt: string
  _rev: string
  title?: string
  slug?: Slug
}

export type Plan = {
  _id: string
  _type: 'plan'
  _createdAt: string
  _updatedAt: string
  _rev: string
  planName?: string
  visualHelper?: string
  index?: number
}

export type Templates = {
  _id: string
  _type: 'templates'
  _createdAt: string
  _updatedAt: string
  _rev: string
  name?: string
  body?: BlockContent
}

export type FilterGroup = {
  _id: string
  _type: 'filterGroup'
  _createdAt: string
  _updatedAt: string
  _rev: string
  title?: string
  slug?: Slug
  groupFilters?: Array<{
    _ref: string
    _type: 'reference'
    _weak?: boolean
    _key: string
    [internalGroqTypeReferenceTo]?: 'filterItem'
  }>
}

export type FilterItem = {
  _id: string
  _type: 'filterItem'
  _createdAt: string
  _updatedAt: string
  _rev: string
  title?: string
  slug?: Slug
}

export type Page = {
  _id: string
  _type: 'page'
  _createdAt: string
  _updatedAt: string
  _rev: string
  title?: string
  slug?: Slug
  overview?: Array<{
    children?: Array<{
      marks?: Array<string>
      text?: string
      _type: 'span'
      _key: string
    }>
    style?: 'normal'
    listItem?: never
    markDefs?: null
    level?: number
    _type: 'block'
    _key: string
  }>
  pageContent?: Array<
    | ({
        _key: string
      } & MainBody)
    | ({
        _key: string
      } & Faq)
    | ({
        _key: string
      } & MentorsGallery)
  >
}

export type Pricing = {
  _id: string
  _type: 'pricing'
  _createdAt: string
  _updatedAt: string
  _rev: string
  title?: string
  plansFeatures?: Array<{
    planName?: string
    planDescription?: BlockContentSimple
    _type: 'planObject'
    _key: string
  }>
}

export type Settings = {
  _id: string
  _type: 'settings'
  _createdAt: string
  _updatedAt: string
  _rev: string
  menuItems?: Array<
    | {
        _ref: string
        _type: 'reference'
        _weak?: boolean
        [internalGroqTypeReferenceTo]?: 'home'
      }
    | {
        _ref: string
        _type: 'reference'
        _weak?: boolean
        [internalGroqTypeReferenceTo]?: 'page'
      }
    | {
        _ref: string
        _type: 'reference'
        _weak?: boolean
        [internalGroqTypeReferenceTo]?: 'pricing'
      }
  >
  ogImage?: {
    asset?: {
      _ref: string
      _type: 'reference'
      _weak?: boolean
      [internalGroqTypeReferenceTo]?: 'sanity.imageAsset'
    }
    hotspot?: SanityImageHotspot
    crop?: SanityImageCrop
    _type: 'image'
  }
  overview?: Array<{
    children?: Array<{
      marks?: Array<string>
      text?: string
      _type: 'span'
      _key: string
    }>
    style?: 'normal'
    listItem?: never
    markDefs?: Array<{
      href?: string
      _type: 'link'
      _key: string
    }>
    level?: number
    _type: 'block'
    _key: string
  }>
  footerPDF?: BlockContentSimple
  linksSocials?: Array<{
    linkTitle?: string
    linkURL?: string
    _key: string
  }>
}

export type Home = {
  _id: string
  _type: 'home'
  _createdAt: string
  _updatedAt: string
  _rev: string
  title?: string
  highlight?: {
    _ref: string
    _type: 'reference'
    _weak?: boolean
    [internalGroqTypeReferenceTo]?: 'post'
  }
}

export type Post = {
  _id: string
  _type: 'post'
  _createdAt: string
  _updatedAt: string
  _rev: string
  title?: string
  subtitle?: string
  slug?: Slug
  ogDescription?: string
  artistList?: Array<{
    artistRef?: {
      _ref: string
      _type: 'reference'
      _weak?: boolean
      [internalGroqTypeReferenceTo]?: 'artist'
    }
    additionalContext?: string
    _type: 'artistMention'
    _key: string
  }>
  series?: Array<{
    _ref: string
    _type: 'reference'
    _weak?: boolean
    _key: string
    [internalGroqTypeReferenceTo]?: 'series'
  }>
  publishedAt?: string
  minimumTier?: '0' | '1' | '2' | '3'
  coverImage?: {
    asset?: {
      _ref: string
      _type: 'reference'
      _weak?: boolean
      [internalGroqTypeReferenceTo]?: 'sanity.imageAsset'
    }
    hotspot?: SanityImageHotspot
    crop?: SanityImageCrop
    _type: 'image'
  }
  coverVideo?: Video
  previewImage?: {
    asset?: {
      _ref: string
      _type: 'reference'
      _weak?: boolean
      [internalGroqTypeReferenceTo]?: 'sanity.imageAsset'
    }
    hotspot?: SanityImageHotspot
    crop?: SanityImageCrop
    _type: 'image'
  }
  filters?: Array<{
    _ref: string
    _type: 'reference'
    _weak?: boolean
    _key: string
    [internalGroqTypeReferenceTo]?: 'filterItem'
  }>
  downloadFiles?: Array<{
    fileTitle?: string
    fileForDownload?: {
      asset?: {
        _ref: string
        _type: 'reference'
        _weak?: boolean
        [internalGroqTypeReferenceTo]?: 'sanity.fileAsset'
      }
      _type: 'file'
    }
    _type: 'fileAsset'
    _key: string
  }>
  pageContent?: Array<
    | ({
        _key: string
      } & IntroText)
    | ({
        _key: string
      } & PostContent)
    | ({
        _key: string
      } & PdfEmbed)
    | ({
        _key: string
      } & PostFooter)
  >
  hiddenTags?: string
}

export type SanityFileAsset = {
  _id: string
  _type: 'sanity.fileAsset'
  _createdAt: string
  _updatedAt: string
  _rev: string
  originalFilename?: string
  label?: string
  title?: string
  description?: string
  altText?: string
  sha1hash?: string
  extension?: string
  mimeType?: string
  size?: number
  assetId?: string
  uploadId?: string
  path?: string
  url?: string
  source?: SanityAssetSourceData
}

export type Video = {
  _type: 'video'
  videoLabel?: string
  videoFile?: MuxVideo
}

export type Artist = {
  _id: string
  _type: 'artist'
  _createdAt: string
  _updatedAt: string
  _rev: string
  name?: string
  slug?: Slug
  image?: {
    asset?: {
      _ref: string
      _type: 'reference'
      _weak?: boolean
      [internalGroqTypeReferenceTo]?: 'sanity.imageAsset'
    }
    hotspot?: SanityImageHotspot
    crop?: SanityImageCrop
    alt?: string
    _type: 'image'
  }
  bio?: string
  linksArtist?: Array<{
    linkTitle?: string
    linkURL?: string
    _key: string
  }>
}

export type SanityImageCrop = {
  _type: 'sanity.imageCrop'
  top?: number
  bottom?: number
  left?: number
  right?: number
}

export type SanityImageHotspot = {
  _type: 'sanity.imageHotspot'
  x?: number
  y?: number
  height?: number
  width?: number
}

export type SanityImageAsset = {
  _id: string
  _type: 'sanity.imageAsset'
  _createdAt: string
  _updatedAt: string
  _rev: string
  originalFilename?: string
  label?: string
  title?: string
  description?: string
  altText?: string
  sha1hash?: string
  extension?: string
  mimeType?: string
  size?: number
  assetId?: string
  uploadId?: string
  path?: string
  url?: string
  metadata?: SanityImageMetadata
  source?: SanityAssetSourceData
}

export type SanityAssetSourceData = {
  _type: 'sanity.assetSourceData'
  name?: string
  id?: string
  url?: string
}

export type SanityImageMetadata = {
  _type: 'sanity.imageMetadata'
  location?: Geopoint
  dimensions?: SanityImageDimensions
  palette?: SanityImagePalette
  lqip?: string
  blurHash?: string
  hasAlpha?: boolean
  isOpaque?: boolean
}

export type Slug = {
  _type: 'slug'
  current?: string
  source?: string
}

export type MuxVideo = {
  _type: 'mux.video'
  asset?: {
    _ref: string
    _type: 'reference'
    _weak?: boolean
    [internalGroqTypeReferenceTo]?: 'mux.videoAsset'
  }
}

export type MuxVideoAsset = {
  _type: 'mux.videoAsset'
  status?: string
  assetId?: string
  playbackId?: string
  filename?: string
  thumbTime?: number
}
export declare const internalGroqTypeReferenceTo: unique symbol
// Source: ./src/sanity/lib/queries.ts
// Variable: postsQuery
// Query: {  "posts": *[_type == "post" && defined(slug)] | order(publishedAt desc) {        _id,     title,     subtitle,    artistList[]{    additionalContext,    _key,     artistRef->{      name,      "slug": slug.current,     }    },    publishedAt,     "slug": slug.current,    coverImage,    previewImage{      _type,      asset->{        _id,        url,        "lqip": metadata.lqip,      }    },    coverVideo,    minimumTier,    ogDescription,    filters[]->{      "slug": slug.current    },    }}
export type PostsQueryResult = {
  posts: Array<{
    _id: string
    title: string | null
    subtitle: string | null
    artistList: Array<{
      additionalContext: string | null
      _key: string
      artistRef: {
        name: string | null
        slug: string | null
      } | null
    }> | null
    publishedAt: string | null
    slug: string | null
    coverImage: {
      asset?: {
        _ref: string
        _type: 'reference'
        _weak?: boolean
        [internalGroqTypeReferenceTo]?: 'sanity.imageAsset'
      }
      hotspot?: SanityImageHotspot
      crop?: SanityImageCrop
      _type: 'image'
    } | null
    previewImage: {
      _type: 'image'
      asset: {
        _id: string
        url: string | null
        lqip: string | null
      } | null
    } | null
    coverVideo: Video | null
    minimumTier: '0' | '1' | '2' | '3' | null
    ogDescription: string | null
    filters: Array<{
      slug: string | null
    }> | null
  }>
}
// Variable: initialPostsQuery
// Query: {  "posts": *[_type == "post" && defined(slug)] | order(publishedAt desc) [0...20] {        _id,     title,     subtitle,    artistList[]{    additionalContext,    _key,     artistRef->{      name,      "slug": slug.current,     }    },    publishedAt,     "slug": slug.current,    coverImage,    previewImage{      _type,      asset->{        _id,        url,        "lqip": metadata.lqip,      }    },    coverVideo,    minimumTier,    ogDescription,    filters[]->{      "slug": slug.current    },    }}
export type InitialPostsQueryResult = {
  posts: Array<{
    _id: string
    title: string | null
    subtitle: string | null
    artistList: Array<{
      additionalContext: string | null
      _key: string
      artistRef: {
        name: string | null
        slug: string | null
      } | null
    }> | null
    publishedAt: string | null
    slug: string | null
    coverImage: {
      asset?: {
        _ref: string
        _type: 'reference'
        _weak?: boolean
        [internalGroqTypeReferenceTo]?: 'sanity.imageAsset'
      }
      hotspot?: SanityImageHotspot
      crop?: SanityImageCrop
      _type: 'image'
    } | null
    previewImage: {
      _type: 'image'
      asset: {
        _id: string
        url: string | null
        lqip: string | null
      } | null
    } | null
    coverVideo: Video | null
    minimumTier: '0' | '1' | '2' | '3' | null
    ogDescription: string | null
    filters: Array<{
      slug: string | null
    }> | null
  }>
}
// Variable: morePostsQuery
// Query: {  "posts": *[    _type == "post" &&      ( !defined($lastPublishedAt) || (      publishedAt < $lastPublishedAt      || (publishedAt == $lastPublishedAt && _id < $lastId)    )) &&     (!defined($selectedFiltersArray) || $selectedFiltersArray == [] ||       count(        (filters[]->slug.current)[@ in $selectedFiltersArray]) == count($selectedFiltersArray)      )    ] | order(publishedAt desc) [0...20] {        _id,     title,     subtitle,    artistList[]{    additionalContext,    _key,     artistRef->{      name,      "slug": slug.current,     }    },    publishedAt,     "slug": slug.current,    coverImage,    previewImage{      _type,      asset->{        _id,        url,        "lqip": metadata.lqip,      }    },    coverVideo,    minimumTier,    ogDescription,    filters[]->{      "slug": slug.current    },    }}
export type MorePostsQueryResult = {
  posts: Array<{
    _id: string
    title: string | null
    subtitle: string | null
    artistList: Array<{
      additionalContext: string | null
      _key: string
      artistRef: {
        name: string | null
        slug: string | null
      } | null
    }> | null
    publishedAt: string | null
    slug: string | null
    coverImage: {
      asset?: {
        _ref: string
        _type: 'reference'
        _weak?: boolean
        [internalGroqTypeReferenceTo]?: 'sanity.imageAsset'
      }
      hotspot?: SanityImageHotspot
      crop?: SanityImageCrop
      _type: 'image'
    } | null
    previewImage: {
      _type: 'image'
      asset: {
        _id: string
        url: string | null
        lqip: string | null
      } | null
    } | null
    coverVideo: Video | null
    minimumTier: '0' | '1' | '2' | '3' | null
    ogDescription: string | null
    filters: Array<{
      slug: string | null
    }> | null
  }>
}
// Variable: searchQuery
// Query:   {    "artists": *[_type == "artist" && name match $searchValue + "*"]{      _id,      name,      "slug": slug.current,      image,    },    "posts": *[_type == "post" && title match $searchValue + "*"]{      _id,      title,      publishedAt,      "slug": slug.current,      series[]->{        _id,        title,      },    },    "series": *[_type== "series" && title match $searchValue + "*"]{      _id,      title,      "slug": slug.current,    },    "hiddenTags": *[_type == 'post' && hiddenTags match $searchValue + "*"]{      _id,      title,      "slug": slug.current,      publishedAt,      series[]->{        _id,        title,      },    }  }
export type SearchQueryResult = {
  artists: Array<{
    _id: string
    name: string | null
    slug: string | null
    image: {
      asset?: {
        _ref: string
        _type: 'reference'
        _weak?: boolean
        [internalGroqTypeReferenceTo]?: 'sanity.imageAsset'
      }
      hotspot?: SanityImageHotspot
      crop?: SanityImageCrop
      alt?: string
      _type: 'image'
    } | null
  }>
  posts: Array<{
    _id: string
    title: string | null
    publishedAt: string | null
    slug: string | null
    series: Array<{
      _id: string
      title: string | null
    }> | null
  }>
  series: Array<{
    _id: string
    title: string | null
    slug: string | null
  }>
  hiddenTags: Array<{
    _id: string
    title: string | null
    slug: string | null
    publishedAt: string | null
    series: Array<{
      _id: string
      title: string | null
    }> | null
  }>
}
// Variable: filterByTagsQuery
// Query:   *[_type == "post" && count((filters[]->slug.current)[@ in $tagsSelected]) == count($tagsSelected)]{    _id,    filters[]->{      "slug": slug.current    }  }
export type FilterByTagsQueryResult = Array<{
  _id: string
  filters: Array<{
    slug: string | null
  }> | null
}>
// Variable: searchQueryDefault
// Query:   {    "artists": *[_type == "artist" && name match "*a*" ][0..0]{      _id,      name,      "slug": slug.current,      image,    },    "posts": *[_type == "post" && title match "*a*" ][0..0]{      _id,      title,      publishedAt,      "slug": slug.current,      series[]->{        _id,        title,      },    },    "series": *[_type == "series" && title match "*a*" ][0..0]{      _id,      title,      "slug": slug.current,    },    "hiddenTags": *[_type == 'post' && hiddenTags match "*a*" ][0..0]{      _id,      title,      "slug": slug.current,      publishedAt,      series[]->{        _id,        title,      },    }  }
export type SearchQueryDefaultResult = {
  artists: Array<never>
  posts: Array<never>
  series: Array<never>
  hiddenTags: Array<never>
}
// Variable: filterGroupsQuery
// Query: {  "filterGroups": *[_type == "filterGroup"]{    _id,    title,    "slug": slug.current,    groupFilters[]->{      _id,      "slug":slug.current,      title,    }  }}
export type FilterGroupsQueryResult = {
  filterGroups: Array<{
    _id: string
    title: string | null
    slug: string | null
    groupFilters: Array<{
      _id: string
      slug: string | null
      title: string | null
    }> | null
  }>
}
// Variable: postBySlugQuery
// Query:   *[_type == "post" && slug.current == $slug][0] {        _id,     title,     subtitle,    artistList[]{    additionalContext,    _key,     artistRef->{      name,      "slug": slug.current,     }    },    publishedAt,     "slug": slug.current,    coverImage,    previewImage{      _type,      asset->{        _id,        url,        "lqip": metadata.lqip,      }    },    coverVideo,    minimumTier,    ogDescription,    filters[]->{      "slug": slug.current    },    }
export type PostBySlugQueryResult = {
  _id: string
  title: string | null
  subtitle: string | null
  artistList: Array<{
    additionalContext: string | null
    _key: string
    artistRef: {
      name: string | null
      slug: string | null
    } | null
  }> | null
  publishedAt: string | null
  slug: string | null
  coverImage: {
    asset?: {
      _ref: string
      _type: 'reference'
      _weak?: boolean
      [internalGroqTypeReferenceTo]?: 'sanity.imageAsset'
    }
    hotspot?: SanityImageHotspot
    crop?: SanityImageCrop
    _type: 'image'
  } | null
  previewImage: {
    _type: 'image'
    asset: {
      _id: string
      url: string | null
      lqip: string | null
    } | null
  } | null
  coverVideo: Video | null
  minimumTier: '0' | '1' | '2' | '3' | null
  ogDescription: string | null
  filters: Array<{
    slug: string | null
  }> | null
} | null
// Variable: postsByArtistSlugQuery
// Query:   {    "artistInfo": *[_type == "artist" && defined(slug) && slug.current == $slug][0]{    ...,      "posts": *[_type == "post" && defined(slug) && references(^._id)] | order(publishedAt desc) {            _id,     title,     subtitle,    artistList[]{    additionalContext,    _key,     artistRef->{      name,      "slug": slug.current,     }    },    publishedAt,     "slug": slug.current,    coverImage,    previewImage{      _type,      asset->{        _id,        url,        "lqip": metadata.lqip,      }    },    coverVideo,    minimumTier,    ogDescription,    filters[]->{      "slug": slug.current    },        }    }      }
export type PostsByArtistSlugQueryResult = {
  artistInfo: {
    _id: string
    _type: 'artist'
    _createdAt: string
    _updatedAt: string
    _rev: string
    name?: string
    slug?: Slug
    image?: {
      asset?: {
        _ref: string
        _type: 'reference'
        _weak?: boolean
        [internalGroqTypeReferenceTo]?: 'sanity.imageAsset'
      }
      hotspot?: SanityImageHotspot
      crop?: SanityImageCrop
      alt?: string
      _type: 'image'
    }
    bio?: string
    linksArtist?: Array<{
      linkTitle?: string
      linkURL?: string
      _key: string
    }>
    posts: Array<{
      _id: string
      title: string | null
      subtitle: string | null
      artistList: Array<{
        additionalContext: string | null
        _key: string
        artistRef: {
          name: string | null
          slug: string | null
        } | null
      }> | null
      publishedAt: string | null
      slug: string | null
      coverImage: {
        asset?: {
          _ref: string
          _type: 'reference'
          _weak?: boolean
          [internalGroqTypeReferenceTo]?: 'sanity.imageAsset'
        }
        hotspot?: SanityImageHotspot
        crop?: SanityImageCrop
        _type: 'image'
      } | null
      previewImage: {
        _type: 'image'
        asset: {
          _id: string
          url: string | null
          lqip: string | null
        } | null
      } | null
      coverVideo: Video | null
      minimumTier: '0' | '1' | '2' | '3' | null
      ogDescription: string | null
      filters: Array<{
        slug: string | null
      }> | null
    }>
  } | null
}
// Variable: pageBySlugQuery
// Query:   *[_type == "page" && slug.current == $slug][0] {    _id,    title,    "slug": slug.current,  }
export type PageBySlugQueryResult = {
  _id: string
  title: string | null
  slug: string | null
} | null
// Variable: settingsQuery
// Query:   *[_type == "settings"][0]{    ogImage  }
export type SettingsQueryResult = {
  ogImage: {
    asset?: {
      _ref: string
      _type: 'reference'
      _weak?: boolean
      [internalGroqTypeReferenceTo]?: 'sanity.imageAsset'
    }
    hotspot?: SanityImageHotspot
    crop?: SanityImageCrop
    _type: 'image'
  } | null
} | null
// Variable: filterExample
// Query: {  "initialPosts": *[    _type == "post" &&      (!defined($selectedFiltersArray) || $selectedFiltersArray == [] ||       count(        (filters[]->slug.current)[@ in $selectedFiltersArray]) == count($selectedFiltersArray)      )    ] | order(publishedAt desc) [0...$limit] {    _id,     title,     artistList,    publishedAt,     "slug": slug.current,    coverImage,    coverVideo,    filters[]->{      "slug": slug.current    },    minimumTier,    ogDescription,  }}
export type FilterExampleResult = {
  initialPosts: Array<{
    _id: string
    title: string | null
    artistList: Array<{
      artistRef?: {
        _ref: string
        _type: 'reference'
        _weak?: boolean
        [internalGroqTypeReferenceTo]?: 'artist'
      }
      additionalContext?: string
      _type: 'artistMention'
      _key: string
    }> | null
    publishedAt: string | null
    slug: string | null
    coverImage: {
      asset?: {
        _ref: string
        _type: 'reference'
        _weak?: boolean
        [internalGroqTypeReferenceTo]?: 'sanity.imageAsset'
      }
      hotspot?: SanityImageHotspot
      crop?: SanityImageCrop
      _type: 'image'
    } | null
    coverVideo: Video | null
    filters: Array<{
      slug: string | null
    }> | null
    minimumTier: '0' | '1' | '2' | '3' | null
    ogDescription: string | null
  }>
}
