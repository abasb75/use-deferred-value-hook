import { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const ListWithoutDeferredValue = lazy(()=>import("./list-without-deferredvalue/app"));
const ListWithDeferredValue = lazy(()=>import("./list-with-deferredvalue/app"));
const ListWithIndicator= lazy(()=>import("./list-with-indicator/app"));

const IndexPage = lazy(()=>import("./indexPage"));

function App() {
  return (<>
    <Suspense fallback={<p>Page is loading ...</p>}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<IndexPage />} />

          <Route path="/list-without-deferredvalue" element={<ListWithoutDeferredValue />} />
          <Route path="/list-with-deferredvalue" element={<ListWithDeferredValue />} />
          <Route path="/list-with-indicator" element={<ListWithIndicator />} />

        </Routes>
      </BrowserRouter>
    </Suspense>
  </>);
}

export default App;