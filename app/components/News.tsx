import React, { FC, useMemo } from 'react'
import { FlatList, ImageSourcePropType, ListRenderItem } from 'react-native'
import styled from 'styled-components/native'
import { NewsData } from '../types'

interface NewsProps extends NewsData {
}

export const News: FC<NewsProps> = ({title, thumbnail}) => {
    const source = useMemo<ImageSourcePropType>(() => ({uri: thumbnail}), [thumbnail]);

  return (
    <NewsContainer>
        <NewsImage source={source} resizeMode={'contain'} />
        <NewsTitle>{title}</NewsTitle>
    </NewsContainer>
  )
}

const NewsContainer = styled.View({
  justifyContent: 'center',
  alignItems: 'center',
})
const NewsImage = styled.Image({
  width: 100,
  height: 100
})
const NewsTitle = styled.Text({})
