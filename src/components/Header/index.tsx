import { useNavigation } from "@react-navigation/native"
import { BackButton, BackICon, Container, Logo } from "./styles"
import Logoimg from "@assets/logo.png"

type Props = {
  showBackButton?: boolean
}

export function Header({ showBackButton = false }: Props) {
  const navigation = useNavigation()

  function handleGoBack() {
    navigation.navigate("groups")
  }

  return (
    <Container>
      {showBackButton && (
        <BackButton onPress={handleGoBack}>
          <BackICon />
        </BackButton>
      )}

      <Logo source={Logoimg} />
    </Container>
  )
}
