import { FC } from 'react';
import { SingleQuest } from "./SingleQuest"
interface IProps {
  formList: any[]
}

export const ListQuest: FC<IProps> = ({
  formList
}) => {
  return (
    <>
      {
        formList.map((form, index) => (
          <SingleQuest
            key={`${index}_${form.meta.id}`}
            formData={form} />
        ))
      }
    </>
  )
}
