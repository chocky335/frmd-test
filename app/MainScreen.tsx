import React from 'react'
import { Edge, SafeAreaView } from 'react-native-safe-area-context'
import { Loader } from './components/Loader'
import { NewsFeed } from './components/NewsFeed'
import { useListNews } from './redditApi'

const edgeInsets: Edge[] = ['top', 'bottom']
export function MainScreen() {
  const {data, isLoading} = useListNews()

  if (isLoading) {
    return <Loader />
  }

  if (!data) {
    return null
  }
  
  return (
    <SafeAreaView edges={edgeInsets}>
      <NewsFeed data={data} />
    </SafeAreaView>
  )
}
