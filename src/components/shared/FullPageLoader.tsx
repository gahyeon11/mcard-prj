import Flex from './Flex'
import { Spacing } from './Spacing'
import Text from './Text'

export default function FullPageLoader({ message }: { message?: string }) {
  return (
    <Flex
      style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0 }}
      justify="center"
      align="center"
    >
      <Flex direction="column" align="center">
        <img
          width={120}
          src="https://cdn.pixabay.com/animation/2022/08/22/11/10/11-10-53-252_512.gif"
          style={{
            borderRadius: '50%',
            objectFit: 'cover',
          }}
        />

        {message != null ? (
          <>
            <Spacing size={120} />
            <Text typography="t4" bold={true}>
              {message}
            </Text>
          </>
        ) : null}
      </Flex>
    </Flex>
  )
}
