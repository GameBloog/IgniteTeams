import { BackButton, BackICon, Container, Logo } from "./styles"
import Logoimg from "@assets/logo.png"

type Props = {
  showBackButton?: boolean
}

export function Header({ showBackButton = false }: Props) {
  return (
    <Container>
      {showBackButton && (
        <BackButton>
          <BackICon />
        </BackButton>
      )}

      <Logo source={Logoimg} />
    </Container>
  )
}
