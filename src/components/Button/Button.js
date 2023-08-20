import { ButtonLoadStyled } from './Button.Styled';

export const ButtonLoad = ({ onClick }) => {
  return (
    <>
      <ButtonLoadStyled type="button" onClick={onClick}>
        Load more
      </ButtonLoadStyled>
    </>
  );
};
