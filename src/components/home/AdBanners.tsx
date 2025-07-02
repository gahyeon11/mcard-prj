import { colors } from '@/styles/colorPalette'
import { css } from '@emotion/react'
import Flex from '../shared/Flex'
import Text from '../shared/Text'

import styled from '@emotion/styled'
import { Link } from 'react-router-dom'
import { useQuery } from 'react-query'
import { getAdBanners } from '@/remote/adBanner'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'

export default function AdBanners() {
  const { data } = useQuery(['adBanners'], () => getAdBanners())

  return (
    <Container css={swiperPaginationStyles}>
      <Swiper
        spaceBetween={8}
        pagination={{ clickable: true }}
        modules={[Pagination]}
      >
        {data?.map((banner) => {
          return (
            <SwiperSlide key={banner.id}>
              <Link to={banner.link}>
                <Flex direction="column" css={bannerContainerStyles}>
                  <Text bold={true}>{banner.title}</Text>
                  <Text typography="t7">{banner.description}</Text>
                </Flex>
              </Link>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </Container>
  )
}

const Container = styled.div`
  padding: 24px;
`

const bannerContainerStyles = css`
  padding: 16px;
  background-color: ${colors.grey};
  border-radius: 4px;
`

const swiperPaginationStyles = css`
  .swiper-pagination {
    bottom: 5px;
    text-align: center;
  }

  .swiper-pagination-bullet {
    width: 6px;
    height: 6px;
    background-color: ${colors.black};
    opacity: 0.2;
  }

  .swiper-pagination-bullet-active {
    opacity: 0.6;
    background-color: ${colors.black};
  }
`
