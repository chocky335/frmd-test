import styled from 'styled-components/native';

type SpaceProps = {
  size: number;
  flexible?: boolean;
};
export const Separator = styled.View<SpaceProps>(
  ({ theme, flexible, size = 16, ...props }) => {

    if (flexible) {
      return {
        flex: size,
      };
    }

    return {
      height: size,
      width: '100%',
    };
  },
);
