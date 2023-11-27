import { Link } from "react-router-dom";

export default function App(){
    return (<>
        <ul>
            <li><Link to={'/list-without-deferredvalue'}>Without Deferred Value</Link></li>
            <li><Link to={'/list-with-deferredvalue'}>With Deferred Value</Link></li>
            <li><Link to={'/list-with-indicator'}>With Deferred Value & Indicator</Link></li>
        </ul>
    </>);
}