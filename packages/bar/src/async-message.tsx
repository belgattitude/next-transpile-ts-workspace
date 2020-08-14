import {useEffect, useState} from "react";
import {Message} from "./message";

export const AsyncMessage = (props: {apiUrl: '/api/hello'}) => {
    const [msg, setMsg] = useState<string>('...');
    useEffect(() => {
        fetch(props.apiUrl).then(res => res.text()).then((res) => {
            setMsg(res);
        })
    })
    return <Message message={msg} />
}

