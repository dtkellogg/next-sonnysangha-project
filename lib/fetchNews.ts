import { gql } from 'graphql-request'

const fetchNews = async (
  category?: Category | String,
  keyword?: string,
  isDynamic?: boolean
) => {
  // GraphQL query
  const GET_QUERY = gql`
  query myQuery {
    myQuery(access_key: "fd743a1de2fc8b289308c45793bc7bb1"){
        data{
            author
            category
            country
            description
            image
            language
            published_at
            source
            title
            url
        }
        pagination{
            count
            limit
            offset
            total
        }
    }
}`

  // Fetch function with Next.js 13 caching...

  // Sort function by images vs not images present

  // return res
}

export default fetchNews

// stepzen import curl "http://api.mediastack.com/v1/news?access_key=apikey&sources=business,sports"