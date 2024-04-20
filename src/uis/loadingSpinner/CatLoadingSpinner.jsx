import * as S from "./CatLoadingSpinner.style";

const CatLoadingSpinner = () => {
  return (
    <S.Container>
      <S.GithubCat>
        <S.CatSpinner>
          <S.LeftEar />
          <S.RightEar />
          <S.LeftEye />
          <S.RightEye />
          <S.Nose />
          <S.Body />
          <S.Tail />
        </S.CatSpinner>
      </S.GithubCat>
    </S.Container>
  );
};

export default CatLoadingSpinner;
