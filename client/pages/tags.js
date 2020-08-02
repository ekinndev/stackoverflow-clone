import Layout from '../components/Layout/layout'
import PageTitle from '../components/PageTitle/page-title'
import TagList from '../components/TagsView/tag-list'
import SearchInput from '../components/SearchInput/search-input'

function TagsPage() {
  return (
    <Layout extra={false}>
      <PageTitle title="Tags" borderBottom={false}>
        A tag is a keyword or label that categorizes your question with other,
        similar questions. Using the right tags makes it easier for others to
        find and answer your question.
      </PageTitle>
      <SearchInput placeholder="Filter by tag name" autoFocus />
      <TagList />
    </Layout>
  )
}

export default TagsPage
