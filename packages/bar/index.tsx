import {useEffect, useState} from "react";

type Props = {
  message: string;
}

export const Bar = (props: Props) => <span>{props.message}</span>;

export const AsyncBar = (props: {apiUrl: '/api/hello'}) => {
  const [msg, setMsg] = useState<string>('...');
  useEffect(() => {
    fetch(props.apiUrl).then(res => res.text()).then((res) => {
      setMsg(res);
    })
  })
  return <Bar message={msg} />
}

