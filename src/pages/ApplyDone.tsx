import FixedBottomButton from '@/components/shared/FixedBottomButton'
import Flex from '@/components/shared/Flex'
import Text from '@/components/shared/Text'
import { parse } from 'qs'

export default function ApplyDone() {
  const { success } = parse(window.location.search, {
    ignoreQueryPrefix: true,
  }) as { success: string }
  return (
    <Flex
      style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0 }}
      justify="center"
      align="center"
    >
      <Flex direction="column" align="center">
        {success === 'true' ? (
          <>
            <img
              width={120}
              src="https://cdn.pixabay.com/photo/2017/01/13/01/22/ok-1976099_1280.png"
            />
            <Text typography="t4">카드가 발급되었습니다.</Text>
          </>
        ) : (
          <>
            <img
              width={110}
              src="https://cdn.pixabay.com/photo/2013/07/12/13/50/road-sign-147409_1280.png"
            />
            <Text typography="t4">카드 발급에 실패하였습니다.</Text>
          </>
        )}
        <FixedBottomButton
          label="확인"
          onClick={() => {
            window.history.back()
          }}
        />
      </Flex>
    </Flex>
  )
}
