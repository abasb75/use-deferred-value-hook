import { useDeferredValue, useState } from "react";

import SlowList from "./List";

export default function App(){
    const [text,setText] = useState("");
    const deferredText = useDeferredValue(text);

    return (<>
        <input type="text" value={text} onChange={e=>setText(e.target.value)} placeholder="type here" />
        <SlowList text={deferredText} />
    </>);
}
