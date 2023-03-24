import React, { FC } from 'react'
import { FlatList, ListRenderItem } from 'react-native'
import styled from 'styled-components/native'
import { NewsData } from '../types'
import { News } from './News'
import { Separator } from './Separator'

interface NewsFeedProps {
 data: NewsData[]
}

const renderItem: ListRenderItem<NewsData> = ({ item}) => (
    <News {...item} />
)

export const NewsFeed: FC<NewsFeedProps> = ({data}) => {
  return (
    <NewsFeedList
        data={data}
        renderItem={renderItem}
        ItemSeparatorComponent={Separator}
    />
  )
}

const NewsFeedList = styled(FlatList<NewsData>).attrs({
  contentContainerStyle: {
    paddingHorizontal: 16
  }
})({})
