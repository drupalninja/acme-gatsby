import { graphql } from "gatsby"

export const nodePageFragment = graphql`
  fragment nodePageFragment on node__page {
    nid: drupal_internal__nid
    title
    subtitle: field_short_title
    summary: field_summary
    path {
      alias
    }
    r: relationships {
      content: field_content {
        __typename
        ... on paragraph__breaker {
          ...breakerFragment
        }
        ... on paragraph__card {
          ...cardFragment
        }
        ... on paragraph__card_list {
          ...cardListFragment
        }
        ... on paragraph__faq {
          ...faqFragment
        }
        ... on paragraph__gallery_carousel {
          ...galleryCarouselFragment
        }
        ... on paragraph__hero_media {
          ...heroMediaFragment
        }
        ... on paragraph__map {
          ...mapFragment
        }
        ... on paragraph__quote {
          ...quoteFragment
        }
      }
      thumbnail: field_thumbnail {
        r: relationships {
          image: field_image {
            file: localFile {
              cis: childImageSharp {
                fluid(maxHeight: 200) {
                  src
                }
              }
            }
          }
        }
      }
    }
  }
`

// @todo: Blog content type.

// @todo: Event content type.

// @todo: Landing page content type.

// @todo: Press release content type.

// @todo: Product content type.

// @todo: Profile content type.

// @todo: Resource	Library resource content.

// @todo: Webform	A basic page with a webform attached.
