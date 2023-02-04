import ContentLayout from "../common/Content";
import FooterLayout from "../common/Footer";
import * as S from "../../Styles/layout"

function MainCont() {
  return (
    <S.Wrapper>
      <S.Container>
        <S.Content>
          <ContentLayout />
        </S.Content>
      </S.Container>
      <S.Footer>
        <FooterLayout />
      </S.Footer>
    </S.Wrapper>
  );
}

export default MainCont;