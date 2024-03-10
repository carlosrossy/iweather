import { View } from "react-native";

import * as S from "./styles";
import { Day, DayProps } from "../Day";

interface Props {
  data: DayProps[];
}

export function NextDays({ data }: Props) {
  return (
    <S.Container>
      {data.map((day) => (
        <Day key={day.day} data={day} />
      ))}
    </S.Container>
  );
}
